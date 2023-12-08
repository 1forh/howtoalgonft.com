import { CategoryField, DescriptionField, KickerField, TitleField } from './base';
import { Block, Field } from 'payload/types';

const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [TitleField, DescriptionField],
};

const PhotoCollage: Block = {
  slug: 'photoCollage',
  labels: {
    singular: 'Photo Collage',
    plural: 'Photo Collages',
  },
  fields: [
    {
      type: 'array',
      name: 'photos',
      label: 'Photos',
      fields: [
        {
          type: 'upload',
          name: 'image',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
        {
          type: 'text',
          name: 'url',
          label: 'URL',
          required: true,
        },
      ],
    },
  ],
};

const icons = ['wallet', 'phone', 'cart', 'sparkles', 'store', 'objectsColumn'];
const Features: Block = {
  slug: 'features',
  labels: {
    singular: 'Features',
    plural: 'Features',
  },
  fields: [
    KickerField,
    TitleField,
    DescriptionField,
    {
      type: 'array',
      name: 'features',
      label: 'Features',
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          type: 'select',
          required: true,
          defaultValue: 'wallet',
          options: icons.map((icon) => ({
            label: icon,
            value: icon,
          })),
        },
        {
          type: 'text',
          name: 'title',
          label: 'Title',
          required: true,
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Description',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};

const PostsList: Block = {
  slug: 'postsList',
  labels: {
    singular: 'Posts List',
    plural: 'Posts Lists',
  },
  fields: [CategoryField],
};

const blocks: Block[] = [Features, Hero, PhotoCollage, PostsList];

export const BlocksField: Field = {
  name: 'blocks',
  label: 'Blocks',
  type: 'blocks',
  blocks: blocks,
};

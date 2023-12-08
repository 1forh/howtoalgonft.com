import { CategoryField, DescriptionField, TitleField } from './base';
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

const PostsList: Block = {
  slug: 'postsList',
  labels: {
    singular: 'Posts List',
    plural: 'Posts Lists',
  },
  fields: [CategoryField],
};

const blocks: Block[] = [Hero, PhotoCollage, PostsList];

export const BlocksField: Field = {
  name: 'blocks',
  label: 'Blocks',
  type: 'blocks',
  blocks: blocks,
};

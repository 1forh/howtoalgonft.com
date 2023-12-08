import { Field } from 'payload/types';

export const TitleField: Field = {
  name: 'title',
  label: 'Title',
  type: 'text',
  required: true,
};

export const DescriptionField: Field = {
  name: 'description',
  label: 'Description',
  type: 'textarea',
  required: true,
};

export const BodyField: Field = {
  name: 'body',
  label: 'Body',
  type: 'richText',
  required: true,
};

export const ExcerptField: Field = {
  name: 'excerpt',
  label: 'Excerpt',
  type: 'textarea',
  required: true,
};

export const CoverImageField: Field = {
  name: 'coverImage',
  label: 'Cover Image',
  type: 'upload',
  relationTo: 'media',
  required: true,
  admin: {
    position: 'sidebar',
  },
};

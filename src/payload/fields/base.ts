import { Field } from 'payload/types';
import CategoryPreview from '../components/CategoryPreview';

export const KickerField: Field = {
  name: 'kicker',
  label: 'Kicker',
  type: 'text',
  required: true,
};

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

export const CategoryField: Field = {
  name: 'category',
  label: 'Category',
  type: 'relationship',
  relationTo: 'categories',
};

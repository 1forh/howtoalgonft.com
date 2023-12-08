import { DescriptionField, TitleField } from './base';
import { Field } from 'payload/types';

const Hero: Field = {
  type: 'group',
  name: 'hero',
  label: 'Hero',
  fields: [TitleField, DescriptionField],
};

const sectionFields: Field[] = [Hero];

export const SectionsField: Field = {
  name: 'sections',
  label: 'Sections',
  type: 'array',
  fields: sectionFields,
};

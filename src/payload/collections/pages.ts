import { CollectionConfig } from 'payload/types';
import { TitleField } from '../fields/base';
import { slugField } from '../fields/slug';
import { SectionsField } from '../fields/sections';

const PagesCollection: CollectionConfig = {
  slug: 'pages',
  fields: [TitleField, slugField(), SectionsField],
};

export default PagesCollection;

import { CollectionConfig } from 'payload/types';
import { StatusField, TitleField } from '../fields/base';
import { slugField } from '../fields/slug';
import { BlocksField } from '../fields/blocks';

const PagesCollection: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug', 'status'],
  },
  fields: [TitleField, StatusField, slugField(), BlocksField],
};

export default PagesCollection;

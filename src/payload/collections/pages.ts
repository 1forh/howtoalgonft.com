import { CollectionConfig } from 'payload/types';
import { StatusField, TitleField } from '../fields/base';
import { slugField } from '../fields/slug';
import { BlocksField } from '../fields/blocks';
import { isAdmin } from '../utilities/access';

const PagesCollection: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug', 'status'],
  },
  access: {
    read: isAdmin,
    update: isAdmin,
    create: isAdmin,
  },
  fields: [TitleField, StatusField, slugField(), BlocksField],
};

export default PagesCollection;

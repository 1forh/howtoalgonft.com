import { CollectionConfig } from 'payload/types';
import { TitleField } from '../fields/base';
import { isAdmin } from '../utilities/access';

const CategoriesCollection: CollectionConfig = {
  slug: 'categories',
  fields: [TitleField],
  access: {
    read: () => true,
    update: isAdmin,
    create: isAdmin,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Taxonomy',
  },
};

export default CategoriesCollection;

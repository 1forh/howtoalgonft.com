import { CollectionConfig } from 'payload/types';
import { TitleField } from '../fields/base';

const CategoriesCollection: CollectionConfig = {
  slug: 'categories',
  fields: [TitleField],
  admin: {
    useAsTitle: 'title',
    group: 'Taxonomy',
  },
};

export default CategoriesCollection;

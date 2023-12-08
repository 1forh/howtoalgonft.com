import { CollectionConfig } from 'payload/types';
import { TitleField } from '../fields/base';
import { slugField } from '../fields/slug';
import { BlocksField } from '../fields/blocks';

const PagesCollection: CollectionConfig = {
  slug: 'pages',
  fields: [TitleField, slugField(), BlocksField],
};

export default PagesCollection;

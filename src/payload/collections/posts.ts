import { CollectionConfig } from 'payload/types';
import { BodyField, CategoryField, CoverImageField, ExcerptField, TitleField } from '../fields/base';
import { slugField } from '../fields/slug';

const PostsCollection: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'category'],
  },
  fields: [TitleField, CoverImageField, slugField(), CategoryField, ExcerptField, BodyField],
};

export default PostsCollection;

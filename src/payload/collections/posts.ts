import { CollectionConfig } from 'payload/types';
import { BodyField, CategoryField, CoverImageField, ExcerptField, StatusField, TitleField } from '../fields/base';
import { slugField } from '../fields/slug';

const PostsCollection: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'slug', 'category', 'status'],
  },
  fields: [TitleField, StatusField, slugField(), CoverImageField, CategoryField, ExcerptField, BodyField],
};

export default PostsCollection;

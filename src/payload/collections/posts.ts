import { CollectionConfig } from 'payload/types';
import { BodyField, CoverImageField, ExcerptField, TitleField } from '../fields/base';
import { slugField } from '../fields/slug';

const PostsCollection: CollectionConfig = {
  slug: 'posts',
  fields: [TitleField, CoverImageField, slugField(), ExcerptField, BodyField],
};

export default PostsCollection;

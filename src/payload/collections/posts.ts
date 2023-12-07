import { CollectionConfig } from 'payload/types';

const PostsCollection: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'coverImage',
      label: 'Cover Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'body',
      label: 'Body',
      type: 'richText',
      required: true,
    },
  ],
};

export default PostsCollection;

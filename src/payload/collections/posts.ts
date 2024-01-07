import { CollectionConfig } from 'payload/types';
import { BodyField, CategoryField, CoverImageField, ExcerptField, StatusField, TitleField } from '../fields/base';
import { slugField } from '../fields/slug';
import { isAdminOrEditor } from '../utilities/access';

const PostsCollection: CollectionConfig = {
  slug: 'posts',
  defaultSort: '-updateAt',
  admin: {
    defaultColumns: ['title', 'slug', 'category', 'status', 'createdBy'],
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
  },
  fields: [
    TitleField,
    StatusField,
    slugField(),
    CoverImageField,
    CategoryField,
    ExcerptField,
    BodyField,
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      access: {
        update: () => false,
      },
      admin: {
        readOnly: true,
        position: 'sidebar',
        condition: (data) => Boolean(data?.createdBy),
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ req, operation, data }) => {
        if (operation === 'create') {
          if (req.user) {
            data.createdBy = req.user.id;
            return data;
          }
        }
      },
    ],
  },
};

export default PostsCollection;

import { CollectionConfig } from 'payload/types';
import { isAdmin, isAdminOrSelf } from '../utilities/access';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    create: isAdminOrSelf,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      required: true,
      defaultValue: 'editor',
      access: {
        read: () => true,
        update: isAdmin,
        create: isAdmin,
      },
    },
  ],
};

export default Users;

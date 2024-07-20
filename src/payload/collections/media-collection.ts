import { CollectionConfig } from 'payload/types';

const MediaCollection: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media',
    plural: 'Media',
  },
  admin: {
    group: 'Media',
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: ['image/*'],
    disableLocalStorage: true,
    // imageSizes: [
    //   {
    //     name: 'small',
    //     width: 320,
    //   },
    //   {
    //     name: 'medium',
    //     width: 640,
    //   },
    //   {
    //     name: 'large',
    //     width: 1024,
    //   },
    // ],
    // adminThumbnail: 'small',
  },
  fields: [
    // Additional fields can be added here if needed
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
      label: 'Caption',
    },
  ],
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  timestamps: true,
};

export default MediaCollection;

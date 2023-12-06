// https://www.showwcase.com/show/18570/how-to-deploy-payloadcms-to-digitialocean-and-connect-to-s3-bucket

import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

const adapter = s3Adapter({
  config: {
    endpoint: process.env.S3_ENDPOINT,
    region: process.env.S3_REGION!,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  },
  bucket: process.env.S3_BUCKET!,
  acl: 'public-read',
});

const CloudStoragePlugin = cloudStorage({
  collections: {
    media: {
      adapter,
      disablePayloadAccessControl: true,
      prefix: 'media',
    },
  },
});

export default CloudStoragePlugin;

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { buildConfig } from 'payload/config';
import MediaCollection from './collections/media';
import CloudStoragePlugin from './plugins/storage';

export default buildConfig({
  plugins: [CloudStoragePlugin],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [MediaCollection],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});

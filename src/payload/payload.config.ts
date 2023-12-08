import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { buildConfig } from 'payload/config';
import MediaCollection from './collections/media';
import PagesCollection from './collections/pages';
import PostsCollection from './collections/posts';
import SeoPlugin from './plugins/seo';
import CloudStoragePlugin from './plugins/storage';

export default buildConfig({
  plugins: [CloudStoragePlugin, SeoPlugin],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [MediaCollection, PostsCollection, PagesCollection],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});

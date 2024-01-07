import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import path from 'path';
import { buildConfig } from 'payload/config';
import CategoriesCollection from '@/payload/collections/categories';
import MediaCollection from '@/payload/collections/media';
import PagesCollection from '@/payload/collections/pages';
import PostsCollection from '@/payload/collections/posts';
import UsersCollection from '@/payload/collections/users';
import SeoPlugin from '@/payload/plugins/seo';
import CloudStoragePlugin from '@/payload/plugins/storage';

export default buildConfig({
  plugins: [CloudStoragePlugin, SeoPlugin],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string,
  }),
  editor: slateEditor({}),
  admin: {
    bundler: webpackBundler(),
    user: UsersCollection.slug,
  },
  collections: [UsersCollection, CategoriesCollection, PostsCollection, PagesCollection, MediaCollection],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
});

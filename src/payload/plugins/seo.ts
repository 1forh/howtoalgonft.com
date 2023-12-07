import { SITE_NAME } from '@/constants';
import seo from '@payloadcms/plugin-seo';

const SeoPlugin = seo({
  collections: ['posts'],
  uploadsCollection: 'media',
  generateTitle: ({ doc }: { doc: any }) => `${doc.title} - ${SITE_NAME}`,
  generateDescription: ({ doc }: { doc: any }) => doc.excerpt,
});

export default SeoPlugin;

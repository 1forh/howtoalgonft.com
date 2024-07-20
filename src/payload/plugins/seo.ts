import { SITE_NAME } from '@/constants';
import seo from '@payloadcms/plugin-seo';

const SeoPlugin = seo({
  collections: ['posts', 'pages'],
  uploadsCollection: 'media',
  generateTitle: ({ doc }: { doc: any }) => `${doc.title.value} - ${SITE_NAME}`,
  generateDescription: ({ doc }: { doc: any }) => doc.excerpt.value,
});

export default SeoPlugin;

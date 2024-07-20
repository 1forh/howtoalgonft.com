import { MetadataRoute } from 'next';
import { getPages, getPosts } from './_lib/payload';

function createUrl(path?: string): string {
  if (!path) {
    return process.env.NEXT_PUBLIC_SITE_URL as string;
  }
  return `${process.env.NEXT_PUBLIC_SITE_URL}${path}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pages, posts] = await Promise.all([getPages(), getPosts()]);

  return [
    {
      url: createUrl(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // @ts-ignore
    ...pages
      .filter((page) => page.slug !== 'home')
      .map((page) => ({
        url: createUrl(`/${page.slug}`),
        lastModified: new Date(page.updatedAt),
        changeFrequency: 'monthly',
        priority: 0.8,
      })),
    // @ts-ignore
    ...posts.map((post) => ({
      url: createUrl(`/${post.slug}`),
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}

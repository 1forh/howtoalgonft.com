import { ArticleLayout } from '@/app/_components/ArticleLayout';
import { getPost } from '@/app/_lib/payload';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 300;

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug.join('/');
  const page = await getPost(slug);
  return page.meta;
}

export default async function Post({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const post = await getPost(slug);
  if (!post) notFound();
  return <ArticleLayout post={post} />;
}

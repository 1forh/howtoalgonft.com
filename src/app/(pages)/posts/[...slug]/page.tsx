import { ArticleLayout } from '@/app/_components/ArticleLayout';
import { getPost, getPosts } from '@/app/_lib/payload';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: [post.slug],
  }))
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug.join('/');
  const page = await getPost(slug);
  if (!page) notFound();
  return page.meta;
}

export default async function Post({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const post = await getPost(slug);
  if (!post) notFound();
  return <ArticleLayout post={post} />;
}

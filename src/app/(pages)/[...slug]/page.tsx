/* eslint-disable react/no-unescaped-entities */
import { ArticleLayout } from '@/app/_components/ArticleLayout';
import BlocksLoader from '@/app/_components/BlocksLoader';
import Gradients from '@/app/_components/Gradients';
import { getPage, getPages, getPost, getPosts } from '@/app/_lib/payload';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const [pages, posts] = await Promise.all([getPages(), getPosts()]);

  return [
    ...pages.map((page) => ({
      slug: [page.slug],
    })),
    ...posts.map((post) => ({
      slug: [post.slug],
    })),
  ];
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug.join('/');
  if (params.slug.length === 2) {
    const post = await getPost(slug);
    if (!post) notFound();
    return post.meta;
  }
  const page = await getPage(slug);
  if (!page) notFound();
  return page.meta;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');

  if (params.slug.length === 2) {
    const post = await getPost(slug);
    if (!post) notFound();
    return <ArticleLayout post={post} />;
  }

  const page = await getPage(slug);
  if (!page) notFound();

  return (
    <div className='relative h-full'>
      <Gradients />
      <BlocksLoader blocks={page.blocks} />
    </div>
  );
}

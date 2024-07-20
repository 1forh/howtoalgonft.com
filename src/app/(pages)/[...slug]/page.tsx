/* eslint-disable react/no-unescaped-entities */
import BlocksLoader from '@/app/_components/BlocksLoader';
import Gradients from '@/app/_components/Gradients';
import { getPage, getPages } from '@/app/_lib/payload';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const pages = await getPages();

  return pages.map((page) => ({
    slug: [page.slug],
  }));
}

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug.join('/');
  const page = await getPage(slug);
  if (!page) notFound();
  return page.meta;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');
  const page = await getPage(slug);
  if (!page) notFound();

  return (
    <div className='relative h-full'>
      <Gradients />
      <BlocksLoader blocks={page.blocks} />
    </div>
  );
}

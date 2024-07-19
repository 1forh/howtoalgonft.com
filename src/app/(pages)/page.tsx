/* eslint-disable react/no-unescaped-entities */
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlocksLoader from '../_components/BlocksLoader';
import Cta from '../_components/Cta';
import Gradients from '../_components/Gradients';
import LogoCloud from '../_components/LogoCloud';
import { getPage } from '../_lib/payload';

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPage('home');
  if (!page) notFound();
  return page.meta;
}

export default async function Home() {
  const page = await getPage('home');
  if (!page) notFound();

  return (
    <div className='relative h-full'>
      <Gradients />
      <BlocksLoader blocks={page.blocks} />
      <Cta />
      <LogoCloud />
    </div>
  );
}

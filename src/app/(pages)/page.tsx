/* eslint-disable react/no-unescaped-entities */
import getPayloadClient from '@/payload/payloadClient';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlocksLoader from '../_components/BlocksLoader';
import Cta from '../_components/Cta';
import Gradients from '../_components/Gradients';
import LogoCloud from '../_components/LogoCloud';
import { formatMetadata } from '../_lib/helpers';

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadClient();

  // get home page
  const homePageResp = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  });

  const homePage = homePageResp.docs[0];
  const meta = homePage.meta;

  return formatMetadata(meta);
}

export default async function Home() {
  const payload = await getPayloadClient();

  // get home page
  const homePageResp = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  });

  const homePage = homePageResp.docs[0];
  if (!homePage) notFound();

  return (
    <div className='relative h-full'>
      <Gradients />
      <BlocksLoader blocks={homePage.blocks} />
      <Cta />
      <LogoCloud />
    </div>
  );
}

/* eslint-disable react/no-unescaped-entities */
import getPayloadClient from '@/payload/payloadClient';
import { notFound } from 'next/navigation';
import BlocksLoader from '../_components/BlocksLoader';
import Cta from '../_components/Cta';
import Gradients from '../_components/Gradients';
import LogoCloud from '../_components/LogoCloud';
import Features from '../_components/sections/Features';
import { Metadata, ResolvingMetadata } from 'next';
import { SITE_NAME } from '@/constants';

export const revalidate = 300;

export async function generateMetadata(
  { }, // params
  parent: ResolvingMetadata
): Promise<Metadata> {
  const payload = await getPayloadClient();

  // get home page
  const homePageResp = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      }
    }
  });

  const homePage = homePageResp.docs[0];
  const meta = homePage.meta;
  if (!meta) return {
    title: SITE_NAME,
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      // @ts-ignore
      images: meta.image?.url
    },
  }
}

export default async function Home() {
  const payload = await getPayloadClient();

  // get home page
  const homePageResp = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      }
    }
  });

  const homePage = homePageResp.docs[0];
  if (!homePage) notFound();

  return (
    <div className="relative h-full">
      <Gradients />
      <BlocksLoader blocks={homePage.blocks} />
      {/* <Photos /> */}
      <Features />
      <Cta />
      <LogoCloud />
    </div>
  );
}

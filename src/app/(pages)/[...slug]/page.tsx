/* eslint-disable react/no-unescaped-entities */
import BlocksLoader from '@/app/_components/BlocksLoader';
import Gradients from '@/app/_components/Gradients';
import { formatMetadata } from '@/app/_lib/helpers';
import getPayloadClient from '@/payload/payloadClient';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 300;

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const payload = await getPayloadClient();
  const slug = params.slug.join('/')

  const pageResp = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const page = pageResp.docs[0];
  const meta = page.meta;

  return formatMetadata(meta);
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const payload = await getPayloadClient();
  const slug = params.slug.join('/')

  // get home page
  const pageResp = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const page = pageResp.docs[0];
  if (!page) notFound();

  return (
    <div className='relative h-full'>
      <Gradients />
      <BlocksLoader blocks={page.blocks} />
    </div>
  );
}

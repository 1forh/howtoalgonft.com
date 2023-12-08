import { ArticleLayout } from '@/app/_components/ArticleLayout';
import PageContainer from '@/app/_components/PageContainer';
import getPayloadClient from '@/payload/payloadClient';
import { notFound } from 'next/navigation';

export const revalidate = 300;

export default async function Post({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/');

  const payload = await getPayloadClient();

  const resp = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  const post = resp.docs[0];

  if (!post) notFound();

  return (
    <ArticleLayout post={post} />
  );
}

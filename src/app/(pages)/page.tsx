/* eslint-disable react/no-unescaped-entities */
import getPayloadClient from '@/payload/payloadClient';
import Footer from '../_components/Footer';
import ArticlePreview from '../_components/ArticlePreview';
import PageContainer from '../_components/PageContainer';

export const revalidate = 300;

export default async function Home() {
  const payload = await getPayloadClient();

  const resp = await payload.find({
    collection: 'posts',
  });
  const posts = resp.docs;
  console.log(posts);

  return (
    <PageContainer>
      <div className='max-w-2xl mb-20'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl'>Dive into the world of Algorand NFTs</h1>
        <p className='mt-6 text-base text-gray-600 dark:text-gray-400'>
          Explore our resources, tutorials, and community insights to become an Algorand NFT expert. Whether you're a beginner curious about the world
          of NFTs or an experienced creator looking to expand your knowledge, we've got you covered.
        </p>
      </div>

      <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
        <div className='flex flex-col gap-16'>
          {posts.map((post) => (
            <ArticlePreview key={post.id} post={post} />
          ))}
        </div>
        <div className='lg:pl-16 xl:pl-24'>sidebar stuff here</div>
      </div>
    </PageContainer>
  );
}

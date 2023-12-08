/* eslint-disable react/no-unescaped-entities */
import getPayloadClient from '@/payload/payloadClient';
import Footer from '../_components/Footer';
import ArticlePreview from '../_components/ArticlePreview';
import PageContainer from '../_components/PageContainer';
import Photos from './Photos';
import Hero from './Hero';
import Gradients from './Gradients';
import Features from './Features';

export const revalidate = 300;

export default async function Home() {
  const payload = await getPayloadClient();

  const resp = await payload.find({
    collection: 'posts',
  });
  const posts = resp.docs;

  return (
    <div className="relative h-full">
      <Gradients />
      <Hero />
      <Photos />
      <Features />

      {/* <PageContainer>
        <div className='mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'>
          <div className='flex flex-col gap-16'>
            {posts.map((post) => (
              <ArticlePreview key={post.id} post={post} />
            ))}
          </div>
          <div className='lg:pl-16 xl:pl-24'>sidebar stuff here</div>
        </div> */}
      {/* </PageContainer> */}
    </div>
  );
}

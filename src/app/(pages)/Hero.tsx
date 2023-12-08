import PageContainer from '../_components/PageContainer';

type Props = {};

const Hero = (props: Props) => {
  return (
    <PageContainer>
      <div className='max-w-xl mb-16 md:mb-32'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl'>Dive into the world of Algorand NFTs</h1>
        <p className='mt-6 text-gray-600 dark:text-gray-400'>
          Explore our resources, tutorials, and community insights to become an Algorand NFT expert. Whether you're a beginner curious about the world
          of NFTs or an experienced creator looking to expand your knowledge, we've got you covered.
        </p>
      </div>
    </PageContainer>
  );
};

export default Hero;

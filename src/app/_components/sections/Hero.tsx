import PageContainer from '../PageContainer';

type Props = {
  content: {
    title: string;
    description: string;
  };
};

const Hero = ({ content }: Props) => {
  return (
    <PageContainer>
      <div className='max-w-xl mb-16 md:mb-32'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl !leading-[1.1]'>{content.title}</h1>
        <p className='mt-6 text-gray-600 dark:text-gray-400 text-lg md:text-xl'>{content.description}</p>
      </div>
    </PageContainer>
  );
};

export default Hero;

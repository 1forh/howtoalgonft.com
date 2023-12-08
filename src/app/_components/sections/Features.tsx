/* eslint-disable react/no-unescaped-entities */
import { Card } from '../Card';
import PageContainer from '../PageContainer';

type Props = {
  content: {
    kicker: string;
    title: string;
    description: string;
    features?:
    | {
      icon: 'wallet' | 'phone' | 'cart' | 'sparkles' | 'store' | 'objectsColumn';
      title: string;
      description: string;
      link: string;
      id?: string | null;
    }[]
    | null;
    id?: string | null;
    blockName?: string | null;
    blockType: 'features';
  };
};

export default function Features({ content }: Props) {
  return (
    <div className='mb-16 md:mb-32'>
      <PageContainer>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-primary-600'>{content.kicker}</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl'>{content.title}</p>
          <p className='mt-6 text-lg leading-8 text-gray-400'>{content.description}</p>
        </div>

        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-3'>
            {(content.features || []).map((feature) => (
              <Card key={feature.id}>
                <Card.Icon name={feature.icon} />
                <Card.Title href={`/${feature.link}`}>{feature.title}</Card.Title>
                <Card.Description>{feature.description}</Card.Description>
                <Card.Cta>Read more</Card.Cta>
              </Card>
            ))}
          </dl>
        </div>
      </PageContainer>
    </div>
  );
}

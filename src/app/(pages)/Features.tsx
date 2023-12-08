/* eslint-disable react/no-unescaped-entities */
import { Card } from '../_components/Card';
import { IconName } from '../_components/Icon';
import PageContainer from '../_components/PageContainer';

const features: { name: string; description: string; href: string; icon: IconName }[] = [
  {
    name: 'Create Your Algorand Wallet',
    description:
      'Set the foundation of your NFT journey. Learn how to create an Algorand wallet, understand security essentials, and prepare to engage with the Algorand ecosystem.',
    href: '/',
    icon: 'phone',
  },
  {
    name: 'Fund Your Wallet',
    description:
      'Discover the methods to fund your Algorand wallet with $ALGO. Get ready to create, buy, and sell NFTs on the most efficient blockchain in existence.',
    href: '/',
    icon: 'wallet',
  },
  {
    name: 'Buy New NFTs',
    description:
      'Explore different options for buying Algorand NFTs. Learn the nuances of buying NFTs, from browsing collections to completing transactions seamlessly.',
    href: '/',
    icon: 'cart',
  },
  {
    name: 'Create Your Own NFT',
    description: 'From minting to metadata, we cover everything you need to know to create your own NFTs.',
    href: '/',
    icon: 'sparkles',
  },
  {
    name: 'Sell Your Creations',
    description: 'A complete guide to selling your NFTs on Algorand. Tap into a global market and trade your digital assets with ease.',
    href: '/',
    icon: 'store',
  },
  {
    name: 'Manage Your Assets',
    description:
      'Learn how to manage your NFTs on Algorand. From viewing your collections to transferring your assets, we cover everything you need to know.',
    href: '/',
    icon: 'objectsColumn',
  },
];

export default function Features() {
  return (
    <div className='mb-16 md:mb-32'>
      <PageContainer>
        <div className='mx-auto max-w-2xl lg:text-center'>
          <h2 className='text-base font-semibold leading-7 text-primary-600'>Learn about Algorand</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl'>Algorand NFT Essentials</p>
          <p className='mt-6 text-lg leading-8 text-gray-400'>
            Discover the simplicity of minting, buying, and managing NFTs on the most advanced and eco-friendly blockchain available in the world.
          </p>
        </div>

        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-16 lg:max-w-none lg:grid-cols-3'>
            {features.map((feature) => (
              <Card key={feature.name}>
                <Card.Icon name={feature.icon} />
                <Card.Title href={`/${feature.href}`}>{feature.name}</Card.Title>
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

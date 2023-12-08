import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Photos = (props: Props) => {
  const images = [
    {
      src: '/media/nfts/shitty-kitty.webp',
      alt: 'Shitty Kitty',
      href: 'https://www.nftexplorer.app/collection/shitty-kitties-third',
    },
    {
      src: '/media/nfts/mngo.png',
      alt: 'M.N.G.O',
      href: 'https://www.nftexplorer.app/collection/mngo'
    },
    {
      src: '/media/nfts/cgr.jpeg',
      alt: 'Crazy Goose Robots',
      href: 'https://www.nftexplorer.app/collection/crazy-goose-robots'
    },
    {
      src: '/media/nfts/flemish-clone.png',
      alt: 'Flemish Clone',
      href: 'https://www.nftexplorer.app/collection/flemish-clones'
    },
    {
      src: '/media/nfts/goodboi.webp',
      alt: 'goodbois',
      href: 'https://www.nftexplorer.app/collection/goodbois'
    },
    {
      src: '/media/nfts/mia.webp',
      alt: 'MIA',
      href: 'https://www.nftexplorer.app/collection/mama-mia'
    },
    {
      src: '/media/nfts/city-block.png',
      alt: 'Shitty City Block',
      href: 'https://www.nftexplorer.app/collection/shitty-city-blocks'
    },
    {
      src: '/media/nfts/little-royal.webp',
      alt: 'Little Royals',
      href: 'https://www.nftexplorer.app/collection/little-royals'
    },
    {
      src: '/media/nfts/pooof.webp',
      alt: 'State Pooof',
      href: 'https://www.nftexplorer.app/collection/state-pooofs'
    },
  ].sort(() => Math.random() - 0.5).slice(0, 5);
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className='mb-16 sm:mb-32'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Link href={image.href}>
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                sizes='(min-width: 640px) 18rem, 11rem'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;

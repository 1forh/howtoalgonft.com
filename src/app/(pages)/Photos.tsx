import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Photos = (props: Props) => {
  const images = [
    {
      src: '/media/nfts/shitty-kitty.webp',
      alt: 'Shitty Kitty',
    },
    {
      src: '/media/nfts/mngo.png',
      alt: 'M.N.G.O',
    },
    {
      src: '/media/nfts/cgr.jpeg',
      alt: 'Crazy Goose Robots',
    },
    {
      src: '/media/nfts/flemish-clone.png',
      alt: 'Flemish Clone',
    },
    {
      src: '/media/nfts/goodboi.webp',
      alt: 'goodbois',
    },
    {
      src: '/media/nfts/mia.webp',
      alt: 'MIA',
    },
    {
      src: '/media/nfts/city-block.png',
      alt: 'Shitty City Block',
    },
    {
      src: '/media/nfts/little-royal.webp',
      alt: 'Little Royals',
    },
    {
      src: '/media/nfts/pooof.webp',
      alt: 'State Pooof',
    },
  ].sort(() => Math.random() - 0.5).slice(0, 5);
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className='mb-16 sm:mb-20'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              sizes='(min-width: 640px) 18rem, 11rem'
              className='absolute inset-0 h-full w-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;

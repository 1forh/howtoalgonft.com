import { Media } from '@/payload-types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

type Props = {
  content: {
    photos?: { image: string | Media; url: string; id?: string | null | undefined }[] | null | undefined;
    id?: string | null | undefined;
    blockName?: string | null | undefined;
    blockType: 'photoCollage';
  };
};

const PhotoCollage = ({ content }: Props) => {
  const photos = useMemo(() => (content.photos || []).sort(() => Math.random() - 0.5).slice(0, 5), []);
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className='mb-16 sm:mb-32'>
      <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 sm:w-72 sm:rounded-2xl',
              rotations[index % rotations.length]
            )}
          >
            {typeof photo.image !== 'string' && (
              <Link href={photo.url!}>
                <Image
                  src={photo.image.url!}
                  alt={photo.image.alt}
                  width={500}
                  height={500}
                  sizes='(min-width: 640px) 18rem, 11rem'
                  className='absolute inset-0 h-full w-full object-cover'
                />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoCollage;

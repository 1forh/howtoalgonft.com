import { Media, Site } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import Badge from './Badge';

type Props = {
  site: Site;
};

const SitePreview = ({ site }: Props) => {
  const image = site.image as any as Media;

  return (
    <div key={site.id} className='w-full'>
      <Link href={site.url} className='relative aspect-video bg-gray-900 w-full block rounded-lg md:rounded-3xl overflow-hidden'>
        {image && (
          <Image
            src={image.url!}
            alt={image.alt}
            width={image.width!}
            height={image.height!}
            className='object-cover absolute inset-0 w-full h-full'
          />
        )}
        {/* <div className='absolute bottom-4 right-4 z-10'>
          <Badge theme='black'>Current mission ends in XX days</Badge>
        </div> */}
      </Link>
      <div className='mt-6 flex justify-between'>
        <h2>
          <span className='font-bold text-xl lg:text-3xl'>{site.name}</span> <span className='text-gray-400'>by {site.collectionName}</span>
        </h2>
      </div>
    </div>
  );
};

export default SitePreview;

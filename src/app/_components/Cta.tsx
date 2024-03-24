import Link from 'next/link';
import PageContainer from './PageContainer';
import Image from 'next/image';
import { colors } from '../_lib/tailwind';
import Icon from './Icon';

export default function Cta() {
  return (
    <PageContainer className='px-0 md:px-8 mb-16 md:mb-32'>
      <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0'>
        <svg
          viewBox='0 0 1024 1024'
          className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
          aria-hidden='true'
        >
          <circle cx={512} cy={512} r={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.7' />
          <defs>
            <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
              <stop stopColor={colors.primary[500]} />
              <stop offset={1} stopColor={colors.primary[800]} />
            </radialGradient>
          </defs>
        </svg>
        <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl !leading-[1.1]'>
            Discover NFTs on the
            <br />
            Algorand blockchain
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Expand your collection, find unique pieces, and track the latest trends with the leading NFT data aggregator for the Algorand blockchain.
          </p>
          <div className='mt-10 flex items-center flex-col md:flex-row gap-5 justify-center gap-x-6 lg:justify-start'>
            <Link
              href='https://www.asalytic.app'
              className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2'
              target="_blank"
            >
              Check out Asalytic
              <Icon name="externalLink" className='w-3' />
            </Link>
            <Link href='/posts/finding-nfts-to-buy' className='text-sm font-semibold leading-6 text-white flex items-center gap-2'>
              Learn more <Icon name="arrowRightLong" className='w-4' />
            </Link>
          </div>
        </div>
        <div className='relative mt-16 h-80 lg:mt-8'>
          <Image
            className='absolute left-0 top-0 w-[45rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10'
            src='/media/sections/asalytic.png'
            alt='Asalytic screen'
            width={2410 / 3}
            height={1756 / 3}
          />
        </div>
      </div>
    </PageContainer>
  );
}

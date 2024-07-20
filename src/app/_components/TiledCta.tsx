import Link from 'next/link';
import React from 'react';
import Icon from './Icon';
import Image from 'next/image';

type Props = {};

const TiledCta = (props: Props) => {
  return (
    <div className='overflow-hidden py-24 md:py-48'>
      <div className='mx-auto max-w-6xl px-6 lg:flex lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl'>NFT Missions</h2>
            <p className='mt-6 text-lg leading-8 text-gray-400'>
              There are quite a few Algorand NFT projects offering quest/mission staking as a utility. Collecting these NFTs and staking them in the
              respective projects can earn you really cool rewards.
            </p>
            <div className='mt-10 flex'>
              <Link
                href='https://www.nftmissions.com'
                className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2'
                target='_blank'
              >
                Check out NFT Missions
                <Icon name='externalLink' className='w-3' />
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <Link href='https://www.shittykitties.art/adventures'>
                <Image
                  src='/media/sections/arctic.png'
                  alt=''
                  width={768}
                  height={604}
                  className='aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                />
              </Link>
            </div>
            <div className='contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8'>
              <div className='order-first flex w-64 flex-none justify-end self-end lg:w-auto'>
                <Link href='https://www.cavefrens.com/caves'>
                  <Image
                    src='/media/sections/cave-frens.webp'
                    alt=''
                    width={768}
                    height={604}
                    className='aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </Link>
              </div>
              <div className='flex w-96 flex-auto justify-end lg:w-auto lg:flex-none'>
                <Link href='https://crazygooserobots.com/missions'>
                  <Image
                    src='/media/sections/goots-and-horses.png'
                    alt=''
                    width={1152}
                    height={842}
                    className='aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover'
                  />
                </Link>
              </div>
              <div className='hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none'>
                <Link href='https://www.mostlyfrens.xyz/quests'>
                  <Image
                    src='/media/sections/mngo.jpg'
                    alt=''
                    width={768}
                    height={604}
                    className='aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiledCta;

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function LogoCloud() {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-lg font-semibold leading-8 text-gray-50'>NFT Marketplaces on Algorand</h2>
        <div className='mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          <Link href="https://www.randgallery.com/algo-collection/">
            <img className='col-span-2 max-h-7 w-full object-contain lg:col-span-1' src='/media/logos/rand.webp' alt='Rand Gallery' />
          </Link>
          <Link href="https://algoxnft.com/">
            <img className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' src='/media/logos/algoxnft.png' alt='ALGOxNFT' />
          </Link>
          <Link href="https://exa.market/">
            <img
              className='col-span-2 max-h-10 w-full object-contain lg:col-span-1'
              src='/media/logos/exa.webp'
              alt='EXA Market'
            />
          </Link>
          <Link href="https://shufl.app">
            <img
              className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
              src='/media/logos/shufl.png'
              alt='Shufl'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

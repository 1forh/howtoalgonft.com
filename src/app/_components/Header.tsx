import React from 'react';
import ThemeToggle from './ThemeToggle';
import PageContainer from './PageContainer';
import Link from 'next/link';
import Image from 'next/image';

type Props = {};

const Header = (props: Props) => {
  return (
    <PageContainer className="mb-24">
      <div className='flex justify-between items-center py-5'>
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="How to ALGO NFT" width={519} height={72} className='w-[200px]' />
            <span className='sr-only'>How to ALGO NFT</span>
          </Link>
        </div>
        {/* <div>
          <ThemeToggle />
        </div> */}
      </div >
    </PageContainer >
  );
};

export default Header;

import React from 'react';
import Link from 'next/link';
import Container from '../components/Container';
import TwitterLink from './TwitterLink';
import DonationLink from './DonationLink';

function Header() {
  return (
    <div className='px-5 mt-5 mb-8 lg:px-0'>
      <Container>
        <div className='flex items-center justify-between pb-5 border-b border-neutral-700'>
          <div>
            <Link href='/'>
              <a>
                <h1 className='sr-only'>How To Algo NFT</h1>
                <img src='/logo.png' alt='How To Algo NFT' className='h-6' />
              </a>
            </Link>
          </div>
          <div className='flex items-center space-x-5'>
            <DonationLink small />
            <TwitterLink />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;

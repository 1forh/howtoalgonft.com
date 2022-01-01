import Link from 'next/link';
import React from 'react';
import DonationLink from './DonationLink';
import TwitterLink from './TwitterLink';

function Footer() {
  return (
    <div className='pt-12 pb-12 space-y-8 text-center lg:pt-32'>
      <div className='flex flex-col items-center justify-center space-y-10'>
        <p className='flex justify-center'>
          <TwitterLink />
        </p>
        <DonationLink />
      </div>
      <p>
        Created by{' '}
        <a
          href='https://twitter.com/minneralgo'
          className='font-medium text-green-300 hover:underline'
        >
          Minner.Algo
        </a>
      </p>
    </div>
  );
}

export default Footer;

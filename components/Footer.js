import React from 'react';
import TwitterLink from './TwitterLink';

function Footer() {
  return (
    <div className='pt-48 pb-12 space-y-8 text-center'>
      <p className='flex justify-center'>
        <TwitterLink />
      </p>
      <p>
        Created by{' '}
        <a
          href='https://twitter.com/minneralgo'
          className='font-medium text-indigo-300 hover:underline'
        >
          Minner.Algo
        </a>
      </p>
    </div>
  );
}

export default Footer;

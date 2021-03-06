import Link from 'next/link';
import React from 'react';

function DonationLink({ small }) {
  return (
    <div>
      <Link href='/donate'>
        <a
          className={`flex items-center justify-center  space-x-3 text-sm font-medium transition-colors duration-150 bg-green-900 bg-opacity-50 border border-green-800 rounded-md text-green-50 hover:bg-opacity-75 px-3 py-1`}
        >
          <span className='block w-3 h-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 113 113.4'
              className='w-full h-full'
            >
              <polygon
                fill='currentColor'
                points='19.6 113.4 36 85 52.4 56.7 68.7 28.3 71.4 23.8 72.6 28.3 77.6 47 72 56.7 55.6 85 39.3 113.4 58.9 113.4 75.3 85 83.8 70.3 87.8 85 95.4 113.4 113 113.4 105.4 85 97.8 56.7 95.8 49.4 108 28.3 90.2 28.3 89.6 26.2 83.4 3 82.6 0 65.5 0 65.1 0.6 49.1 28.3 32.7 56.7 16.4 85 0 113.4 19.6 113.4'
              ></polygon>
            </svg>
          </span>
          <span>Donate</span>
        </a>
      </Link>
    </div>
  );
}

export default DonationLink;

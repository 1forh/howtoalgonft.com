import React from 'react';
import ThemeToggle from './ThemeToggle';
import PageContainer from './PageContainer';

type Props = {};

const Header = (props: Props) => {
  return (
    <PageContainer className="mb-10">
      <div className='flex justify-between py-5'>
        <div>
          <p className="font-bold text-xl">How to ALGO NFT</p>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </PageContainer>
  );
};

export default Header;

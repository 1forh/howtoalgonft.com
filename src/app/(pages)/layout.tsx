import React from 'react';
import Header from '../_components/Header';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className='h-full bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50'>
      <Header />
      {children}
    </div>
  );
};

export default layout;

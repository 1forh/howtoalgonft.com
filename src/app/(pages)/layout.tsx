import React from 'react';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <main className='h-full relative z-[1] min-h-[100dvh] bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50'>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;

import React from 'react';

type Props = {};

const Gradients = (props: Props) => {
  return (
    <>
      <div className="absolute right-1/3 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-accent-200 after:via-primary-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary-700 before:dark:opacity-10 after:dark:from-accent-900 after:dark:via-primary-500 after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />

      <div className="absolute bottom-0 right-0 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-accent-200 after:via-primary-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-primary-700 before:dark:opacity-10 after:dark:from-accent-900 after:dark:via-primary-500 after:dark:opacity-40 before:lg:h-[360px] z-[-1] rotate-180" />
    </>
  );
};

export default Gradients;

import clsx from 'clsx';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const PageContainer = ({ children, className }: Props) => {
  return <div className={clsx('container mx-auto px-4 md:px-8', className)}>{children}</div>;
};

export default PageContainer;
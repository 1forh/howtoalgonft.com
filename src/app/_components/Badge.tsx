import clsx from 'clsx';
import React from 'react';

const themes = {
  blue: 'bg-blue-500 text-white',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  black: 'bg-gray-950 text-white',
} as const;

type Props = {
  theme: keyof typeof themes;
  children: React.ReactNode;
};

const Badge = ({ children, theme }: Props) => {
  const localTheme = themes[theme];
  return <span className={clsx('text-xs tracking-wide font-bold uppercase rounded-lg p-2', localTheme)}>{children}</span>;
};

export default Badge;

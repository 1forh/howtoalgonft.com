'use client';

import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import { useTheme } from 'next-themes';

type Props = {};

const ThemeToggle = (props: Props) => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type='button'
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur transition dark:bg-gray-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={() => setTheme(otherTheme)}
    >
      <Icon
        name='sun'
        className='h-6 w-6 fill-gray-100 stroke-gray-500 transition group-hover:fill-gray-200 group-hover:stroke-gray-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-primary-50 [@media(prefers-color-scheme:dark)]:stroke-primary-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-primary-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-600'
      />
      <Icon
        name='moon'
        className='hidden h-6 w-6 fill-gray-700 stroke-gray-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-gray-400 [@media_not_(prefers-color-scheme:dark)]:fill-primary-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-primary-500'
      />
    </button>
  );
};

export default ThemeToggle;

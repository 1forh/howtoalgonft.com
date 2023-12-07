import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import typographyPlugin from '@tailwindcss/typography';
import typographyStyles from './typography';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-inter)'],
        body: ['var(--font-inter)'],
      },
      colors: {
        primary: colors.green,
        gray: colors.neutral,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [typographyPlugin],
  typography: typographyStyles,
};

export default config;

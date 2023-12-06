import { Lato } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-Lato',
});

const fonts = [lato.variable];

export default fonts;

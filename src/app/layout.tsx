import { SITE_NAME } from '@/constants';
import { GoogleAnalytics } from '@next/third-parties/google';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Providers } from './_components/Providers';
import fonts from './_lib/fonts';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: '',
  openGraph: {
    images: [
      {
        url: '/facebook-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={clsx(...fonts, 'antialiased scroll-smooth overflow-x-hidden')} suppressHydrationWarning>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
      )}

      <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3709556784139074' crossOrigin='anonymous' />
      <body className='flex flex-col h-full min-h-[100dvh] font-body'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

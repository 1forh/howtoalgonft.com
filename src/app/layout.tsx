import { SITE_NAME } from '@/constants';
import clsx from 'clsx';
import type { Metadata } from 'next';
import Script from 'next/script';
import Header from './_components/Header';
import fonts from './_lib/fonts';
import './globals.css';
import { Providers } from './_components/Providers';

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
    <html lang='en' className={clsx(...fonts, 'antialiased, font-body scroll-smooth overflow-x-hidden')} suppressHydrationWarning>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}></Script>
          <Script id='gtag'>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-JJBPC85LS4');
            `}
          </Script>
        </>
      )}
      <body className="flex flex-col h-full">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

import React from 'react';
import Head from 'next/head';

function Helmet({ title, description }) {
  const theTitle = title ? `${title} - How to Algo NFT` : 'How to Algo NFT';

  return (
    <Head>
      <title>{theTitle}</title>
      <meta name='description' content={description} />

      <meta property='og:title' content={theTitle} />
      <meta property='og:description' content={description} />

      <meta name='twitter:title' content={theTitle} />
      <meta name='twitter:description' content={description} />
      <meta
        name='twitter:image'
        content={'https://www.howtoalgonfts.com/twitter-share-image.png'}
      />
      <meta name='twitter:card' content='summary_large_image' />

      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}

export default Helmet;

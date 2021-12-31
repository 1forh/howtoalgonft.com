import React from 'react';
import Head from 'next/head';
import siteMetadata from '../data/siteMetadata.js';

function Helmet({ title, description }) {
  const theTitle = title
    ? `${title} - ${siteMetadata.siteName}`
    : siteMetadata.siteName;

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
        content={'https://www.howtoalgonft.com/twitter-share-image.png'}
      />
      <meta name='twitter:card' content='summary_large_image' />

      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}

export default Helmet;

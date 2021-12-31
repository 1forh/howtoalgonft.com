import Link from 'next/link';
import React from 'react';
import Article from '../components/Article';
import Helmet from '../components/Helmet';

function HowToMintNFTsOnAB2Gallery() {
  const title = 'How to Mint NFTs on AB2 Gallery';
  const description = 'Quick overview on how to mint NFTs on AB2 Gallery.';

  return (
    <Article title={title}>
      <Helmet title={title} description={description} />
      <h2>
        1. Go to{' '}
        <a href='https://ab2.gallery' target='_blank' rel='noreferrer'>
          AB2 Gallery
        </a>
        .
      </h2>
      <img src='/uploads/ab2-gallery-step-1.png' alt='AB2 Gallery - Step #1' />
      <h2>2. Toggle menu in top right corner and click "Connect Wallet".</h2>
      <img src='/uploads/ab2-gallery-step-2.png' alt='AB2 Gallery -  Step #2' />
      <h2>3. Go through the steps in MyAlgo to connect your wallet.</h2>
      <img src='/uploads/my-algo-unlock.png' alt='MyAlgo Unlock' />
      <h2>
        4. If you have multiple wallets in MyAlgo, choose which address to
        connect to.
      </h2>
      <img src='/uploads/ab2-gallery-step-3.png' alt='AB2 Gallery -  Step #3' />
      <h2>
        5. Now that your wallet is connected, click the address in the dropdown
        and then click "Manage".
      </h2>
      <img src='/uploads/ab2-gallery-step-4.png' alt='AB2 Gallery -  Step #4' />
      <img
        src='/uploads/ab2-gallery-sell-step-5.png'
        alt='AB2 Gallery -  Step #5'
      />
      <h2>
        6. Under the "Available" tab, scroll down to bottom and click "Create
        ASA".
      </h2>
      <img
        src='/uploads/ab2-gallery-sell-step-6.png'
        alt='AB2 Gallery -  Step #6'
      />
      <img
        src='/uploads/ab2-gallery-mint-step-5.png'
        alt='AB2 Gallery -  Buy #5'
      />
      <h2>7. A modal will appear. Click automatic.</h2>
      <img
        src='/uploads/ab2-gallery-mint-click-automatic.png'
        alt='AB2 Gallery -  Mint Click Automatic'
      />

      <h2>8. Fill out the fields and click continue.</h2>
      <p>
        Name your asset and add the Unit Name. An example might be an NFT named
        `Sour Diesel` with a Unit Name of `NUGG001`. The Unit Name acts as a
        unique identifier for the NFT among your collection.
      </p>
      <p>If your NFT is a unique 1/1, the Total Supply should be 1.</p>
      <img
        src='/uploads/ab2-gallery-mint-step-6.png'
        alt='AB2 Gallery -  Buy #6'
      />
      <h2>9. After clicking continue, go through the MyAlgo steps.</h2>
      <h2>10. You now have your new NFT in your wallet! </h2>
      <p>
        Now that you have your brand new NFT, check out our{' '}
        <Link href='/how-to-sell-nfts-on-ab2-gallery'>
          <a>How to Sell NFTs on AB2 Gallery</a>
        </Link>{' '}
        guide to get started selling on AB2 Gallery.
      </p>
    </Article>
  );
}

export default HowToMintNFTsOnAB2Gallery;

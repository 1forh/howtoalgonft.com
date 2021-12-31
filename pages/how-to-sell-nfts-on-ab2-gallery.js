import React from 'react';
import Article from '../components/Article';
import Helmet from '../components/Helmet';

function HowToSellNFTsOnAB2Gallery() {
  const title = 'How to Sell NFTs on AB2 Gallery';
  const description = 'Quick overview on how to sell NFTs on AB2 Gallery.';

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
        6. You need to opt in to AB2 Gallery's ASA (NFT) in order to sell on
        AB2. Toggle the "Opt-in to Sell" toggle. A modal will open and you can
        click "Opt in".
      </h2>
      <img
        src='/uploads/ab2-gallery-sell-step-6.png'
        alt='AB2 Gallery -  Step #6'
      />
      <img
        src='/uploads/ab2-gallery-sell-step-7.png'
        alt='AB2 Gallery -  Step #7'
      />
      <h2>
        7. Now that you are opted in, find the NFT you want to sell in the
        "Avaiable" tab and click on it.
      </h2>
      <p>
        Below is{' '}
        <a
          href='https://www.nftexplorer.app/asset/489938686'
          target='_blank'
          rel='noreferrer'
        >
          Golden Alien Bug #678
        </a>
        . Let's put him up for sale!
      </p>
      <img
        src='/uploads/ab2-gallery-sell-step-8.png'
        alt='AB2 Gallery -  Step #8'
      />
      <h2>8. Clicking on the NFT will open this modal. Click on automatic.</h2>
      <img
        src='/uploads/ab2-gallery-sell-step-9.png'
        alt='AB2 Gallery -  Step #9'
      />
      <h2>9. Fill out the form and click confirm.</h2>
      <p>
        If the NFT is a 1/1, Quantity and Limit Per Order should be 1. Then you
        can set the price to however many algos you want.
      </p>
      <p>
        You can also sell more than copy at a time if your NFT is a fractional
        NFT. Just update the Quantity and Limit Per Order fields as you see fit.
      </p>
      <img
        src='/uploads/ab2-gallery-sell-step-10.png'
        alt='AB2 Gallery -  Step #10'
      />
      <img
        src='/uploads/golden-alien-bug-678.png'
        alt='AB2 Gallery -  Golden Alien Bug #678'
      />
      <img
        src='/uploads/ab2-gallery-sell-step-11.png'
        alt='AB2 Gallery -  Step #11'
      />
      <h2>10. After clicking confirm, go through the MyAlgo steps.</h2>
      <h2>
        11. Click confirm again when it comes up. You have to confirm twice to
        sell the NFT.
      </h2>
      <h2>12. Your NFT is now for sale on AB2 Gallery!</h2>
      <p>
        AB2 Gallery uses smart contracts to send your NFT and a little bit of
        algos to an escrow account. These are stored there until someone buys
        the NFT and then all proceeds are sent to you and the NFT is sent to the
        buyer.
      </p>{' '}
      <img
        src='/uploads/ab2-gallery-sell-step-12.png'
        alt='AB2 Gallery -  Step #12'
      />
    </Article>
  );
}

export default HowToSellNFTsOnAB2Gallery;

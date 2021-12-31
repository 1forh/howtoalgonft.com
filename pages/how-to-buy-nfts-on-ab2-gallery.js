import React from 'react';
import Article from '../components/Article';
import Helmet from '../components/Helmet';

function HowToBuyNFTsOnAB2Gallery() {
  const title = 'How to Buy NFTs on AB2 Gallery';
  const description = 'Quick overview on how to buy NFTs on AB2 Gallery.';

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
      <img src='/uploads/ab2-gallery-step-4.png' alt='AB2 Gallery -  Step #4' />
      <h2>
        5. Now that your wallet is connected, go to the collection's AB2 Gallery
        page.
      </h2>
      <p>
        The below example is a collection called{' '}
        <a href='https://ab2.gallery/u/alex' target='_blank' rel='noreferrer'>
          Alex
        </a>
        . Go follow him on{' '}
        <a
          href='https://twitter.com/Algo_Alex_NFT'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          Twitter
        </a>
        !
      </p>
      <p>
        You can find any collection by searching for the collection's Algorand
        address using the search bar on{' '}
        <a href='https://ab2.gallery/' target='_blank' rel='noreferrer'>
          AB2 Gallery
        </a>
        .
      </p>
      <p className='overflow-hidden text-ellipsis'>
        Another way find a collection if you know the address is by going
        directly to the page. If the wallet address is
        `KVC4EZQTW7M3RQWJZZXVDJ7W6THDKK7SEOKAYYSXVBN3U6HD3KKNZ2QL4E` then the
        AB2 Gallery url for that collection is{' '}
        <a
          href='https://ab2.gallery/address/KVC4EZQTW7M3RQWJZZXVDJ7W6THDKK7SEOKAYYSXVBN3U6HD3KKNZ2QL4E'
          target='_blank'
          rel='noreferrer'
        >
          https://ab2.gallery/address/KVC4EZQTW7M3RQWJZZXVDJ7W6THDKK7SEOKAYYSXVBN3U6HD3KKNZ2QL4E
        </a>
        .
      </p>
      <img
        src='/uploads/ab2-gallery-buy-step-5.png'
        alt='AB2 Gallery -  Step #5'
      />
      <h2>
        6. If the collection has any open listings, click on one you like and
        scroll to the bottom of the page.
      </h2>
      <p>
        You'll see a green button with a price. You can click on the green
        button to purchase the NFT.
      </p>
      <img
        src='/uploads/ab2-gallery-buy-step-6.png'
        alt='AB2 Gallery -  Step #6'
      />
      <h2>
        5. A modal will appear after clicking the green button. Confirm the
        purchase to buy your new NFT!
      </h2>
      <img
        src='/uploads/ab2-gallery-buy-step-7.png'
        alt='AB2 Gallery -  Step #7'
      />
      <h2>
        6. If the transaction is successful you will see the NFT in your wallet
        pretty quickly!
      </h2>
      <p>
        To view your NFTs on Ab2 Gallery, you can go to your profile and click
        on the "Collections" tab.
      </p>
      <img
        src='/uploads/ab2-gallery-collection.png'
        alt='AB2 Gallery -  My Collection'
      />
    </Article>
  );
}

export default HowToBuyNFTsOnAB2Gallery;

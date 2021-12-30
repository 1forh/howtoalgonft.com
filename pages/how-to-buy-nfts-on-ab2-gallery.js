import React from 'react';
import Article from '../components/Article';
import Helmet from '../components/Helmet';

function HowToBuyNFTsOnAB2Gallery() {
  const title = 'How to Buy NFTs on AB2 Gallery';
  const description = 'Quick overview on how to buy NFTs on AB2 Gallery.';

  return (
    <Article title={title}>
      <Helmet title={title} description={description} />

      <p>{description}</p>

      <img
        src='/uploads/ab2-gallery-step-1.png'
        alt='AB2 Gallery Gallery - Step #1'
      />
      <img
        src='/uploads/ab2-gallery-step-2.png'
        alt='AB2 Gallery Gallery -  Step #2'
      />
      <img
        src='/uploads/ab2-gallery-step-3.png'
        alt='AB2 Gallery Gallery -  Step #3'
      />
      <img
        src='/uploads/ab2-gallery-step-4.png'
        alt='AB2 Gallery Gallery -  Step #4'
      />
      <img
        src='/uploads/ab2-gallery-buy-step-5.png'
        alt='AB2 Gallery Gallery -  Step #5'
      />
      <img
        src='/uploads/ab2-gallery-buy-step-6.png'
        alt='AB2 Gallery Gallery -  Step #6'
      />
      <img
        src='/uploads/ab2-gallery-buy-step-7.png'
        alt='AB2 Gallery Gallery -  Step #7'
      />
    </Article>
  );
}

export default HowToBuyNFTsOnAB2Gallery;

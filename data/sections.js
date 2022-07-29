const sections = [
  {
    title: 'Creating a wallet',
    description:
      'Before anything else, you need to create a wallet. There are two ways to create a wallet, the Pera Algo Wallet app for iOS and Android or MyAlgo. You will need to create a MyAlgo wallet at some point in order to interact with sites to buy, sell, and mint NFTs.',
    showInTableOfContents: true,
    links: [
      {
        title: 'Create a New Account on the Pera Algo Wallet app',
        description:
          'Learn how to create a new account on the Pera Algo Wallet, the official Algorand wallet app. You can get the app for iOS and Android.',
        link: 'https://perawallet.app/support',
        logos: [
          {
            src: 'app-store.svg',
            alt: 'Pera Wallet - The Official Algorand Wallet on the App Store',
            link: 'https://apps.apple.com/us/app/algorand-wallet/id1459898525',
          },
          {
            src: 'play-store.png',
            alt: 'Official Algorand Wallet on the Play Store',
            link: 'https://play.google.com/store/apps/details?id=com.algorand.android&hl=en_US&gl=US',
          },
        ],
      },
      {
        title: 'Setup MyAlgo Wallet',
        description:
          'MyAlgo is a browser based Algorand wallet. You can create a new wallet or import a passphrase from your Algorand Wallet. You will need to setup MyAlgo if you want to interact with websites like AB2 Gallery and Rand Gallery.',
        link: 'https://yieldly.finance/resources/myalgowallet-setup',
        logos: [
          {
            src: 'my-algo.svg',
            alt: 'My Algo Wallet',
            link: 'https://wallet.myalgo.com/home',
          },
        ],
      },
      {
        title: 'Already have an Algorand Wallet? You can import the wallet into MyAlgo.',
        description:
          "You don't have to choose between the two. If you create a wallet via the Algorand Wallet app, you can import the wallet into MyAlgo, vice versa.",
        link: '/articles/import-wallet-into-myalgo',
        internal: true,
      },
    ],
  },
  {
    title: 'Funding a wallet',
    description: "Before you can buy, sell, and hodl Algorand NFTs, you're gonna need some algos. Here is what you need to know to fund your wallet.",
    showInTableOfContents: true,
    links: [
      {
        title: 'Buy Algorand right from your Pera Algo Wallet using Moonpay',
        description: '"MoonPay offers a fast and easy way to buy Algorand with credit card."',
        link: 'https://www.moonpay.com/buy/algo',
        logos: [
          {
            src: 'moonpay.svg',
            alt: 'MoonPay',
            link: 'https://www.moonpay.com/buy/algo',
            heightClass: 'h-8',
          },
        ],
      },
      {
        title: 'Withdrawing algos from an exchange to your Pera Algo Wallet account',
        description:
          '"On the Algorand Blockchain, algos are the native currency that are needed to send transactions, add assets, and interact with applications. By the end of this tutorial, you\'ll have successfully transferred algos from an exchange to your Pera Algo Wallet."',
        link: 'https://support.perawallet.app/en/article/transacting-with-an-exchange-16zmdkn',
        logos: [
          {
            src: 'coinbase.svg',
            alt: 'Coinbase - Buy and sell Algorand',
            link: 'https://www.coinbase.com/price/algorand',
            heightClass: 'h-8',
          },
        ],
      },
      {
        title: 'How to buy Algorand on Kraken',
        description:
          '"Algorand differentiates its technology through design choices that make it easier for users to help operate the network and be awarded the new ALGO cryptocurrency it creates."',
        link: 'https://www.kraken.com/en-us/learn/buy-algorand-algo',
        logos: [
          {
            src: 'kraken.svg',
            alt: 'Kraken - Buy and sell Algorand',
            link: 'https://www.kraken.com/en-us/prices/algo-algorand-price-chart/usd-us-dollar?interval=1m',
            heightClass: 'h-6',
          },
        ],
      },
      {
        title: 'Buy and transfer Algorand to your Ledger hardware wallet',
        description: 'This will explain how to use the Ledger hardware wallet to securely store your Algorand and NFTs.',
        link: 'https://www.ledger.com/buy/algorand',
        logos: [
          {
            src: 'ledger.svg',
            alt: 'Ledger - Buy and sell Algorand',
            link: 'https://www.ledger.com',
            heightClass: 'h-10',
          },
        ],
      },
    ],
  },
  {
    title: 'Minting/Creating an NFT',
    description:
      'There are a few options to create your own NFTs on the Algorand blockchain. Most sites that allow you to buy and sell NFTs will also allow you to create your own. If you have a lot of NFTs to mint and you know the Python programming language, you can batch create your NFTs.',
    showInTableOfContents: true,
    links: [
      {
        title: 'Minting an NFT on Rand Gallery',
        description: "Rand Gallery is a great place to mint your NFTs. The website has a nice UI and it's very fast.",
        link: '/articles/how-to-mint-nfts-on-rand-gallery',
        internal: true,
      },
      {
        title: 'Minting an NFT on AB2 Gallery',
        description: 'All you need to know to mint an NFT on AB2 Gallery.',
        link: '/articles/how-to-mint-nfts-on-ab2-gallery',
        internal: true,
      },
      {
        title: 'Batch minting NFTS using AlgoNFTS.art',
        description:
          'AlgoNFTS.art makes it super easy to generate thousands of unique NFTs that include ARC69 metadata. Check out their Help/About page to learn more.',
        link: 'https://algonfts.art/',
      },
      {
        title: 'Batch minting NFTs following the ARC69 metadata standard using Python',
        description:
          '"This guide will walk you through batch minting NFTs on Algorand following ARC69 using Python. No prior experience with Python is assumed, but you will be required to make some changes to the Python script to suit your requirements."',
        link: 'https://github.com/algokittens/algoNFTs/tree/master/batch_mint_arc69',
      },
      {
        title: 'Batch mint NFTs using Node.js',
        description: 'Mint Algorand NFTs using Node.js following the ARC69 specification',
        link: 'https://github.com/algofishexe/minter',
      },
    ],
  },
  {
    title: 'Buying an NFT',
    description: "Support artists and NFT collections and invest your algos by buying NFTs on the Algorand blockchain. Here's how.",
    showInTableOfContents: true,
    links: [
      {
        title: 'Finding NFTs to Buy',
        description:
          "Have some algos and want to buy/invest in some NFTs? Here's where to go to find new and established NFT collections on the Algorand blockchain.",
        link: '/articles/finding-nfts-to-buy',
        internal: true,
      },
      {
        title: 'Buying an NFT on Rand Gallery',
        description: 'This guide will walk you through how to buy NFTs on Rand Gallery.',
        link: '/articles/how-to-buy-nfts-on-rand-gallery',
        internal: true,
      },
      {
        title: 'Buying an NFT on ALGOxNFT',
        description: 'Here is how to buy an NFT on ALGOxNFT.',
        link: '/articles/how-to-buy-nfts-on-algoxnft',
        internal: true,
      },
      {
        title: 'Buying an NFT on AB2 Gallery',
        description: 'All you need to know to buy an NFT on AB2 Gallery.',
        link: '/articles/how-to-buy-nfts-on-ab2-gallery',
        internal: true,
      },
    ],
  },

  {
    title: 'Selling an NFT',
    description:
      "There are a few ways to sell Algorand NFTs. You can sell them directly on sites like AB2 Gallery, sell them in shuffles on Rand Gallery, or auction off your NFTS on AlgoxNFT. Here's how.",
    showInTableOfContents: true,
    links: [
      {
        title: 'Selling an NFT on AB2 Gallery',
        description: 'All you need to know to sell an NFT on AB2 Gallery.',
        link: '/articles/how-to-sell-nfts-on-ab2-gallery',
        internal: true,
      },
      {
        title: 'Open Source Smart Contract for Selling NFTs by Rand Gallery',
        description:
          'Rand Gallery has open sourced its upcoming smart contracts that utilize PyTeal. This smart contract could be used to sell an NFT using an escrow account.',
        link: 'https://github.com/RandGallery/smart-contracts',
      },
    ],
  },
  {
    title: 'Burning an NFT',
    description: 'Burning an NFT means to destroy it.',
    showInTableOfContents: true,
    links: [
      {
        title: 'Burning an NFT on Algodesk',
        description: 'Algodesk is a website you can use to create, manage, and burn Algorand NFTs.',
        link: '/articles/how-to-burn-nfts-on-algodesk',
        internal: true,
      },
    ],
  },
  {
    title: 'Adding ARC69 metadata to my Algorand NFTs',
    description: 'The ARC69 specification allows you to add attributes/traits to your NFTs.',
    showInTableOfContents: false,
    links: [
      {
        title: 'All you need to know about ARC69',
        description: 'Check out this handy website to learn everything you need to know about adding and updating ARC6 data on your Algorand NFTs.',
        link: 'https://arc69.com',
      },
    ],
  },
  {
    title: 'Websites to explore, buy, sell, and mint Algorand NFTs',
    description: '',
    showInTableOfContents: false,
    links: [
      {
        title: 'NFT Explorer',
        description:
          'NFT Explorer is tracking the sales and prices of NFTs across the Algorand blockchain, while also providing the best place for artists to display their collection"',
        link: 'https://nftexplorer.app',
        logos: [],
      },
      {
        title: 'Rand Gallery',
        description: '"Enjoy sustainable Algorand NFTs! 🪴🖼️🌱"',
        link: 'https://www.randgallery.com',
        logos: [],
      },
      {
        title: 'ALGOxNFT',
        description: 'ALGOxNFT offers auctions, instant shuffles, buy and sell, and more.',
        link: 'https://algoxnft.com',
      },
      {
        title: 'AB2 Gallery',
        description: '"AB2 Gallery is a decentralized marketplace for crypto art assets secured on the Algorand blockchain."',
        link: 'https://ab2.gallery',
        logos: [],
      },
      {
        title: 'algogems',
        description:
          '"Algogems is the open NFT marketplace for the Algorand blockchain. It allows artists to mint and auction their NFT for free, and provides a trading platform for NFT collectors."',
        link: 'https://algogems.io',
        logos: [],
      },
      {
        title: 'Dartroom',
        description: '"Sustainable digital art marketplace."',
        link: 'https://dartroom.xyz',
      },
      {
        title: 'AlgoNFTS.art - Algorand NFT Generator',
        description: 'Automatically generate NFTs on the Algorand blockchain from layer images. Uses RNG and creates ARC69 trait metadata.',
        link: 'https://algonfts.art',
      },
    ],
  },
  {
    title: 'Other useful links',
    description: '',
    showInTableOfContents: false,
    links: [
      {
        title: '#algofam on Twitter',
        description:
          'If you want to really get into the community of Algorand NFT artists and hodlers, Twitter is where you need to be. #algofam is a great place to start! The #algofam is one of the best NFT communities on the internet. It is full of friendly and welcoming people who have a passion for Algorand, art, and NFTs.',
        link: 'https://twitter.com/search?q=%23algofam',
        logos: [],
      },
      {
        title: 'Awesome Algorand',
        description: 'An awesome list about everything related to the Algorand Blockchain',
        link: 'https://awesomealgo.com/',
      },
      {
        title: '/r/AlgoNFTMarketplace',
        description: '"This space is meant to discuss and learn about NFTs on Algorand."',
        link: 'https://www.reddit.com/r/AlgoNFTMarketplace',
        logos: [],
      },
      {
        title: 'Algonaut’s guide to the universe',
        description: 'A quick and thorough rundown of the Algorand NFT universe.',
        link: 'https://www.reddit.com/r/Algonauts/comments/n9kg1d/algonauts_guide_to_the_universe',
        logos: [],
      },
    ],
  },
];

export default sections;

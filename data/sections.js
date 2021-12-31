const sections = [
  {
    title: 'Creating a wallet',
    description:
      'Before anything else, you need to create a wallet. This is where you will store your algos and NFTs.',
    showInTableOfContents: true,
    links: [
      {
        title: 'Create a New Account on the Algorand Wallet app',
        description:
          'Learn how to create a new account on the Algorand Wallet app. You can get the app for iOS and Android.',
        link: 'https://algorandwallet.com/support/getting-started/creating-a-new-account',
        logos: [
          {
            src: 'app-store.svg',
            alt: 'Official Algorand Wallet on the App Store',
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
        title: 'Setup My Algo Wallet',
        description:
          '"Here’s a handy guide to setting up your My Algo Wallet."',
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
        title: 'Algorand Wallet or MyAlgo Wallet?',
        description:
          "You don't have to choose between the two. If you create a wallet via the Algorand Wallet app, you can import the wallet into MyAlgo, vice versa.",
        link: 'https://www.reddit.com/r/AlgorandOfficial/comments/onr1lh/algorand_wallet_or_myalgo_wallet',
      },
    ],
  },
  {
    title: 'Funding a wallet',
    description:
      "Before you can buy, sell, and hodl Algorand NFTs, you're gonna need some algos. Here is what you need to know to fund your wallet.",
    showInTableOfContents: true,
    links: [
      {
        title:
          'Transferring Algos from an Exchange to Algorand Wallet on Coinbase',
        description:
          '"On the Algorand Blockchain, Algos are the native currency that are needed to send transactions, add assets, and interact with applications. By the end of this tutorial, you’ll have successfully transferred Algos from an exchange to your Algorand Wallet."',
        link: 'https://algorandwallet.com/support/getting-started/transfer-algos-from-exchange-to-algowallet',
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
        description:
          'This will explain how to use the Ledger hardware wallet to securely store your Algorand and NFTs.',
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
    title: 'Buying an NFT',
    description:
      "Support artists and NFT collections and invest your algos by buying NFTs on the Algorand blockchain. Here's how.",
    showInTableOfContents: true,
    links: [
      {
        title: 'Buying an NFT on AB2 Gallery',
        description: 'All you need to know to buy an NFT on AB2 Gallery.',
        link: '/how-to-buy-nfts-on-ab2-gallery',
        internal: true,
      },
      // {
      //   title: 'Buying an NFT on Rand Gallery',
      //   description: 'All you need to know to buy an NFT on Rand Gallery.',
      //   link: '/how-to-buy-nfts-on-rand-gallery',
      //   internal: true,
      // },
    ],
  },
  {
    title: 'Minting an NFT',
    description:
      'Learn how to create your own NFTs on the Algorand blockchain.',
    showInTableOfContents: true,
    links: [
      {
        title: 'Minting an NFT on AB2 Gallery',
        description: 'All you need to know to mint an NFT on AB2 Gallery.',
        link: '/how-to-mint-nfts-on-ab2-gallery',
        internal: true,
      },
      // {
      //   title: 'Minting an NFT on Rand Gallery',
      //   description: 'All you need to know to mint an NFT on Rand Gallery.',
      //   link: '/how-to-mint-nfts-on-rand-gallery',
      //   internal: true,
      // },
    ],
  },
  {
    title: 'Selling an NFT',
    description:
      'Selling an NFT is a great way to earn algos. Below is a list of links of resources that will help you sell an NFT on the Algorand blockchain.',
    showInTableOfContents: true,
    links: [
      {
        title: 'Selling an NFT on AB2 Gallery',
        description: 'All you need to know to sell an NFT on AB2 Gallery.',
        link: '/how-to-sell-nfts-on-ab2-gallery',
        internal: true,
      },
      // {
      //   title: 'Selling an NFT on Rand Gallery',
      //   description: 'All you need to know to sell an NFT on Rand Gallery.',
      //   link: '/how-to-sell-nfts-on-rand-gallery',
      //   internal: true,
      // },
    ],
  },
  {
    title: 'Adding ARC69 data to my Algorand NFTs',
    description:
      'The ARC69 specification allows you to add attributes/traits to your NFTs.',
    showInTableOfContents: false,
    links: [
      {
        title: 'All you need to know about ARC69',
        description:
          'Check out this handy website to learn everything you need to know about adding and updating ARC6 data on your Algorand NFTs.',
        link: 'https://arc69.com',
      },
    ],
  },
  {
    title: 'Websites to buy, sell, and mint Algorand NFTs',
    description: '',
    showInTableOfContents: false,
    links: [
      {
        title: 'AB2 Gallery',
        description:
          '"AB2 Gallery is a decentralized marketplace for crypto art assets secured on the Algorand blockchain."',
        link: 'https://ab2.gallery',
        logos: [],
      },
      {
        title: 'Rand Gallery',
        description: '"Enjoy sustainable Algorand NFTs! 🪴🖼️🌱"',
        link: 'https://www.randgallery.com',
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
        title: 'AlgoxNFT',
        description:
          'AlgoxNFT is an auction house running on Algorand smart contracts',
        link: 'https://algoxnft.com',
      },
    ],
  },
];

export default sections;

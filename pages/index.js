import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const title = 'How to Algo NFT';
  const description =
    'Brief tutorials explaining how to create, buy, and sell NFTs on the Algorand blockchain';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>How to Algo NFT</h1>
        <h2>Coming Soon</h2>
      </main>
    </div>
  );
}

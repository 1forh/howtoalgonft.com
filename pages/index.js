import Head from 'next/head';
import Container from '../components/Container';
import Section from '../components/Section';
import sections from '../data/sections';

export default function Home() {
  const title = 'How to Algo NFT';
  const description =
    'Everything you need to know about how to create, buy, and sell NFTs on the Algorand blockchain.';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container>
          <div className='px-5 lg:px-0'>
            <h2 className='mb-8 text-lg font-bold'>I need help...</h2>
          </div>

          <div className='space-y-14'>
            {sections.map((section, index) => (
              <Section section={section} key={index} />
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
}

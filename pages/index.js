import Helmet from '../components/Helmet';
import Container from '../components/Container';
import Section from '../components/Section';
import sections from '../data/sections';

export default function Home() {
  const title = 'How to Algo NFT';
  const description =
    'Everything you need to know about how to create, buy, and sell NFTs on the Algorand blockchain.';

  return (
    <div>
      <Helmet title={title} description={description} />

      <main>
        <Container>
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

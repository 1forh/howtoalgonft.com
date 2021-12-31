import Helmet from '../components/Helmet';
import Container from '../components/Container';
import Section from '../components/Section';
import sections from '../data/sections';
import TableOfContents from '../components/TableOfContents';

export default function Home() {
  const description =
    'Guides on how to create, buy, and sell NFTs on the Algorand blockchain';

  return (
    <div>
      <Helmet description={description} />

      <main>
        <Container>
          <div className='px-4 mb-8 lg:px-0'>
            <TableOfContents />
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

import Footer from '../_components/Footer';

export const revalidate = 300;

export default async function Home() {
  // const payload = await getPayloadClient();

  return (
    <main>
      How to Algo NFT
      <Footer />
    </main>
  );
}

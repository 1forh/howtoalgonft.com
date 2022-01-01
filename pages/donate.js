import Helmet from '../components/Helmet';
import Container from '../components/Container';
import Section from '../components/Section';
import sections from '../data/sections';

export default function Donate() {
  const title = 'Donate';
  const description =
    'Want to help out? You can donate algos to the address below. Thanks so much!';

  return (
    <div>
      <Helmet title={title} description={description} />

      <main>
        <Container>
          <div className='px-5 prose lg:px-0'>
            <h1 className='sr-only'>{title}</h1>
            <h2>
              Want to help out? You can donate algos to the address below.{' '}
              <br /> Thanks so much! 🙏
            </h2>
            <div>
              <div className='max-w-[250px]'>
                <img
                  src='/uploads/minner-algo-qr-code.png'
                  alt='Minner.Algo QR Code'
                />
              </div>

              <p>
                <code className='!font-normal text-16 break-words'>
                  3Q2VUSSZ7WSAYEHZYZAPHMCKZLNVXC2YRR62K5YA327UOJ3MZJOIAKOLLQ
                </code>
              </p>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

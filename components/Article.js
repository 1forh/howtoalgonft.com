import React from 'react';
import dynamic from 'next/dynamic';
import Helmet from '../components/Helmet';
import Container from '../components/Container';

const ArticleAd = dynamic(() => import('../components/ArticleAd'), {
  ssr: false,
});

function Article({ frontMatter, children }) {
  const { title, summary } = frontMatter;

  return (
    <>
      <Helmet title={title} description={summary} />
      <Container>
        <div className='px-5 prose lg:px-0'>
          <h1>{title}</h1>
          <div>{children}</div>
          <div>
            <ArticleAd />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Article;

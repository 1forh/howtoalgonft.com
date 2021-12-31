import React from 'react';
import Container from '../components/Container';
import dynamic from 'next/dynamic';

const ArticleAd = dynamic(() => import('../components/ArticleAd'), {
  ssr: false,
});

function Article({ frontMatter, children }) {
  const { title } = frontMatter;

  return (
    <Container>
      <div className='px-5 prose lg:px-0'>
        <h1>{title}</h1>
        <div>{children}</div>
        <div>
          <ArticleAd />
        </div>
      </div>
    </Container>
  );
}

export default Article;

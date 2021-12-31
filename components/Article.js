import React from 'react';
import Container from '../components/Container';

function Article({ children, title }) {
  return (
    <Container>
      <div className='px-5 prose lg:px-0'>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </Container>
  );
}

export default Article;

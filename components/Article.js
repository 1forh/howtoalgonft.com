import React from 'react';
import Container from '../components/Container';

function Article({ children, title }) {
  return (
    <Container>
      <div className='!w-full !max-w-full prose'>
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </Container>
  );
}

export default Article;

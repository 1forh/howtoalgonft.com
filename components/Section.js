import React from 'react';
import SectionLink from './SectionLink';

function Section({ section }) {
  const { title, description, links } = section;

  return (
    <div className='space-y-5'>
      <div className='px-5 space-y-2 lg:px-0'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='opacity-50'>{description}</p>
      </div>

      <div className='p-5 divide-y-2 lg:p-8 lg:shadow-lg lg:rounded-lg bg-neutral-800 divide-neutral-700'>
        {links && links.length ? (
          links.map((link, index) => <SectionLink link={link} key={index} />)
        ) : (
          <p>Need to add some articles here.</p>
        )}
      </div>
    </div>
  );
}

export default Section;

import React from 'react';
import SectionLink from './SectionLink';

function Section({ section }) {
  const { title, description, links } = section;

  return (
    <div className='space-y-5 '>
      <div className='space-y-2'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='opacity-50'>{description}</p>
      </div>

      <div className='p-8 divide-y-2 rounded-lg shadow-lg bg-neutral-800 divide-neutral-700'>
        {links.map((link, index) => (
          <SectionLink link={link} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Section;

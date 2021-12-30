import React from 'react';
import sections from '../data/sections';

function TableOfContents() {
  return (
    <div className='pb-8 space-y-3 border-b border-neutral-700'>
      <h2 className='text-lg font-bold'>I need help...</h2>
      <ul className='ml-4 list-disc list-inside'>
        {sections
          .filter((section) => section.showInTableOfContents)
          .map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.title.toLowerCase().replace(/ /g, '-')}`}
                className='font-medium text-green-300 hover:underline'
              >
                {section.title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TableOfContents;

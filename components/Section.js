import React from 'react';

function Section({ section }) {
  const { title, description, links } = section;

  return (
    <div className='space-y-5 '>
      <div className='space-y-2'>
        <h3 className='text-xl font-bold'>{title}</h3>
        <p className='opacity-50'>{description}</p>
      </div>

      <div className='p-8 divide-y-2 rounded-lg shadow-lg bg-neutral-900 divide-neutral-700'>
        {links.map((link, index) => (
          <div key={index} className='pt-6 pb-6 space-y-6 last:pb-0 first:pt-0'>
            <a href={link.link} className='space-y-3 group'>
              <div>
                <h4 className='text-lg font-bold'>{link.title}</h4>
                <p className='text-sm font-medium text-indigo-300 hover:underline'>
                  {link.link}
                </p>
              </div>
              <p className='opacity-60'>{link.description}</p>
            </a>
            <div className='flex items-center space-x-8'>
              {link.logos.map((logo, index) => (
                <div key={index} className='flex justify-center'>
                  <a href={logo.link}>
                    <img src={logo.src} alt={logo.alt} className='h-12' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;

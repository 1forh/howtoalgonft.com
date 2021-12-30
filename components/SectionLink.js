import React from 'react';

function SectionLink({ link }) {
  const formattedLink = link.link.replace('https://', '').replace('www.', '');

  return (
    <div className='pt-6 pb-6 space-y-6 last:pb-0 first:pt-0'>
      <a
        href={link.link}
        className='space-y-3 group'
        target='_blank'
        rel='noreferrer'
      >
        <div>
          <h4 className='text-lg font-bold'>{link.title}</h4>
          <p className='text-sm font-medium text-green-300 hover:underline'>
            {formattedLink}
          </p>
        </div>
        <p className='opacity-60'>{link.description}</p>
      </a>
      {link.logos && link.logos.length && (
        <div className='flex items-center space-x-8'>
          {link.logos.map((logo, index) => (
            <div key={index} className='flex justify-center'>
              <a href={logo.link} target='_blank' rel='noreferrer'>
                <img src={logo.src} alt={logo.alt} className='h-12' />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SectionLink;

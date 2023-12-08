import { Page } from '@/payload-types';
import React from 'react';
import Hero from './sections/Hero';

type Props = {
  sections: Page['sections'];
};

const SectionLoader = ({ sections }: Props) => {
  console.log(sections);
  return (
    <div>
      {(sections || []).map((section, index) => {
        if (section.hero) {
          return <Hero key={section.id} content={section.hero} />;
        }
        return <p key={index}>This component is not supported in code yet.</p>;
      })}
    </div>
  );
};

export default SectionLoader;

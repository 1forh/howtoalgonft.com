import { Page } from '@/payload-types';
import React from 'react';
import Hero from './sections/Hero';
import PhotoCollage from './sections/PhotoCollage';
import Features from './sections/Features';

type Props = {
  blocks: Page['blocks'];
};

const BlocksLoader = ({ blocks }: Props) => {
  return (
    <div>
      {(blocks || []).map((block, index) => {
        if (block.blockType === 'hero') {
          return <Hero key={block.id} content={block} />;
        } else if (block.blockType === 'photoCollage') {
          return <PhotoCollage key={block.id} content={block} />;
        } else if (block.blockType === 'features') {
          return <Features key={block.id} content={block} />;
        }
        return <p key={index}>This component is not supported in code yet.</p>;
      })}
    </div>
  );
};

export default BlocksLoader;

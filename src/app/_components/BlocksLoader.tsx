import { Page } from '@/payload-types';
import Features from './sections/Features';
import Hero from './sections/Hero';
import PhotoCollage from './sections/PhotoCollage';
import PostsList from './sections/PostsList';

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
        } else if (block.blockType === 'postsList') {
          return <PostsList key={block.id} content={block} />;
        }
        return <p key={index}>This component is not supported in code yet.</p>;
      })}
    </div>
  );
};

export default BlocksLoader;

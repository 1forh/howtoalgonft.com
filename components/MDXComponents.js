import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import Image from 'next/image';

export const MDXComponents = {
  Image,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = require(`../components/${layout}`).default;
    return <Layout {...rest} />;
  },
};

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);
  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />;
};

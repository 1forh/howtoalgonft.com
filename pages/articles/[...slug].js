import { MDXLayoutRenderer } from '../../components/MDXComponents';
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from '../../utilities/mdx';

const DEFAULT_LAYOUT = 'Article';

export async function getStaticPaths() {
  const posts = getFiles('articles');
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('articles');
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug.join('/')
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug('articles', params.slug.join('/'));
  return { props: { post, prev, next } };
}

export default function Article({ post, prev, next }) {
  const { mdxSource, toc, frontMatter } = post;

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      toc={toc}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      prev={prev}
      next={next}
    />
  );
}

import { getPostsByCategoryId } from '@/app/_lib/payload';
import { Category } from '@/payload-types';
import ArticlePreview from '../ArticlePreview';
import PageContainer from '../PageContainer';

type Props = {
  content: {
    category?: (string | null) | Category;
    id?: string | null;
    blockName?: string | null;
    blockType: 'postsList';
  };
};

const PostsList = async ({ content }: Props) => {
  const categoryId = (content.category as Category).id;
  const posts = await getPostsByCategoryId(categoryId);

  return (
    <PageContainer>
      <div className='flex flex-col gap-16 max-w-3xl'>
        {posts.map((post) => (
          <ArticlePreview key={post.id} post={post} />
        ))}
      </div>
    </PageContainer>
  );
};

export default PostsList;

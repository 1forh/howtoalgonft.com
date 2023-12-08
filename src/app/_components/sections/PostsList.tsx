import { Category } from '@/payload-types';
import getPayloadClient from '@/payload/payloadClient';
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
  const payload = await getPayloadClient();
  const categoryId = (content.category as Category).id;

  const resp = await payload.find({
    collection: 'posts',
    where: {
      category: {
        equals: categoryId,
      },
    },
  });
  const posts = resp.docs;

  return (
    <PageContainer>
      <div className='flex flex-col gap-16 max-w-2xl'>
        {posts.map((post) => (
          <ArticlePreview key={post.id} post={post} />
        ))}
      </div>
    </PageContainer>
  );
};

export default PostsList;

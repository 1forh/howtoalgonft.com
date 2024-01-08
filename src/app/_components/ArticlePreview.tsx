import { Post } from '@/payload-types';
import ArticleAuthor from './ArticleAuthor';
import { Card } from './Card';

type Props = {
  post: Post;
};

const ArticlePreview = ({ post }: Props) => {
  return (
    <Card as='article'>
      <div className="flex gap-16">
        {typeof post.coverImage === 'object' && (
          <Card.Image src={post.coverImage.url!} alt={post.coverImage.alt} width={post.coverImage.width!} height={post.coverImage.height!} />
        )}
        <div className='flex flex-col justify-center'>
          <Card.Title href={`/posts/${post.slug}`}>{post.title}</Card.Title>
          <Card.Description>{post.excerpt}</Card.Description>
          <Card.Cta>Learn more</Card.Cta>
          <div className="mt-4">
            <ArticleAuthor size="sm" post={post} noLink />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArticlePreview;

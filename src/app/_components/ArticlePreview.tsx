import { Post } from '@/payload-types';
import { Card } from './Card';

type Props = {
  post: Post;
};

const ArticlePreview = ({ post }: Props) => {
  return (
    <Card as='article'>
      <Card.Title href={`/posts/${post.slug}`}>{post.title}</Card.Title>
      <Card.Description>{post.excerpt}</Card.Description>
      <Card.Cta>Learn more</Card.Cta>
    </Card>
  );
};

export default ArticlePreview;

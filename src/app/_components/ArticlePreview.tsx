import React from 'react';
import { Card } from './Card';
import { Post } from '@/payload-types';
import { formatDate } from '../_lib/helpers';

type Props = {
  post: Post;
};

const ArticlePreview = ({ post }: Props) => {
  return (
    <Card as='article'>
      <Card.Title href={`/articles/${post.slug}`}>{post.title}</Card.Title>
      <Card.Eyebrow as='time' dateTime={post.createdAt} decorate>
        {formatDate(post.createdAt)}
      </Card.Eyebrow>
      <Card.Description>{post.excerpt}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
};

export default ArticlePreview;

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
      <Card.Title href={`/posts/${post.slug}`}>{post.title}</Card.Title>
      <Card.Description>{post.excerpt}</Card.Description>
      <Card.Cta>Learn more</Card.Cta>
    </Card>
  );
};

export default ArticlePreview;

import React from 'react'
import { Card } from './Card'
import { Post } from '@/payload-types'

type Props = {
  post: Post;
}

const ArticlePreview = ({ post }: Props) => {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${post.id}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

export default ArticlePreview
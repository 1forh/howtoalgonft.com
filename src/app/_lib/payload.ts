import getPayloadClient from '@/payload/payloadClient';
import { formatMetadata } from './helpers';

const isPublished = {
  status: {
    equals: 'published',
  },
};

export const getPages = async () => {
  const payload = await getPayloadClient();
  const resp = await payload.find({
    collection: 'pages',
    where: {
      ...isPublished,
    },
  });
  const pages = resp.docs;
  return pages;
};

export const getPage = async (slug: string) => {
  const payload = await getPayloadClient();

  const resp = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
      ...isPublished,
    },
  });

  const page = resp.docs[0];
  if (!page) {
    return null;
  }

  return {
    ...page,
    meta: formatMetadata(page.meta),
  };
};

export const getPost = async (slug: string) => {
  const payload = await getPayloadClient();

  const resp = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
      ...isPublished,
    },
  });

  const post = resp.docs[0];
  if (!post) {
    return null;
  }

  return {
    ...post,
    meta: formatMetadata(post.meta),
  };
};

export const getPosts = async () => {
  const payload = await getPayloadClient();
  const resp = await payload.find({
    collection: 'posts',
    where: {
      ...isPublished,
    },
  });
  const posts = resp.docs;
  return posts;
};

export const getPostsByCategoryId = async (categoryId: string) => {
  const payload = await getPayloadClient();
  const resp = await payload.find({
    collection: 'posts',
    where: {
      category: {
        equals: categoryId,
      },
      ...isPublished,
    },
  });
  const posts = resp.docs;
  return posts;
};

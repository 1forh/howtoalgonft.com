import { SITE_NAME } from '@/constants';
import { Page } from '@/payload-types';
import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  return dayjs(date).format('MMMM D, YYYY');
};

export const formatMetadata = (metadata: Page['meta']) => {
  if (!metadata)
    return {
      title: SITE_NAME,
    };

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      // @ts-ignore
      images: metadata.image?.url,
    },
  };
};

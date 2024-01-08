import { Post } from '@/payload-types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icon from './Icon';
import clsx from 'clsx';

type Props = {
  post: Post;
  size?: 'sm' | 'md';
  noLink?: boolean;
};

const ArticleAuthor = ({ post, size = 'md', noLink }: Props) => {
  if (typeof post.createdBy !== 'object') return;

  return (
    <div className='relative flex items-center gap-x-4'>
      {typeof post.createdBy?.profileImage === 'object' && (
        <Image
          src={post.createdBy?.profileImage?.url!}
          alt={post.createdBy?.profileImage?.alt!}
          width={500}
          height={500}
          className={clsx('rounded-full bg-gray-50', {
            'h-14 w-14': size === 'md',
            'h-10 w-10': size === 'sm',
          })}
        />
      )}

      <div className='flex flex-col gap-1'>
        <p
          className={clsx('font-semibold text-white', {
            'text-lg': size === 'md',
            'text-base': size === 'sm',
          })}
        >
          <span className='sr-only'>Written by</span>
          {post.createdBy?.name}
        </p>
        <div className='text-white/70'>
          {noLink === true ? (
            <div className='flex items-center gap-1'>
              <div className="flex-shrink-0">
                <Icon name='twitter' className="w-4 h-4" />
              </div>
              <span>{post.createdBy?.twitter}</span>
            </div>
          ) : (
            <Link href={`https://twitter.com/${post.createdBy?.twitter}`} className='flex items-center gap-1'>
              <span className='absolute inset-0' />
              <div className="flex-shrink-0">
                <Icon name='twitter' className="w-4 h-4" />
              </div>
              <span>{post.createdBy?.twitter}</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleAuthor;

'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';

import { Post } from '@/payload-types';
import { formatDate } from '../_lib/helpers';
import PageContainer from './PageContainer';
import { Prose } from './Prose';
import { AppContext } from './Providers';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox='0 0 16 16' fill='none' aria-hidden='true' {...props}>
      <path d='M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}

export function ArticleLayout({ post }: { post: Post }) {
  let router = useRouter();
  let { previousPathname } = useContext(AppContext);

  return (
    <PageContainer className='mt-16 lg:mt-32'>
      <div className='xl:relative'>
        <div className='mx-auto max-w-2xl'>
          {previousPathname && (
            <button
              type='button'
              onClick={() => router.back()}
              aria-label='Go back to previous page'
              className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 transition dark:border dark:border-gray-700/50 dark:bg-gray-800 dark:ring-0 dark:ring-white/10 dark:hover:border-gray-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 xl:left-0 mt-1'
            >
              <ArrowLeftIcon className='h-4 w-4 stroke-gray-500 transition group-hover:stroke-gray-700 dark:stroke-gray-500 dark:group-hover:stroke-gray-400' />
            </button>
          )}
          <article>
            <header className='flex flex-col'>
              <h1 className='text-4xl font-bold max-w-lg tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl !leading-[1.1]'>{post.title}</h1>

              {typeof post.createdBy === 'object' && (
                <div className='relative mt-8 flex items-center gap-x-4'>
                  {typeof post.createdBy?.profileImage === 'object' && (
                    <Image
                      src={post.createdBy?.profileImage?.url!}
                      alt={post.createdBy?.profileImage?.alt!}
                      width={500}
                      height={500}
                      className='h-14 w-14 rounded-full bg-gray-50'
                    />
                  )}

                  <div className='flex flex-col gap-1'>
                    <p className='text-lg font-semibold text-white'>
                      <span className='absolute inset-0' />
                      <span className="sr-only">Written by</span>
                      {post.createdBy?.name}
                    </p>
                    <p className='text-white/70'>
                      <Link href={`https://x.com/${post.createdBy?.twitter}`} className='flex items-center gap-1'>
                        <Icon name="twitter" />
                        <span>{post.createdBy?.twitter}</span>
                      </Link>
                    </p>
                  </div>
                </div>
              )}
            </header>

            <Prose className='mt-8' data-mdx-content content={post.body} />
          </article>
        </div>
      </div>
    </PageContainer>
  );
}

'use client';

import { DateFormatter } from '@/components/common';
import { Post } from '@/interfaces/post';
import Link from 'next/link';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  posts: Post[];
};

export const PostList = ({ posts }: Props) => {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [currentTag, setCurrentTag] = useState<string>('');

  const tags = [...new Set(posts.flatMap(post => post.tags))];

  const filterByTag = (tag: string) => {
    if (tag === currentTag) {
      setCurrentTag('');
      setFilteredPosts(posts);
      return;
    }

    setCurrentTag(tag);
    setFilteredPosts(posts.filter(post => post.tags.includes(tag)));
  };

  return (
    <div className="flex flex-col  justify-center items-start gap-4 w-full max-w-7xl h-full pt-4">
      <ul className="flex items-start gap-2">
        {tags.map(tag => (
          <li
            key={tag}
            className={twMerge(
              'px-2 border-y bg-white text-sm tracking-tight list-none cursor-pointer',
              tag === currentTag && 'bg-zinc-950 text-white',
            )}
            onClick={() => filterByTag(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="flex grow w-full">
        <div className="flex flex-col items-end gap-1 w-full">
          <p>[ {filteredPosts.length.toString().padStart(2, '0')} ]</p>

          <div className="flex flex-col justify-center w-full animate-bgColorShift">
            {filteredPosts.map(({ title, slug, date }) => (
              <Link
                href={`/posts/${slug}`}
                key={slug}
                className="flex justify-between items-center gap-2 shrink-0 relative w-full px-4 py-2 border border-x-0 not-last:border-b-0 bg-white hover:bg-transparent cursor-pointer"
                aria-label={`Go to ${slug}: ${title}`}
              >
                <div className="flex items-start w-full h-full">
                  <span className="text-wrap font-semibold text-lg sm:text-xl text-zinc-800 tracking-tighter">
                    {title}
                  </span>
                </div>

                <DateFormatter dateString={date} className="text-sm" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

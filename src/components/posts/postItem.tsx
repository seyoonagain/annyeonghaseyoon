import { DateFormatter } from '@/components/common';
import { Post } from '@/interfaces/post';
import { isMultipleOf } from '@/utils/isMultipleOf';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = {
  post: Post;
  index: number;
  totalPosts: number;
};

export const PostItem = ({ post: { title, slug, date, tags }, index, totalPosts }: Props) => {
  const isLast = totalPosts - (index + 1) === 0;
  const isSecondLast = totalPosts - (index + 1) === 1;
  const isThirdLast = totalPosts - (index + 1) === 2;

  return (
    <li
      className={twMerge(
        'relative h-14 sm:h-40 lg:h-60 p-2 border border-b-0 bg-white hover:bg-transparent cursor-pointer',
        index % 2 && 'sm:border-l-0 lg:border-l',
        index % 3 && 'lg:border-l-0',
        isLast && 'border-b',
        isSecondLast && isMultipleOf(2, totalPosts) && 'sm:border-b',
        isSecondLast && isMultipleOf(3, totalPosts) && 'lg:border-b',
        isThirdLast && isMultipleOf(3, totalPosts) && 'lg:border-b',
        isSecondLast && totalPosts % 3 === 2 && 'lg:border-b',
        isSecondLast && totalPosts % 3 === 1 && 'lg:border-b-0',
      )}
    >
      <Link key={slug} href={`/posts/${slug}`} aria-label={`Go to ${slug}: ${title}`}>
        <div className="flex justify-between items-end h-full">
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 w-full h-full">
            <div className="flex items-center sm:items-end">
              <p className="hidden sm:block text-xs text-vertical">/{slug}</p>
              <DateFormatter
                dateString={date}
                className="sm:absolute sm:bottom-2 sm:right-2 text-xs"
              />
            </div>

            <div className="flex flex-row sm:flex-col justify-between sm:justify-start gap-1 w-full">
              <h2 className="text-xl lg:text-2xl line-clamp-1 sm:line-clamp-2 lg:line-clamp-3 tracking-tighter">
                {title}
              </h2>

              <ul className="hidden sm:block content-end text-xs text-right sm:text-left">
                {tags.map(tag => (
                  <li key={tag}>#{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

'use client';

import { TocItem } from '@/lib/extractToc';
import { twMerge } from 'tailwind-merge';

type Props = {
  tocItems: TocItem[];
};

export const Toc = ({ tocItems }: Props) => {
  return (
    <nav className="static lg:fixed lg:top-24 lg:right-8 z-20 w-fit p-2 border bg-zinc-100">
      <ol>
        {tocItems.map(({ text, id, level }) => (
          <li
            key={id}
            className={twMerge(
              'flex items-center gap-2 relative list-none',
              level === 2 && 'text-sm md:text-base',
              level !== 2 && 'text-xs md:text-sm',
            )}
          >
            <a
              href={`#${id}`}
              className={twMerge(
                'leading-6 sm:leading-7',
                level === 3 && 'pl-3',
                level === 4 && 'pl-6',
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

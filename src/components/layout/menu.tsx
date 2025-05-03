'use client';

import { MENU } from '@/lib/constants';
import { usePathname, useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-start absolute top-2 left-2">
      {MENU.filter(({ path }) => path !== pathname).map(({ option, path }) => (
        <button
          key={option}
          onClick={() => router.push(path)}
          className={twMerge(
            'w-8 sm:w-12 text-3xl sm:text-5xl text-vertical font-manrope font-thin tracking-tighter',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

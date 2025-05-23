'use client';

import { MENU } from '@/lib/constants';
import { usePathname, useRouter } from 'next/navigation';

export const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex items-start absolute top-2 left-2">
      {MENU.filter(({ path }) => path !== pathname).map(({ title, path }) => (
        <button
          key={title}
          onClick={() => router.push(path)}
          className="w-8 sm:w-12 text-3xl sm:text-5xl text-vertical font-thin tracking-tighter"
          aria-label={`Got to ${title} page`}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

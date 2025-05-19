'use client';

import { useParams, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from '@/components/layout/menu';
import { MENU } from '@/lib/constants';
import { hasO, removeFirstO } from '@/utils/checkO';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname();
  const slug = useParams().slug as string;

  const currentMenu = slug ?? MENU.find(({ path }) => path === pathname)?.title ?? 'Not Found';

  const isOnDetailPage = (menu: string) => pathname.includes(menu) && slug;

  return (
    <header className={twMerge('shrink-0 w-full h-36 sm:h-56 select-none', slug && 'h-24 sm:h-24')}>
      {currentMenu !== 'Not Found' && !slug && <Menu />}
      {slug && (
        <Link
          href={pathname.includes('projects') ? '/projects' : '/posts'}
          className="absolute top-0 left-2 text-4xl font-extralight"
        >
          &lt;
        </Link>
      )}

      <h1
        className={twMerge(
          'flex fixed -top-2 sm:top-0 right-2 z-50 text-[56px] sm:text-7xl font-light tracking-tighter',
          isOnDetailPage('projects/') &&
            'absolute sm:-rotate-z-6 -translate-y-2 sm:translate-y-4 transition ease-in-out',
          isOnDetailPage('projects/') && slug.length > 8 && 'lg:rotate-z-0 lg:translate-y-0',
          isOnDetailPage('projects/') &&
            slug.length > 12 &&
            'text-5xl sm:text-6xl lg:text-7xl top-2 md:top-0 lg:-rotate-z-6 lg:translate-y-4 xl:rotate-z-0 xl:translate-y-0',
          isOnDetailPage('posts/') && 'hidden',
        )}
      >
        <span>{removeFirstO(currentMenu)[0]}</span>
        {hasO(currentMenu) && (
          <>
            <motion.span
              className={`z-10 text-white stroke-light -translate-x-0.5`}
              animate={{
                rotateX: [0, 5, -5, 0],
                rotateY: [0, 200, -200, 0],
                rotateZ: [0, 10, -10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              o
            </motion.span>
            <span className="-translate-x-1.5">{removeFirstO(currentMenu)[1]}</span>
          </>
        )}
      </h1>
    </header>
  );
};

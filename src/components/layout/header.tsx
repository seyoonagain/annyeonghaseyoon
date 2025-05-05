'use client';

import { useParams, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from '@/components/layout/menu';
import { MENU } from '@/lib/constants';
import useIsInit from '@/hooks/useIsInit';
import { removeFirstO } from '@/utils/removeFirstO';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';

export const Header = () => {
  const { isInit } = useIsInit();
  const pathname = usePathname();
  const slug = useParams().slug as string;

  if (!isInit) return null;

  const currentMenu = slug ?? MENU.find(({ path }) => path === pathname)?.option ?? 'Not Found';

  return (
    <header
      className={twMerge('fixed top-0 z-50 w-full h-20 sm:h-24 select-none', slug && 'absolute')}
    >
      {currentMenu !== 'Not Found' && !slug && <Menu />}
      {slug && (
        <Link
          href={pathname.includes('projects') ? '/portfolio' : '/blog'}
          className="absolute top-2 sm:top-0 left-2 font-manrope text-4xl font-extralight"
        >
          &lt;
        </Link>
      )}

      <h1 className="flex absolute top-0 right-2 text-[56px] sm:text-7xl font-manrope font-light tracking-tighter">
        <span>{removeFirstO(currentMenu)[0]}</span>
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
      </h1>
    </header>
  );
};

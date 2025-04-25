'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu } from '@/components/layout/menu';
import { MENU } from '@/lib/constants';
import useIsInit from '@/hooks/useIsInit';
import { hasNoHeader } from '@/utils/hasNoHeader';

export const Header = () => {
  const { isInit } = useIsInit();
  const pathname = usePathname();

  if (!isInit || hasNoHeader(pathname)) return null;

  const currentMenu = MENU.find(({ path }) => path === pathname)?.option ?? 'Not Found';

  const removeFirstO = (string: string) => [
    string.slice(0, string.indexOf('o')),
    string.slice(string.indexOf('o') + 1),
  ];

  return (
    <header className="fixed top-0 z-50 w-full h-20 sm:h-24 select-none">
      {currentMenu !== 'Not Found' && <Menu />}

      <h1 className="flex absolute top-2 right-2 text-6xl sm:text-7xl font-manrope font-light tracking-tighter">
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

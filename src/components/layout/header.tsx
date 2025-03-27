'use client';

import { usePathname } from 'next/navigation';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { MENUS } from '@/lib/constants';
import { Menu } from '@/components/common';

const TITLE_STYLE = 'w-28 font-light text-2xl italic tracking-tighter';

export const Header = () => {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <header className="flex items-center gap-8 fixed top-0 z-50 w-full h-14 px-2 border-b bg-yellow-200 text-zinc-950">
      <Link href="/home" className="hover:underline">
        {pathname === '/home' && (
          <TypeAnimation
            sequence={['', 500, '안녕하', 300, '안녕하세윤.']}
            className={TITLE_STYLE}
            wrapper="p"
            speed={10}
            repeat={0}
          />
        )}
        {pathname !== '/home' && <p className={TITLE_STYLE}>안녕하세윤.</p>}
      </Link>

      <div className="flex items-center gap-4">
        {MENUS.map(menu => (
          <Menu key={menu.title} menu={menu} />
        ))}
      </div>
    </header>
  );
};

'use client';

import { usePathname } from 'next/navigation';
import { TypeAnimation } from 'react-type-animation';

export const Header = () => {
  const pathname = usePathname();

  if (pathname === '/') return null;

  return (
    <header className="flex items-center fixed top-0 z-50 w-full h-14 px-2 border-b bg-yellow-200 text-zinc-950">
      <TypeAnimation
        sequence={['', 1000, 'Home.']}
        className="font-light text-2xl italic tracking-tighter"
        wrapper="span"
        speed={20}
        repeat={0}
        cursor={false}
      />
    </header>
  );
};

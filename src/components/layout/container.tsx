'use client';

import { hasNoHeader } from '@/utils/hasNoHeader';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={twMerge(
        'flex justify-center items-center w-full h-full px-4',
        hasNoHeader(pathname) ? 'pt-4' : 'pt-20 sm:pt-24',
        className,
      )}
    >
      {children}
    </div>
  );
};

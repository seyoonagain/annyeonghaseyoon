'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        'flex justify-center items-center w-full h-full px-4 pt-4 pb-24',
        className,
      )}
    >
      {children}
    </div>
  );
};

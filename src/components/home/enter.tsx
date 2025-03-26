'use client';

import { useRouter } from 'next/navigation';

export const Enter = () => {
  const router = useRouter();

  const handleClick = () => router.push('/home');

  return (
    <button
      type="button"
      className="px-2 border bg-blue-500 text-white cursor-pointer drop-shadow-2 active:drop-shadow-px active:translate-x-px active:translate-y-px"
      onClick={handleClick}
      aria-label="enter the blog"
    >
      enter.
    </button>
  );
};

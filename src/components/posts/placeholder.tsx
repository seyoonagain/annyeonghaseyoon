import { isMultipleOf } from '@/utils/isMultipleOf';
import { twMerge } from 'tailwind-merge';

type Props = {
  totalPosts: number;
  divisor: number;
  className: string;
};

export const Placeholder = ({ totalPosts, divisor, className }: Props) => {
  const placeholderItems: undefined[] = Array.from({ length: divisor - (totalPosts % divisor) });

  return (
    <>
      {!isMultipleOf(divisor, totalPosts) &&
        placeholderItems.map((_, index) => (
          <li
            key={`multiple of ${divisor} - ${index}`}
            className={twMerge('hidden border border-l-0 bg-zinc-100', className)}
          ></li>
        ))}
    </>
  );
};

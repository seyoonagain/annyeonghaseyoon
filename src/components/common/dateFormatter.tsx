import { format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

type Props = {
  dateString: string;
  className?: string;
};

export const DateFormatter = ({ dateString, className }: Props) => {
  return (
    <time
      className={twMerge('font-manrope text-sm tracking-tight', className)}
      dateTime={dateString}
    >
      {format(dateString, 'yyyy.LL.dd')}
    </time>
  );
};

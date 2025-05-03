import { format } from 'date-fns';

type Props = {
  dateString: string;
};

export const DateFormatter = ({ dateString }: Props) => {
  return (
    <time className="font-manrope text-sm tracking-tight" dateTime={dateString}>
      {format(dateString, 'yyyy.LL.dd')}
    </time>
  );
};

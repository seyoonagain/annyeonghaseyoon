import { Comment, NotReady } from '@/components/common';

const Guestbook = () => {
  return (
    <div className="w-full max-w-5xl">
      <Comment loading="eager" reactionsEnabled="0" />
    </div>
  );
};

export default Guestbook;

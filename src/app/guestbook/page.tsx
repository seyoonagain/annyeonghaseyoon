'use client';

import { Comment } from '@/components/common';
import { motion } from 'framer-motion';

const Guestbook = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-5xl z-50">
      <div className="flex flex-col items-start gap-4 relative">
        <h2 className="content-center font-light text-5xl sm:text-6xl md:text-7xl tracking-tighter">
          Seyoonagain{'\xa0\xa0'}
          <motion.span
            animate={{ rotate: [0, 15, -10, 10, -7, 7, -2, 0] }}
            transition={{
              duration: 2.7,
              repeat: Infinity,
              repeatDelay: 1.3,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            👋🏼
          </motion.span>
        </h2>
        <p className="text-sm leading-5 tracking-tight">
          방문해주셔서 감사합니다.
          <br />
          흔적을 남겨주세요!
        </p>
      </div>
      <Comment loading="eager" reactionsEnabled="0" />
    </div>
  );
};

export default Guestbook;

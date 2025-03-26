'use client';

import { motion } from 'framer-motion';

export const Title = () => {
  return (
    <motion.div
      animate={{ y: [0, 20, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut',
      }}
      className="cursor-default"
    >
      <div className="flex flex-col items-center tracking-tightest-ko">
        <span className="text-3xl font-light text-white stroke">프론트엔드 개발자</span>
        <div className="flex items-center text-7xl font-medium">
          <span>정</span>
          <div className="flex items-center relative w-40 h-full">
            <motion.span
              className="absolute left-0 font-galmuri7 text-lime-300 stroke"
              style={{ perspective: '600px' }}
              animate={{
                rotateX: [0, 10, -10, 0],
                rotateY: [0, 200, -200, 0],
                rotateZ: [0, 10, -20, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              ㅅ
            </motion.span>
            <span className="absolute right-0">ㅔ윤</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

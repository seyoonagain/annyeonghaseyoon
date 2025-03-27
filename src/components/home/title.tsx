'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Title = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const maxRotation = 30;
      const newRotateY = ((clientX - centerX) / centerX) * maxRotation;
      const newRotateX = ((clientY - centerY - 65) / centerY) * -maxRotation;

      const limitedRotateX = Math.max(-maxRotation, Math.min(maxRotation, newRotateX));
      const limitedRotateY = Math.max(-maxRotation, Math.min(maxRotation, newRotateY));

      setRotateX(limitedRotateX);
      setRotateY(limitedRotateY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="perspective-near">
      <motion.div animate={{ rotateX, rotateY }}>
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
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
              <div className="flex items-center relative w-40 h-full perspective-dramatic">
                <motion.span
                  className="absolute left-0 font-galmuri7 text-lime-300 stroke active:scale-150 transition ease-in-out"
                  animate={{
                    rotateX: [0, 10, -10, 0],
                    rotateY: [0, 200, -200, 0],
                    rotateZ: [0, 10, -20, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10,
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
      </motion.div>
    </div>
  );
};

'use client';

import { motion } from 'framer-motion';

export const NotReady = () => {
  return (
    <motion.div
      animate={{
        y: [0, 15, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeOut',
      }}
      className="flex justify-center items-center w-full italic tracking-tight"
    >
      {"I'm working on this page..."}
    </motion.div>
  );
};

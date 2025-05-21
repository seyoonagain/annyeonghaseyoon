'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export const TopButton = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.01], [0, 1]);

  return (
    <motion.div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ opacity }}
      className="content-center fixed bottom-4 sm:bottom-12 right-8 sm:right-12 z-50 font-redHatDisplay text-white text-3xl sm:text-4xl text-center stroke-light cursor-pointer"
    >
      ↑
    </motion.div>
  );
};

'use client';

import { Button, Title } from '@/components/home';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <motion.div
        className="fixed top-0 z-50 w-full bg-yellow-200 border-b"
        initial={{ height: '100dvh' }}
        animate={{ height: '56px' }}
        transition={{
          delay: 0.5,
          duration: 1,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 80,
          damping: 5,
          mass: 1,
        }}
      />
      <Title />
      <Button />
    </div>
  );
};

export default Home;

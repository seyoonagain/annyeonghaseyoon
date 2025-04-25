'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PAPER_OVERLAY_STYLE =
  "absolute top-0 left-0 w-full h-full bg-[url('/assets/paper.png')] bg-contain";

export const NameCard = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const maxRotation = 15;
      const newRotateY = ((clientX - centerX) / centerX) * maxRotation;
      const newRotateX = ((clientY - centerY - 65) / centerY) * maxRotation * -1;
      const limitedRotateX = Math.max(-maxRotation, Math.min(maxRotation, newRotateX));
      const limitedRotateY = Math.max(-maxRotation, Math.min(maxRotation, newRotateY));
      setRotateX(limitedRotateX);
      setRotateY(limitedRotateY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="perspective-normal active:rotate-1 transition ease-in-out duration-300">
      <motion.div
        animate={{ rotateX, rotateY }}
        className="flex flex-col relative w-96 h-56 p-2 bg-zinc-600 drop-shadow-card"
      >
        <div className={`${PAPER_OVERLAY_STYLE} -z-10 opacity-40`} />
        <div className={`${PAPER_OVERLAY_STYLE} z-10 opacity-20`} />
        <p className="flex items-center text-black text-2xl font-bold font-gothic tracking-tighter">
          <span>SE-Y</span>
          <motion.span
            className="-translate-x-0.5"
            animate={{
              rotateX: [0, 10, -10, 0],
              rotateY: [0, 200, -200, 0],
              rotateZ: [0, 10, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            O
          </motion.span>
          <span className="-translate-x-1">ON JEONG</span>
          <span className="font-manrope font-light text-xs tracking-tight translate-x-0.5 translate-y-1">
            Frontend Developer
          </span>
        </p>
        <pre className="flex items-end grow text-xs tracking-tight leading-5">{`const seyoon: BasicInfo = {\n\tmobile: '+82 10 7567 2005',\n\temail: 'seyoonagain@gmail.com',\n\twebsite: 'annyeonghaseyoon.vercel.app',\n\tgithub: 'seyoonagain',\n\tskills: ['TypeScript', 'React', 'Next.js']\n}`}</pre>
      </motion.div>
    </div>
  );
};

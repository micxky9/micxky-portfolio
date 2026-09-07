'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 h-1 w-full bg-slate-900/80"
      style={{ scaleX: scrollYProgress }}
      transition={{ ease: 'easeOut', duration: 0.2 }}
    />
  );
}

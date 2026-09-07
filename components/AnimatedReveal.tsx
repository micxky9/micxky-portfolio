'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimatedRevealProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedReveal({ children, className, ...props }: AnimatedRevealProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

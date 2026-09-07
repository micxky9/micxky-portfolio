'use client';

import { motion } from 'framer-motion';
import type { ComponentProps } from 'react';

export default function MotionDiv(props: ComponentProps<typeof motion.div>) {
  return <motion.div {...props} />;
}

'use client';

import { motion } from 'framer-motion';

export default function FloatingBlob() {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/0 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-16 top-1/3 h-56 w-56 rounded-full bg-gradient-to-br from-slate-500/10 via-transparent to-slate-700/0 blur-3xl"
      />
    </motion.div>
  );
}

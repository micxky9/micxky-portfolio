'use client';

import { motion } from 'framer-motion';

type TimelineItem = {
  company: string;
  role: string;
  date: string;
  description: string;
  responsibilities: string[];
};

type TimelineProps = {
  items: TimelineItem[];
  reversed?: boolean;
};

export default function Timeline({ items, reversed }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={item.company}
          initial={{ opacity: 0, x: reversed ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.08 }}
          className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-white/5 p-5 shadow-soft backdrop-blur-xl sm:p-8"
        >
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-slate-500 to-transparent opacity-60" />
          <div className="relative space-y-4 pl-4 sm:pl-6">
            <div className="flex items-center justify-between gap-4 text-slate-400">
              <span className="inline-flex rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.3em]">
                {item.date}
              </span>
              <span className="text-sm text-slate-500">{item.company}</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
              <p className="text-slate-400 leading-7">{item.description}</p>
            </div>
            <ul className="grid gap-2 text-slate-300">
              {item.responsibilities.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm leading-6">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

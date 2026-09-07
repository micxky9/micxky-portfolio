'use client';

import { motion } from 'framer-motion';

type SkillGroup = {
  title: string;
  items: string[];
};

type SkillGridProps = {
  groups: SkillGroup[];
};

export default function SkillGrid({ groups }: SkillGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group, index) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: index * 0.08 }}
          className="rounded-[2rem] border border-slate-800 bg-surface/80 p-5 shadow-soft backdrop-blur-xl sm:p-8"
        >
          <h3 className="text-xl font-semibold text-white">{group.title}</h3>
          <div className="mt-5 grid gap-3">
            {group.items.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-accent hover:bg-slate-800 hover:text-white"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

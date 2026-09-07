'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
      className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-surface/85 shadow-soft backdrop-blur-xl"
    >
      <div className="relative h-72 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-transparent to-slate-950 opacity-95 transition duration-500 group-hover:opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.25),transparent_35%)] opacity-80" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 scale-100 transition duration-700 group-hover:scale-110">
            <Image src={project.image} alt={project.title} fill className="object-cover opacity-90" />
          </div>
        </div>
      </div>
      <div className="space-y-5 p-5 sm:p-8">
        <div className="flex items-center justify-between gap-4 text-sm uppercase tracking-[0.35em] text-slate-500">
          <span>Featured</span>
          <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-slate-300">Premium</span>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-slate-400 leading-7">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-700 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-accent hover:text-white">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-accent hover:bg-slate-800 hover:text-white">
            <Code2 size={16} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] hover:shadow-glow">
            Live demo <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

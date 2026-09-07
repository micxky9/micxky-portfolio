import { ArrowUpCircle } from 'lucide-react';
import { socialData } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Portfolio</p>
          <p className="text-sm text-slate-400">Designed for premium product-driven teams and thoughtful collaborators.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {socialData.slice(0, 3).map((social) => (
              <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-slate-800 bg-white/5 p-3 text-slate-300 transition hover:border-accent hover:text-white">
                {social.label}
              </a>
            ))}
          </div>
          <a href="#top" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-slate-200 transition hover:border-accent hover:text-white">
            <ArrowUpCircle size={18} /> Back to top
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-600">© {new Date().getFullYear()} Micxky. Crafted with focus on detail and motion.</p>
    </footer>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const sections = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll || current < 120);
      lastScroll = current;

      const nextActive = sections.reduce((currentActive, section) => {
        const element = document.querySelector(section.href);
        if (!element) return currentActive;
        const top = element.getBoundingClientRect().top;
        return top <= 120 ? section.href.slice(1) : currentActive;
      }, 'about');

      setActive(nextActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 mx-auto max-w-7xl px-3 py-3 transition-all sm:px-6 sm:py-4 md:px-10"
    >
      <div className="rounded-[1.5rem] border border-slate-800 bg-surface/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:rounded-full sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <a href="#top" onClick={closeMenu} className="font-semibold tracking-[0.24em] text-white transition hover:text-accent">
            MICXKY
          </a>
          <div className="hidden items-center gap-4 md:flex">
            {sections.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition ${active === item.href.slice(1) ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-accent hover:text-white">
              Work together
            </a>
          </div>
          <button
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-white/5 text-slate-200 transition hover:border-accent hover:text-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className={`${menuOpen ? 'grid' : 'hidden'} gap-1 border-t border-slate-800 pt-3 md:hidden`}>
          {sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`rounded-xl px-3 py-3 text-sm transition ${active === item.href.slice(1) ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu} className="mt-1 rounded-xl border border-slate-700 bg-white/5 px-3 py-3 text-sm text-slate-200 transition hover:border-accent hover:text-white">
            Work together
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

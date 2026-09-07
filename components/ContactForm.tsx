'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const whatsappMessage = `Hello Micxky, my name is ${name}.\n\nEmail: ${email}\n\nMessage:\n${message}`;

    window.open(`https://wa.me/2347089828940?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75 }}
      className="space-y-6 rounded-[2rem] border border-slate-800 bg-surface/80 p-5 shadow-soft backdrop-blur-xl sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required className="w-full rounded-3xl border border-slate-700 bg-[#0d0d10] px-4 py-3 text-slate-200 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input name="email" type="email" placeholder="you@email.com" required className="w-full rounded-3xl border border-slate-700 bg-[#0d0d10] px-4 py-3 text-slate-200 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-300">
        <span>Message</span>
        <textarea name="message" rows={6} placeholder="Tell me about your project" required className="w-full rounded-3xl border border-slate-700 bg-[#0d0d10] px-4 py-3 text-slate-200 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20" />
      </label>
      <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-3xl border border-transparent bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-glow">
        Send message
      </button>
    </motion.form>
  );
}

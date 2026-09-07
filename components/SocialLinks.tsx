import { Github, Linkedin, Mail, Twitter, type LucideIcon } from 'lucide-react';

type SocialItem = {
  label: string;
  href: string;
  icon: string;
};

type SocialLinksProps = {
  items: SocialItem[];
  compact?: boolean;
};

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function SocialLinks({ items, compact }: SocialLinksProps) {
  return (
    <div className={compact ? 'flex flex-wrap gap-3' : 'grid gap-4'}>
      {items.map((item) => {
        const Icon = iconMap[item.icon] || Mail;
        return (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-3xl border border-slate-800 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:border-accent hover:text-white"
          >
            <Icon size={16} /> {compact ? item.label : item.label}
          </a>
        );
      })}
    </div>
  );
}

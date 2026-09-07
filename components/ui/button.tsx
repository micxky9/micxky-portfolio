import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-3xl border border-transparent bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-blue-500/30',
        className
      )}
      {...props}
    />
  );
}

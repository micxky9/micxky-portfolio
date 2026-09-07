import type { InputHTMLAttributes, DetailedHTMLProps } from 'react';
import { cn } from '@/lib/utils';

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full rounded-3xl border border-slate-700 bg-[#0d0d10] px-4 py-3 text-slate-200 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20',
        className
      )}
      {...props}
    />
  );
}

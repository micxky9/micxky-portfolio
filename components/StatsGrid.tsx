'use client';

type StatItem = {
  label: string;
  value: string;
};

type StatsGridProps = {
  stats: StatItem[];
};

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-3xl border border-slate-800 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{stat.label}</p>
          <p className="mt-3 text-4xl font-semibold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-slate-500">
        <span className="h-px flex-1 bg-slate-800"></span>
        <span>{title}</span>
        <span className="h-px flex-1 bg-slate-800"></span>
      </div>
      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

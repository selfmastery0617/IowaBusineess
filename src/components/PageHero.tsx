type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
};

/** Interior page header with a subtle architectural grid. */
export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-canvas">
      <div className="bg-grid mask-fade-b absolute inset-0" aria-hidden="true" />
      <svg
        className="absolute top-0 right-0 hidden h-full w-[38%] text-brand-500 lg:block"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1">
          <path d="M60 220 L170 140 L290 170 L380 70" />
          <path d="M170 140 L210 50" />
          <path d="M290 170 L330 260" />
        </g>
        <g fill="currentColor">
          <circle cx="60" cy="220" r="4" fillOpacity="0.35" />
          <circle cx="170" cy="140" r="5" fillOpacity="0.55" />
          <circle cx="290" cy="170" r="4" fillOpacity="0.45" />
          <circle cx="380" cy="70" r="5" fillOpacity="0.35" />
          <circle cx="210" cy="50" r="3.5" fillOpacity="0.3" />
          <circle cx="330" cy="260" r="3.5" fillOpacity="0.3" />
        </g>
      </svg>
      <div className="container-site relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-[2.125rem] leading-[1.1] font-bold sm:text-[2.75rem] lg:text-[3.125rem]">{title}</h1>
          <div className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</div>
          {children}
        </div>
      </div>
    </section>
  );
}

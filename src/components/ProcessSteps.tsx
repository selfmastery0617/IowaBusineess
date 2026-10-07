import type { LucideIcon } from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** Horizontal four-step sequence on desktop, vertical timeline on mobile. */
export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      <span
        className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 lg:block"
        aria-hidden="true"
      />
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <li key={step.title} data-reveal className="relative" style={{ transitionDelay: `${i * 80}ms` }}>
            <div className="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <p className="font-mono text-sm font-semibold text-brand-700 lg:mt-1">{String(i + 1).padStart(2, "0")}</p>
            </div>
            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6 lg:text-center">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed">{step.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

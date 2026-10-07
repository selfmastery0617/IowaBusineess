import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  summary: string;
  href: string;
  index?: number;
};

export function ServiceCard({ icon: Icon, title, summary, href, index }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgb(15_23_42/0.18)]">
      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        {index !== undefined && (
          <span className="font-mono text-xs font-medium text-slate-400" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-semibold">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed">{summary}</p>
      <Link href={href} className="link-arrow mt-6 text-[0.9375rem] after:absolute after:inset-0 after:rounded-xl">
        Learn more<span className="sr-only"> about {title}</span>
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

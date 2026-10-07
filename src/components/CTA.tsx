import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

type CTAProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTA({
  title = "Have a technology challenge to solve?",
  description = "Tell us about your infrastructure, modernization, or software engineering requirements and we can discuss the appropriate next steps.",
  buttonLabel = "Discuss Your Project",
  buttonHref = "/contact",
}: CTAProps) {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-20 sm:py-24">
      <div className="container-site">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl bg-ink-950 px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
        >
          <div className="bg-grid-dark mask-radial absolute inset-0" aria-hidden="true" />
          <div
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-600/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 id="cta-title" className="text-[1.75rem] leading-tight font-bold text-white sm:text-[2.25rem]">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-slate-300">{description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={buttonHref} className="btn-primary">
                  {buttonLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="space-y-3 lg:justify-self-end">
              <a
                href={site.phone.href}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-white transition-colors hover:border-white/25"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-5 w-5 text-brand-300" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs tracking-wide text-slate-400 uppercase">Call</span>
                  <span className="font-semibold">{site.phone.display}</span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 text-white transition-colors hover:border-white/25"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-5 w-5 text-brand-300" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-slate-400 uppercase">Email</span>
                  <span className="block font-semibold break-all sm:break-normal">{site.email}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

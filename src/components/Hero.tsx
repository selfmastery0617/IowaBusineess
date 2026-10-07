import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { HeroGraphic } from "./HeroGraphic";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-canvas">
      <div className="bg-grid mask-fade-b absolute inset-0" aria-hidden="true" />
      <div
        className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-brand-200/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site relative grid items-center gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-24 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
            IT Infrastructure Consulting &amp; Software Engineering
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.375rem] leading-[1.08] font-bold sm:text-[3rem] lg:text-[3.375rem]"
          >
            Technology infrastructure built around{" "}
            <span className="text-brand-600">your business</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            IT Infrastructure Solutions provides infrastructure consulting, implementation, and access to software
            engineering expertise for organizations that need dependable technical execution — from the first
            assessment through delivery and ongoing support.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
            Based in Lisbon, Iowa · Local and remote engagements
          </p>
        </div>

        <div className="lg:pl-4">
          <HeroGraphic />
        </div>
      </div>
    </section>
  );
}

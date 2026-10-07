import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  Building2,
  Check,
  ClipboardCheck,
  Code,
  Compass,
  Cpu,
  GitMerge,
  Globe,
  Layers,
  LifeBuoy,
  MapPin,
  MessagesSquare,
  Network,
  RefreshCcw,
  Search,
  Server,
  ServerCog,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTA } from "@/components/CTA";
import { services, type ServiceId } from "@/lib/services";
import { site, mapsUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "IT Infrastructure Solutions | IT Infrastructure Consulting & Engineering" },
  alternates: { canonical: "/" },
};

const serviceIcons: Record<ServiceId, LucideIcon> = {
  consulting: Compass,
  solutions: ServerCog,
  engineering: Code,
};

const valueBar: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Compass, title: "Infrastructure Consulting", text: "Assessments, planning, and technical guidance" },
  { icon: Network, title: "Technical Architecture", text: "Systems designed around real requirements" },
  { icon: RefreshCcw, title: "Systems Modernization", text: "Upgrades and migrations, planned carefully" },
  { icon: Code, title: "Software Engineering", text: "Applications, integrations, and automation" },
];

const challenges = [
  {
    title: "Aging or fragmented infrastructure",
    text: "Systems added over time without a unified plan, now harder to secure, scale, and support.",
  },
  {
    title: "Environments that are hard to maintain",
    text: "Changes feel risky because configuration and dependencies aren't well understood or documented.",
  },
  {
    title: "Rising performance and reliability needs",
    text: "Growth puts new pressure on capacity, availability, and response times.",
  },
  {
    title: "Modernization that needs a plan",
    text: "Upgrades, migrations, or platform changes that should be scoped before work begins.",
  },
  {
    title: "Systems that don't integrate cleanly",
    text: "Applications and data that don't connect, leading to manual steps and duplicated effort.",
  },
  {
    title: "Limited engineering capacity",
    text: "Projects that need specialized skills or short-term technical help without a permanent hire.",
  },
];

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: SlidersHorizontal,
    title: "Practical recommendations",
    text: "Solutions should fit actual business and technical requirements. We recommend what the situation calls for — not added complexity.",
  },
  {
    icon: Layers,
    title: "Flexible expertise",
    text: "Engagements can range from a focused consulting review to broader implementation and engineering support, scoped to what you need.",
  },
  {
    icon: MessagesSquare,
    title: "Direct communication",
    text: "You get straightforward answers about requirements, options, risks, and next steps, from the people doing the work.",
  },
  {
    icon: Cpu,
    title: "Technology-focused approach",
    text: "Decisions are weighed for reliability, scalability, maintainability, security, and their effect on day-to-day operations.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Understand",
    description:
      "We learn the business requirement, the current environment, technical constraints, and the outcome you need.",
  },
  {
    icon: ClipboardCheck,
    title: "Assess",
    description:
      "We evaluate the relevant systems, architecture, or development requirements and identify practical options.",
  },
  {
    icon: Wrench,
    title: "Deliver",
    description:
      "We provide consulting and implementation support, or coordinate the right engineering resources for the work.",
  },
  {
    icon: LifeBuoy,
    title: "Support",
    description:
      "We document the solution, handle follow-up items, and provide continued technical assistance when agreed upon.",
  },
];

const engineeringAreas: { icon: LucideIcon; title: string }[] = [
  { icon: Globe, title: "Web Applications" },
  { icon: GitMerge, title: "APIs & Integrations" },
  { icon: Server, title: "Backend Systems" },
  { icon: Bot, title: "Automation" },
  { icon: RefreshCcw, title: "Application Modernization" },
  { icon: Blocks, title: "Custom Development" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Value bar */}
      <section aria-label="Areas of expertise" className="border-y border-slate-200 bg-white">
        <ul className="container-site grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {valueBar.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={`flex items-center gap-4 py-6 sm:py-7 lg:px-6 lg:first:pl-0 lg:last:pr-0 ${
                i >= 2 ? "sm:border-t sm:border-slate-200 lg:border-t-0" : ""
              }`}
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-canvas text-brand-700 ring-1 ring-slate-200">
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-display text-[0.95rem] font-semibold text-ink-950">{title}</span>
                <span className="block text-sm text-slate-500">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Services overview */}
      <section aria-labelledby="services-title" className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              id="services-title"
              eyebrow="Services"
              title="Three ways to put the right expertise on your technology work"
              description="Some organizations need an outside perspective on their environment. Others need hands-on implementation, or engineers for a defined project. Many need a combination."
            />
            <Link href="/services" className="link-arrow shrink-0">
              View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <div key={s.id} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                <ServiceCard icon={serviceIcons[s.id]} title={s.title} summary={s.summary} href={s.href} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business challenges */}
      <section aria-labelledby="challenges-title" className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
        <div className="bg-grid-dark mask-fade-b absolute inset-0" aria-hidden="true" />
        <div className="container-site relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="challenges-title"
              tone="dark"
              eyebrow="Common challenges"
              title="Technology should support your business — not slow it down."
              description="Most technology problems don't start as emergencies. They build up gradually: a system that's harder to change each year, a project that keeps getting postponed, an integration nobody has time to finish."
            />
            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-base font-semibold text-white">How we help</h3>
              <p className="mt-2 leading-relaxed text-slate-300">
                We start with the environment as it actually exists, identify where the real constraints are, and
                recommend changes proportional to the problem. Sometimes that&rsquo;s a focused assessment. Sometimes
                it&rsquo;s a migration plan, an implementation, or engineering support for a defined project.
              </p>
              <Link href="/approach" className="link-arrow mt-4 text-brand-300 hover:text-brand-200">
                See how engagements work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {challenges.map((c, i) => (
              <li
                key={c.title}
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
                className="rounded-xl border border-white/10 bg-ink-900/80 p-6 transition-colors hover:border-brand-500/40"
              >
                <span className="font-mono text-xs font-semibold text-brand-400" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[1.0625rem] font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate-400">{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why work with us */}
      <section aria-labelledby="why-title" className="bg-canvas py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            id="why-title"
            align="center"
            eyebrow="Why work with us"
            title="A straightforward way to solve technical problems"
            description="How an engagement is run matters as much as the technology involved. These are the working principles behind every project."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                data-reveal
                style={{ transitionDelay: `${i * 70}ms` }}
                className="card p-6 transition-shadow hover:shadow-[0_10px_28px_-14px_rgb(15_23_42/0.2)]"
              >
                <Icon className="h-7 w-7 text-brand-600" strokeWidth={1.6} aria-hidden="true" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              id="approach-title"
              eyebrow="Our approach"
              title="Understand, assess, deliver, support"
              description="A simple sequence that keeps work tied to the requirement — whether the engagement is a short review or a longer implementation project."
            />
            <Link href="/approach" className="link-arrow shrink-0">
              Read the full approach <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-14">
            <ProcessSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* Software engineering */}
      <section aria-labelledby="engineering-title" className="bg-canvas py-20 sm:py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            <div>
              <SectionHeading
                id="engineering-title"
                eyebrow="Software engineering"
                title="Engineering expertise when your project needs it"
              />
              <div className="mt-5 space-y-4 text-[1.0625rem] leading-relaxed">
                <p>
                  Some technology initiatives need more than infrastructure work: an internal application, an API
                  that connects two systems, or automation that removes a manual process.
                </p>
                <p>
                  For projects requiring specialized development expertise, IT Infrastructure Solutions can
                  coordinate qualified software engineering resources based on the technical requirements and scope
                  of the engagement. You keep a single point of contact, with the infrastructure context already in
                  hand.
                </p>
              </div>
              <Link href="/contact?service=engineering" className="btn-primary mt-8">
                Discuss Engineering Requirements
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              {engineeringAreas.map(({ icon: Icon, title }, i) => (
                <li
                  key={title}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-canvas p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/50"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-slate-200">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="text-[0.9375rem] font-semibold text-ink-950">{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Location */}
      <section aria-labelledby="location-title" className="bg-white pt-20 sm:pt-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="location-title"
              eyebrow="Location"
              title="Based in Lisbon, Iowa. Working wherever the project is."
              description="We serve businesses in the area directly and support remote engagements for organizations in other locations, depending on project requirements."
            />
            <ul className="mt-8 space-y-3">
              {[
                "On-site work for local organizations when the project calls for it",
                "Remote consulting, implementation, and engineering engagements",
                "Clear scheduling and communication regardless of location",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="relative overflow-hidden rounded-2xl border border-slate-200 bg-canvas p-8 sm:p-10">
            <div className="bg-grid mask-radial absolute inset-0" aria-hidden="true" />
            <svg
              className="absolute inset-0 h-full w-full text-brand-500"
              viewBox="0 0 400 260"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <g fill="none" stroke="currentColor" strokeOpacity="0.18">
                <circle cx="300" cy="130" r="40" />
                <circle cx="300" cy="130" r="80" />
                <circle cx="300" cy="130" r="125" />
              </g>
              <g stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 5" className="topo-flow-slow">
                <line x1="300" y1="130" x2="380" y2="40" />
                <line x1="300" y1="130" x2="200" y2="40" />
                <line x1="300" y1="130" x2="390" y2="230" />
              </g>
              <circle cx="300" cy="130" r="7" fill="currentColor" />
              <circle cx="300" cy="130" r="7" fill="none" stroke="currentColor" className="topo-pulse" />
            </svg>
            <div className="relative max-w-xs rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                {site.name}
              </div>
              <address className="mt-3 leading-relaxed text-ink-950 not-italic">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
                <br />
                {site.address.countryName}
              </address>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow mt-4 text-sm"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                View on map<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

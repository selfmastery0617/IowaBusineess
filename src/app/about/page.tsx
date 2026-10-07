import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CircleCheck, Eye, Lightbulb, MapPin, Shuffle, ShieldCheck, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { site, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "IT Infrastructure Solutions is a technology consulting company in Lisbon, Iowa, helping organizations make informed technical decisions without unnecessary complexity.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/", title: "About | IT Infrastructure Solutions", images: [ogImage] },
};

const principles: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Lightbulb,
    title: "Practicality",
    text: "Technology should solve an identifiable business or operational need. If a simpler option meets the requirement, that's the one we'll recommend.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "Infrastructure and applications should be designed with dependable operation in mind — including how they'll be monitored, maintained, and recovered.",
  },
  {
    icon: Eye,
    title: "Clarity",
    text: "Technical decisions, risks, and tradeoffs should be communicated clearly, in terms that support a business decision.",
  },
  {
    icon: Shuffle,
    title: "Flexibility",
    text: "Every organization has different systems, constraints, and internal capabilities. Engagements are shaped around those, not a fixed package.",
  },
  {
    icon: CircleCheck,
    title: "Accountability",
    text: "Projects should have clearly defined objectives, responsibilities, and deliverables, agreed on before the work starts.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Technology consulting with a practical approach"
        description={
          <p>
            IT Infrastructure Solutions helps organizations make informed technical decisions and carry out technology
            initiatives without unnecessary complexity.
          </p>
        }
      />

      <section aria-labelledby="purpose-title" className="bg-white py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <SectionHeading
            id="purpose-title"
            eyebrow="Why we exist"
            title="Sound technical decisions shouldn't require a large IT department"
          />
          <div className="space-y-5 text-[1.0625rem] leading-relaxed">
            <p>
              Many organizations depend on technology that has grown over time — a few servers, a set of
              applications, some cloud services, and integrations that were added as needs came up. Eventually
              decisions about that environment carry real cost and risk, and there isn&rsquo;t always someone
              in-house with the time or specific background to make them confidently.
            </p>
            <p>
              IT Infrastructure Solutions was established to fill that gap. We provide infrastructure consulting and
              implementation, and we coordinate software engineering resources when a project requires development
              work. The aim is the same in every case: understand the requirement, recommend an approach that fits,
              and see it through.
            </p>
            <p>
              As a focused consulting company, we work directly with clients. The person you discuss your
              requirements with is involved in the work itself, and when an engagement needs additional specialized
              skills, we bring in qualified technical resources and stay responsible for coordination.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-title" className="border-y border-slate-200 bg-canvas py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            id="principles-title"
            eyebrow="Operating principles"
            title="How we approach every engagement"
            description="These principles shape how we scope work, make recommendations, and communicate with clients."
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {principles.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
                className={`card p-7 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="work-title" className="bg-white py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading id="work-title" eyebrow="Working together" title="What clients can expect" />
            <ul className="mt-8 space-y-5">
              {[
                ["A clear starting point", "Each engagement begins with a conversation about the requirement, the current environment, and what a good outcome looks like."],
                ["Defined scope", "Objectives, deliverables, and responsibilities are agreed in writing before work begins."],
                ["Transparent resourcing", "When specialized software engineering is needed, we explain how the work will be resourced. Some services may be performed by qualified subcontractors we coordinate."],
                ["Documentation you keep", "Decisions, configurations, and procedures are documented so your organization isn't dependent on memory."],
              ].map(([title, text]) => (
                <li key={title} className="border-l-2 border-brand-500 pl-5">
                  <p className="font-semibold text-ink-950">{title}</p>
                  <p className="mt-1 leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-8 text-slate-300 sm:p-10">
            <div className="bg-grid-dark mask-radial absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <MapPin className="h-8 w-8 text-brand-400" strokeWidth={1.6} aria-hidden="true" />
              <h2 className="mt-6 text-2xl font-bold text-white">Based in Lisbon, Iowa</h2>
              <p className="mt-4 leading-relaxed">
                IT Infrastructure Solutions is based in Lisbon, Iowa and can work with organizations through both
                local and remote engagements. Location rarely limits what we can help with — many assessment,
                planning, and engineering activities are well suited to remote work, and on-site time is arranged when
                a project calls for it.
              </p>
              <address className="mt-6 border-t border-white/10 pt-6 leading-relaxed text-white not-italic">
                {site.name}
                <br />
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              <Link href="/contact" className="link-arrow mt-6 text-brand-300 hover:text-brand-200">
                Get in touch <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

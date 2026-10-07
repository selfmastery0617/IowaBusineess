import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardList, FileText, Hammer, Lightbulb, Search } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How IT Infrastructure Solutions runs consulting, infrastructure, and software engineering engagements: discovery, technical assessment, planning, execution, and documentation.",
  alternates: { canonical: "/approach/" },
  openGraph: { url: "/approach/", title: "Approach | IT Infrastructure Solutions", images: [ogImage] },
};

const phases = [
  {
    icon: Search,
    title: "Discovery",
    summary: "Understand objectives, existing systems, constraints, timelines, and stakeholders.",
    activities: [
      "Conversations with the people who own the requirement and the systems",
      "Review of existing documentation, diagrams, and known issues",
      "Clarifying what success looks like and what's out of scope",
    ],
    outcome: "A shared understanding of the problem and the goals",
  },
  {
    icon: ClipboardList,
    title: "Technical Assessment",
    summary: "Review architecture, requirements, dependencies, potential risks, and available options.",
    activities: [
      "Examining the current environment or application landscape",
      "Identifying dependencies, constraints, and risk areas",
      "Comparing realistic options and their tradeoffs",
    ],
    outcome: "Findings and options, explained in plain terms",
  },
  {
    icon: Lightbulb,
    title: "Recommendation & Planning",
    summary: "Define an appropriate technical approach, project scope, priorities, and implementation considerations.",
    activities: [
      "A recommended approach with reasoning behind it",
      "Scope, sequencing, and priorities agreed with your team",
      "Resourcing, scheduling, and change-window considerations",
    ],
    outcome: "A documented plan with defined deliverables",
  },
  {
    icon: Hammer,
    title: "Execution",
    summary: "Provide consulting, implementation assistance, or coordinate appropriate engineering resources.",
    activities: [
      "Hands-on implementation, configuration, or migration work",
      "Coordination of qualified engineering resources where required",
      "Regular status updates, with issues raised as they come up",
    ],
    outcome: "Work delivered against the agreed scope",
  },
  {
    icon: FileText,
    title: "Documentation & Follow-Through",
    summary: "Document relevant decisions and provide agreed-upon support following implementation.",
    activities: [
      "Documentation of architecture, configuration, and procedures",
      "Knowledge transfer to the people who will operate the solution",
      "Follow-up support as defined in the engagement",
    ],
    outcome: "A solution your organization can operate and maintain",
  },
];

const formats = [
  {
    title: "Advisory & assessment",
    text: "A focused review, architecture evaluation, or second opinion ahead of a decision. Typically produces findings and recommendations.",
  },
  {
    title: "Project-based delivery",
    text: "A defined implementation, migration, integration, or development project with agreed scope and deliverables.",
  },
  {
    title: "Ongoing technical support",
    text: "Continued assistance after a project, or periodic technical support, under terms agreed in advance.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        title="A consulting process built for clear decisions and dependable delivery"
        description={
          <p>
            Every engagement follows the same basic discipline: understand the requirement before proposing a
            solution, agree on scope before doing the work, and leave behind documentation your team can use.
          </p>
        }
      />

      <section aria-labelledby="phases-title" className="bg-white py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            id="phases-title"
            eyebrow="Methodology"
            title="Five phases, scaled to the engagement"
            description="A short advisory review may move through these phases in a few conversations. A larger implementation gives each one more structure. The sequence stays the same."
          />

          <ol className="relative mt-14 space-y-6 before:absolute before:top-4 before:bottom-4 before:left-7 before:w-px before:bg-slate-200 sm:before:left-8">
            {phases.map((p, i) => {
              const Icon = p.icon;
              return (
                <li key={p.title} data-reveal className="relative flex gap-5 sm:gap-8">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-sm sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="card flex-1 p-6 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
                      <div>
                        <p className="font-mono text-xs font-semibold tracking-wider text-brand-700">
                          STEP {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{p.title}</h3>
                        <p className="mt-3 leading-relaxed">{p.summary}</p>
                      </div>
                      <div className="border-t border-slate-200 pt-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                        <h4 className="font-sans text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
                          What this involves
                        </h4>
                        <ul className="mt-3 space-y-2 text-[0.9375rem]">
                          {p.activities.map((a) => (
                            <li key={a} className="flex gap-2.5">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                              {a}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 rounded-lg bg-canvas px-4 py-2.5 text-sm">
                          <span className="font-semibold text-ink-950">Outcome: </span>
                          {p.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section aria-labelledby="formats-title" className="border-t border-slate-200 bg-canvas py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            id="formats-title"
            eyebrow="Engagement formats"
            title="Engagements sized to the work"
            description="Not every project needs the same structure. Most engagements fit one of these formats, and they can be combined."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {formats.map((f, i) => (
              <div key={f.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="card p-7">
                <span className="font-mono text-xs font-semibold text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-slate-200 bg-white p-7 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h3 className="text-lg font-semibold">Helpful to have for a first conversation</h3>
              <p className="mt-2 leading-relaxed">
                A short description of the problem or goal, any relevant deadlines, and a rough sense of the systems
                involved. Nothing needs to be formally prepared.
              </p>
            </div>
            <Link href="/contact" className="btn-primary mt-6 shrink-0 sm:mt-0">
              Start a Conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

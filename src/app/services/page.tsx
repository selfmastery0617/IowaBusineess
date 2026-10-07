import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code,
  Compass,
  Info,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTA } from "@/components/CTA";
import { ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IT infrastructure consulting, infrastructure implementation and modernization, and software engineering services for organizations planning and improving their technology environments.",
  alternates: { canonical: "/services/" },
  openGraph: { url: "/services/", title: "Services | IT Infrastructure Solutions", images: [ogImage] },
};

type Capability = { title: string; text: string };

type ServiceDetail = {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  lead: string;
  body: string[];
  capabilities: Capability[];
  asideTitle: string;
  aside: string[];
  disclosure?: string;
  cta: { label: string; href: string };
};

const details: ServiceDetail[] = [
  {
    id: "consulting",
    number: "01",
    icon: Compass,
    title: "IT Infrastructure Consulting",
    lead: "An informed, independent view of your environment — and a practical plan for what to do next.",
    body: [
      "Good infrastructure decisions depend on an accurate picture of what exists today: how systems are connected, where the risks are, what's limiting performance, and what the business will need over the next few years.",
      "Consulting engagements focus on building that picture and turning it into clear recommendations. That can mean a structured assessment, an architecture review ahead of a major change, or hands-on troubleshooting of a problem that hasn't been resolved internally. Recommendations stay vendor-neutral and are sized to the organization.",
    ],
    capabilities: [
      { title: "Infrastructure assessments", text: "Review of servers, networks, storage, and supporting systems against current and expected needs." },
      { title: "Architecture planning", text: "Systems and infrastructure architecture for new initiatives or significant changes." },
      { title: "Modernization planning", text: "Roadmaps for replacing or upgrading aging systems with minimal disruption." },
      { title: "Cloud and hybrid planning", text: "Evaluating which workloads belong on-premises, in the cloud, or across both." },
      { title: "Performance and reliability", text: "Identifying bottlenecks, single points of failure, and availability risks." },
      { title: "Capacity planning", text: "Estimating compute, storage, and network requirements as the organization grows." },
      { title: "Technology evaluation", text: "Comparing products, platforms, and approaches against your actual requirements." },
      { title: "Troubleshooting", text: "Diagnosing persistent or complex infrastructure issues and recommending corrective action." },
      { title: "Technical documentation", text: "Documenting current-state environments, architecture decisions, and implementation plans." },
    ],
    asideTitle: "Typical situations",
    aside: [
      "You're planning a significant change and want an outside technical review first",
      "The environment has grown in pieces and needs a coherent plan",
      "Reliability or performance problems keep recurring",
      "You need documentation that reflects how things actually work",
    ],
    cta: { label: "Discuss a Consulting Engagement", href: "/contact?service=consulting" },
  },
  {
    id: "solutions",
    number: "02",
    icon: ServerCog,
    title: "IT Infrastructure Solutions",
    lead: "Implementation and improvement work, designed around business requirements rather than unnecessary technology.",
    body: [
      "Once the direction is clear, the work has to be done carefully. Infrastructure solutions cover the design, configuration, migration, and integration work that puts a plan into practice — and the operational improvements that keep an environment dependable afterward.",
      "Each solution starts from what the business needs to operate: the workloads involved, acceptable downtime, security expectations, the internal team's ability to manage it, and budget. Technology choices follow from those requirements, not the other way around.",
    ],
    capabilities: [
      { title: "Infrastructure design", text: "Detailed designs for server, network, storage, and hybrid environments." },
      { title: "Implementation and configuration", text: "Building and configuring systems to a documented, supportable standard." },
      { title: "Environment modernization", text: "Replacing or upgrading legacy components while keeping operations running." },
      { title: "Migrations", text: "Planned moves between platforms, data centers, or cloud environments, with rollback considered." },
      { title: "Integration", text: "Connecting infrastructure components and services so they operate as one environment." },
      { title: "Availability improvements", text: "Reducing single points of failure and improving resilience where it matters most." },
      { title: "Monitoring strategy", text: "Deciding what to watch, which thresholds matter, and who gets notified." },
      { title: "Backup and recovery planning", text: "Recovery objectives, backup design, and restore procedures that are actually tested." },
      { title: "Operational support", text: "Project-based assistance or ongoing technical support, as agreed for the engagement." },
    ],
    asideTitle: "What you can expect",
    aside: [
      "A defined scope with clear deliverables before work begins",
      "Changes planned around your operational windows",
      "Configuration and procedures documented for your team",
      "A handoff your staff can maintain, or continued support if preferred",
    ],
    cta: { label: "Discuss an Infrastructure Project", href: "/contact?service=solutions" },
  },
  {
    id: "engineering",
    number: "03",
    icon: Code,
    title: "Software Engineering Services",
    lead: "Development capacity for applications, integrations, and automation — matched to the project.",
    body: [
      "Many infrastructure initiatives eventually involve software: an internal tool to replace spreadsheets, an API that lets two systems share data, or automation that removes a repetitive manual process. Other organizations simply need additional engineering capacity for a defined body of work.",
      "For projects requiring specialized development expertise, IT Infrastructure Solutions can coordinate qualified software engineering resources based on the technical requirements and scope of the engagement. We help define the requirements, select appropriate resources, and stay involved as your point of contact through delivery.",
    ],
    capabilities: [
      { title: "Custom software development", text: "Applications built around a specific business process or requirement." },
      { title: "Web applications", text: "Browser-based tools and portals for internal teams or external users." },
      { title: "Backend development", text: "Services, data processing, and business logic behind your applications." },
      { title: "APIs and integrations", text: "Connecting applications, platforms, and third-party services reliably." },
      { title: "Automation", text: "Scripts, workflows, and services that replace repetitive manual work." },
      { title: "Data integration", text: "Moving and synchronizing data between systems with appropriate validation." },
      { title: "Application modernization", text: "Updating older applications for current platforms, security, and maintainability." },
      { title: "Internal business applications", text: "Purpose-built tools that fit the way your organization operates." },
      { title: "Maintenance and project support", text: "Ongoing fixes, enhancements, or added capacity for an existing project." },
    ],
    asideTitle: "How engineering engagements work",
    aside: [
      "Requirements and scope are defined together before development starts",
      "Resources are selected for the specific technical needs of the project",
      "Infrastructure and application considerations are handled together",
      "You keep one point of contact for coordination and communication",
    ],
    disclosure:
      "Depending on project requirements, certain software engineering services may be performed by qualified subcontractors or specialized technical resources coordinated by IT Infrastructure Solutions.",
    cta: { label: "Discuss Engineering Requirements", href: "/contact?service=engineering" },
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Technology services designed around real business requirements"
        description={
          <p>
            Consulting, implementation, and software engineering support for organizations that need to plan,
            modernize, or improve their technology environments — delivered with clear scope and direct
            communication.
          </p>
        }
      >
        <nav aria-label="Services on this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {details.map((d) => (
              <li key={d.id}>
                <a
                  href={`#${d.id}`}
                  className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-ink-950 transition-colors hover:border-brand-300 hover:text-brand-700"
                >
                  <span className="font-mono text-xs text-slate-400">{d.number}</span>
                  {d.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {details.map((d, idx) => {
        const Icon = d.icon;
        return (
          <section
            key={d.id}
            id={d.id}
            aria-labelledby={`${d.id}-title`}
            className={`py-20 sm:py-24 ${idx % 2 === 1 ? "bg-canvas" : "bg-white"} ${idx > 0 ? "border-t border-slate-200" : ""}`}
          >
            <div className="container-site grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-16">
              <div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-slate-400">{d.number}</span>
                </div>
                <h2 id={`${d.id}-title`} className="mt-6 text-[1.875rem] leading-tight font-bold sm:text-[2.25rem]">
                  {d.title}
                </h2>
                <p className="mt-4 text-lg font-medium text-ink-800">{d.lead}</p>
                <div className="mt-5 space-y-4 leading-relaxed">
                  {d.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>

                {d.disclosure && (
                  <div className="mt-6 flex gap-3 rounded-lg border border-slate-200 bg-canvas p-4 text-[0.9375rem] leading-relaxed">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    <p>{d.disclosure}</p>
                  </div>
                )}

                <h3 className="mt-12 font-sans text-sm font-semibold tracking-[0.12em] text-slate-500 uppercase">
                  What this can include
                </h3>
                <ul className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {d.capabilities.map((c) => (
                    <li key={c.title} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-ink-950">{c.title}</p>
                        <p className="mt-1 text-[0.9375rem] leading-relaxed">{c.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start" aria-label={`${d.title}: ${d.asideTitle}`}>
                <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_10px_30px_-18px_rgb(15_23_42/0.25)]">
                  <h3 className="text-lg font-semibold">{d.asideTitle}</h3>
                  <ul className="mt-5 space-y-4">
                    {d.aside.map((a) => (
                      <li key={a} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <Link href={d.cta.href} className="btn-primary mt-7 w-full">
                    {d.cta.label}
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        );
      })}

      {/* Not sure what you need */}
      <section aria-labelledby="unsure-title" className="border-t border-slate-200 bg-canvas py-20 sm:py-24">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="unsure-title"
              eyebrow="Getting started"
              title="Not sure what you need?"
              description="You don't need to know the exact technical solution before reaching out. Describe the problem, the goal, or the project you're considering — that's enough to start a useful conversation."
            />
            <Link href="/contact" className="btn-primary mt-8">
              Discuss Your Requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div>
          <p className="mb-4 text-sm font-semibold text-slate-500">For example, a conversation can start with:</p>
          <ul className="space-y-3">
            {[
              "“Our systems are slowing down and we don't know why.”",
              "“We need to move off aging hardware but aren't sure where to start.”",
              "“Two of our applications should share data, and right now they don't.”",
              "“We have a project planned and need engineering help to deliver it.”",
            ].map((q) => (
              <li key={q} className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-[0.9375rem] text-ink-800 italic">
                {q}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

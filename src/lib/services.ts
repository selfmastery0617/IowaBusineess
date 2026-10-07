export type ServiceId = "consulting" | "solutions" | "engineering";

export type Service = {
  id: ServiceId;
  title: string;
  shortTitle: string;
  summary: string;
  href: string;
};

export const services: Service[] = [
  {
    id: "consulting",
    title: "IT Infrastructure Consulting",
    shortTitle: "Infrastructure Consulting",
    summary:
      "Assessments, architecture planning, and modernization guidance for organizations that need a clear picture of their current environment and a practical path forward.",
    href: "/services#consulting",
  },
  {
    id: "solutions",
    title: "IT Infrastructure Solutions",
    shortTitle: "Infrastructure Solutions",
    summary:
      "Design, implementation, migration, and improvement of infrastructure environments — configured around your requirements and documented so your team can operate them.",
    href: "/services#solutions",
  },
  {
    id: "engineering",
    title: "Software Engineering Services",
    shortTitle: "Software Engineering",
    summary:
      "Custom applications, APIs, integrations, and automation, delivered with qualified engineering resources matched to the scope and technical requirements of each project.",
    href: "/services#engineering",
  },
];

/** Options for the contact form "Service Needed" field. */
export const serviceOptions = [
  { value: "consulting", label: "IT Infrastructure Consulting" },
  { value: "solutions", label: "IT Infrastructure Solutions" },
  { value: "engineering", label: "Software Engineering" },
  { value: "other", label: "Other" },
] as const;

import { site } from "./site";
import { serviceOptions } from "./services";

/**
 * Contact form submission adapter.
 *
 * To connect a form provider or your own API, set NEXT_PUBLIC_CONTACT_ENDPOINT
 * to a URL that accepts a JSON POST (Formspree, Basin, Getform, a serverless
 * function, etc.). Adjust `toRequestBody` if the provider expects different
 * field names.
 *
 * When no endpoint is configured, the form does not pretend to send anything:
 * it opens the visitor's email application with a pre-filled message instead.
 */

export type InquiryPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  details: string;
};

export type SubmitResult =
  | { kind: "sent" }
  | { kind: "mailto"; href: string }
  | { kind: "error"; message: string };

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim();

export const isEndpointConfigured = Boolean(endpoint);

function serviceLabel(value: string) {
  return serviceOptions.find((o) => o.value === value)?.label ?? "Not specified";
}

function toRequestBody(p: InquiryPayload) {
  return {
    name: p.name,
    email: p.email,
    company: p.company,
    phone: p.phone,
    service: serviceLabel(p.service),
    message: p.details,
    _subject: `Website inquiry: ${serviceLabel(p.service)}`,
  };
}

function buildMailto(p: InquiryPayload) {
  const subject = `Website inquiry: ${serviceLabel(p.service)}${p.company ? ` — ${p.company}` : ""}`;
  const lines = [`Name: ${p.name}`, `Email: ${p.email}`];
  if (p.company) lines.push(`Company: ${p.company}`);
  if (p.phone) lines.push(`Phone: ${p.phone}`);
  lines.push(`Service needed: ${serviceLabel(p.service)}`, "", "Project details:", p.details);
  const body = lines.join("\n");
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function submitInquiry(payload: InquiryPayload): Promise<SubmitResult> {
  if (!endpoint) {
    return { kind: "mailto", href: buildMailto(payload) };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(toRequestBody(payload)),
    });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return { kind: "sent" };
  } catch {
    return {
      kind: "error",
      message: `Your inquiry could not be sent. Please try again, or email ${site.email} directly.`,
    };
  }
}

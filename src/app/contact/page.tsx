import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { site, mapsUrl, ogImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact IT Infrastructure Solutions in Lisbon, Iowa to discuss infrastructure consulting, modernization, or software engineering requirements. Call (319) 455-6713.",
  alternates: { canonical: "/contact/" },
  openGraph: { url: "/contact/", title: "Contact | IT Infrastructure Solutions", images: [ogImage] },
};

export default function ContactPage() {
  return (
    <section aria-labelledby="contact-title" className="relative overflow-hidden bg-canvas">
      <div className="bg-grid mask-fade-b absolute inset-x-0 top-0 h-[28rem]" aria-hidden="true" />
      <div className="container-site relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 id="contact-title" className="mt-4 text-[2.125rem] leading-[1.1] font-bold sm:text-[2.75rem]">
            Let&rsquo;s discuss your technology requirements
          </h1>
          <p className="mt-5 text-lg leading-relaxed">
            Whether you&rsquo;re evaluating an infrastructure change, planning a modernization initiative, or need
            additional engineering expertise, contact IT Infrastructure Solutions to discuss your requirements.
          </p>

          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-7">
            <h2 className="text-lg font-semibold">{site.name}</h2>
            <address className="mt-5 space-y-5 not-italic">
              <div className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Address</p>
                  <p className="mt-1 leading-relaxed text-ink-950">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-brand-700 hover:text-brand-800"
                  >
                    View on map<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Phone</p>
                  <a href={site.phone.href} className="mt-1 inline-block text-lg font-semibold text-ink-950 hover:text-brand-700">
                    {site.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block font-semibold break-all text-ink-950 hover:text-brand-700"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </address>
          </div>

          <div className="mt-6 flex gap-4 rounded-xl border border-slate-200 bg-white/60 p-6">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
            <div>
              <h2 className="font-sans text-base font-semibold tracking-normal">What happens next</h2>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed">
                We review each inquiry and follow up to arrange an initial conversation about your requirements.
                There&rsquo;s no obligation, and you don&rsquo;t need a finalized scope to get in touch.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgb(15_23_42/0.3)] sm:p-9">
          <h2 className="text-2xl font-bold">Send an inquiry</h2>
          <p className="mt-2 mb-7 leading-relaxed">
            Share a few details and we&rsquo;ll be in touch to discuss next steps.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

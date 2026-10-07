import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { site, mapsUrl } from "@/lib/site";
import { services } from "@/lib/services";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-slate-400">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div className="max-w-sm">
          <Link href="/" className="inline-block rounded-md" aria-label={`${site.name} — Home`}>
            <Logo variant="light" />
          </Link>
          <p className="mt-5 text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed">
            Based in Lisbon, Iowa. Working with organizations locally and through remote engagements.
          </p>
        </div>

        <nav aria-labelledby="footer-company">
          <h2 id="footer-company" className="font-sans text-sm font-semibold tracking-normal text-white">
            Company
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className="font-sans text-sm font-semibold tracking-normal text-white">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={s.href} className="hover:text-white">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-normal text-white">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
                <span className="sr-only"> (opens in a new tab)</span>
              </span>
            </a>
            <a href={site.phone.href} className="flex items-center gap-3 hover:text-white">
              <Phone className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {site.phone.display}
            </a>
            <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <span className="break-all">{site.email}</span>
            </a>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

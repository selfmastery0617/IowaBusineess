/**
 * Single source of truth for business details used across the site,
 * metadata, and structured data. Update contact details here only.
 */
export const site = {
  name: "IT Infrastructure Solutions",
  tagline: "IT Infrastructure Consulting and Software Engineering Services",
  description:
    "IT Infrastructure Solutions provides infrastructure consulting, technology solutions, and software engineering support for businesses planning, modernizing, and improving their technology environments.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.itinfrastructuresolutions.net").replace(/\/$/, ""),
  phone: {
    display: "(319) 455-6713",
    href: "tel:+13194556713",
    schema: "+1-319-455-6713",
  },
  email: "rcurtis@itinfrastructuresolutions.net",
  address: {
    street: "199 Cemetery Rd",
    city: "Lisbon",
    region: "IA",
    postalCode: "52253",
    country: "US",
    countryName: "United States",
  },
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`,
)}`;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Approach", href: "/approach" },
  { label: "Contact", href: "/contact" },
] as const;

/** Social sharing preview image (public/og-image.png, 1200×630). */
export const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "IT Infrastructure Solutions — IT Infrastructure Consulting and Software Engineering Services",
};

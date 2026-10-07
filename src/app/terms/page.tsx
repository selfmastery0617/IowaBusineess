import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the IT Infrastructure Solutions website.",
  alternates: { canonical: "/terms/" },
};

const EFFECTIVE_DATE = "October 7, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" description={<p>Effective date: {EFFECTIVE_DATE}</p>} />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-site">
          <div className="prose-legal max-w-3xl">
            <p>
              These Terms of Use apply to your use of this website, operated by {site.name}. By using the website, you
              agree to these terms.
            </p>

            <h2>Website content</h2>
            <p>
              Content on this website is provided for general information about our services. It is not technical,
              legal, or professional advice for any specific situation, and it does not create a consulting or
              client relationship.
            </p>

            <h2>Engagements</h2>
            <p>
              Any consulting, implementation, or software engineering services are provided only under a separate
              written agreement, proposal, or statement of work. The terms of that agreement govern the engagement.
            </p>

            <h2>Information you submit</h2>
            <p>
              Please do not submit confidential, sensitive, or regulated information through the contact form. If a
              discussion requires confidential information, we can arrange an appropriate method of sharing it. Our
              handling of submitted information is described in our <Link href="/privacy">Privacy Policy</Link>.
            </p>

            <h2>Intellectual property</h2>
            <p>
              The design, text, and graphics on this website belong to {site.name} unless otherwise noted, and may not
              be reproduced for commercial purposes without permission.
            </p>

            <h2>Acceptable use</h2>
            <p>
              You agree not to misuse the website, including by attempting to interfere with its operation, gain
              unauthorized access, or submit unlawful or abusive content.
            </p>

            <h2>Disclaimer and limitation of liability</h2>
            <p>
              The website is provided &ldquo;as is&rdquo; without warranties of any kind. To the extent permitted by
              law, {site.name} is not liable for damages arising from use of, or inability to use, this website.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of the State of Iowa, without regard to conflict-of-law principles.</p>

            <h2>Changes</h2>
            <p>We may update these terms from time to time. Changes take effect when posted on this page.</p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a> or by
              calling <a href={site.phone.href}>{site.phone.display}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

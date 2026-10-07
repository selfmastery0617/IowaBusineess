import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How IT Infrastructure Solutions collects, uses, and protects information submitted through this website.",
  alternates: { canonical: "/privacy/" },
};

const EFFECTIVE_DATE = "October 7, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={<p>Effective date: {EFFECTIVE_DATE}</p>}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-site">
          <div className="prose-legal max-w-3xl">
            <p>
              This Privacy Policy explains how {site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              collects, uses, and protects information when you visit this website or contact us through it.
            </p>

            <h2>Information we collect</h2>
            <p>We collect information you choose to provide, such as when you submit the contact form or email us. This may include:</p>
            <ul>
              <li>Your name and business email address</li>
              <li>Your company name and phone number, if provided</li>
              <li>The service you are interested in and the project details you share</li>
            </ul>
            <p>
              Like most websites, our hosting provider may automatically record basic technical information such as
              IP address, browser type, and pages requested, for security and operational purposes.
            </p>

            <h2>How we use information</h2>
            <p>We use the information you provide to:</p>
            <ul>
              <li>Respond to your inquiry and discuss your requirements</li>
              <li>Prepare proposals or communicate about a potential or existing engagement</li>
              <li>Maintain business records related to our communications</li>
              <li>Maintain the security and operation of this website</li>
            </ul>
            <p>We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</p>

            <h2>How information is shared</h2>
            <p>We share information only as needed to operate our business, for example:</p>
            <ul>
              <li>With service providers that host this website or process form submissions on our behalf</li>
              <li>
                With qualified subcontractors or technical resources involved in a potential engagement, limited to
                what is necessary to evaluate or perform the work
              </li>
              <li>When required by law or to protect our legal rights</li>
            </ul>

            <h2>Cookies and analytics</h2>
            <p>
              This website does not use advertising cookies. If we add website analytics in the future, we will update
              this policy to describe the tools used and the information they collect.
            </p>

            <h2>Data retention and security</h2>
            <p>
              We keep inquiry information for as long as reasonably needed to respond to you and maintain business
              records. We use reasonable administrative and technical measures to protect it, though no method of
              transmission or storage is completely secure.
            </p>

            <h2>Your choices</h2>
            <p>
              You may ask us to access, correct, or delete the personal information you have provided by contacting us
              using the details below. We will respond to reasonable requests consistent with applicable law.
            </p>

            <h2>Third-party links</h2>
            <p>
              This website may link to third-party sites, such as map services. We are not responsible for the privacy
              practices of those sites.
            </p>

            <h2>Children&rsquo;s privacy</h2>
            <p>
              This website is intended for business audiences and is not directed to children under 13. We do not
              knowingly collect personal information from children.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes take effect when posted on this page with a
              revised effective date.
            </p>

            <h2>Contact us</h2>
            <p>
              {site.name}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              Phone: <a href={site.phone.href}>{site.phone.display}</a>
              <br />
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

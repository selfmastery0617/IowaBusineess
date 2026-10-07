import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div className="bg-grid mask-fade-b absolute inset-0" aria-hidden="true" />
      <div className="container-site relative py-28 text-center sm:py-36">
        <p className="font-mono text-sm font-semibold text-brand-700">404</p>
        <h1 className="mt-3 text-[2.25rem] font-bold sm:text-[2.75rem]">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Go to homepage <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

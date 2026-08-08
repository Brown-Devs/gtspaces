import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-cream px-6 pt-24 text-center">
      <p className="font-serif text-7xl font-semibold text-gold-500 sm:text-8xl">404</p>
      <h1 className="mt-4 font-serif text-2xl font-semibold text-ink-900 sm:text-3xl">
        This page could not be found
      </h1>
      <p className="mt-3 max-w-md text-ink-600">
        The page you&apos;re looking for may have been moved or doesn&apos;t exist. Let&apos;s get you
        back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          <Home size={16} /> Back to Home
        </Link>
        <Link href="/projects" className="btn-outline-dark">
          View Projects <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

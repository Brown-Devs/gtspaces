import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { projects } from "@/data/projects";

export function Footer() {
  return (
    <footer className="bg-ink-950 pb-24 pt-16 text-white/80 lg:pb-10">
      <div className="container-x grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-2.5">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={44}
              height={33}
              className="h-8 w-auto rounded-md bg-white/95 p-1"
            />
            <span className="font-serif text-lg font-semibold text-white">{siteConfig.name}</span>
          </Link>
          <p className="text-sm leading-relaxed text-white/60">{siteConfig.tagline}</p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">Featured Project</h4>
          <ul className="space-y-2.5 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="transition-colors hover:text-gold-400">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={`tel:+91${siteConfig.phone}`}>{siteConfig.phoneFormatted}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{siteConfig.address.line}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Real estate consultancy. Project details are indicative and subject to the developer&apos;s final documentation and RERA registration.</p>
      </div>
    </footer>
  );
}

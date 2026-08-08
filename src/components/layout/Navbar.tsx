"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-900/8 bg-white">
      <div className="container-x flex items-center justify-between py-3 lg:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={52}
            height={39}
            className="h-9 w-auto lg:h-11"
            priority
          />

          <div className="flex flex-col justify-center leading-none">
            <span className="font-serif text-lg font-bold uppercase tracking-[0.08em] text-ink-900 lg:text-2xl">
              GT Spaces
            </span>
            <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-gold-600 lg:text-xs">
              Real Estate Consultants
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-600 ${
                pathname === link.href ? "text-gold-600" : "text-ink-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary !px-6 !py-2.5 text-xs">
            Enquire Now
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-ink-900/8 bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-ink-800 hover:bg-cream"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="mt-2 rounded-lg px-3 py-3 text-sm font-medium text-ink-800 hover:bg-cream"
              >
                Call {siteConfig.phoneFormatted}
              </a>
              <Link href="/contact" className="btn-primary mt-2 w-full">
                Enquire Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

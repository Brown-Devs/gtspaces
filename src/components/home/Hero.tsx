"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";

export function Hero() {
  const project = projects[0];

  return (
    <section className="relative overflow-hidden bg-cream pt-24 lg:pt-28">
      <div className="container-x grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-6 lg:py-16">
        {/* Left: copy */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-gold-500/30 bg-gold-50 px-4 py-1.5 text-gold-700"
          >
            GT Spaces &mdash; Real Estate Consultants, Faridabad
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-ink-900 sm:text-5xl"
          >
            We Make Your
            <span className="block italic text-gold-600">Dreams True.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md text-base leading-relaxed text-ink-600"
          >
            Right now, we&apos;re proud to represent <strong className="text-ink-900">Skynest
            Towers</strong> in Sector 80, Faridabad, by BPTP Realty. Our team can walk you
            through every detail, from unit layouts to booking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link href="/projects/skynest-towers" className="btn-primary">
              View Skynest Towers <ArrowRight size={16} />
            </Link>
            <a href={`tel:+91${siteConfig.phone}`} className="btn-outline-dark">
              <PhoneCall size={16} /> {siteConfig.phoneFormatted}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-900/10 pt-6"
          >
            {["RERA-Registered", "IGBC Platinum Pre-Certified", "By BPTP Realty"].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm text-ink-600">
                <CheckCircle2 size={16} className="text-gold-600" /> {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: project spotlight card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-premium">
            <Image
              src={project.heroImage}
              alt={project.name}
              width={1200}
              height={900}
              priority
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="eyebrow text-gold-300">{project.tagline}</span>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">
                {project.name}
              </h2>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-white/80">
                <MapPin size={14} /> {project.location}
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/15 pt-4">
                {[
                  ["~150m", "Tower Height"],
                  ["20", "Sky Nests"],
                  ["3 & 4", "BHK"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <p className="font-serif text-xl font-semibold text-white sm:text-2xl">{v}</p>
                    <p className="text-[11px] text-white/65 sm:text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

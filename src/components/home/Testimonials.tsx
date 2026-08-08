"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    name: "Rohit Malhotra",
    role: "Buyer, Skynest Towers",
    quote:
      "GT Spaces walked us through every detail of the project, from the Sky Nest concept to the payment plan. No pressure, just clear answers.",
  },
  {
    name: "Simran Kaur",
    role: "Investor, Faridabad",
    quote:
      "I compared a few options across Sector 80 before deciding. Their site visit coordination and honesty about pricing made the decision easy.",
  },
  {
    name: "Ashok Verma",
    role: "Client, GT Spaces",
    quote:
      "Being local to Faridabad, they understood exactly what we were looking for and connected us with the right project quickly.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <AnimatedSection>
          <SectionHeading eyebrow="Client Voices" title="What Our Clients Say" />
        </AnimatedSection>

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="card-premium relative p-10 sm:p-14">
            <Quote className="text-gold-300" size={40} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-4 font-serif text-xl leading-relaxed text-ink-800 sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-3 font-semibold text-ink-900">{t.name}</p>
                <p className="text-sm text-ink-500">{t.role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex gap-3">
              <button
                aria-label="Previous testimonial"
                onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 transition-colors hover:bg-ink-900 hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => setIndex((index + 1) % testimonials.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 transition-colors hover:bg-ink-900 hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is GT Spaces a builder or a real estate consultant?",
    a: "We are a real estate consultancy based in Neharpar, Faridabad. We represent verified developments from established developers, such as Skynest Towers by BPTP Realty, and guide buyers through the entire process.",
  },
  {
    q: "Do the projects you represent come with clear RERA registration?",
    a: "Yes. Every project we list is checked for RERA registration and documentation, and we can share the registration details on request.",
  },
  {
    q: "What configurations are available at Skynest Towers?",
    a: "Skynest Towers offers 3 and 4 BHK residences with a utility room, powder room, and wraparound balconies up to 100 ft. Reach out for current pricing and availability.",
  },
  {
    q: "Do you charge buyers a fee for assistance?",
    a: "Our advisory support is offered at no extra cost to buyers. We'll always disclose our fee structure clearly if it ever applies.",
  },
  {
    q: "How do I schedule a site visit?",
    a: "Simply fill out the enquiry form on any project page or call us directly, and our team will arrange a site visit at your convenience.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y bg-cream">
      <div className="container-x max-w-3xl">
        <AnimatedSection>
          <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />
        </AnimatedSection>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <div key={f.q} className="card-premium overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-serif text-base font-semibold text-ink-900 sm:text-lg">{f.q}</span>
                <Plus
                  size={20}
                  className={cn(
                    "shrink-0 text-gold-500 transition-transform duration-300",
                    open === i && "rotate-45"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

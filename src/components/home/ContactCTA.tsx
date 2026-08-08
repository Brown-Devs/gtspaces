import { PhoneCall, MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { EnquiryForm } from "@/components/projects/EnquiryForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ContactCTA() {
  return (
    <section id="enquire" className="section-y scroll-mt-24 bg-ink-800 text-white">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimatedSection direction="right">
          <span className="eyebrow text-gold-300">Get In Touch</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl">
            Ready to Find Your Next Home?
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-white/75">
            Talk to our team about the right project for your budget and goals. We&apos;ll
            help you shortlist, visit, and evaluate, with zero pressure.
          </p>

          <div className="mt-8 space-y-4">
            <a href={`tel:+91${siteConfig.phone}`} className="flex items-center gap-3 text-lg font-semibold">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient text-ink-900">
                <PhoneCall size={18} />
              </span>
              {siteConfig.phoneFormatted}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-white/85">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25">
                <Mail size={18} />
              </span>
              {siteConfig.email}
            </a>
            <p className="flex items-center gap-3 text-white/85">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25">
                <MapPin size={18} />
              </span>
              {siteConfig.address.line}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.1}>
          <div className="rounded-3xl bg-white p-8 shadow-premium">
            <h3 className="font-serif text-xl font-semibold text-ink-900">Send Us an Enquiry</h3>
            <p className="mt-1.5 text-sm text-ink-500">We usually respond within a few hours.</p>
            <div className="mt-6">
              <EnquiryForm />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

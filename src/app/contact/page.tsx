import type { Metadata } from "next";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { EnquiryForm } from "@/components/projects/EnquiryForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GoogleMap } from "@/components/home/GoogleMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with GT Spaces, real estate consultants in Faridabad, for guidance on Skynest Towers and other properties across the Delhi NCR belt. Call, WhatsApp, or send us an enquiry.",
  alternates: { canonical: "/contact" },
};

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: siteConfig.phoneFormatted,
    href: `tel:+91${siteConfig.phone}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with our team",
    href: siteConfig.whatsappLink,
  },
  {
    icon: MapPin,
    title: "Office",
    value: siteConfig.address.line,
    href: "#map",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink-gradient pb-16 pt-28 text-white sm:pb-20 lg:pt-32">
        <div className="container-x text-center">
          <AnimatedSection>
            <span className="eyebrow text-gold-300">Contact Us</span>
            <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">Let&apos;s Talk Property</h1>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Have Skynest Towers in mind, or just exploring your options? Reach out, our team
              responds within a few hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-8">
        <div className="container-x grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map(({ icon: Icon, title, value, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-premium flex flex-col items-center gap-3 p-7 text-center transition-transform hover:-translate-y-1.5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-gold-400">
                <Icon size={20} />
              </span>
              <span className="font-serif font-semibold text-ink-900">{title}</span>
              <span className="text-sm text-ink-600">{value}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2">
          <AnimatedSection direction="right">
            <SectionHeading
              align="left"
              eyebrow="Send an Enquiry"
              title="Tell Us What You're Looking For"
              description="Share a few details and our team will reach out with tailored recommendations."
              className="mx-0"
            />
            <div className="mt-8 max-w-xl">
              <EnquiryForm />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.1} className="scroll-mt-28">
            <div id="map" />
            <SectionHeading
              align="left"
              eyebrow="Visit Us"
              title="Our Office"
              description="Shop 10, Near SRS International School, Neharpar, Faridabad. Serving clients across the Delhi NCR belt."
              className="mx-0"
            />
            <div className="mt-6">
              <GoogleMap label={siteConfig.address.line} height="h-[320px]" />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

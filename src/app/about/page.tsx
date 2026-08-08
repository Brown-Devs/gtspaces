import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart, Users2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GT Spaces' vision, mission, values, and journey as a real estate consultancy serving Faridabad and the wider Delhi NCR belt.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Vision", desc: "To be the most trusted real estate consultancy name in Faridabad, where every recommendation comes with clarity, not pressure." },
  { icon: Eye, title: "Mission", desc: "To simplify property decisions by connecting clients with verified developments and guiding them through every step, from enquiry to possession." },
  { icon: Heart, title: "Values", desc: "Transparency, verified documentation, and client-first thinking guide every project we bring to our clients. No exceptions." },
  { icon: Users2, title: "Why Clients Trust Us", desc: "We only recommend developments we'd be comfortable putting our own name behind. That discipline is why clients come back to us." },
];

const journey = [
  { year: "Foundation", text: "GT Spaces was founded in Neharpar, Faridabad, to bring honest, well-informed guidance to local property buyers." },
  { year: "Local Focus", text: "Built deep familiarity with Faridabad's growth corridors, from established sectors to emerging ones like Sector 80." },
  { year: "Developer Partnerships", text: "Began representing landmark developments from established names, including Skynest Towers by BPTP Realty." },
  { year: "Today", text: "Serving buyers and investors with end-to-end support, from discovery and site visits through to booking and possession." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-ink-gradient pt-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/8293744/pexels-photo-8293744.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="GT Spaces real estate consultancy"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-900/50" />
        </div>
        <div className="container-x relative z-10 py-16 text-center">
          <AnimatedSection>
            <span className="eyebrow text-gold-300">About Us</span>
            <h1 className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl">
              We Make Your Dreams True.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">
              We are a real estate consultancy dedicated to helping clients across Faridabad and
              the wider Delhi NCR belt make confident, well-informed property decisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <AnimatedSection direction="right">
            <div className="overflow-hidden rounded-[2rem] shadow-premium">
              <Image
                src="https://images.pexels.com/photos/6585628/pexels-photo-6585628.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="GT Spaces represented property interior"
                width={640}
                height={720}
                className="h-[480px] w-full object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.1}>
            <span className="eyebrow">Company Introduction</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900 sm:text-4xl">
              A Partner Invested in Your Outcome
            </h2>
            <p className="mt-5 leading-relaxed text-ink-600">
              GT Spaces was born from a straightforward idea: property decisions are too
              important to be left to guesswork or a glossy brochure alone. We built our practice
              around genuine due diligence, checking RERA registration, evaluating connectivity,
              and understanding true locational value before we bring any project to a client.
            </p>
            <p className="mt-4 leading-relaxed text-ink-600">
              Today, we represent landmark developments including Skynest Towers by BPTP Realty
              in Sector 80, Faridabad, chosen for its scale, documentation, and long-term
              investment potential.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-x">
          <AnimatedSection>
            <SectionHeading eyebrow="What Drives Us" title="Our Vision, Mission & Values" />
          </AnimatedSection>
          <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title}>
                <div className="card-premium h-full p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-ink-900">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x max-w-4xl">
          <AnimatedSection>
            <SectionHeading eyebrow="Our Journey" title="From Foundation to Trusted Consultancy" />
          </AnimatedSection>
          <div className="relative mt-16 space-y-10 border-l border-ink-900/10 pl-8">
            {journey.map((j, i) => (
              <AnimatedSection key={j.year} delay={i * 0.08} direction="right">
                <div className="relative">
                  <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-gradient" />
                  <p className="eyebrow">{j.year}</p>
                  <p className="mt-1.5 text-ink-700">{j.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-ink-gradient text-center text-white">
        <div className="container-x">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Ready to explore Skynest Towers?
            </h2>
            <Link href="/projects" className="btn-primary mt-8 inline-flex">
              View The Project <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

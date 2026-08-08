import { Search, ClipboardCheck, Handshake, KeyRound } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/AnimatedSection";

const steps = [
  { icon: Search, title: "Discover", desc: "Share your budget & preferred location, and we shortlist verified options that fit." },
  { icon: ClipboardCheck, title: "Evaluate", desc: "Site visits, unit comparisons, and documentation checks with our team." },
  { icon: Handshake, title: "Invest", desc: "We support negotiations, paperwork, and payment plans through to booking." },
  { icon: KeyRound, title: "Possess", desc: "Regular updates from booking through to handover and possession." },
];

export function Process() {
  return (
    <section className="section-y bg-cream">
      <div className="container-x">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Process"
            title="A Simple, Guided Path to Your Next Home"
          />
        </AnimatedSection>

        <Stagger className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink-900/10 lg:block" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <StaggerItem key={title} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink-900 text-gold-400 shadow-premium">
                <Icon size={24} />
              </div>
              <span className="mt-4 block font-serif text-sm font-semibold text-gold-600">
                Step {i + 1}
              </span>
              <h3 className="mt-1 font-serif text-lg font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

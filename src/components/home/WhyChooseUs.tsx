import { MapPinned, TrendingUp, Leaf, FileCheck2, HeadphonesIcon, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/AnimatedSection";

const reasons = [
  {
    icon: FileCheck2,
    title: "Verified, RERA-Registered Projects",
    desc: "Every project we represent is checked for registration, documentation, and developer credibility before it reaches our clients.",
  },
  {
    icon: TrendingUp,
    title: "Investment-First Insight",
    desc: "We evaluate connectivity, developer track record, and growth trends, not just a glossy brochure.",
  },
  {
    icon: MapPinned,
    title: "Deep Local Knowledge",
    desc: "Based in Neharpar, Faridabad, we know the city's growth corridors, from Sector 80 to the wider NCR belt.",
  },
  {
    icon: Leaf,
    title: "Quality-First Recommendations",
    desc: "We only bring forward developments we would recommend to our own family, like Skynest Towers.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "A single point of contact for site visits, unit selection, and booking, right through to handover.",
  },
  {
    icon: Handshake,
    title: "Transparent Dealings",
    desc: "No hidden costs, no inflated promises. Honest pricing and realistic timelines, always.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-y bg-cream">
      <div className="container-x">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The GT Spaces Advantage"
            description="A disciplined, client-first approach to real estate advisory."
          />
        </AnimatedSection>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="card-premium group h-full p-8 transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-900 text-gold-400 transition-colors group-hover:bg-gold-gradient group-hover:text-ink-900">
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
  );
}

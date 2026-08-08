import { LineChart, MapPin, Landmark, PiggyBank } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/AnimatedSection";

const benefits = [
  {
    icon: LineChart,
    title: "Strong Capital Appreciation",
    desc: "Sector 80 and the wider Faridabad belt continue to see steady price growth as highway and metro links expand.",
  },
  {
    icon: MapPin,
    title: "Genuine Location Diligence",
    desc: "We only take on projects with real expressway, metro, or landmark proximity, not just a brochure claim.",
  },
  {
    icon: Landmark,
    title: "Infrastructure-Led Growth",
    desc: "Proximity to the DND-KMP Expressway, NH-44, and the upcoming FNG Expressway and Jewar Airport drives sustained demand.",
  },
  {
    icon: PiggyBank,
    title: "Guided Payment Planning",
    desc: "We help you understand payment plans and developer timelines clearly before you commit.",
  },
];

export function InvestmentBenefits() {
  return (
    <section className="section-y bg-ink-gradient text-white">
      <div className="container-x">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Investment Benefits"
            title="Why Faridabad Belongs on Your Shortlist"
            description="A high-growth micro-market backed by expressway access and demand fundamentals."
            light
          />
        </AnimatedSection>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:bg-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-ink-900">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

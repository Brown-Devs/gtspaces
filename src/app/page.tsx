import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProjectHighlights } from "@/components/home/ProjectHighlights";
import { InvestmentBenefits } from "@/components/home/InvestmentBenefits";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { ContactCTA } from "@/components/home/ContactCTA";
import { GoogleMap } from "@/components/home/GoogleMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Real Estate Consultants in Faridabad | Skynest Towers, Sector 80",
  description:
    "GT Spaces is a real estate consultancy in Faridabad helping buyers and investors find verified opportunities across the NCR, including Skynest Towers by BPTP Realty in Sector 80.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectHighlights />
      <WhyChooseUs />
      <InvestmentBenefits />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <section className="section-y bg-white">
        <div className="container-x">
          <AnimatedSection>
            <SectionHeading eyebrow="Find Us" title="Visit Our Office in Faridabad" />
          </AnimatedSection>
          <div className="mt-10">
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  CheckCircle2,
  Building2,
  Calendar,
  Ruler,
  ArrowRight,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Gallery } from "@/components/projects/Gallery";
import { VideoPlayer } from "@/components/projects/VideoPlayer";
import { Amenities } from "@/components/projects/Amenities";
import { FloorPlans } from "@/components/projects/FloorPlans";
import { EnquiryForm } from "@/components/projects/EnquiryForm";
import { GoogleMap } from "@/components/home/GoogleMap";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/AnimatedSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} | ${project.configurations}`,
    description: project.description[0],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} | ${siteConfig.name}`,
      description: project.description[0],
      images: [{ url: project.heroImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: project.name,
    description: project.description[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: project.location,
      addressRegion: project.city,
    },
    image: project.heroImage,
  };

  return (
    <>
      <JsonLd data={schema} />

      {/* Hero Banner */}
      <section className="relative flex min-h-[75vh] items-end overflow-hidden pt-28 lg:pt-32">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/20" />
        <div className="container-x relative z-10 pb-14 text-white">
          <AnimatedSection>
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-gold-gradient px-3 py-1 font-semibold text-ink-900">
                {project.launchStatus}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                <MapPin size={12} /> {project.location}
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                <Calendar size={12} /> {project.possession}
              </span>
            </div>
            <h1 className="mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-gold-300">{project.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#enquire" className="btn-primary">
                Enquire Now <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="section-y bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <span className="eyebrow">Project Overview</span>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink-900">
                About {project.name}
              </h2>
              <div className="mt-5 space-y-4">
                {project.description.map((para, i) => (
                  <p key={i} className="leading-relaxed text-ink-600">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-lg font-semibold text-ink-900">Highlights</h3>
                <Stagger className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <StaggerItem key={h}>
                      <div className="flex items-start gap-2.5 text-sm text-ink-700">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-gold-500" />
                        <span>{h}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left" className="lg:col-span-1">
            <div className="card-premium sticky top-28 space-y-5 p-7">
              <h3 className="font-serif text-lg font-semibold text-ink-900">Project Snapshot</h3>
              {[
                { icon: Building2, label: "Developer", value: project.developer },
                { icon: MapPin, label: "Location", value: project.location },
                { icon: Ruler, label: "Total Area", value: project.totalArea },
                { icon: Calendar, label: "Possession", value: project.possession },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 border-t border-ink-900/8 pt-4 first:border-t-0 first:pt-0">
                  <Icon size={17} className="mt-0.5 shrink-0 text-gold-500" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-ink-400">{label}</p>
                    <p className="mt-0.5 text-sm font-medium text-ink-800">{value}</p>
                  </div>
                </div>
              ))}
              <p className="border-t border-ink-900/8 pt-4 text-[11px] leading-relaxed text-ink-400">
                HRERA: {project.hrera}
              </p>
              <a href={`tel:+91${project.contactPhone ?? siteConfig.phone}`} className="btn-primary mt-4 w-full !py-3">
                Call Sales Team
              </a>
              <p className="text-center text-[11px] text-ink-400">Marketed by {siteConfig.name}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Walkthrough */}
      {project.videoUrl && (
        <section className="section-y bg-white">
          <div className="container-x">
            <AnimatedSection>
              <SectionHeading eyebrow="Watch" title="Project Walkthrough" align="left" className="mx-0" />
            </AnimatedSection>
            <div className="mt-10 mx-auto max-w-4xl">
              <VideoPlayer src={project.videoUrl} poster={project.heroImage} />
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section-y bg-cream">
        <div className="container-x">
          <AnimatedSection>
            <SectionHeading eyebrow="Gallery" title="A Closer Look" align="left" className="mx-0" />
          </AnimatedSection>
          <div className="mt-10">
            <Gallery images={project.gallery} />
          </div>
        </div>
      </section>

      {/* Site Features */}
      <section className="section-y bg-white">
        <div className="container-x">
          <AnimatedSection>
            <SectionHeading eyebrow="Site Features" title="What This Project Offers" align="left" className="mx-0" />
          </AnimatedSection>
          <div className="mt-10">
            <Amenities groups={project.siteFeatures} />
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="section-y bg-cream">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2">
          <AnimatedSection direction="right">
            <SectionHeading eyebrow="Location Advantages" title="Well-Connected, Well Positioned" align="left" className="mx-0" />
            <div className="mt-8 space-y-3">
              {project.nearbyLandmarks.map((l) => (
                <div key={l.label} className="flex items-center justify-between rounded-xl bg-white px-5 py-4 shadow-sm">
                  <span className="flex items-center gap-2.5 text-sm font-medium text-ink-800">
                    <MapPin size={15} className="text-gold-500" /> {l.label}
                  </span>
                  <span className="text-sm font-semibold text-ink-500">{l.distance}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.1}>
            <GoogleMap label={`${project.name}, ${project.location}`} height="h-full min-h-[380px]" />
          </AnimatedSection>
        </div>
      </section>

      {/* Unit Types & Pricing */}
      <section className="section-y bg-white">
        <div className="container-x">
          <AnimatedSection>
            <SectionHeading eyebrow="Unit Types & Pricing" title="Sizes & Rates" align="left" className="mx-0" />
          </AnimatedSection>
          <div className="mt-10">
            <FloorPlans plans={project.plotOptions} />
          </div>
          <AnimatedSection className="mt-6">
            <div className="rounded-2xl border border-gold-200 bg-gold-50 p-6 text-sm text-ink-700">
              <strong className="font-semibold text-ink-900">Pricing: </strong>
              {project.pricing}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="section-y bg-ink-gradient text-white">
        <div className="container-x">
          <AnimatedSection>
            <SectionHeading eyebrow="Investment Benefits" title={`Why Invest in ${project.name}`} light align="left" className="mx-0" />
          </AnimatedSection>
          <Stagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {project.investmentBenefits.map((b) => (
              <StaggerItem key={b}>
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold-400" />
                  <p className="text-sm leading-relaxed text-white/85">{b}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="section-y scroll-mt-24 bg-white">
        <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2">
          <AnimatedSection direction="right">
            <SectionHeading
              align="left"
              eyebrow="Enquire Now"
              title={`Interested in ${project.name}?`}
              description="Share your details and our team will send you the latest pricing and unit availability."
              className="mx-0"
            />
            <div className="mt-4 overflow-hidden rounded-2xl">
              <Image
                src={project.gallery[0]?.src ?? project.heroImage}
                alt={project.name}
                width={640}
                height={420}
                className="h-64 w-full object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={0.1}>
            <div className="card-premium p-8">
              <EnquiryForm projectName={project.name} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="section-y bg-cream">
          <div className="container-x">
            <AnimatedSection>
              <SectionHeading eyebrow="Explore More" title="Related Projects" />
            </AnimatedSection>
            <Stagger className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((p, i) => (
                <StaggerItem key={p.slug}>
                  <ProjectCard project={p} index={i} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}
    </>
  );
}

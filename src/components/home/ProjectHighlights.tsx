import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { AnimatedSection, Stagger, StaggerItem } from "@/components/ui/AnimatedSection";

export function ProjectHighlights() {
  const project = projects[0];

  return (
    <section className="section-y bg-white">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        <AnimatedSection direction="right">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={project.gallery[1].src}
              alt={project.gallery[1].caption}
              width={500}
              height={620}
              className="h-64 w-full rounded-2xl object-cover shadow-premium sm:h-80"
            />
            <Image
              src={project.gallery[4].src}
              alt={project.gallery[4].caption}
              width={500}
              height={620}
              className="mt-8 h-64 w-full rounded-2xl object-cover shadow-premium sm:h-80"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.1}>
          <span className="eyebrow">Our Featured Project</span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            {project.name}, {project.location}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-600">{project.description[0]}</p>

          <Stagger className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.highlights.slice(0, 6).map((h) => (
              <StaggerItem key={h}>
                <div className="flex items-start gap-2.5 text-sm text-ink-700">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-gold-600" />
                  <span>{h}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Link href={`/projects/${project.slug}`} className="btn-primary mt-9">
            Explore Skynest Towers <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-premium group relative flex h-full flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-2"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-800">
          {project.configurations}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
          <p className="flex items-center gap-1 text-xs">
            <MapPin size={13} /> {project.location}
          </p>
          <p className="text-xs font-semibold">{project.totalArea}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{project.developer}</p>
        <h3 className="mt-1.5 font-serif text-xl font-semibold text-ink-900">{project.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-600">{project.description[0]}</p>

        <div className="mt-5 flex items-center justify-between border-t border-ink-900/8 pt-4">
          <span className="text-xs font-medium text-ink-500">{project.possession}</span>
          <span className="flex items-center gap-1 text-sm font-semibold text-gold-600">
            View Details <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}

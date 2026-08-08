import { redirect } from "next/navigation";
import { projects } from "@/data/projects";

// GT Spaces currently represents a single flagship project. Once a second
// project is added to src/data/projects.ts, replace this redirect with a
// proper listing page (grid of ProjectCard components).
export default function ProjectsPage() {
  redirect(`/projects/${projects[0].slug}`);
}

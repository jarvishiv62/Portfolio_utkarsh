import { PROJECTS } from "@/shared/lib/content";

export function getFeaturedProjects() {
  return PROJECTS.slice(0, 3); // Return top 3 projects
}

export const projects = PROJECTS;

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

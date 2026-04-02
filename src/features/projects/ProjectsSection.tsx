// src/features/projects/ProjectsSection.tsx
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { ProjectCard } from "@/shared/components/ui/ProjectCard";
import { TerminalSVG } from "@/shared/components/ui/Svgs";
import { PROJECTS } from "@/shared/lib/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12 items-start">
          <div>
            <FadeIn>
              <SectionHeader label="// projects" title="stuff i actually built" />
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-4 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
                {/* not tutorial clones. not &quot;inspired by x.&quot; just things i built because the problem was real. */}
                not tutorial clones. three projects, three real problems. expand any card for the full story.
              </p>
            </FadeIn>

            <div className="space-y-6">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>

          {/* terminal SVG sidebar */}
          <div className="hidden lg:block sticky top-24">
            <FadeIn direction="right" delay={0.3}>
              <TerminalSVG className="w-full opacity-70" />
              <p
                className="text-xs text-center mt-3 font-mono"
                style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
              >
                {/* actual git history. probably. */}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

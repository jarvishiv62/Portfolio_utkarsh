// src/app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/shared/lib/content";
import { pageMeta } from "@/shared/lib/metadata";
import { Badge } from "@/shared/components/ui/Badge";
import { CircuitCornerSVG } from "@/shared/components/ui/Svgs";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return pageMeta({
    title: project.title,
    description: project.tagline,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const isGold = project.color === "gold";

  return (
    <div className="section-pad pt-[calc(var(--nav-h)+3rem)] max-w-4xl mx-auto">
      {/* back */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm font-mono mb-8 transition-opacity hover:opacity-70"
        style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
      >
        ← back to projects
      </Link>

      {/* circuit corner decorations */}
      <div className="relative">
        <CircuitCornerSVG className="absolute -top-4 -left-4 w-12 h-12 opacity-30" />
        <CircuitCornerSVG
          className="absolute -top-4 -right-4 w-12 h-12 opacity-30"
          style={{ transform: "scaleX(-1)" }}
        />

        {/* header */}
        <div
          className="p-8 mb-6"
          style={{
            background: "var(--surface)",
            border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
          }}
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="label-mono">{project.year}</span>
                <span
                  className="text-xs px-2 py-0.5 font-mono"
                  style={{
                    background: isGold
                      ? "var(--gold-dim)"
                      : "var(--accent-dim)",
                    color: isGold ? "var(--gold)" : "var(--accent)",
                    border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {project.status}
                </span>
              </div>
              <h1
                className="text-4xl font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  color: isGold ? "var(--gold)" : "var(--accent)",
                }}
              >
                {project.title}
              </h1>
              <p
                className="mt-2 text-base"
                style={{ color: "var(--text-muted)" }}
              >
                {project.tagline}
              </p>
            </div>
          </div>

          {/* metrics */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-4 text-center"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="text-xl font-black font-mono"
                  style={{
                    color: isGold ? "var(--gold)" : "var(--accent)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {m.value}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{ color: "var(--text-faint)" }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* story layers */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {[
            { label: "// the problem", text: project.story.problem },
            { label: "// the fix", text: project.story.solution },
            { label: "// how it works", text: project.story.technical },
            { label: "// the outcome", text: project.story.outcome },
          ].map(({ label, text }) => (
            <div
              key={label}
              className="rounded-2xl p-5"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="label-mono mb-2">{label}</div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* tech stack */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <div className="label-mono mb-3">tech stack</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant={isGold ? "gold" : "purple"}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
// src/features/about/AboutSection.tsx
import { useInView } from "@/shared/hooks/useInView";
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import { SKILLS, TECH_TAGS } from "@/shared/lib/content";
import { cn } from "@/shared/lib/utils";

const CATEGORIES = [
  { key: "backend", label: "backend" },
  { key: "frontend", label: "frontend" },
  { key: "database", label: "database" },
  { key: "tools", label: "tools" },
  { key: "ai", label: "ai" },
] as const;

function SkillBar({ name, level, color }: { name: string; level: number; color: "purple" | "gold" }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div ref={ref} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm" style={{ color: "var(--text-muted)" }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: color === "gold" ? "var(--gold)" : "var(--accent)", fontFamily: "var(--font-mono)" }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "var(--surface-2)" }}
      >
        <div
          className={cn("skill-fill", inView && "animate")}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader label="// about" title="the honest bio" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* left — bio */}
          <FadeIn direction="left" delay={0.1}>
            <div
              className="rounded-2xl p-6 glow-border"
              style={{ background: "var(--surface)" }}
            >
              {/* console comment block */}
              <pre
                className="text-xs leading-relaxed mb-5 overflow-x-auto"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)" }}
              >
{`/**
 * @name     Utkarsh Maurya
 * @college  REC Bijnor — B.Tech IT
 * @grad     2026
 * @location Bareilly, UP, India
 * @status   open to work
 * @note     yes, the API really is 30% faster
 */`}
              </pre>

              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                i&apos;m a final-year CS student who builds things that actually ship.
                two real on-site internships — not &quot;worked on a startup idea with friends&quot;.
                actual clients, actual deadlines, actual prod deployments.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                my main weapon is <span style={{ color: "var(--accent)" }}>laravel</span> — i can do the full thing:
                schema design, auth flows, RBAC, query optimization, REST APIs that don&apos;t shame you in postman.
                i&apos;m learning <span style={{ color: "var(--gold)" }}>next.js seriously</span> now
                because static HTML is a vibe but SSR is a lifestyle.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                outside of code: i play sports, touch grass occasionally, and
                genuinely enjoy reading docs. yes really. it&apos;s how you stop guessing.
              </p>

              {/* tech tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {TECH_TAGS.map((tag, i) => (
                  <Badge key={tag} variant={i % 3 === 2 ? "gold" : i % 2 === 0 ? "purple" : "ghost"}>
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* right — skill bars */}
          <FadeIn direction="right" delay={0.2}>
            <div>
              {CATEGORIES.map((cat) => {
                const catSkills = SKILLS.filter((s) => s.category === cat.key);
                if (catSkills.length === 0) return null;
                return (
                  <div key={cat.key} className="mb-7">
                    <div className="label-mono mb-3">{cat.label}</div>
                    {catSkills.map((skill, i) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        color={i % 2 === 0 ? "purple" : "gold"}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

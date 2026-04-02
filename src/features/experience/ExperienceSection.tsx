// src/features/experience/ExperienceSection.tsx
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { Badge } from "@/shared/components/ui/Badge";
import { EXPERIENCES } from "@/shared/lib/content";
import { RocketSVG } from "@/shared/components/ui/Svgs";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader label="// experience" title="where i actually worked" />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_120px] gap-8 items-start">
          {/* timeline */}
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-[2px]"
              style={{ background: "linear-gradient(to bottom, var(--accent), var(--gold))", opacity: 0.3 }}
            />

            <div className="space-y-10">
              {EXPERIENCES.map((exp, i) => (
                <FadeIn key={exp.company} delay={i * 0.12}>
                  <div className="relative pl-8">
                    {/* timeline dot */}
                    <div
                      className="absolute left-0 top-1 w-[16px] h-[16px] rounded-full border-2"
                      style={{
                        borderColor: i === 0 ? "var(--accent)" : "var(--gold)",
                        background: "var(--bg)",
                        boxShadow: `0 0 12px ${i === 0 ? "var(--accent-glow)" : "var(--gold-glow)"}`,
                      }}
                    />

                    <div
                      className="rounded-2xl p-6"
                      style={{
                        background: "var(--surface)",
                        border: `1px solid ${i === 0 ? "var(--border)" : "var(--border-gold)"}`,
                      }}
                    >
                      {/* header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                        <div>
                          <h3
                            className="text-lg font-bold"
                            style={{
                              fontFamily: "var(--font-display)",
                              color: i === 0 ? "var(--accent)" : "var(--gold)",
                            }}
                          >
                            {exp.role}
                          </h3>
                          <p className="text-sm font-mono mt-0.5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                            {exp.company} · {exp.type}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="label-mono">{exp.period}</div>
                          <div
                            className="text-xs mt-1 font-mono px-2 py-0.5 rounded-full"
                            style={{
                              background: i === 0 ? "var(--accent-dim)" : "var(--gold-dim)",
                              color: i === 0 ? "var(--accent)" : "var(--gold)",
                              fontFamily: "var(--font-mono)",
                            }}
                          >
                            {exp.highlight}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm italic mb-4" style={{ color: "var(--text-faint)" }}>
                        {exp.description}
                      </p>

                      {/* bullets */}
                      <ul className="space-y-2 mb-4">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                            <span style={{ color: i === 0 ? "var(--accent)" : "var(--gold)" }}>→</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {/* tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant={i === 0 ? "purple" : "gold"}>{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}

              {/* education entry */}
              <FadeIn delay={EXPERIENCES.length * 0.12}>
                <div className="relative pl-8">
                  <div
                    className="absolute left-0 top-1 w-[16px] h-[16px] rounded-full border-2"
                    style={{ borderColor: "var(--text-faint)", background: "var(--bg)" }}
                  />
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                          B.Tech — Information Technology
                        </h3>
                        <p className="text-sm font-mono mt-0.5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                          Rajkiya Engineering College, Bijnor
                        </p>
                      </div>
                      <div className="label-mono">2022 – 2026</div>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-faint)" }}>
                      also: T&P coordinator — helped organize placement activities.
                      because apparently being a dev wasn&apos;t enough side-quests.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* rocket SVG sidebar */}
          <div className="hidden lg:flex justify-center pt-4">
            <RocketSVG className="w-20 h-40 opacity-60" style={{ animation: "float 6s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

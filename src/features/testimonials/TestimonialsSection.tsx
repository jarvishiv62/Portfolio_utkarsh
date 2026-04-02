"use client";
// src/features/testimonials/TestimonialsSection.tsx
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/shared/lib/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader label="// social proof" title="what actual humans said" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-3 mb-10 text-sm" style={{ color: "var(--text-muted)" }}>
            {/* not fake endorsements. real people i worked with. */}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const isGold = t.accentColor === "gold";
            return (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = isGold ? "var(--gold)" : "var(--accent)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 20px ${isGold ? "var(--gold-glow)" : "var(--accent-glow)"}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = isGold ? "var(--border-gold)" : "var(--border)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* quote mark */}
                  <div
                    className="text-4xl font-black leading-none mb-3 select-none"
                    style={{ color: isGold ? "var(--gold-dim)" : "var(--accent-dim)", fontFamily: "var(--font-display)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>

                  {/* text */}
                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {t.text}
                  </p>

                  {/* author */}
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    {/* avatar initials */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                      style={{
                        background: isGold ? "var(--gold-dim)" : "var(--accent-dim)",
                        color: isGold ? "var(--gold)" : "var(--accent)",
                        border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold" style={{ color: "var(--text)", fontFamily: "var(--font-display)" }}>
                        {t.name}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-faint)" }}>
                        {t.role} · {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

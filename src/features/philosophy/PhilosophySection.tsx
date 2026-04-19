"use client";
// src/features/philosophy/PhilosophySection.tsx
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { YantraSVG } from "@/shared/components/ui/Svgs";
import { PHILOSOPHY_ITEMS } from "@/shared/lib/content";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-12 items-start">
          {/* yantra sidebar — sticky */}
          <div className="hidden lg:block sticky top-28">
            <FadeIn direction="left">
              <YantraSVG className="w-full opacity-50" />
            </FadeIn>
          </div>

          <div>
            <FadeIn>
              <SectionHeader
                label="// philosophy"
                title="how i think about code"
              />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {PHILOSOPHY_ITEMS.map((item, i) => {
                const isGold = i % 2 !== 0;
                return (
                  <FadeIn key={item.num} delay={i * 0.1}>
                    <div
                      className="p-6 h-full"
                      style={{
                        background: "var(--surface)",
                        border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
                        transition:
                          "box-shadow 0.3s ease, border-color 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.borderColor = isGold
                          ? "var(--gold)"
                          : "var(--accent)";
                        el.style.boxShadow = `0 0 24px ${isGold ? "var(--gold-glow)" : "var(--accent-glow)"}`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.borderColor = isGold
                          ? "var(--border-gold)"
                          : "var(--border)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="text-4xl font-black mb-3 leading-none select-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: isGold
                            ? "var(--gold-dim)"
                            : "var(--accent-dim)",
                        }}
                      >
                        {item.num}
                      </div>
                      <h3
                        className="text-base font-bold mb-2"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: isGold ? "var(--gold)" : "var(--accent)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            {/* quote block */}
            <FadeIn delay={0.5}>
              <div
                className="mt-8 p-6 relative overflow-hidden"
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--accent), var(--gold))",
                  }}
                />
                <blockquote className="pl-4">
                  <p
                    className="text-base italic leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    &ldquo;the difference between a senior and a junior
                    isn&apos;t the language. it&apos;s knowing which problems to
                    not solve.&rdquo;
                  </p>
                  <footer className="mt-2 label-mono">
                    {"// something i try to remember before over-engineering"}
                  </footer>
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
// src/features/contact/ContactSection.tsx
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { ContactForm } from "@/shared/components/ui/ContactForm";
import { Tooltip } from "@/shared/components/ui/Tooltip";
import { SatelliteSVG } from "@/shared/components/ui/Svgs";
import { useCopyToClipboard } from "@/shared/hooks/useCopyToClipboard";
import { SITE } from "@/shared/lib/metadata";

export function ContactSection() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader label="// contact" title="let's build something" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="mt-3 mb-10 text-sm max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            {/* no spam, no newsletters, just a real reply. */}
            open to full-time roles, internships, and freelance gigs. graduating
            june 2026. remote-friendly. responds within 24hr.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left — links */}
          <FadeIn direction="left" delay={0.2}>
            <div className="space-y-4">
              {/* email card with copy */}
              <Tooltip
                content={copied ? "copied! ✓" : "click to copy"}
                side="top"
              >
                <button
                  onClick={() => copy(SITE.email)}
                  className="w-full p-5 text-left transition-all duration-200 group"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "var(--accent)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 0 18px var(--accent-glow)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "var(--border)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "none";
                  }}
                >
                  <div className="label-mono mb-1">email</div>
                  <div
                    className="text-sm font-mono"
                    style={{
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {SITE.email}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {copied ? "✓ copied to clipboard" : "click to copy"}
                  </div>
                </button>
              </Tooltip>

              {/* social links */}
              {[
                {
                  label: "github",
                  value: "github.com/jarvishiv62",
                  href: SITE.github,
                  color: "purple" as const,
                },
                {
                  label: "linkedin",
                  value: "linkedin.com/in/UTKARSH--maurya--",
                  href: SITE.linkedin,
                  color: "gold" as const,
                },
              ].map(({ label, value, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 transition-all duration-200"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${color === "gold" ? "var(--border-gold)" : "var(--border)"}`,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor =
                      color === "gold" ? "var(--gold)" : "var(--accent)";
                    el.style.boxShadow = `0 0 18px ${color === "gold" ? "var(--gold-glow)" : "var(--accent-glow)"}`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor =
                      color === "gold" ? "var(--border-gold)" : "var(--border)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div className="label-mono mb-1">{label}</div>
                  <div
                    className="text-sm font-mono"
                    style={{
                      color: color === "gold" ? "var(--gold)" : "var(--accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {value}
                  </div>
                </a>
              ))}

              {/* resume download */}
              <a
                href="/UTKARSH_resume_L.pdf"
                download
                className="flex items-center justify-between p-5 transition-all duration-200"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-gold)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--gold)";
                  el.style.boxShadow = "0 0 18px var(--gold-glow)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "var(--border-gold)";
                  el.style.boxShadow = "none";
                }}
              >
                <div>
                  <div
                    className="label-mono mb-1"
                    style={{ color: "var(--gold)" }}
                  >
                    resume
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-faint)" }}
                  >
                    PDF · updated apr 2026
                  </div>
                </div>
                <span
                  className="text-xl"
                  style={{ color: "var(--gold)" }}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </a>

              {/* availability note */}
              <div
                className="p-4 flex items-center gap-3"
                style={{
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="w-2.5 h-2.5 shrink-0"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent-glow)",
                    animation: "pulse-soft 3s ease-in-out infinite",
                  }}
                />
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--accent)" }}>available</span> for
                  full-time roles after june 2026 graduation. also open to
                  remote internships right now.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* right — form + satellite */}
          <div>
            <FadeIn direction="right" delay={0.3}>
              {/* satellite decorative */}
              <div className="hidden lg:flex justify-end mb-6 opacity-50">
                <SatelliteSVG className="w-24 h-24" />
              </div>

              <div
                className="p-6"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="label-mono mb-5">send a message</div>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

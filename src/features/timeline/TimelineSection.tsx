"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { CinemaReveal, CinemaChild } from "@/shared/components/ui/Reveal";

const EVENTS = [
  {
    year: "2022",
    type: "education",
    title: "B.Tech begins.",
    org: "Rajkiya Engineering College, Bijnor",
    desc: "Information Technology. Four years to figure out that building things was more interesting than studying about them.",
    tags: ["IT Engineering", "Started building"],
    color: "var(--accent)",
    side: "left",
  },
  {
    year: "Jun–Sep 2025",
    type: "internship",
    title: "First real job.",
    org: "Innovilla Pvt. Ltd. — Web Dev Intern",
    desc: "Laravel backend: auth, RBAC, REST API endpoints. Session-based auth with Sanctum. First time a real client used something I built.",
    tags: ["Laravel", "Sanctum", "RBAC", "MySQL"],
    color: "var(--gold)",
    side: "right",
    highlights: [
      "Implemented RBAC with Laravel guards and middleware",
      "Optimized SQL queries for high-traffic pages",
      "Shipped Travel Portal to production on Vercel",
    ],
  },
  {
    year: "Jan 2025–Jun 2025",
    type: "leadership",
    title: "Led campus placement.",
    org: "Training & Placement Coordinator — REC Bijnor",
    desc: "Coordinated recruitment drives for 100+ students. Managed recruiter logistics, shortlisting, and interview scheduling. Learned that communication is a technical skill.",
    tags: ["Leadership", "100+ students", "Logistics"],
    color: "var(--accent)",
    side: "left",
  },
  {
    year: "Oct 2025–Jan 2026",
    type: "internship",
    title: "Levelled up.",
    org: "Dizi Global Solutions — Software Dev Intern",
    desc: "REST APIs consumed by React.js and Next.js frontends. Agile sprints. Direct client communication. ~30% response time improvement through query optimization.",
    tags: ["REST API", "Next.js", "Agile", "Postman"],
    color: "var(--gold)",
    side: "right",
    highlights: [
      "Designed APIs consumed by React + Next.js frontends",
      "Cut API response time ~30% via query optimization",
      "Collaborated directly with clients to deliver on-schedule",
    ],
  },
  {
    year: "2026",
    type: "future",
    title: "Graduating.",
    org: "What's next?",
    desc: 'Final year. Looking for a full-stack role where problems are real, team ships, and "production-ready" is actual bar.',
    tags: ["Available", "Full-Stack", "Open to roles"],
    color: "var(--accent)",
    side: "left",
  },
];

function TimelineCard({ ev }: { ev: (typeof EVENTS)[0] }) {
  const isGold = ev.color === "var(--gold)";

  return (
    <div
      className="rounded-2xl p-6 cursor-pointer"
      style={{
        background: "var(--surface)",
        border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
        transition:
          "box-shadow 0.3s ease, border-color 0.3s ease, transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = isGold ? "var(--gold)" : "var(--accent)";
        el.style.boxShadow = `0 0 20px ${isGold ? "var(--gold-glow)" : "var(--accent-glow)"}`;
        el.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = isGold ? "var(--border-gold)" : "var(--border)";
        el.style.boxShadow = "none";
        el.style.transform = "translateY(0px)";
      }}
    >
      {/* header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div>
          <h3
            className="text-lg font-bold"
            style={{
              fontFamily: "var(--font-display)",
              color: ev.color,
            }}
          >
            {ev.title}
          </h3>
          <p
            className="text-sm font-mono mt-0.5"
            style={{ color: "var(--text-muted)" }}
          >
            {ev.org}
          </p>
        </div>
        <div className="text-right">
          <div className="label-mono">{ev.year}</div>
        </div>
      </div>

      <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
        {ev.desc}
      </p>

      {/* highlights if available */}
      {ev.highlights && (
        <ul className="space-y-2 mb-4">
          {ev.highlights.map((highlight, j) => (
            <li
              key={j}
              className="flex gap-2 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span style={{ color: ev.color }}>→</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      {/* tags */}
      <div className="flex flex-wrap gap-2">
        {ev.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full font-mono"
            style={{
              background: `${ev.color}20`,
              color: ev.color,
              border: `1px solid ${ev.color}40`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="nebula"
        style={{
          width: 400,
          height: 400,
          top: "30%",
          right: "-5%",
          background: "oklch(0.68 0.12 20 / 0.08)",
          pointerEvents: "none",
        }}
      />

      <div className="container-portfolio">
        <CinemaReveal>
          <CinemaChild>
            <p className="section-label">// journey</p>
          </CinemaChild>
          <CinemaChild>
            <div style={{ marginTop: "1.25rem", marginBottom: "4rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  lineHeight: 1.1,
                }}
              >
                every chapter
                <br />
                <span className="text-gradient-gold">leaves a mark.</span>
              </h2>
            </div>
          </CinemaChild>
        </CinemaReveal>

        {/* Timeline */}
        <div
          style={{ position: "relative", maxWidth: "48rem", margin: "0 auto" }}
        >
          {/* Animated track */}
          <div
            className="tl-track-desktop"
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--border-subtle)",
              transform: "translateX(-50%)",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: lineHeight,
                background:
                  "linear-gradient(to bottom, var(--accent), var(--gold), var(--accent))",
              }}
            />
          </div>

          {/* Mobile track */}
          <style>{`@media(max-width:640px){.tl-track-desktop{display:none!important}.tl-track-mobile{display:block!important}}`}</style>
          <div
            className="tl-track-mobile"
            style={{
              display: "none",
              position: "absolute",
              left: "1.5rem",
              top: 0,
              bottom: 0,
              width: 1,
              background: "var(--border-subtle)",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}
          >
            {EVENTS.map((ev, i) => {
              const isGold = ev.color === "var(--gold)";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: ev.side === "left" ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 3rem 1fr",
                    alignItems: "start",
                    gap: "0",
                    position: "relative",
                  }}
                >
                  {/* Left content */}
                  <div
                    style={{
                      padding: "0 1.5rem 0 0",
                      textAlign: "right",
                      ...(ev.side === "right"
                        ? { gridColumn: "1", opacity: 0 }
                        : {}),
                    }}
                  >
                    {ev.side === "left" && <TimelineCard ev={ev} />}
                    {ev.side === "right" && (
                      <div className="label-mono">{ev.year}</div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      paddingTop: "1.5rem",
                    }}
                  >
                    <div
                      className="cursor-pointer"
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: ev.color,
                        border: "2px solid var(--bg)",
                        boxShadow: `0 0 12px ${isGold ? "var(--gold-glow)" : "var(--accent-glow)"}`,
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = "scale(1.3)";
                        el.style.boxShadow = `0 0 20px ${isGold ? "var(--gold)" : "var(--accent)"}`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.transform = "scale(1)";
                        el.style.boxShadow = `0 0 12px ${isGold ? "var(--gold-glow)" : "var(--accent-glow)"}`;
                      }}
                    />
                  </div>

                  {/* Right content */}
                  <div
                    style={{
                      padding: "0 0 0 1.5rem",
                      ...(ev.side === "left"
                        ? { gridColumn: "3", opacity: 0 }
                        : {}),
                    }}
                  >
                    {ev.side === "right" && <TimelineCard ev={ev} />}
                    {ev.side === "left" && (
                      <div className="label-mono">{ev.year}</div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

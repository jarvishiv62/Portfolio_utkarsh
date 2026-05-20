"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { useApp } from "@/store/AppContext";
import { CinemaReveal, CinemaChild } from "@/shared/components/ui/Reveal";
import { VideoFrame } from "@/shared/components/ui/VideoFrame"; // ← new import

const COLOR_MAP: Record<string, string> = {
  accent: "var(--raw-accent)",
  violet: "var(--raw-violet)",
  indigo: "var(--raw-indigo)",
  cosmic: "var(--raw-cosmic)",
  gold: "var(--raw-gold)",
  rose: "var(--raw-rose)",
};

const TAG_CLASS: Record<string, string> = {
  accent: "tag-accent",
  violet: "tag-violet",
  indigo: "tag-indigo",
  cosmic: "tag-cosmic",
  gold: "tag-gold",
  rose: "tag-rose",
};

export function ProjectsSection() {
  const { viewMode, toggleViewMode, openSimulation, trackEvent } = useApp();
  const projects = getFeaturedProjects();

  return (
    <section
      id="work"
      className="section-pad"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="nebula"
        style={{
          width: 600,
          height: 600,
          top: "-5%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "oklch(0.58 0.22 270 / 0.06)",
          pointerEvents: "none",
        }}
      />
      <div className="container-portfolio">
        <CinemaReveal>
          <CinemaChild>
            <p className="section-label">{`// selected work`}</p>
          </CinemaChild>

          {/* Headline + mode toggle */}
          <CinemaChild>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "1rem",
                marginTop: "1.25rem",
                marginBottom: "3rem",
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-display), Syne, sans-serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "var(--raw-warm)",
                    lineHeight: 1.1,
                  }}
                >
                  stuff I actually built.
                  <br />
                  <span
                    style={{
                      fontFamily: "var(--font-serif), Instrument Serif, serif",
                      fontStyle: "italic",
                      color: "var(--raw-muted)",
                      fontSize: "0.7em",
                      fontWeight: 400,
                    }}
                  >
                    (not just cloned.)
                  </span>
                </h2>
              </div>

              {/* Mode toggle */}
              <button
                onClick={toggleViewMode}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border-medium)",
                  background: "oklch(0.68 0.14 285 / 0.08)",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.75rem",
                  color: "var(--raw-violet)",
                  transition: "background 0.2s",
                  flexShrink: 0,
                }}
              >
                <span>{viewMode === "story" ? "⚙" : "📖"}</span>
                <span>
                  switch to {viewMode === "story" ? "tech" : "story"} mode
                </span>
              </button>
            </div>
          </CinemaChild>

          {/* Project cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {projects.map((project, _i) => {
              const accentColor =
                COLOR_MAP[project.stackColor || "accent"] ??
                "var(--raw-accent)";
              const tagClass =
                TAG_CLASS[project.stackColor || "accent"] ?? "tag-accent";

              return (
                <CinemaChild key={project.slug}>
                  <motion.div
                    className="card-hover"
                    style={{
                      background: "var(--raw-surface)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "1.25rem",
                      overflow: "hidden",
                      position: "relative",
                      transition: "border-color 0.3s ease",
                    }}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.25 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-medium)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--border-subtle)")
                    }
                  >
                    {/* Card glow */}
                    <div className="card-glow" />

                    {/* Accent top stripe */}
                    <div
                      style={{
                        height: 3,
                        background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                      }}
                    />

                    {/* ── VIDEO FRAME ── */}
                    <VideoFrame
                      videoUrl={project.videoUrl}
                      accentColor={accentColor}
                      compact
                      projectName={project.name}
                    />

                    <div className="p-4 sm:p-5 md:p-6 lg:p-7">
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                        <div>
                          <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                            <h3
                              className="text-xl sm:text-2xl md:text-[1.35rem] lg:text-2xl font-black"
                              style={{
                                fontFamily:
                                  "var(--font-display), Syne, sans-serif",
                                color: "var(--raw-warm)",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {project.name}
                            </h3>
                            <span
                              className="text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-(--border-subtle)"
                              style={{
                                fontFamily: "var(--font-mono), monospace",
                                color: "var(--raw-muted)",
                              }}
                            >
                              {project.year}
                            </span>
                          </div>
                          <p
                            className="text-xs sm:text-sm"
                            style={{
                              fontFamily: "var(--font-mono), monospace",
                              color: accentColor,
                              letterSpacing: "0.02em",
                            }}
                          >
                            {project.tagline}
                          </p>
                        </div>

                        {/* Action links */}
                        <div className="flex gap-2 sm:gap-3 shrink-0">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent("clicked_github")}
                            className="text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-(--border-subtle) transition-colors duration-200"
                            style={{
                              fontFamily: "var(--font-mono), monospace",
                              color: "var(--raw-muted)",
                              textDecoration: "none",
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "var(--raw-warm)";
                              (
                                e.currentTarget as HTMLElement
                              ).style.borderColor = "var(--border-medium)";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.color =
                                "var(--raw-muted)";
                              (
                                e.currentTarget as HTMLElement
                              ).style.borderColor = "var(--border-subtle)";
                            }}
                          >
                            GitHub ↗
                          </a>
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-colors duration-200"
                              style={{
                                fontFamily: "var(--font-mono), monospace",
                                color: "var(--raw-cosmic)",
                                textDecoration: "none",
                                borderColor: "oklch(0.80 0.15 195 / 0.3)",
                              }}
                            >
                              Live ↗
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                        {project.stack.map((s) => (
                          <span key={s} className={`tag ${tagClass}`}>
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* Story / Tech content */}
                      <AnimatePresence mode="wait">
                        {viewMode === "story" ? (
                          <motion.div
                            key="story"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Hook quote */}
                            <p
                              className="text-base sm:text-lg italic leading-relaxed mb-3 sm:mb-4 pl-3 sm:pl-4 border-l-2"
                              style={{
                                fontFamily:
                                  "var(--font-serif), Instrument Serif, serif",
                                color: "var(--raw-warm)",
                                borderColor: accentColor,
                              }}
                            >
                              &ldquo;{project.hook}&rdquo;
                            </p>
                            <p
                              className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                              style={{
                                color: "var(--raw-muted)",
                              }}
                            >
                              {project.oneliner}
                            </p>
                            <ul
                              style={{
                                paddingLeft: 0,
                                listStyle: "none",
                                margin: 0,
                              }}
                            >
                              {project.impact?.slice(0, 2).map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs sm:text-sm pl-4 relative mb-1 leading-relaxed"
                                  style={{
                                    color: "var(--raw-muted)",
                                  }}
                                >
                                  <span
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      color: accentColor,
                                    }}
                                  >
                                    ›
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="tech"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                              <span
                                className="text-[10px] sm:text-xs tracking-widest uppercase"
                                style={{
                                  color: accentColor,
                                  fontFamily: "var(--font-mono), monospace",
                                }}
                              >
                                ⚙ tech breakdown
                              </span>
                            </div>
                            <p
                              className="text-xs sm:text-sm leading-relaxed mb-3.5 sm:mb-4"
                              style={{
                                color: "var(--raw-muted)",
                              }}
                            >
                              {project.problem?.split("\n")[0]}
                            </p>
                            <ul
                              style={{
                                paddingLeft: 0,
                                listStyle: "none",
                                margin: 0,
                              }}
                            >
                              {project.impact?.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="text-xs sm:text-sm pl-4 relative mb-1.5 leading-relaxed"
                                  style={{
                                    color: "var(--raw-muted)",
                                  }}
                                >
                                  <span
                                    style={{
                                      position: "absolute",
                                      left: 0,
                                      color: accentColor,
                                    }}
                                  >
                                    ›
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Footer actions */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-(--border-subtle)">
                        <button
                          onClick={() => openSimulation(project.slug)}
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm cursor-pointer transition-colors duration-200"
                          style={{
                            border: `1px solid ${accentColor}40`,
                            background: `${accentColor}0D`,
                            color: accentColor,
                            fontFamily: "var(--font-mono), monospace",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}1A`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}0D`;
                          }}
                        >
                          ▶ how I built this
                        </button>
                        <Link
                          href={`/projects/${project.slug}`}
                          onClick={() => trackEvent("viewed_project_detail")}
                          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm cursor-pointer transition-colors duration-200"
                          style={{
                            border: "1px solid var(--border-subtle)",
                            background: "transparent",
                            color: "var(--raw-muted)",
                            fontFamily: "var(--font-mono), monospace",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--raw-warm)";
                            (e.currentTarget as HTMLElement).style.borderColor =
                              "var(--border-medium)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "var(--raw-muted)";
                            (e.currentTarget as HTMLElement).style.borderColor =
                              "var(--border-subtle)";
                          }}
                        >
                          full story →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </CinemaChild>
              );
            })}
          </div>

          {/* Footer */}
          <CinemaChild>
            <p
              className="text-xs sm:text-sm mt-8 sm:mt-10 text-center leading-relaxed"
              style={{
                fontFamily: "var(--font-mono), monospace",
                color: "var(--raw-muted)",
              }}
            >
              more projects incoming.
              <br />
              <span style={{ opacity: 0.6 }}>
                (not being coy — literally building them right now.)
              </span>
            </p>
          </CinemaChild>
        </CinemaReveal>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useApp } from "@/store/AppContext";
import { CinemaReveal, CinemaChild } from "@/shared/components/ui/Reveal";
import { VideoFrame } from "@/shared/components/ui/VideoFrame";

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

export default function AllProjectsPage() {
  const { viewMode, toggleViewMode, openSimulation, trackEvent } = useApp();

  return (
    <main className="section-pad" style={{ minHeight: "100vh" }}>
      <div className="container-portfolio">
        <CinemaReveal>
          <CinemaChild>
            <p className="section-label">{`// all projects`}</p>
          </CinemaChild>

          {/* Headline */}
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
                <h1
                  style={{
                    fontFamily: "var(--font-display), Syne, sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "var(--raw-warm)",
                    lineHeight: 1.1,
                  }}
                >
                  every project I&apos;ve built.
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
                    (the complete collection.)
                  </span>
                </h1>
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "1.1rem",
                    color: "var(--raw-muted)",
                    lineHeight: 1.6,
                    maxWidth: "600px",
                  }}
                >
                  From AI-powered productivity platforms to medical imaging
                  research, here&apos;s everything I&apos;ve built — shipped
                  projects, learning experiments, and everything in between.
                </p>
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

                    <div style={{ padding: "1.75rem" }}>
                      {/* Header row */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.75rem",
                              marginBottom: "0.375rem",
                            }}
                          >
                            <h3
                              style={{
                                fontFamily:
                                  "var(--font-display), Syne, sans-serif",
                                fontSize: "1.35rem",
                                fontWeight: 800,
                                color: "var(--raw-warm)",
                                letterSpacing: "-0.01em",
                              }}
                            >
                              {project.name}
                            </h3>
                            <span
                              style={{
                                fontFamily: "var(--font-mono), monospace",
                                fontSize: "0.625rem",
                                color: "var(--raw-muted)",
                                border: "1px solid var(--border-subtle)",
                                padding: "0.15rem 0.5rem",
                                borderRadius: "9999px",
                              }}
                            >
                              {project.year}
                            </span>
                            <span
                              style={{
                                fontFamily: "var(--font-mono), monospace",
                                fontSize: "0.625rem",
                                color:
                                  project.status === "shipped"
                                    ? "var(--raw-cosmic)"
                                    : project.status === "research"
                                      ? "var(--raw-rose)"
                                      : project.status === "development"
                                        ? "var(--raw-violet)"
                                        : "var(--raw-muted)",
                                border: "1px solid var(--border-subtle)",
                                padding: "0.15rem 0.5rem",
                                borderRadius: "9999px",
                                background:
                                  project.status === "shipped"
                                    ? "oklch(0.8 0.15 195 / 0.1)"
                                    : project.status === "research"
                                      ? "oklch(0.7 0.18 5 / 0.1)"
                                      : project.status === "development"
                                        ? "oklch(0.68 0.14 285 / 0.1)"
                                        : "transparent",
                              }}
                            >
                              {project.status}
                            </span>
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-mono), monospace",
                              fontSize: "0.75rem",
                              color: accentColor,
                              letterSpacing: "0.02em",
                            }}
                          >
                            {project.tagline}
                          </p>
                        </div>

                        {/* Action links */}
                        <div
                          style={{
                            display: "flex",
                            gap: "0.625rem",
                            flexShrink: 0,
                          }}
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent("clicked_github")}
                            style={{
                              fontFamily: "var(--font-mono), monospace",
                              fontSize: "0.6875rem",
                              color: "var(--raw-muted)",
                              textDecoration: "none",
                              padding: "0.375rem 0.75rem",
                              border: "1px solid var(--border-subtle)",
                              borderRadius: "9999px",
                              transition: "color 0.2s, border-color 0.2s",
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
                              style={{
                                fontFamily: "var(--font-mono), monospace",
                                fontSize: "0.6875rem",
                                color: "var(--raw-cosmic)",
                                textDecoration: "none",
                                padding: "0.375rem 0.75rem",
                                border: "1px solid oklch(0.80 0.15 195 / 0.3)",
                                borderRadius: "9999px",
                              }}
                            >
                              Live ↗
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Stack tags */}
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.375rem",
                          marginBottom: "1.25rem",
                        }}
                      >
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
                              style={{
                                fontFamily:
                                  "var(--font-serif), Instrument Serif, serif",
                                fontStyle: "italic",
                                fontSize: "1rem",
                                color: "var(--raw-warm)",
                                lineHeight: 1.55,
                                marginBottom: "0.75rem",
                                borderLeft: `2px solid ${accentColor}`,
                                paddingLeft: "0.875rem",
                              }}
                            >
                              &ldquo;{project.hook}&rdquo;
                            </p>
                            <p
                              style={{
                                fontSize: "0.8125rem",
                                color: "var(--raw-muted)",
                                fontWeight: 600,
                                marginBottom: "0.75rem",
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
                                  style={{
                                    fontSize: "0.8125rem",
                                    color: "var(--raw-muted)",
                                    paddingLeft: "1rem",
                                    position: "relative",
                                    marginBottom: "0.25rem",
                                    lineHeight: 1.5,
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
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                marginBottom: "0.75rem",
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "0.625rem",
                                  letterSpacing: "0.12em",
                                  textTransform: "uppercase",
                                  color: accentColor,
                                  fontFamily: "var(--font-mono), monospace",
                                }}
                              >
                                ⚙ tech breakdown
                              </span>
                            </div>
                            <p
                              style={{
                                fontSize: "0.8125rem",
                                color: "var(--raw-muted)",
                                lineHeight: 1.65,
                                marginBottom: "0.875rem",
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
                                  style={{
                                    fontSize: "0.8125rem",
                                    color: "var(--raw-muted)",
                                    paddingLeft: "1rem",
                                    position: "relative",
                                    marginBottom: "0.3rem",
                                    lineHeight: 1.5,
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
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.625rem",
                          marginTop: "1.5rem",
                          paddingTop: "1.25rem",
                          borderTop: "1px solid var(--border-subtle)",
                        }}
                      >
                        <button
                          onClick={() => openSimulation(project.slug)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            padding: "0.5rem 1rem",
                            borderRadius: "9999px",
                            border: `1px solid ${accentColor}40`,
                            background: `${accentColor}0D`,
                            color: accentColor,
                            fontFamily: "var(--font-mono), monospace",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                            transition: "background 0.2s, border-color 0.2s",
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
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            padding: "0.5rem 1rem",
                            borderRadius: "9999px",
                            border: "1px solid var(--border-subtle)",
                            background: "transparent",
                            color: "var(--raw-muted)",
                            fontFamily: "var(--font-mono), monospace",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                            textDecoration: "none",
                            transition: "color 0.2s, border-color 0.2s",
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
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "0.75rem",
                color: "var(--raw-muted)",
                marginTop: "3rem",
                textAlign: "center",
                lineHeight: 1.7,
              }}
            >
              that&apos;s all {projects.length} projects.
              <br />
              <span style={{ opacity: 0.6 }}>(for now. more coming soon.)</span>
            </p>
          </CinemaChild>
        </CinemaReveal>
      </div>
    </main>
  );
}

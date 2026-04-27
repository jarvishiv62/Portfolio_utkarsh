"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Project } from "@/shared/types";
import { useApp } from "@/store/AppContext";
import { CinemaReveal, CinemaChild } from "@/shared/components/ui/Reveal";
import { VideoFrame } from "@/shared/components/ui/VideoFrame"; // ← new import

const COLOR_MAP: Record<string, string> = {
  accent: "var(--raw-accent)",
  violet: "var(--raw-violet)",
  indigo: "var(--raw-indigo)",
  cosmic: "var(--raw-cosmic)",
};

const TAG_CLASS: Record<string, string> = {
  accent: "tag-accent",
  violet: "tag-violet",
  indigo: "tag-indigo",
  cosmic: "tag-cosmic",
};

interface Props {
  project: Project;
}

export function ProjectDetailClient({ project }: Props) {
  const { openSimulation, trackEvent } = useApp();
  const accentColor =
    COLOR_MAP[project.stackColor || "accent"] ?? "var(--raw-accent)";
  const tagClass = TAG_CLASS[project.stackColor || "accent"] ?? "tag-accent";

  return (
    <main
      style={{
        paddingTop: "5rem",
        paddingBottom: "6rem",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Nebula background */}
      <div
        className="nebula"
        style={{
          width: 700,
          height: 500,
          top: "-5%",
          right: "-10%",
          background: "oklch(0.68 0.14 285 / 0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        className="grid-bg"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="container-portfolio"
        style={{ position: "relative", zIndex: 1, maxWidth: "52rem" }}
      >
        {/* Back nav */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <Link
            href="/#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.75rem",
              color: "var(--raw-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--raw-warm)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--raw-muted)")
            }
          >
            ← back to work
          </Link>
        </motion.div>

        <CinemaReveal>
          {/* Year badge */}
          <CinemaChild>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.625rem",
                  color: accentColor,
                  border: `1px solid ${accentColor}40`,
                  padding: "0.2rem 0.625rem",
                  borderRadius: "9999px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {project.year}
              </span>
              <div
                style={{
                  flex: 1,
                  height: 1,
                  background: `linear-gradient(90deg, ${accentColor}30, transparent)`,
                }}
              />
            </div>
          </CinemaChild>

          {/* Project name */}
          <CinemaChild>
            <h1
              style={{
                fontFamily: "var(--font-display), Syne, sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                color: "var(--raw-warm)",
                marginBottom: "0.5rem",
              }}
            >
              {project.name}
            </h1>
          </CinemaChild>

          {/* Tagline */}
          <CinemaChild>
            <p
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: "clamp(0.875rem, 2vw, 1.05rem)",
                color: accentColor,
                letterSpacing: "0.02em",
                marginBottom: "1.5rem",
              }}
            >
              {project.tagline}
            </p>
          </CinemaChild>

          {/* Stack tags */}
          <CinemaChild>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.375rem",
                marginBottom: "1.5rem",
              }}
            >
              {project.stack.map((s) => (
                <span key={s} className={`tag ${tagClass}`}>
                  {s}
                </span>
              ))}
            </div>
          </CinemaChild>

          {/* Action links */}
          <CinemaChild>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "3rem",
              }}
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("clicked_github")}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "9999px",
                  border: "1px solid var(--border-medium)",
                  background: "transparent",
                  color: "var(--raw-muted)",
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.8125rem",
                  textDecoration: "none",
                  transition: "color 0.2s, border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--raw-warm)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border-strong)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--raw-muted)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border-medium)";
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
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.625rem 1.25rem",
                    borderRadius: "9999px",
                    border: "1px solid oklch(0.80 0.15 195 / 0.35)",
                    background: "oklch(0.80 0.15 195 / 0.06)",
                    color: "var(--raw-cosmic)",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.8125rem",
                    textDecoration: "none",
                  }}
                >
                  Live site ↗
                </a>
              )}
              <button
                onClick={() => openSimulation(project.slug)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.625rem 1.25rem",
                  borderRadius: "9999px",
                  border: `1px solid ${accentColor}40`,
                  background: `${accentColor}0D`,
                  color: accentColor,
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.8125rem",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    `${accentColor}1A`)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    `${accentColor}0D`)
                }
              >
                ▶ how I built this
              </button>
            </div>
          </CinemaChild>

          {/* ── VIDEO SHOWCASE ── */}
          <CinemaChild>
            <div style={{ marginBottom: "3rem" }}>
              {/* Section label */}
              <p
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6875rem",
                  color: accentColor,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: accentColor,
                  }}
                />
                00 — UI Preview
              </p>

              {/* Video player */}
              <VideoFrame
                videoUrl={project.videoUrl}
                accentColor={accentColor}
                compact={false}
                projectName={project.name}
              />

              {project.videoUrl && (
                <p
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.6875rem",
                    color: "var(--raw-muted)",
                    marginTop: "0.625rem",
                    opacity: 0.6,
                  }}
                >
                  autoplay · muted · looped — 5s UI walkthrough
                </p>
              )}
            </div>
          </CinemaChild>

          {/* Divider */}
          <CinemaChild>
            <div
              style={{
                height: 1,
                background: `linear-gradient(90deg, ${accentColor}30, transparent)`,
                marginBottom: "3rem",
              }}
            />
          </CinemaChild>

          {/* Hook quote — cinematic pull quote */}
          <CinemaChild>
            <blockquote
              style={{
                fontFamily: "var(--font-serif), Instrument Serif, serif",
                fontStyle: "italic",
                fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                color: "var(--raw-warm)",
                lineHeight: 1.45,
                borderLeft: `3px solid ${accentColor}`,
                paddingLeft: "1.5rem",
                marginBottom: "3.5rem",
                marginLeft: 0,
                marginRight: 0,
              }}
            >
              &ldquo;{project.hook}&rdquo;
            </blockquote>
          </CinemaChild>

          {/* Story sections */}
          {[
            {
              id: "problem",
              label: "01 — The Problem",
              color: "var(--raw-accent)",
              content: project.problem,
            },
            {
              id: "build",
              label: "02 — How I Built It",
              color: "var(--raw-violet)",
              content: project.build,
            },
            {
              id: "proudof",
              label: "03 — What I'm Proud Of",
              color: "var(--raw-indigo)",
              content: project.proudOf,
            },
          ].map((section) => (
            <CinemaChild key={section.id}>
              <div style={{ marginBottom: "3rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.6875rem",
                    color: section.color,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 24,
                      height: 1,
                      background: section.color,
                    }}
                  />
                  {section.label}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.875rem",
                  }}
                >
                  {section.content?.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--raw-muted)",
                        lineHeight: 1.8,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </CinemaChild>
          ))}

          {/* Impact — measured outcomes */}
          <CinemaChild>
            <div
              style={{
                padding: "1.75rem",
                borderRadius: "1rem",
                background: "var(--raw-surface)",
                border: "1px solid var(--border-subtle)",
                position: "relative",
                overflow: "hidden",
                marginBottom: "3rem",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                }}
              />

              <p
                style={{
                  fontFamily: "var(--font-mono), monospace",
                  fontSize: "0.6875rem",
                  color: accentColor,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 24,
                    height: 1,
                    background: accentColor,
                  }}
                />
                04 — measured impact
              </p>

              <ul
                style={{
                  paddingLeft: 0,
                  listStyle: "none",
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {project.impact?.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.875rem",
                      color: "var(--raw-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: accentColor,
                        flexShrink: 0,
                        marginTop: "0.1rem",
                      }}
                    >
                      ›
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </CinemaChild>

          {/* One-liner closer */}
          <CinemaChild>
            <div style={{ textAlign: "center", paddingBlock: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-display), Syne, sans-serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "var(--raw-warm)",
                  marginBottom: "2rem",
                }}
              >
                {project.oneliner}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "0.875rem",
                }}
              >
                <button
                  onClick={() => openSimulation(project.slug)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "9999px",
                    background: `linear-gradient(135deg, ${accentColor}, var(--raw-rose))`,
                    border: "none",
                    color: "white",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.8125rem",
                    cursor: "pointer",
                    fontWeight: 600,
                    boxShadow: `0 8px 28px ${accentColor}35`,
                  }}
                >
                  ▶ step-by-step simulation
                </button>
                <Link
                  href="/#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--border-medium)",
                    background: "transparent",
                    color: "var(--raw-violet)",
                    fontFamily: "var(--font-mono), monospace",
                    fontSize: "0.8125rem",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(0.68 0.14 285 / 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  hire me →
                </Link>
              </div>
            </div>
          </CinemaChild>
        </CinemaReveal>
      </div>
    </main>
  );
}

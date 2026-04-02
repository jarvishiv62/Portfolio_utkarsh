"use client";
// src/shared/components/ui/ProjectCard.tsx
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import type { Project } from "@/shared/types";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isGold = project.color === "gold";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        "rounded-2xl overflow-hidden",
        isGold ? "glow-border-gold" : "glow-border"
      )}
      style={{ background: "var(--surface)" }}
    >
      {/* header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="label-mono">{project.year}</span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-mono"
                style={{
                  background: isGold ? "var(--gold-dim)" : "var(--accent-dim)",
                  color: isGold ? "var(--gold)" : "var(--accent)",
                  border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
                }}
              >
                {project.status}
              </span>
            </div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: isGold ? "var(--gold)" : "var(--accent)" }}
            >
              {project.title}
            </h3>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              {project.tagline}
            </p>
          </div>
          <motion.button
            onClick={() => setExpanded((v) => !v)}
            whileTap={{ scale: 0.92 }}
            className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-colors"
            style={{
              background: isGold ? "var(--gold-dim)" : "var(--accent-dim)",
              color: isGold ? "var(--gold)" : "var(--accent)",
              border: `1px solid ${isGold ? "var(--border-gold)" : "var(--border)"}`,
            }}
            aria-label={expanded ? "collapse project" : "expand project"}
          >
            <motion.span
              animate={{ rotate: expanded ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              +
            </motion.span>
          </motion.button>
        </div>

        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.summary}
        </p>

        {/* metrics */}
        <div className="grid grid-cols-3 gap-3 mt-4">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg p-2 text-center"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
            >
              <div
                className="text-base font-bold font-mono"
                style={{ color: isGold ? "var(--gold)" : "var(--accent)", fontFamily: "var(--font-mono)" }}
              >
                {m.value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* expanded story */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="story"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="px-6 pb-6 space-y-3"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              {[
                { label: "// the problem", text: project.story.problem },
                { label: "// the fix", text: project.story.solution },
                { label: "// how it works", text: project.story.technical },
                { label: "// the outcome", text: project.story.outcome },
              ].map(({ label, text }) => (
                <div key={label} className="pt-3">
                  <div className="label-mono mb-1">{label}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* tech stack */}
      <div
        className="px-6 py-3 flex flex-wrap gap-2"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {project.stack.map((tech) => (
          <Badge key={tech} variant={isGold ? "gold" : "purple"}>
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

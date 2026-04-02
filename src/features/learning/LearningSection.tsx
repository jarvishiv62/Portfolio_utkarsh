"use client";
// src/features/learning/LearningSection.tsx
import { FadeIn } from "@/shared/components/ui/FadeIn";
import { SectionHeader } from "@/shared/components/ui/SectionHeader";
import { useInView } from "@/shared/hooks/useInView";
import { LEARNING_ITEMS } from "@/shared/lib/content";
import { cn } from "@/shared/lib/utils";
import type { LearningItem } from "@/shared/types";

function LearningCard({ item, index }: { item: LearningItem; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const isActive = item.status === "active";

  return (
    <FadeIn delay={index * 0.08}>
      <div
        ref={ref}
        className="rounded-2xl p-5"
        style={{
          background: "var(--surface)",
          border: `1px solid ${isActive ? "var(--border)" : "rgba(90,79,110,0.3)"}`,
          opacity: isActive ? 1 : 0.6,
          transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (!isActive) return;
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = index % 2 === 0 ? "var(--accent)" : "var(--gold)";
          el.style.boxShadow = `0 0 18px ${index % 2 === 0 ? "var(--accent-glow)" : "var(--gold-glow)"}`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = isActive ? "var(--border)" : "rgba(90,79,110,0.3)";
          el.style.boxShadow = "none";
        }}
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">{item.icon}</span>
            <div>
              <div
                className="text-sm font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                {item.topic}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
                {item.detail}
              </div>
            </div>
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-mono shrink-0"
            style={{
              background: isActive ? "var(--accent-dim)" : "var(--surface-2)",
              color: isActive ? "var(--accent)" : "var(--text-faint)",
              border: `1px solid ${isActive ? "var(--border)" : "transparent"}`,
              fontFamily: "var(--font-mono)",
            }}
          >
            {item.status}
          </span>
        </div>

        {/* progress bar */}
        <div className="mt-3">
          <div className="flex justify-between mb-1.5">
            <span className="text-xs font-mono" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
              progress
            </span>
            <span
              className="text-xs font-mono"
              style={{
                color: index % 2 === 0 ? "var(--accent)" : "var(--gold)",
                fontFamily: "var(--font-mono)",
              }}
            >
              {item.progress}%
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{ background: "var(--surface-2)" }}
          >
            <div
              className={cn("skill-fill", inView && isActive && "animate")}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function LearningSection() {
  return (
    <section id="learning" className="section-pad">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeader label="// currently learning" title="loading new skills..." />
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-3 mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
            not a list of things i watched a youtube video about.
            these are things i&apos;m actively breaking and fixing right now.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {LEARNING_ITEMS.map((item, i) => (
            <LearningCard key={item.topic} item={item} index={i} />
          ))}
        </div>

        {/* live indicator */}
        <FadeIn delay={0.4}>
          <div className="mt-8 flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 8px var(--accent-glow)",
                animation: "pulse-soft 3s ease-in-out infinite",
              }}
            />
            <p className="text-xs font-mono" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
              updated manually. last sync: jan 2026. no widget was harmed in the making of this section.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

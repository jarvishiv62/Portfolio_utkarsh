"use client";
// src/features/hero/HeroSection.tsx
import { motion } from "motion/react";
import { useTypewriter } from "@/shared/hooks/useTypewriter";
import { AnimatedCounter } from "@/shared/components/ui/AnimatedCounter";
import { DevAvatarSVG, OrbitRingSVG } from "@/shared/components/ui/Svgs";
import { HERO_STATS, TYPEWRITER_WORDS } from "@/shared/lib/content";
import { SITE } from "@/shared/lib/metadata";

export function HeroSection() {
  const typed = useTypewriter({ words: TYPEWRITER_WORDS, speed: 75, deleteSpeed: 38 });

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center section-pad pt-[calc(var(--nav-h)+4rem)]"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* left — text */}
        <div>
          {/* available badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-mono"
            style={{
              background: "var(--accent-dim)",
              border: "1px solid var(--border)",
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent-glow)", animation: "pulse-soft 3s ease-in-out infinite" }}
            />
            available for hire · graduating 2026
          </motion.div>

          {/* name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-2 leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span style={{ color: "var(--text)" }}>utkarsh</span>
            <br />
            <span style={{ color: "var(--accent)" }}>maurya</span>
            <span style={{ color: "var(--gold)" }}>.</span>
          </motion.h1>

          {/* typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl mb-6 font-mono min-h-[1.8em]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            <span>{typed}</span>
            <span
              className="inline-block w-[2px] h-[1.1em] ml-[2px] align-middle"
              style={{ background: "var(--accent)", animation: "blink 1.2s step-end infinite" }}
            />
          </motion.div>

          {/* bio */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base leading-relaxed mb-8 max-w-lg"
            style={{ color: "var(--text-muted)" }}
          >
            b.tech IT @ REC Bijnor, &apos;26. two real internships — not localhost projects.
            built things with real clients, real deadlines, and a genuine fear of n+1 queries.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--gold))",
                color: "white",
                fontFamily: "var(--font-display)",
              }}
            >
              see what i&apos;ve built →
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-xl font-mono text-sm transition-all duration-200 hover:opacity-80"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}
            >
              ↓ resume
            </a>
          </motion.div>

          {/* stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex gap-6 flex-wrap"
          >
            {HERO_STATS.map((stat, i) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-black font-mono"
                  style={{ fontFamily: "var(--font-mono)", color: i % 2 === 0 ? "var(--accent)" : "var(--gold)" }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-faint)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* right — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          {/* orbit rings behind avatar */}
          <OrbitRingSVG className="absolute inset-0 w-full h-full opacity-60" />
          {/* avatar */}
          <div style={{ animation: "float 6s ease-in-out infinite" }}>
            <DevAvatarSVG className="w-72 h-80 relative z-10" />
          </div>
          {/* decorative glow */}
          <div
            className="absolute w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "var(--accent)" }}
          />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

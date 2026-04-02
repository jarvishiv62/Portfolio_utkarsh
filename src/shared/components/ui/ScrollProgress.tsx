"use client";
// src/shared/components/ui/ScrollProgress.tsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useScrollProgress } from "@/shared/hooks/useScrollProgress";

export function ScrollProgress() {
  const raw = useScrollProgress();
  const mv = useMotionValue(0);

  useEffect(() => {
    mv.set(raw);
  }, [raw, mv]);

  const smooth = useSpring(mv, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const scaleX = useTransform(smooth, [0, 100], [0, 1]);

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        zIndex: 9999,
        background: "linear-gradient(90deg, var(--accent), var(--gold))",
      }}
    />
  );
}

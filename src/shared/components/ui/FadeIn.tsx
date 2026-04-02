"use client";
// src/shared/components/ui/FadeIn.tsx
import { motion } from "motion/react";
import { useInView } from "@/shared/hooks/useInView";
import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "none";
  delay?: number;
  className?: string;
  duration?: number;
}

const directionMap = {
  up:    { x: 0,   y: 24 },
  left:  { x: -24, y: 0  },
  right: { x: 24,  y: 0  },
  none:  { x: 0,   y: 0  },
};

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className,
  duration = 0.55,
}: FadeInProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 });
  const { x, y } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}

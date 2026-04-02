"use client";
// src/shared/components/ui/Tooltip.tsx
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/shared/lib/utils";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: "top" | "bottom";
  className?: string;
}

export function Tooltip({ children, content, side = "top", className }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={cn("relative inline-flex", className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <AnimatePresence>
        {visible && (
          <motion.span
            initial={{ opacity: 0, y: side === "top" ? 4 : -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: side === "top" ? 4 : -4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className={cn(
              "absolute z-50 whitespace-nowrap px-2.5 py-1 rounded-md text-xs pointer-events-none",
              "left-1/2 -translate-x-1/2",
              side === "top" ? "bottom-full mb-2" : "top-full mt-2"
            )}
            style={{
              background: "var(--surface-2)",
              color: "var(--accent)",
              border: "1px solid var(--border)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

"use client";
// src/shared/components/ui/EasterEggBar.tsx
// ↑↑↓↓←→←→BA. if you know, you know.
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function EasterEggBar() {
  const [triggered, setTriggered] = useState(false);
  const [keys, setKeys] = useState<string[]>([]); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    // console easter egg — fires once on mount
    console.log(
      "%c devport_2 v2.0 — utkarsh maurya ",
      "background: #a855f7; color: white; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px;",
    );
    console.log(
      "%c built with Next.js 15 + motion/react + way too much caffeine",
      "color: #f0b84a; font-size: 11px;",
    );
    console.log(
      "%c you opened devtools. respect. the code is clean — on purpose.",
      "color: #9d8eb5; font-size: 11px;",
    );
    console.log(
      "%c hiring? → virmauryauttu@gmail.com",
      "color: #a855f7; font-size: 11px; font-weight: bold;",
    );
    console.log("%c hint: try ↑↑↓↓←→←→BA", "color: #5a4f6e; font-size: 10px;");
    console.log("%c 42", "color: #f0b84a; font-size: 10px;");
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (JSON.stringify(next) === JSON.stringify(KONAMI)) {
          setTriggered(true);
          setTimeout(() => setTriggered(false), 4000);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="fixed bottom-6 left-1/2 z-[9000] max-w-sm w-[90vw] rounded-xl px-5 py-3 text-sm font-mono shadow-2xl"
          style={{
            transform: "translateX(-50%)",
            background: "var(--surface-2)",
            border: "1px solid var(--accent)",
            boxShadow: "0 0 30px var(--accent-glow)",
            color: "var(--text)",
            fontFamily: "var(--font-mono)",
          }}
        >
          🎮 ↑↑↓↓←→←→BA — hiring managers who know this get priority. fact.
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";
// src/app/loading.tsx
import { useEffect, useState } from "react";

const BOOT_LINES = [
  "initializing UTKARSH.exe...",
  "loading laravel sorcery...",
  "connecting to prod (dangerous)...",
  "checking for n+1 queries...",
  "vibes: calibrated ✓",
  "ready.",
];

export default function Loading() {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((p) => [...p, BOOT_LINES[i] ?? ""]);
        setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 280);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{ background: "var(--bg)" }}
    >
      <div className="w-full max-w-sm px-6">
        {/* logo */}
        <div
          className="text-2xl font-black mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
        >
          _UTKARSH<span style={{ color: "var(--gold)" }}>.</span>
        </div>

        {/* boot lines */}
        <div className="space-y-1 mb-6 min-h-[9rem]">
          {lines.map((line, i) => (
            <p
              key={i}
              className="text-xs font-mono"
              style={{
                fontFamily: "var(--font-mono)",
                color:
                  i === lines.length - 1
                    ? "var(--accent)"
                    : "var(--text-faint)",
              }}
            >
              <span style={{ color: "var(--text-faint)" }}>›</span> {line}
            </p>
          ))}
        </div>

        {/* progress bar */}
        <div
          className="h-1 rounded-full overflow-hidden"
          style={{ background: "var(--surface-2)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, var(--accent), var(--gold))",
            }}
          />
        </div>
        <p
          className="text-xs font-mono mt-2 text-right"
          style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}
        >
          {progress}%
        </p>
      </div>
    </div>
  );
}

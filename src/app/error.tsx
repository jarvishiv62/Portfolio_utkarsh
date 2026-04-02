"use client";
// src/app/error.tsx
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-[80dvh] flex items-center justify-center px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="text-center max-w-sm">
        <div
          className="text-6xl font-black mb-4"
          style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
        >
          oops.
        </div>
        <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
          something broke. i know, ironic for a &quot;performance is a feature&quot; guy.
        </p>
        {error.digest && (
          <p className="text-xs font-mono mb-4" style={{ color: "var(--text-faint)", fontFamily: "var(--font-mono)" }}>
            digest: {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl font-bold text-sm"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--gold))",
            color: "white",
            fontFamily: "var(--font-display)",
          }}
        >
          try again
        </button>
      </div>
    </div>
  );
}

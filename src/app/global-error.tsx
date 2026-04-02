"use client";
// src/app/global-error.tsx
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#06030f",
          color: "#f0eaf8",
          fontFamily: "sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100dvh",
          margin: 0,
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "3rem", color: "#a855f7", fontWeight: 900, marginBottom: "1rem" }}>
            💀 fatal error
          </h1>
          <p style={{ color: "#9d8eb5", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
            the entire app exploded. that&apos;s new.
          </p>
          {error.digest && (
            <p style={{ color: "#5a4f6e", fontFamily: "monospace", fontSize: "0.75rem", marginBottom: "1rem" }}>
              {error.digest}
            </p>
          )}
          <button
            onClick={reset}
            style={{
              background: "linear-gradient(135deg, #a855f7, #f0b84a)",
              color: "white",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              fontWeight: 700,
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            try again
          </button>
        </div>
      </body>
    </html>
  );
}

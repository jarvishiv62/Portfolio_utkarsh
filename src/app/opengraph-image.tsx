// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Utkarsh Maurya — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "#06030f",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* dot grid bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(168,85,247,0.1) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* accent gradient top-right */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)",
          }}
        />
        {/* gold accent bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(240,184,74,0.15), transparent 70%)",
          }}
        />

        {/* label */}
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#a855f7",
            fontFamily: "monospace",
            marginBottom: 20,
            position: "relative",
          }}
        >
          // full-stack developer
        </div>

        {/* name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1,
            color: "#f0eaf8",
            position: "relative",
            marginBottom: 8,
          }}
        >
          utkarsh
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1,
            color: "#a855f7",
            position: "relative",
            marginBottom: 32,
          }}
        >
          maurya<span style={{ color: "#f0b84a" }}>.</span>
        </div>

        {/* tagline */}
        <div
          style={{
            fontSize: 22,
            color: "#9d8eb5",
            position: "relative",
            marginBottom: 48,
          }}
        >
          laravel · next.js · shipped to prod · 30% faster APIs
        </div>

        {/* stats row */}
        <div style={{ display: "flex", gap: 40, position: "relative" }}>
          {[
            { v: "3+", l: "projects shipped" },
            { v: "2", l: "internships" },
            { v: "30%", l: "API speedup" },
          ].map(({ v, l }) => (
            <div key={l} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#a855f7", fontFamily: "monospace" }}>{v}</div>
              <div style={{ fontSize: 13, color: "#5a4f6e" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 14,
            color: "#5a4f6e",
            fontFamily: "monospace",
          }}
        >
          devport-utkarsh.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}

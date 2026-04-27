"use client";

interface VideoFrameProps {
  videoUrl?: string;
  accentColor?: string;
  /** compact = card on homepage · false = full detail page */
  compact?: boolean;
  projectName?: string;
}

export function VideoFrame({
  videoUrl,
  accentColor = "var(--raw-accent)",
  compact = false,
  projectName,
}: VideoFrameProps) {
  const slugLabel = projectName
    ? `${projectName.toLowerCase().replace(/\s+/g, "-")}.mp4`
    : "demo.mp4";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        background: "oklch(0.10 0.025 285)",
        overflow: "hidden",
        /* on detail page give it a card-like treatment */
        borderRadius: compact ? 0 : "0.875rem",
        border: compact ? "none" : `1px solid var(--border-subtle)`,
      }}
    >
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        /* ── Placeholder frame ── */
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: compact ? "0.5rem" : "0.75rem",
            /* subtle scanline texture */
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              oklch(0.22 0.04 285 / 0.12) 3px,
              oklch(0.22 0.04 285 / 0.12) 4px
            )`,
          }}
        >
          {/* Film-frame icon */}
          <FilmIcon
            size={compact ? 28 : 40}
            color={accentColor}
          />

          {/* Label */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: compact ? "0.6rem" : "0.6875rem",
                color: `${accentColor}90`,
                letterSpacing: "0.06em",
              }}
            >
              {slugLabel}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono), monospace",
                fontSize: compact ? "0.55rem" : "0.625rem",
                color: "oklch(0.50 0.04 285)",
                letterSpacing: "0.04em",
              }}
            >
              drop in /public/videos/
            </span>
          </div>
        </div>
      )}

      {/* Accent gradient overlay at bottom edge — always visible */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: compact ? 28 : 48,
          background: `linear-gradient(to top, oklch(0.08 0.02 285 / 0.85), transparent)`,
          pointerEvents: "none",
        }}
      />

      {/* Thin accent line at the very bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${accentColor}70, transparent 60%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ── internal icon — no emoji, pure CSS shapes ── */
function FilmIcon({ size, color }: { size: number; color: string }) {
  const sw = Math.max(1.5, size * 0.05); // stroke width scales with size
  const sprocketW = size * 0.1;
  const sprocketH = size * 0.55;
  const lensR = size * 0.18;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size * 0.68,
        border: `${sw}px solid ${color}55`,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {/* Left sprocket strip */}
      <div
        style={{
          position: "absolute",
          left: -(sprocketW + sw),
          top: "50%",
          transform: "translateY(-50%)",
          width: sprocketW,
          height: sprocketH,
          background: `${color}40`,
          borderRadius: 2,
        }}
      />
      {/* Right sprocket strip */}
      <div
        style={{
          position: "absolute",
          right: -(sprocketW + sw),
          top: "50%",
          transform: "translateY(-50%)",
          width: sprocketW,
          height: sprocketH,
          background: `${color}40`,
          borderRadius: 2,
        }}
      />
      {/* Lens circle */}
      <div
        style={{
          width: lensR * 2,
          height: lensR * 2,
          borderRadius: "50%",
          border: `${sw}px solid ${color}70`,
        }}
      />
      {/* Inner lens dot */}
      <div
        style={{
          position: "absolute",
          width: lensR * 0.7,
          height: lensR * 0.7,
          borderRadius: "50%",
          background: `${color}40`,
        }}
      />
    </div>
  );
}

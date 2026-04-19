// src/shared/components/ui/Svgs.tsx
// all svgs in one file. yes, one file. fight me.
import type React from "react";

export function OrbitRingSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse
        cx="100"
        cy="100"
        rx="90"
        ry="30"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.3"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="70"
        ry="22"
        stroke="var(--gold)"
        strokeWidth="1"
        strokeDasharray="3 5"
        opacity="0.25"
        transform="rotate(25 100 100)"
      />
      <ellipse
        cx="100"
        cy="100"
        rx="50"
        ry="15"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="2 4"
        opacity="0.2"
        transform="rotate(-20 100 100)"
      />
      <circle r="4" fill="var(--accent)">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#orbit1" />
        </animateMotion>
      </circle>
      <circle r="3" fill="var(--gold)">
        <animateMotion dur="9s" repeatCount="indefinite" begin="-3s">
          <mpath href="#orbit2" />
        </animateMotion>
      </circle>
      <ellipse id="orbit1" cx="100" cy="100" rx="90" ry="30" />
      <ellipse
        id="orbit2"
        cx="100"
        cy="100"
        rx="70"
        ry="22"
        transform="rotate(25 100 100)"
      />
    </svg>
  );
}

export function TerminalSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* window */}
      <rect
        x="1"
        y="1"
        width="278"
        height="178"
        rx="10"
        fill="var(--surface)"
        stroke="var(--border)"
        strokeWidth="1.5"
      />
      {/* title bar */}
      <rect
        x="1"
        y="1"
        width="278"
        height="32"
        rx="10"
        fill="var(--surface-2)"
      />
      <rect x="1" y="24" width="278" height="8" fill="var(--surface-2)" />
      {/* traffic lights */}
      <circle cx="22" cy="17" r="5.5" fill="#ff5f56" />
      <circle cx="40" cy="17" r="5.5" fill="#ffbd2e" />
      <circle cx="58" cy="17" r="5.5" fill="var(--accent)">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* title */}
      <text
        x="140"
        y="22"
        textAnchor="middle"
        fontFamily="Space Mono, monospace"
        fontSize="9"
        fill="var(--text-muted)"
      >
        UTKARSH@devbox ~{" "}
      </text>
      {/* content lines */}
      <text
        x="16"
        y="58"
        fontFamily="Space Mono, monospace"
        fontSize="9"
        fill="var(--text-faint)"
      >
        $
      </text>
      <text
        x="28"
        y="58"
        fontFamily="Space Mono, monospace"
        fontSize="9"
        fill="var(--text)"
      >
        git log --oneline
      </text>
      <text
        x="16"
        y="76"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--gold)"
      >
        a3f1c9d
      </text>
      <text
        x="78"
        y="76"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--text-muted)"
      >
        feat: cut API time by 30%
      </text>
      <text
        x="16"
        y="92"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--gold)"
      >
        e7b2a41
      </text>
      <text
        x="78"
        y="92"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--text-muted)"
      >
        fix: RBAC middleware order
      </text>
      <text
        x="16"
        y="108"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--gold)"
      >
        9c4d88f
      </text>
      <text
        x="78"
        y="108"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--text-muted)"
      >
        feat: ship travel portal to prod
      </text>
      <text
        x="16"
        y="124"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--gold)"
      >
        2b1f033
      </text>
      <text
        x="78"
        y="124"
        fontFamily="Space Mono, monospace"
        fontSize="8"
        fill="var(--text-muted)"
      >
        chore: read the docs again
      </text>
      <text
        x="16"
        y="150"
        fontFamily="Space Mono, monospace"
        fontSize="9"
        fill="var(--text-faint)"
      >
        $
      </text>
      {/* blinking cursor */}
      <rect x="28" y="140" width="8" height="13" fill="var(--accent)">
        <animate
          attributeName="opacity"
          values="1;0;1"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
}

export function RocketSVG({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 80 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* body */}
      <path
        d="M40 10 C28 10 20 35 20 70 L20 110 L60 110 L60 70 C60 35 52 10 40 10 Z"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* nose cone */}
      <path
        d="M40 10 C34 10 26 26 24 40"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.4"
        fill="none"
      />
      <path
        d="M40 10 C46 10 54 26 56 40"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.4"
        fill="none"
      />
      {/* window */}
      <circle
        cx="40"
        cy="60"
        r="10"
        fill="var(--accent-dim)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <circle cx="40" cy="60" r="6" fill="var(--accent)" opacity="0.3" />
      {/* fins */}
      <path
        d="M20 90 L8 115 L20 110 Z"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <path
        d="M60 90 L72 115 L60 110 Z"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      {/* flame */}
      <ellipse cx="40" cy="118" rx="10" ry="14" fill="var(--gold)" opacity="1">
        <animate
          attributeName="ry"
          values="14;18;14;12;14"
          dur="0.4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse
        cx="40"
        cy="122"
        rx="6"
        ry="10"
        fill="var(--accent)"
        opacity="0.8"
      >
        <animate
          attributeName="ry"
          values="10;14;10;8;10"
          dur="0.4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="40" cy="126" rx="3" ry="6" fill="white" opacity="0.7">
        <animate
          attributeName="ry"
          values="6;9;6;5;6"
          dur="0.4s"
          repeatCount="indefinite"
        />
      </ellipse>
      {/* stars */}
      <circle cx="10" cy="25" r="2" fill="var(--text-faint)">
        <animate
          attributeName="opacity"
          values="1;0.4;1"
          dur="2.1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="70" cy="40" r="1.5" fill="var(--text-faint)">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="1.7s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="15" cy="55" r="1.5" fill="var(--gold)" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.8;1;0.8"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export function SatelliteSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* dish */}
      <ellipse
        cx="90"
        cy="90"
        rx="50"
        ry="30"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="var(--surface-2)"
      />
      <ellipse
        cx="90"
        cy="90"
        rx="50"
        ry="30"
        fill="url(#dishGrad)"
        opacity="0.4"
      />
      <defs>
        <radialGradient id="dishGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* ribs */}
      {[0, 30, 60, 90, 120, 150].map((a, i) => (
        <line
          key={i}
          x1="90"
          y1="90"
          x2={90 + Math.cos((a * Math.PI) / 180) * 50}
          y2={90 + Math.sin((a * Math.PI) / 180) * 30}
          stroke="var(--accent)"
          strokeWidth="0.8"
          opacity="0.35"
        />
      ))}
      {/* feed arm */}
      <line
        x1="90"
        y1="90"
        x2="90"
        y2="52"
        stroke="var(--text-muted)"
        strokeWidth="2"
      />
      <circle cx="90" cy="50" r="4" fill="var(--gold)" />
      {/* signal arcs */}
      {[20, 36, 52].map((r, i) => (
        <circle
          key={i}
          cx="90"
          cy="50"
          r={r}
          stroke="var(--gold)"
          strokeWidth="1"
          strokeDasharray="4 8"
          fill="none"
          opacity={0.5 - i * 0.12}
        >
          <animate
            attributeName="r"
            values={`${r};${r + 6};${r}`}
            dur={`${1.5 + i * 0.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values={`${0.5 - i * 0.12};0.1;${0.5 - i * 0.12}`}
            dur={`${1.5 + i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      {/* mast */}
      <line
        x1="90"
        y1="120"
        x2="90"
        y2="160"
        stroke="var(--text-muted)"
        strokeWidth="3"
      />
      <rect
        x="70"
        y="155"
        width="40"
        height="8"
        rx="2"
        fill="var(--surface-2)"
        stroke="var(--border)"
        strokeWidth="1"
      />
    </svg>
  );
}

export function YantraSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* outer square with circuit nodes */}
      <rect
        x="15"
        y="15"
        width="170"
        height="170"
        stroke="var(--accent)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      {/* circuit corners */}
      {[
        [15, 15],
        [185, 15],
        [15, 185],
        [185, 185],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="var(--gold)" opacity="0.7" />
      ))}
      {/* downward triangle (Shakti) */}
      <polygon
        points="100,50 155,145 45,145"
        stroke="var(--accent)"
        strokeWidth="1.5"
        fill="var(--accent-dim)"
        opacity="0.6"
      />
      {/* upward triangle (Shiva) */}
      <polygon
        points="100,150 45,55 155,55"
        stroke="var(--gold)"
        strokeWidth="1.5"
        fill="var(--gold-dim)"
        opacity="0.6"
      />
      {/* inner circle */}
      <circle
        cx="100"
        cy="100"
        r="35"
        stroke="var(--accent)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
        strokeDasharray="3 4"
      />
      {/* lotus petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const cx = 100 + Math.cos(angle) * 30;
        const cy = 100 + Math.sin(angle) * 30;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="10"
            ry="5"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="0.8"
            opacity="0.4"
            transform={`rotate(${i * 45} ${cx} ${cy})`}
          />
        );
      })}
      {/* center bindu */}
      <circle cx="100" cy="100" r="6" fill="var(--accent)">
        <animate
          attributeName="r"
          values="6;9;6"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* orbit dot */}
      <circle r="3" fill="var(--gold)">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath href="#yantraOrbit" />
        </animateMotion>
      </circle>
      <circle id="yantraOrbit" cx="100" cy="100" r="52" />
    </svg>
  );
}

export function LostAstronautSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* stars */}
      {[
        [20, 30],
        [170, 20],
        [40, 180],
        [160, 170],
        [90, 10],
        [10, 120],
        [185, 100],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 2 : 1.5}
          fill="var(--text-faint)"
        >
          <animate
            attributeName="opacity"
            values="1;0.2;1"
            dur={`${1.5 + i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      {/* suit body */}
      <ellipse
        cx="100"
        cy="155"
        rx="42"
        ry="52"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* chest panel */}
      <rect
        x="78"
        y="138"
        width="44"
        height="28"
        rx="5"
        fill="var(--surface)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      {/* question mark in chest */}
      <text
        x="100"
        y="157"
        textAnchor="middle"
        fontFamily="Syne, sans-serif"
        fontSize="18"
        fill="var(--gold)"
        fontWeight="700"
      >
        ?
      </text>
      {/* helmet */}
      <circle
        cx="100"
        cy="92"
        r="38"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      {/* visor */}
      <ellipse
        cx="100"
        cy="94"
        rx="26"
        ry="22"
        fill="var(--accent-dim)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* ? in visor */}
      <text
        x="100"
        y="102"
        textAnchor="middle"
        fontFamily="Syne, sans-serif"
        fontSize="22"
        fill="var(--accent)"
        fontWeight="800"
      >
        ?
      </text>
      {/* arms spread out */}
      <path
        d="M58 145 C45 135 28 132 18 138"
        stroke="var(--accent)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M142 145 C155 135 172 132 182 138"
        stroke="var(--accent)"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      {/* legs */}
      <rect
        x="78"
        y="202"
        width="18"
        height="30"
        rx="8"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <rect
        x="104"
        y="202"
        width="18"
        height="30"
        rx="8"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* tether */}
      <path
        d="M100 60 Q140 30 165 50"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        opacity="0.6"
      />
      {/* 404 text floating */}
      <text
        x="100"
        y="25"
        textAnchor="middle"
        fontFamily="Space Mono, monospace"
        fontSize="11"
        fill="var(--accent)"
        opacity="0.5"
      >
        404
      </text>
    </svg>
  );
}

export function CircuitCornerSVG({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M5 55 L5 20 Q5 5 20 5 L55 5"
        stroke="var(--accent)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <circle cx="5" cy="55" r="3" fill="var(--accent)" opacity="0.7" />
      <circle cx="55" cy="5" r="3" fill="var(--gold)" opacity="0.7" />
      <circle cx="28" cy="5" r="2" fill="var(--accent)" opacity="0.4" />
      <circle cx="5" cy="32" r="2" fill="var(--gold)" opacity="0.4" />
      <path
        d="M28 5 L28 18"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle
        cx="28"
        cy="22"
        r="3"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

export function MandalaCounterrotateAnimSVG({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <style>
        {`
          .cr-r1 { transform-origin:100px 100px; animation:cr-cw  38s linear infinite; }
          .cr-r2 { transform-origin:100px 100px; animation:cr-ccw 22s linear infinite; }
          .cr-r3 { transform-origin:100px 100px; animation:cr-cw  14s linear infinite; }
          @keyframes cr-cw  { to{transform:rotate( 360deg)} }
          @keyframes cr-ccw { to{transform:rotate(-360deg)} }
        `}
      </style>
      {/* outermost ring — slow CW */}
      <g className="cr-r1">
        <circle
          cx="100"
          cy="100"
          r="90"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.18"
        />
        <g fill="#6C3D91" opacity="0.5">
          <rect x="98" y="10" width="4" height="8" rx="1" />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(30  100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(60  100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(90  100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(120 100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(150 100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(180 100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(210 100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(240 100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(270 100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(300 100 100)"
          />
          <rect
            x="98"
            y="10"
            width="4"
            height="8"
            rx="1"
            transform="rotate(330 100 100)"
          />
        </g>
      </g>
      {/* middle ring — CCW with petals */}
      <g className="cr-r2">
        <circle
          cx="100"
          cy="100"
          r="65"
          stroke="#6C3D91"
          strokeWidth="0.8"
          strokeDasharray="3 7"
          opacity="0.5"
        />
        <g stroke="#6C3D91" strokeWidth="0.8" fill="#6C3D91" fillOpacity="0.09">
          <path d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z" />
          <path
            d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z"
            transform="rotate(45  100 100)"
          />
          <path
            d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z"
            transform="rotate(90  100 100)"
          />
          <path
            d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z"
            transform="rotate(135 100 100)"
          />
          <path
            d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z"
            transform="rotate(180 100 100)"
          />
          <path
            d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z"
            transform="rotate(225 100 100)"
          />
          <path
            d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z"
            transform="rotate(270 100 100)"
          />
          <path
            d="M100 100 C94 88 93 72 100 62 C107 72 106 88 100 100Z"
            transform="rotate(315 100 100)"
          />
        </g>
      </g>
      {/* innermost ring — fast CW hexagram */}
      <g className="cr-r3">
        <polygon
          points="100,57 137,120 63,120"
          stroke="#6C3D91"
          strokeWidth="1"
          fill="none"
          opacity="0.65"
        />
        <polygon
          points="100,143 63,80 137,80"
          stroke="#6C3D91"
          strokeWidth="1"
          fill="none"
          opacity="0.65"
        />
      </g>
      {/* static centre */}
      <circle
        cx="100"
        cy="100"
        r="14"
        stroke="#6C3D91"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="100" cy="100" r="5" fill="#6C3D91" />
    </svg>
  );
}

export function DividerDrawAnimSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <style>
        {`
          .dl { stroke-dasharray:200; stroke-dashoffset:200; animation:dd-l 4s ease-out 0s   infinite; }
          .dr { stroke-dasharray:200; stroke-dashoffset:200; animation:dd-r 4s ease-out 0s   infinite; }
          .dc { stroke-dasharray:120; stroke-dashoffset:120; animation:dd-l 3s ease-out 3.5s infinite; }
          @keyframes dd-l { to{stroke-dashoffset:0} }
          @keyframes dd-r { from{stroke-dashoffset:-200} to{stroke-dashoffset:0} }
        `}
      </style>
      <line
        x1="8"
        y1="26"
        x2="178"
        y2="26"
        stroke="#6C3D91"
        strokeWidth="0.85"
        className="dl"
        opacity="0.6"
      />
      <line
        x1="242"
        y1="26"
        x2="412"
        y2="26"
        stroke="#6C3D91"
        strokeWidth="0.85"
        className="dr"
        opacity="0.6"
      />
      <circle cx="164" cy="26" r="2.2" fill="#6C3D91" opacity="0.65" />
      <circle cx="256" cy="26" r="2.2" fill="#6C3D91" opacity="0.65" />
      {/* animated lotus */}
      <g className="dc">
        <g transform="translate(210,26)">
          <path
            d="M0 0 C-7 -7 -7 -16 0 -19 C7 -16 7 -7 0 0Z"
            stroke="#6C3D91"
            strokeWidth="1"
            fill="#6C3D91"
            fillOpacity="0.16"
          />
          <path
            d="M0 0 C-7 -7 -7 -16 0 -19 C7 -16 7 -7 0 0Z"
            stroke="#6C3D91"
            strokeWidth="1"
            fill="#6C3D91"
            fillOpacity="0.16"
            transform="rotate(72)"
          />
          <path
            d="M0 0 C-7 -7 -7 -16 0 -19 C7 -16 7 -7 0 0Z"
            stroke="#6C3D91"
            strokeWidth="1"
            fill="#6C3D91"
            fillOpacity="0.16"
            transform="rotate(144)"
          />
          <path
            d="M0 0 C-7 -7 -7 -16 0 -19 C7 -16 7 -7 0 0Z"
            stroke="#6C3D91"
            strokeWidth="1"
            fill="#6C3D91"
            fillOpacity="0.16"
            transform="rotate(216)"
          />
          <path
            d="M0 0 C-7 -7 -7 -16 0 -19 C7 -16 7 -7 0 0Z"
            stroke="#6C3D91"
            strokeWidth="1"
            fill="#6C3D91"
            fillOpacity="0.16"
            transform="rotate(288)"
          />
          <circle r="3.5" fill="#6C3D91" />
        </g>
      </g>
      {/* end ticks */}
      <path
        d="M8   23 L8   29"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
      <path
        d="M412 23 L412 29"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.35"
      />
    </svg>
  );
}

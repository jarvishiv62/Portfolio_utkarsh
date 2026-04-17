// src/shared/components/ui/Svgs.tsx
// all svgs in one file. yes, one file. fight me.
import type React from "react";

export function DevAvatarSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* hoodie body */}
      <path
        d="M40 160 C40 140 55 130 70 128 L100 122 L130 128 C145 130 160 140 160 160 L165 230 L35 230 Z"
        fill="var(--surface-2)"
      />
      {/* hoodie pocket */}
      <rect
        x="75"
        y="175"
        width="50"
        height="28"
        rx="4"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        opacity="0.8"
      />
      {/* hoodie seam */}
      <line
        x1="100"
        y1="128"
        x2="100"
        y2="175"
        stroke="var(--accent)"
        strokeWidth="1.5"
        opacity="0.7"
      />
      {/* circuit traces on hoodie */}
      <path
        d="M55 155 L75 155 L75 165 L90 165"
        stroke="var(--gold)"
        strokeWidth="1.2"
        opacity="0.7"
        fill="none"
      />
      <circle cx="90" cy="165" r="2" fill="var(--gold)" opacity="0.8" />
      <path
        d="M145 155 L125 155 L125 165 L110 165"
        stroke="var(--gold)"
        strokeWidth="1.2"
        opacity="0.7"
        fill="none"
      />
      <circle cx="110" cy="165" r="2" fill="var(--gold)" opacity="0.8" />
      {/* neck */}
      <rect
        x="88"
        y="118"
        width="24"
        height="14"
        rx="4"
        fill="var(--surface)"
      />
      {/* head */}
      <ellipse cx="100" cy="90" rx="38" ry="42" fill="var(--surface)" />
      {/* hoodie hood outline */}
      <path
        d="M58 115 C50 100 48 80 55 60 C62 40 78 28 100 26 C122 28 138 40 145 60 C152 80 150 100 142 115"
        stroke="var(--accent)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* visor — cyber purple tinted glass */}
      <rect
        x="65"
        y="70"
        width="70"
        height="32"
        rx="8"
        fill="var(--accent-dim)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* visor scanline glow */}
      <rect
        x="65"
        y="70"
        width="70"
        height="10"
        rx="8"
        fill="var(--accent-dim)"
        opacity="0.8"
      />
      {/* eyes through visor — two glowing dots */}
      <ellipse cx="84" cy="86" rx="7" ry="5" fill="var(--accent)" opacity="1">
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="116" cy="86" rx="7" ry="5" fill="var(--gold)" opacity="1">
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="2.5s"
          begin="0.4s"
          repeatCount="indefinite"
        />
      </ellipse>
      {/* visor reflection streak */}
      <line
        x1="68"
        y1="74"
        x2="82"
        y2="88"
        stroke="white"
        strokeWidth="1"
        opacity="0.1"
      />
      {/* mouth / chin area */}
      <path
        d="M85 108 Q100 114 115 108"
        stroke="var(--text-muted)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* headphone band */}
      <path
        d="M62 88 C62 58 138 58 138 88"
        stroke="var(--surface-2)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M62 88 C62 58 138 58 138 88"
        stroke="var(--accent)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* headphone cups */}
      <rect
        x="52"
        y="82"
        width="16"
        height="20"
        rx="6"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <rect
        x="132"
        y="82"
        width="16"
        height="20"
        rx="6"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* LED on left cup */}
      <circle cx="60" cy="92" r="3" fill="var(--accent)">
        <animate
          attributeName="fill"
          values="var(--accent);var(--gold);var(--accent)"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </circle>
      {/* LED on right cup */}
      <circle cx="140" cy="92" r="3" fill="var(--gold)">
        <animate
          attributeName="fill"
          values="var(--gold);var(--accent);var(--gold)"
          dur="1.8s"
          begin="0.9s"
          repeatCount="indefinite"
        />
      </circle>
      {/* floating code fragments */}
      <text
        x="20"
        y="60"
        fontFamily="Space Mono, monospace"
        fontSize="7"
        fill="var(--accent)"
        opacity="0.6"
      >
        &lt;/&gt;
      </text>
      <text
        x="165"
        y="80"
        fontFamily="Space Mono, monospace"
        fontSize="7"
        fill="var(--gold)"
        opacity="0.6"
      >
        {}
      </text>
      <text
        x="22"
        y="140"
        fontFamily="Space Mono, monospace"
        fontSize="6"
        fill="var(--accent)"
        opacity="0.4"
      >
        fn()
      </text>
      <text
        x="160"
        y="150"
        fontFamily="Space Mono, monospace"
        fontSize="6"
        fill="var(--gold)"
        opacity="0.25"
      >
        API
      </text>
    </svg>
  );
}

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
        utkarsh@devbox ~{" "}
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

export function RobotSVG({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 140 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* antenna */}
      <line
        x1="70"
        y1="10"
        x2="70"
        y2="26"
        stroke="var(--accent)"
        strokeWidth="2"
      />
      <circle cx="70" cy="8" r="4" fill="var(--accent)">
        <animate
          attributeName="fill"
          values="var(--accent);var(--gold);var(--accent)"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      {/* head */}
      <rect
        x="30"
        y="26"
        width="80"
        height="60"
        rx="12"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* eye sockets */}
      <rect
        x="42"
        y="40"
        width="22"
        height="18"
        rx="5"
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <rect
        x="76"
        y="40"
        width="22"
        height="18"
        rx="5"
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      {/* animated scanning eyes */}
      <rect
        x="43"
        y="41"
        width="20"
        height="3"
        rx="1.5"
        fill="var(--accent)"
        opacity="0.7"
      >
        <animate
          attributeName="y"
          values="41;54;41"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      <rect
        x="77"
        y="41"
        width="20"
        height="3"
        rx="1.5"
        fill="var(--gold)"
        opacity="0.7"
      >
        <animate
          attributeName="y"
          values="54;41;54"
          dur="2s"
          repeatCount="indefinite"
        />
      </rect>
      {/* mouth */}
      <rect
        x="50"
        y="72"
        width="40"
        height="6"
        rx="3"
        fill="var(--surface)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      {[54, 62, 70, 78, 86].map((x, i) => (
        <rect
          key={i}
          x={x}
          y="73"
          width="4"
          height="4"
          rx="1"
          fill="var(--accent)"
          opacity={i % 2 === 0 ? 0.8 : 0.3}
        />
      ))}
      {/* body */}
      <rect
        x="22"
        y="90"
        width="96"
        height="70"
        rx="10"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      {/* chest panel */}
      <rect
        x="38"
        y="100"
        width="64"
        height="40"
        rx="6"
        fill="var(--surface)"
        stroke="var(--border)"
        strokeWidth="1"
      />
      {/* progress bar */}
      <rect
        x="44"
        y="110"
        width="52"
        height="6"
        rx="3"
        fill="var(--surface-2)"
      />
      <rect x="44" y="110" width="36" height="6" rx="3" fill="var(--accent)">
        <animate
          attributeName="width"
          values="10;52;10"
          dur="3s"
          repeatCount="indefinite"
        />
      </rect>
      {/* LED indicators */}
      {[54, 68, 82].map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy="128"
          r="4"
          fill={i === 1 ? "var(--gold)" : "var(--accent)"}
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur={`${0.8 + i * 0.3}s`}
            repeatCount="indefinite"
            begin={`${i * 0.3}s`}
          />
        </circle>
      ))}
      {/* arms */}
      <rect
        x="2"
        y="92"
        width="18"
        height="50"
        rx="6"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <rect
        x="120"
        y="92"
        width="18"
        height="50"
        rx="6"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      {/* hands */}
      <circle
        cx="11"
        cy="148"
        r="7"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <circle
        cx="129"
        cy="148"
        r="7"
        fill="var(--surface-2)"
        stroke="var(--accent)"
        strokeWidth="1"
      />
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

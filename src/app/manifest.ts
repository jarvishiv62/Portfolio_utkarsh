// src/app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Utkarsh Maurya — Developer Portfolio",
    short_name: "_utkarsh.",
    description: "Full-stack dev. Laravel + Next.js. Shipping real things since 2024.",
    start_url: "/",
    display: "standalone",
    background_color: "#06030f",
    theme_color: "#a855f7",
    orientation: "portrait",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}

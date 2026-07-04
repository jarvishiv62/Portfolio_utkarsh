// src/shared/lib/metadata.ts
import type { Metadata } from "next";

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devport-UTKARSH.vercel.app",
  name: "UTKARSH Maurya",
  title: "UTKARSH MAURYA — Full-Stack Developer",
  description:
    "Software developer who joined Bizfoc Solutions in June 2026 after graduating B.Tech and is now exploring new and better opportunities.",
  author: "UTKARSH Maurya",
  email: "virmauryauttu@gmail.com",
  github: "https://github.com/jarvishiv62",
  linkedin: "https://linkedin.com/in/UTKARSH--maurya--",
};

export function pageMeta(opts?: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const title = opts?.title ? `${opts.title} — UTKARSH Maurya` : SITE.title;
  const description = opts?.description ?? SITE.description;
  const url = opts?.path ? `${SITE.url}${opts.path}` : SITE.url;
  const image = opts?.image ?? `${SITE.url}/opengraph-image`;

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    authors: [{ name: SITE.author }],
    keywords: [
      "UTKARSH Maurya",
      "full-stack developer",
      "Laravel developer",
      "Next.js developer",
      "backend developer",
      "REC Bijnor",
      "Bizfoc Solutions",
      "Varanasi",
      "India",
      "web developer portfolio",
    ],
  };
}

// src/shared/lib/metadata.ts
import type { Metadata } from "next";

export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devport-utkarsh.vercel.app",
  name: "Utkarsh Maurya",
  title: "Utkarsh Maurya — Full-Stack Developer",
  description:
    "Full-stack developer specializing in Laravel + Next.js. Shipped real products at two internships. Cut API response times by 30%. Looking for the next thing to build.",
  author: "Utkarsh Maurya",
  email: "virmauryauttu@gmail.com",
  github: "https://github.com/jarvishiv62",
  linkedin: "https://linkedin.com/in/utkarsh--maurya--",
};

export function pageMeta(opts?: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const title = opts?.title ? `${opts.title} — Utkarsh Maurya` : SITE.title;
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
      "Utkarsh Maurya",
      "full-stack developer",
      "Laravel developer",
      "Next.js developer",
      "backend developer",
      "REC Bijnor",
      "Bareilly",
      "India",
      "web developer portfolio",
    ],
  };
}

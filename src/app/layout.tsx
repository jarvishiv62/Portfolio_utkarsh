// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/shared/components/layout/Navbar";
import { Footer } from "@/shared/components/layout/Footer";
import { Providers } from "@/shared/components/ui/Providers";
import { pageMeta } from "@/shared/lib/metadata";

export const metadata: Metadata = pageMeta();

export const viewport: Viewport = {
  themeColor: "#a855f7",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

// anti-flash theme script — inlined in <head> to avoid FOUC
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem(&apos;theme&apos;);
    if (t === &apos;light&apos;) document.documentElement.classList.add(&apos;light&apos;);
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

// src/app/contact/page.tsx
import { pageMeta } from "@/shared/lib/metadata";
import { ContactSection } from "@/features/contact/ContactSection";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with UTKARSH MAURYA — software developer who joined Bizfoc Solutions in June 2026 after graduating B.Tech and is now exploring new and better opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <ContactSection />
    </div>
  );
}

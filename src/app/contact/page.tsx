// src/app/contact/page.tsx
import { pageMeta } from "@/shared/lib/metadata";
import { ContactSection } from "@/features/contact/ContactSection";

export const metadata = pageMeta({
  title: "Contact",
  description:
    "Get in touch with UTKARSH MAURYA — open to full-time roles and internships.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <ContactSection />
    </div>
  );
}

// src/app/page.tsx
import { HeroSection } from "@/features/hero/HeroSection";
import { AboutSection } from "@/features/about/AboutSection";
import { TimelineSection } from "@/features/timeline/TimelineSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { TestimonialsSection } from "@/features/testimonials/TestimonialsSection";
import { PhilosophySection } from "@/features/philosophy/PhilosophySection";
import { LearningSection } from "@/features/learning/LearningSection";
import FloatingChatbot from "@/features/chatbot/FloatingChatbot";
import { ContactSection } from "@/features/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PhilosophySection />
      <LearningSection />
      <ContactSection />
      <FloatingChatbot />
    </>
  );
}

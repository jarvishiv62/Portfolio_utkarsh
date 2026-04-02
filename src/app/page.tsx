// src/app/page.tsx
import { HeroSection } from "@/features/hero/HeroSection";
import { AboutSection } from "@/features/about/AboutSection";
import { ExperienceSection } from "@/features/experience/ExperienceSection";
import { ProjectsSection } from "@/features/projects/ProjectsSection";
import { TestimonialsSection } from "@/features/testimonials/TestimonialsSection";
import { PhilosophySection } from "@/features/philosophy/PhilosophySection";
import { LearningSection } from "@/features/learning/LearningSection";
import { ChatbotSection } from "@/features/chatbot/ChatbotSection";
import { ContactSection } from "@/features/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <PhilosophySection />
      <LearningSection />
      <ChatbotSection />
      <ContactSection />
    </>
  );
}

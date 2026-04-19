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
import { DividerDrawAnimSVG } from "@/shared/components/ui/Svgs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="my-16 flex justify-center">
        <DividerDrawAnimSVG className="w-full max-w-4xl h-12" />
      </div>

      <AboutSection />
      <div className="my-16 flex justify-center">
        <DividerDrawAnimSVG className="w-full max-w-4xl h-12" />
      </div>

      <TimelineSection />
      <div className="my-16 flex justify-center">
        <DividerDrawAnimSVG className="w-full max-w-4xl h-12" />
      </div>

      <ProjectsSection />
      <div className="my-16 flex justify-center">
        <DividerDrawAnimSVG className="w-full max-w-4xl h-12" />
      </div>

      <TestimonialsSection />
      <div className="my-16 flex justify-center">
        <DividerDrawAnimSVG className="w-full max-w-4xl h-12" />
      </div>

      <PhilosophySection />
      <div className="my-16 flex justify-center">
        <DividerDrawAnimSVG className="w-full max-w-4xl h-12" />
      </div>

      <LearningSection />
      <div className="my-16 flex justify-center">
        <DividerDrawAnimSVG className="w-full max-w-4xl h-12" />
      </div>

      <ContactSection />
      <FloatingChatbot />
    </>
  );
}

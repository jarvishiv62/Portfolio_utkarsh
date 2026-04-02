// src/shared/types/index.ts
// types. because 'any' is a cry for help.

export type SkillCategory = "backend" | "frontend" | "database" | "tools" | "ai";
export type ProjectStatus = "shipped" | "wip" | "archived";
export type ProjectColor = "purple" | "gold";
export type LearningStatus = "active" | "queued" | "done";
export type TestimonialAccent = "purple" | "gold";
export type ChatbotState = "idle" | "thinking" | "done";
export type FormState = "idle" | "sending" | "success" | "error";
export type NavDirection = "up" | "left" | "right" | "none";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
}

export interface ExperienceBullet {
  role: string;
  company: string;
  period: string;
  type: string;
  highlight: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectStory {
  problem: string;
  solution: string;
  technical: string;
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: ProjectStatus;
  stack: string[];
  summary: string;
  story: ProjectStory;
  metrics: ProjectMetric[];
  color: ProjectColor;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  accentColor: TestimonialAccent;
}

export interface PhilosophyItem {
  num: string;
  title: string;
  body: string;
}

export interface LearningItem {
  topic: string;
  detail: string;
  progress: number;
  icon: string;
  status: LearningStatus;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

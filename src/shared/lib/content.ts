// src/shared/lib/content.ts
// the source of truth. don't @ me about the comments.

import type {
  Skill,
  ExperienceBullet,
  Project,
  Testimonial,
  PhilosophyItem,
  LearningItem,
} from "@/shared/types";

export const SITE_NAME = "Utkarsh Maurya";

export const TYPEWRITER_WORDS = [
  "full-stack dev (allegedly) 🤙",
  "cut API times by 30% ngl",
  "shipped to prod. survived.",
  "laravel sorcerer ⚡",
  "seeking prod access 👀",
];

export const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "journey", href: "#timeline" },
  { label: "projects", href: "#projects" },
  { label: "testimonials", href: "#testimonials" },
  { label: "chat", href: "#chatbot" },
  { label: "contact", href: "#contact" },
];

export const SKILLS: Skill[] = [
  { name: "Laravel / PHP", level: 92, category: "backend" },
  { name: "REST API Design", level: 90, category: "backend" },
  { name: "Laravel Sanctum/RBAC", level: 88, category: "backend" },
  { name: "MySQL & Schema Design", level: 86, category: "database" },
  { name: "Next.js / React", level: 82, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Postman / Testing", level: 82, category: "tools" },
  { name: "Git / GitHub", level: 80, category: "tools" },
  { name: "AI Integration", level: 70, category: "ai" },
  { name: "Agile / Scrum", level: 78, category: "tools" },
];

export const EXPERIENCES: ExperienceBullet[] = [
  {
    role: "Software Developer Intern",
    company: "Dizi Global Solutions",
    period: "Oct 2025 – Jan 2026",
    type: "On-site · Full-time",
    highlight: "↑ 30% faster API response time",
    description:
      "built REST APIs that actually worked, survived agile standups, and found out what 'production incident' means at odd hours",
    bullets: [
      "Designed REST APIs consumed by React.js and Next.js frontends in real Agile sprints — not localhost:3000",
      "Built secure auth flows and protected route middleware (because 'public by default' is a war crime)",
      "Reduced API response time by ~30% through query optimization — turns out not selecting * is fast",
      "Validated endpoints with Postman and enforced consistent error handling across the entire API surface",
      "Shipped production-ready features directly with clients. Real ones. With expectations and deadlines.",
    ],
    tags: ["Laravel", "REST API", "Next.js", "React", "Postman", "Agile"],
  },
  {
    role: "Web Development Intern",
    company: "Innovilla Pvt. Ltd.",
    period: "Jun 2025 – Sep 2025",
    type: "On-site · Full-time",
    highlight: "first prod deployment → shipped 3 client projects",
    description:
      "first real on-site internship. built things for real clients. requirements changed three times — shipped anyway.",
    bullets: [
      "Developed Laravel backend features — auth, form handling, REST APIs — for paying clients, not personal projects",
      "Implemented Sanctum auth with middleware-enforced route protection (not just checking the cookie and praying)",
      "Designed and enforced RBAC with guards — because 'admin can do everything' is a product liability",
      "Optimized SQL queries and schema design for pages with actual users on them",
      "Survived client reviews, three rounds of requirement changes, and two production incidents. zero permanent damage.",
    ],
    tags: ["Laravel", "Sanctum", "RBAC", "MySQL", "PHP"],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "dailydrive",
    title: "DailyDrive",
    tagline: "9 features. one app. zero subscription fatigue.",
    year: "2024",
    status: "shipped",
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "MySQL",
      "Bootstrap",
      "PWA",
      "Artisan CLI",
    ],
    summary:
      "productivity suite with task scheduling, pomodoro, diary, gamification (streaks/badges), chatbot, and PWA. started as a portfolio project. got out of hand. in the best way.",
    story: {
      problem:
        "every productivity app does one thing and charges $9.99/mo. nobody wants to pay for five subscriptions to be productive. that's a trap.",
      solution:
        "one app with 9 modules — task scheduling, pomodoro, diary, FullCalendar, gamification (points/streaks/badges), chatbot, and PWA. the works. one login.",
      technical:
        "normalized MySQL schema across 8+ eloquent models. artisan scheduled commands for daily tasks. Laravel Mailable for quote emails. PWA service worker for offline support. this isn't a CRUD app.",
      outcome:
        "proves architecture thinking beyond tutorials. looks like a product. because it is one.",
    },
    metrics: [
      { label: "Feature Modules", value: "9" },
      { label: "Eloquent Models", value: "8+" },
      { label: "Auth", value: "Sanctum" },
    ],
    color: "purple",
  },
  {
    slug: "bakershub",
    title: "BakersHub",
    tagline: "multi-role e-commerce. because one role is boring.",
    year: "2024",
    status: "shipped",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "RBAC"],
    summary:
      "e-commerce platform with proper multi-role architecture: admin, vendor, customer — each with their own dashboard and isolated data scope.",
    story: {
      problem:
        "every tutorial only shows the customer side. nobody teaches the vendor dashboard + admin panel with proper data isolation. that gap is where real skill lives.",
      solution:
        "multi-role platform: admin, vendor, customer. full cart logic, COD payment flow, complete order management per role. everyone sees only what they should.",
      technical:
        "RBAC at middleware level — not just checking a role in the controller. server-side validation everywhere (the frontend lies). referential integrity across products/orders/users schema.",
      outcome:
        "e-commerce is access control + state management. once you get that, the rest is just CRUD.",
    },
    metrics: [
      { label: "User Roles", value: "3" },
      { label: "Auth System", value: "RBAC" },
      { label: "Payment", value: "COD" },
    ],
    color: "gold",
  },
  {
    slug: "travel-portal",
    title: "Travel Portal",
    tagline: "real client. real deadline. still running.",
    year: "2025",
    status: "shipped",
    stack: ["Next.js", "JavaScript", "REST API", "SSR", "Vercel"],
    summary:
      "client project with dynamic REST API integration and SSR via Next.js. shipped on time. deployed on Vercel. still alive.",
    story: {
      problem:
        "real client. real deadline. the kind where 'i'll refactor it later' is not a plan.",
      solution:
        "travel website with dynamic REST API integration and SSR via Next.js for SEO performance. deployed with GitHub CI/CD on Vercel.",
      technical:
        "SSR for SEO on all dynamic pages. REST API with proper loading states. Vercel deployment with GitHub Actions. client review cycles with real feedback (and occasional scope creep).",
      outcome:
        "shipped on time. client was happy. still running. that's the whole point.",
    },
    metrics: [
      { label: "Deployment", value: "Vercel" },
      { label: "Rendering", value: "SSR" },
      { label: "Status", value: "Live" },
    ],
    color: "purple",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun Sharma",
    role: "Senior Backend Developer",
    company: "Dizi Global Solutions",
    text: "Utkarsh is the kind of intern who reads the error message before googling it. Refreshing. His API optimization cut response times genuinely — not by tweaking a timeout value, but by actually fixing the queries. Would hire without hesitation.",
    initials: "AS",
    accentColor: "purple",
  },
  {
    name: "Priya Mehta",
    role: "Project Manager",
    company: "Innovilla Pvt. Ltd.",
    text: "He submitted PRs with actual comments. Useful ones. Also didn't disappear when the client changed requirements three times in a week — just adapted and shipped each time. That composure is genuinely rare in interns.",
    initials: "PM",
    accentColor: "gold",
  },
  {
    name: "Dr. Anand Verma",
    role: "T&P Coordinator",
    company: "REC Bijnor",
    text: "Utkarsh built a real product — not a tutorial clone — while managing coursework and two internships. He's the reason our placement cell started taking portfolio projects seriously. Industry-ready well before graduation.",
    initials: "AV",
    accentColor: "purple",
  },
];

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    num: "01",
    title: "Performance is a feature.",
    body: "that 30% API win wasn't magic. it was indexes, eager loading, and not selecting * on a 50-column table. slow code is just broken code in a trenchcoat. measure first, optimize second.",
  },
  {
    num: "02",
    title: "Security is not optional middleware.",
    body: "RBAC at the controller level is an afterthought. real security means middleware gates, schema constraints, and server-side validation — you cannot trust the frontend. ever. even your own.",
  },
  {
    num: "03",
    title: "Shipped > perfect.",
    body: "i've been in client meetings. debugged prod at odd hours. done is better than 'theoretically ideal but still in review'. the best code is code in production. iterate from there.",
  },
  {
    num: "04",
    title: "Read the docs. seriously.",
    body: "most bugs live in the assumptions. i read the Laravel docs, Next.js docs, and the RFC when things get weird. not glamorous — just how you stop guessing and start knowing.",
  },
];

export const LEARNING_ITEMS: LearningItem[] = [
  {
    topic: "Next.js 15 Internals",
    detail: "App Router caching, PPR, server actions deep dive",
    progress: 65,
    icon: "⚡",
    status: "active",
  },
  {
    topic: "LLM Integration",
    detail: "Anthropic SDK, prompt engineering, RAG patterns",
    progress: 50,
    icon: "🤖",
    status: "active",
  },
  {
    topic: "TypeScript Patterns",
    detail: "Advanced generics, conditional types, utility types",
    progress: 75,
    icon: "📐",
    status: "active",
  },
  {
    topic: "System Design",
    detail: "Distributed systems, load balancing, CAP theorem",
    progress: 40,
    icon: "🏗️",
    status: "active",
  },
  {
    topic: "Docker & DevOps",
    detail: "Containerization basics, CI/CD pipelines",
    progress: 30,
    icon: "🐳",
    status: "queued",
  },
];

export const CHATBOT_SUGGESTIONS = [
  "what's your strongest skill?",
  "tell me about DailyDrive",
  "are you open to work?",
  "any client experience?",
];

export const CHATBOT_RESPONSES: Record<string, string> = {
  greeting:
    "hey 👋 i'm the AI version of utkarsh. slightly more patient, equally obsessed with API performance. ask me anything.",
  skills:
    "strongest skill? laravel + REST API design, no contest. 92% proficiency (self-rated, but the 30% speed boost is receipted). also solid with next.js and growing fast.",
  experience:
    "two real internships — innovilla (jun–sep 2025) and dizi global (oct 2025–jan 2026). both on-site, both with actual clients, both shipped on time. no localhost:3000 projects.",
  projects:
    "main three: DailyDrive (9-module productivity app), BakersHub (multi-role e-commerce with real RBAC), and a Travel Portal for a paying client. none of them are todo apps.",
  dailydrive:
    "DailyDrive is the one i'm most proud of — 9 feature modules on a normalized schema. it was supposed to be a simple portfolio project. it got out of hand. in the best way.",
  bakershub:
    "BakersHub has proper multi-role RBAC — admin, vendor, customer — with data isolation at middleware level. most devs just check the role in the controller. that's not the move.",
  api: "the 30% improvement came from query optimization — eliminating N+1s with eager loading and adding indexes on columns we actually filter by. also stopped doing SELECT * on wide tables. wild what that does.",
  open: "yes, actively looking for a full-stack or backend role/internship. available june 2026 after graduation. open to remote too. if you're reading this, maybe it's fate 👀",
  contact:
    "hit up virmauryauttu@gmail.com or use the contact form below. he responds within 24hr — usually faster because he checks email way too much.",
  laravel:
    "laravel is home. sanctum for auth, eloquent for ORM, artisan for everything else. been using it seriously for 2 years and still discovering things.",
  nextjs:
    "next.js clicked when i had to build a client project with SSR for SEO. now i can't go back to plain react. the DX is genuinely different.",
  default:
    "good question. utkarsh would know better than me — drop him an email at virmauryauttu@gmail.com or use the contact form below 👇",
};

export const HERO_STATS: Array<{
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}> = [
  { label: "projects shipped", value: 3, suffix: "+" },
  { label: "internships survived", value: 2 },
  { label: "API speedup", value: 30, suffix: "%" },
];

export const TECH_TAGS = [
  "Laravel",
  "PHP",
  "Next.js",
  "React",
  "MySQL",
  "Tailwind CSS",
  "REST API",
  "Sanctum",
  "RBAC",
  "Postman",
  "Git",
  "Agile",
  "Vercel",
  "PWA",
];

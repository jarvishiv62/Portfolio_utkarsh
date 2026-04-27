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

export const SITE_NAME = "UTKARSH Maurya";

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
  { label: "All projects", href: "/allprojects" },
  { label: "testimonials", href: "#testimonials" },
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
    name: "DailyDrive",
    tagline: "AI-powered productivity suite with 9 integrated modules",
    year: "2024",
    status: "shipped",
    stack: [
      "Laravel 11",
      "PHP 8.2",
      "MySQL",
      "Bootstrap",
      "PWA",
      "OpenAI API",
      "Artisan CLI",
    ],
    summary:
      "AI-enabled productivity web application featuring calendar, Pomodoro timer, analytics dashboard, gamification, and intelligent chatbot. Built as a comprehensive solution to replace multiple subscription apps.",
    story: {
      problem:
        "Every productivity app does one thing and charges $9.99/month. Nobody wants to pay for five subscriptions just to be productive. That's a trap that leads to app fatigue and scattered data.",
      solution:
        "One unified app with 9 integrated modules — task scheduling, Pomodoro timer, diary, FullCalendar, gamification (points/streaks/badges), AI chatbot, daily quotes, and PWA. All features work together seamlessly with a single login.",
      technical:
        "Normalized MySQL schema across 8+ Eloquent models. Laravel Mailable for daily motivational quotes. Artisan scheduled commands for automation. PWA service worker for offline support. OpenAI integration for intelligent chatbot. Real-time AJAX updates throughout.",
      outcome:
        "Proves architectural thinking beyond tutorials. Demonstrates ability to build complex, feature-rich applications that look and feel like commercial products.",
    },
    metrics: [
      { label: "Feature Modules", value: "9" },
      { label: "Eloquent Models", value: "8+" },
      { label: "AI Integration", value: "OpenAI" },
    ],
    color: "gold",
    stackColor: "accent",
    hook: "Every productivity app does one thing and charges $9.99/month. I built one that does nine.",
    oneliner:
      "AI-powered productivity suite that replaces 5 subscription apps with 1 unified platform.",
    impact: [
      "9 integrated modules including calendar, pomodoro, diary, and AI chatbot",
      "PWA functionality with offline support and daily motivational emails",
      "Gamification system with points, streaks, and achievement badges",
    ],
    problem:
      "Built a comprehensive productivity platform to solve subscription fatigue and scattered data across multiple apps.",
    github: "https://github.com/jarvishiv62/Productivity-Suite-Web-App",
    videoUrl: "/videos/dailydrive.mp4",
    build:
      "I started with Laravel 11 because I needed a robust backend that could handle complex relationships between tasks, goals, diary entries, and user statistics. The database schema was normalized across 8+ Eloquent models with proper foreign key relationships. For the AI chatbot, I integrated OpenAI's API with intelligent fallback to handle rate limits. The PWA functionality was implemented using Laravel's built-in service worker support combined with a custom manifest file. The biggest challenge was the real-time AJAX updates throughout the application without breaking the user experience.",
    proudOf:
      "What I'm most proud of is the architectural decisions that made this feel like a real product. The gamification system with points, streaks, and badges actually motivates users. The AI chatbot provides contextual responses based on the user's current task. The daily motivational emails are sent automatically via Laravel Mailable and Artisan scheduler. Most importantly, everything works together seamlessly - it doesn't feel like a collection of features, but like a cohesive productivity ecosystem.",
  },
  {
    slug: "resume-builder",
    title: "LaTeX Resume Optimizer",
    name: "Resume Optimizer",
    tagline: "AI-powered resume optimization with multi-engine support",
    year: "2024",
    status: "shipped",
    stack: [
      "Laravel 11",
      "PHP 8.3",
      "Next.js 14",
      "Python 3.12",
      "FastAPI",
      "MySQL",
      "Docker",
      "OpenAI",
      "xAI Grok",
      "Google Gemini",
    ],
    summary:
      "Microservices-based resume optimization platform using AI to enhance LaTeX resumes for specific job descriptions. Features real-time ATS scoring, keyword analysis, and multi-AI engine support.",
    story: {
      problem:
        "Job seekers struggle to tailor their resumes for each application. Manual optimization is time-consuming and often misses critical ATS requirements, leading to rejected applications before human review.",
      solution:
        "Three-tier microservices architecture: Laravel backend for API/auth, Python NLP service for keyword extraction, Next.js frontend with Monaco editor. AI optimization with fallback chain (Grok → Gemini → non-AI).",
      technical:
        "Microservices with Docker Compose orchestration. FastAPI NLP service using TF-IDF/RAKE algorithms. Real-time LaTeX parsing and ATS scoring. Multi-AI optimization with intelligent fallback. Monaco editor with syntax highlighting and diff viewer.",
      outcome:
        "Demonstrates advanced architectural patterns, AI integration, and real-time collaborative editing. Shows ability to build sophisticated developer tools with modern tech stack.",
    },
    metrics: [
      { label: "AI Engines", value: "3" },
      { label: "Services", value: "3" },
      { label: "Containerized", value: "Yes" },
    ],
    color: "purple",
    stackColor: "violet",
    hook: "Most resumes get rejected by robots before humans ever see them. I built the robot trainer.",
    oneliner:
      "Microservices AI platform that optimizes LaTeX resumes using 3 different AI engines with real-time ATS scoring.",
    impact: [
      "Real-time ATS scoring and keyword analysis with visual feedback",
      "Multi-AI optimization with intelligent fallback (Grok → Gemini → non-AI)",
      "Monaco editor with live LaTeX parsing and diff viewing",
    ],
    problem:
      "Built a sophisticated microservices platform to solve resume optimization challenges with multiple AI engines.",
    github: "https://github.com/jarvishiv62/resume_builder_v1",
    videoUrl: "/videos/resume-builder.mp4",
    build:
      "This was my first real microservices architecture. I used Laravel 11 for the backend API and authentication because of its robust Sanctum integration. The Python FastAPI service handles all NLP processing using TF-IDF and RAKE algorithms for keyword extraction. The Next.js frontend features a Monaco editor with custom LaTeX language support. The biggest technical challenge was implementing real-time ATS scoring - I had to reverse-engineer how ATS systems work and create scoring algorithms. The multi-AI fallback system was crucial for reliability - if Grok fails, it falls back to Gemini, then to local NLP processing.",
    proudOf:
      "I'm proud that I built a complete developer tool that solves a real problem. The Monaco editor integration with live LaTeX parsing and diff viewing was particularly challenging but rewarding. The microservices architecture with Docker Compose orchestration taught me a lot about system design. Most importantly, the AI optimization actually works - users get measurable improvements in their ATS scores. The fallback chain ensures the service is always available, even when external AI APIs are down.",
  },
  {
    slug: "vitalflow",
    title: "VitalFlow Health Platform",
    name: "VitalFlow",
    tagline: "AI-powered multi-tenant health & fitness SaaS platform",
    year: "2024",
    status: "shipped",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "OpenAI API",
      "Server-Sent Events",
      "Docker",
    ],
    summary:
      "Comprehensive health-fitness platform for wellness centers featuring patient management, appointments, AI-powered insights, real-time collaboration, and automated workflows. Built for hackathon competition.",
    story: {
      problem:
        "Wellness centers struggle with disconnected medical and fitness services. Patient data is scattered across multiple systems, leading to poor coordination and missed opportunities for integrated care.",
      solution:
        "Unified SaaS platform with multi-tenant architecture. Complete patient management, smart appointment scheduling, AI-powered conversation insights, real-time notifications, and automated care workflows.",
      technical:
        "Multi-tenant SaaS with complete workspace isolation. Event-driven automation engine. Server-Sent Events for real-time updates. OpenAI integration for sentiment analysis and smart replies. PostgreSQL with Prisma ORM. Docker containerization.",
      outcome:
        "Enterprise-grade SaaS demonstrating advanced architecture patterns, real-time features, and AI integration. Shows ability to build production-ready applications with complex business logic.",
    },
    metrics: [
      { label: "AI Features", value: "8+" },
      { label: "Automation Rules", value: "5" },
      { label: "Real-time", value: "SSE" },
    ],
    color: "purple",
    stackColor: "cosmic",
    hook: "Wellness centers use 5 different systems that don't talk to each other. I built one that does everything.",
    oneliner:
      "Enterprise-grade health SaaS platform with AI-powered insights and real-time collaboration.",
    impact: [
      "Multi-tenant architecture with complete workspace isolation and security",
      "AI-powered sentiment analysis and smart reply system for patient communications",
      "Real-time collaboration with Server-Sent Events and automated workflows",
    ],
    problem:
      "Built an enterprise-grade SaaS platform to solve disconnected health services with multi-tenant architecture.",
    github: "https://github.com/jarvishiv62/Careops_hackathon",
    videoUrl: "/videos/vitalflow.mp4",
    build:
      "This was built for a hackathon competition, so I had to be strategic about the MVP. I chose Next.js 16 with TypeScript for the frontend because of the App Router and built-in optimizations. The backend uses Node.js with Express.js and PostgreSQL with Prisma ORM for type safety. The multi-tenant architecture was the most complex part - each wellness center gets complete data isolation. I implemented Server-Sent Events instead of WebSockets for real-time updates because they're simpler and fit the use case perfectly. The AI integration uses OpenAI for sentiment analysis and smart replies, with careful prompt engineering for healthcare contexts.",
    proudOf:
      "I'm proud of how much I accomplished in a hackathon timeframe. The multi-tenant architecture with complete workspace isolation is enterprise-grade. The real-time collaboration features with SSE work flawlessly. The AI sentiment analysis actually provides valuable insights for patient communications. Most importantly, the platform solves a real business problem - wellness centers genuinely struggle with disconnected systems. The automation engine with 5 core rules shows how SaaS platforms can reduce manual work.",
  },
  {
    slug: "bakershub",
    title: "BakersHub E-Commerce Platform",
    name: "BakersHub",
    tagline: "Full-stack bakery e-commerce platform with RBAC dashboard",
    year: "2024",
    status: "shipped",
    stack: [
      "React.js",
      "Redux",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "Heroku",
    ],
    summary:
      "Complete e-commerce platform designed specifically for bakeries with product browsing, shopping cart, secure payments, order tracking, and admin dashboard with role-based access control.",
    story: {
      problem:
        "Local bakeries struggled to establish online presence during pandemic. Existing e-commerce platforms were too generic and expensive for small bakeries.",
      solution:
        "Built a specialized e-commerce solution tailored for bakery needs with intuitive product management, secure payment processing, and comprehensive order tracking.",
      technical:
        "MERN stack implementation with Redux for state management. Stripe API integration for secure payments. Role-based access control for admin dashboard. MongoDB for flexible product catalog. Responsive design with Bootstrap.",
      outcome:
        "Demonstrates full-stack development capabilities with real-world e-commerce features including authentication, payment processing, and admin functionality.",
    },
    metrics: [
      { label: "Features", value: "8+" },
      { label: "Payment", value: "Stripe" },
      { label: "Database", value: "MongoDB" },
    ],
    color: "purple",
    stackColor: "violet",
    hook: "Local bakeries needed online presence during pandemic. I built their entire digital storefront.",
    oneliner:
      "Full-stack e-commerce platform with secure payments, order tracking, and admin dashboard for bakeries.",
    impact: [
      "Complete e-commerce functionality from cart to payment",
      "Role-based admin dashboard for bakery management",
      "Product reviews and advanced filtering system",
    ],
    problem:
      "Built a specialized e-commerce platform to help local bakeries establish online presence with custom features.",
    github:
      "https://github.com/jarvishiv62/BakersHub-Full-Stack-E-commerce-Platform",
    build:
      "I chose the MERN stack for this project because React with Redux provided excellent state management for the shopping cart and user sessions. Node.js and Express.js handled the backend API endpoints efficiently. MongoDB was perfect for the flexible product catalog needs. The biggest challenge was implementing Stripe payment integration securely - I had to ensure PCI compliance while providing a smooth checkout experience. The RBAC dashboard was crucial for bakery owners to manage their products and orders effectively.",
    proudOf:
      "I'm proud that I built a complete e-commerce platform from scratch. The Stripe integration works flawlessly with proper error handling and security measures. The admin dashboard with role-based access control shows I can build sophisticated user management systems. Most importantly, this platform solves a real problem that local bakeries faced during the pandemic - helping them maintain their business when in-person sales weren't possible.",
  },
  {
    slug: "travel-portal",
    title: "Travel Portal",
    name: "Travel Portal",
    tagline: "Next.js travel website with SSR and authentication",
    year: "2024",
    status: "shipped",
    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "CSS",
      "App Router",
      "SSR",
      "TurboPack",
    ],
    summary:
      "Dynamic travel web application built for a client during internship, featuring destination browsing, travel management, authentication system, and admin management section with modern Next.js architecture.",
    story: {
      problem:
        "Client needed a modern, fast-loading travel website with SEO optimization and user management for their travel agency business.",
      solution:
        "Built using Next.js with App Router for modern routing patterns, implemented SSR for SEO benefits, and created authentication system with management dashboard.",
      technical:
        "Next.js 14 with App Router for modern routing. Server-side rendering for SEO optimization and fast page loads. Custom authentication container for user management. TurboPack integration for faster development. Responsive design with mobile-first approach.",
      outcome:
        "Demonstrates ability to build client projects with modern frameworks, authentication systems, and admin functionality during internship.",
    },
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "Rendering", value: "SSR" },
      { label: "Architecture", value: "App Router" },
    ],
    color: "purple",
    stackColor: "cosmic",
    hook: "Travel agency needed modern web presence. I delivered a Next.js solution with SSR and authentication.",
    oneliner:
      "Dynamic travel portal with Next.js, SSR, authentication, and admin management features.",
    impact: [
      "Server-side rendering for SEO optimization and fast loads",
      "Modern Next.js App Router architecture",
      "Authentication system with admin management section",
    ],
    problem:
      "Built a modern travel portal for client with SEO optimization and user management features.",
    github: "https://github.com/jarvishiv62/Travel_portal",
    build:
      "I used Next.js 14 with the App Router because the client needed excellent SEO performance and modern routing patterns. The server-side rendering was crucial for the travel industry where search visibility is key. I implemented a custom authentication system using AuthContainer.js for user management. The management section (/manage) provides admin functionality for content management. TurboPack integration significantly improved development speed, which was important for meeting client deadlines during the internship.",
    proudOf:
      "I'm proud that I delivered a complete client project during my internship that met all their requirements. The SSR implementation provides excellent SEO performance, which is critical for travel websites. The authentication system works seamlessly with proper session management. Most importantly, the client was satisfied with the modern architecture and fast performance - it showed them I could handle real-world projects with professional standards.",
  },
  {
    slug: "diabetic-retinopathy",
    title: "DRNet - Diabetic Retinopathy Detection",
    name: "DRNet",
    tagline:
      "CNN-based medical imaging for diabetic retinopathy classification",
    year: "2024",
    status: "research",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "CNN",
      "Deep Learning",
      "Medical Imaging",
      "Grad-CAM",
    ],
    summary:
      "Final year research project implementing 5-class diabetic retinopathy grading from retinal fundus images using adaptive CNN architecture with explainable AI features.",
    story: {
      problem:
        "Diabetic retinopathy is a leading cause of blindness, but manual screening is time-consuming and requires specialist expertise.",
      solution:
        "Built adaptive CNN architecture for automatic grading of diabetic retinopathy severity levels with explainable AI features using Grad-CAM.",
      technical:
        "Adaptive CNN architecture with SE-Blocks for feature enhancement. 5-class classification system using focal loss for class imbalance. K-fold cross-validation for robust evaluation. Grad-CAM integration for explainability. Web application for demo purposes.",
      outcome:
        "Demonstrates advanced machine learning capabilities in medical imaging with focus on interpretability and clinical relevance.",
    },
    metrics: [
      { label: "Classes", value: "5" },
      { label: "Architecture", value: "CNN" },
      { label: "Explainability", value: "Grad-CAM" },
    ],
    color: "purple",
    stackColor: "rose",
    hook: "Manual diabetic retinopathy screening takes hours. I built an AI that does it in seconds.",
    oneliner:
      "CNN-based medical imaging system for automatic diabetic retinopathy classification with explainable AI.",
    impact: [
      "5-class diabetic retinopathy severity grading",
      "Adaptive CNN architecture with SE-Blocks",
      "Explainable AI with Grad-CAM visualization",
    ],
    problem:
      "Built AI-powered medical imaging system to automate diabetic retinopathy screening with explainable features.",
    github: "https://github.com/jarvishiv62/Diabetic_retinopathy",
    build:
      "This was my final year research project, so I focused on both accuracy and interpretability. I designed an adaptive CNN architecture with SE-Blocks to enhance important features while suppressing irrelevant ones. The 5-class classification system handles the full spectrum of diabetic retinopathy severity. I used focal loss instead of cross-entropy to handle the class imbalance problem common in medical datasets. K-fold cross-validation ensured robust performance evaluation. The Grad-CAM integration was crucial for clinical adoption - doctors need to see why the AI makes certain decisions.",
    proudOf:
      "I'm proud that I tackled a real medical problem with advanced AI techniques. The adaptive CNN architecture with SE-Blocks shows sophisticated understanding of deep learning. The explainable AI features with Grad-CAM make the system clinically viable - doctors can actually trust and understand the AI's decisions. Most importantly, this project demonstrates my ability to work on complex research problems that have real-world impact in healthcare.",
  },
  {
    slug: "adaptive-cnn",
    title: "Adaptive CNN for Image Enhancement",
    name: "Adaptive CNN",
    tagline: "Deep learning solution for weak contrast image enhancement",
    year: "2024",
    status: "research",
    stack: [
      "Python",
      "TensorFlow",
      "Keras",
      "Computer Vision",
      "CNN",
      "Image Processing",
      "Deep Learning",
    ],
    summary:
      "Research project implementing adaptive CNN architecture specifically designed for enhancing weak contrast images with automatic feature detection and enhancement.",
    story: {
      problem:
        "Weak contrast images in medical imaging and surveillance systems suffer from poor visibility and reduced diagnostic/investigative value.",
      solution:
        "Developed adaptive CNN architecture that automatically detects and enhances weak contrast regions while preserving image details.",
      technical:
        "Custom CNN architecture with adaptive feature extraction. Contrast enhancement layers with automatic parameter tuning. Preservation of image details during enhancement. Training on diverse weak contrast datasets.",
      outcome:
        "Demonstrates advanced computer vision capabilities with focus on image enhancement and adaptive processing techniques.",
    },
    metrics: [
      { label: "Architecture", value: "CNN" },
      { label: "Focus", value: "Contrast" },
      { label: "Application", value: "Enhancement" },
    ],
    color: "purple",
    stackColor: "indigo",
    hook: "Poor contrast images hide critical details. I built an AI that reveals what's hidden.",
    oneliner:
      "Adaptive CNN architecture for automatic weak contrast image enhancement with detail preservation.",
    impact: [
      "Adaptive feature extraction for contrast enhancement",
      "Automatic parameter tuning without manual intervention",
      "Detail preservation during enhancement process",
    ],
    problem:
      "Built adaptive CNN system to enhance weak contrast images while preserving important details.",
    github: "https://github.com/jarvishiv62/Adaptive_CNN",
    build:
      "This research project focused on solving the weak contrast problem in medical and surveillance imaging. I designed a custom CNN architecture that adaptively enhances contrast based on local image characteristics. The key innovation was the automatic parameter tuning - the network learns optimal enhancement parameters for different image regions. I implemented special layers to preserve important details while enhancing contrast, avoiding over-enhancement artifacts. The training process involved diverse datasets with varying contrast levels to ensure robustness.",
    proudOf:
      "I'm proud of the adaptive nature of this CNN architecture. Unlike traditional enhancement methods, this system automatically adjusts to different image characteristics without manual parameter tuning. The detail preservation mechanism ensures that enhanced images remain diagnostically useful. This project shows my ability to innovate in computer vision and solve specific technical challenges with custom neural network architectures.",
  },
  {
    slug: "brand-mantra",
    title: "Brand Mantra",
    name: "Brand Mantra",
    tagline: "Classical digital marketing website",
    year: "2024",
    status: "shipped",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
      "Marketing",
    ],
    summary:
      "Classical digital marketing website showcasing modern web design principles with responsive layout and marketing-focused user experience.",
    story: {
      problem:
        "Digital marketing agency needed a professional online presence to showcase services and attract clients.",
      solution:
        "Built a classical marketing website with modern design principles, responsive layout, and focus on conversion optimization.",
      technical:
        "Clean HTML5 semantic structure with Bootstrap for responsive design. Optimized loading performance with minified assets. SEO-friendly structure with proper meta tags. Contact forms and call-to-action optimization.",
      outcome:
        "Demonstrates frontend development skills with focus on marketing objectives and user experience design.",
    },
    metrics: [
      { label: "Design", value: "Classic" },
      { label: "Framework", value: "Bootstrap" },
      { label: "Focus", value: "Marketing" },
    ],
    color: "purple",
    stackColor: "gold",
    hook: "Digital marketing needs professional online presence. I built their digital storefront.",
    oneliner:
      "Classical digital marketing website with responsive design and conversion optimization.",
    impact: [
      "Professional marketing-focused design",
      "Responsive layout for all devices",
      "SEO-optimized structure for visibility",
    ],
    problem:
      "Built professional marketing website to help digital agency establish online presence.",
    github: "https://github.com/jarvishiv62/Brand_Mantra",
    build:
      "I focused on creating a professional marketing website that balances aesthetics with conversion optimization. Used Bootstrap for responsive design to ensure the site works perfectly on all devices. Implemented semantic HTML5 structure for better SEO and accessibility. The design follows classical marketing principles with clear call-to-action buttons and service showcases. Performance was a key consideration - I optimized images and minified CSS/JS for fast loading times.",
    proudOf:
      "I'm proud of the balance I achieved between visual appeal and marketing functionality. The responsive design works seamlessly across all devices, which is crucial for marketing websites. The SEO-optimized structure helps with search engine visibility. Most importantly, the design effectively showcases the agency's services while encouraging user engagement through strategic placement of contact forms and CTAs.",
  },
  {
    slug: "finance-partner",
    title: "Finance Partner Website",
    name: "Finance Partner",
    tagline: "Sleek frontend for financial services company",
    year: "2024",
    status: "shipped",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Frontend",
    ],
    summary:
      "Client project delivering a simple, sleek frontend website for a financial services partner with modern design and responsive user experience.",
    story: {
      problem:
        "Financial services company needed a clean, professional website to establish credibility and attract clients.",
      solution:
        "Built a sleek, minimalist frontend with modern design principles focusing on professionalism and user trust.",
      technical:
        "Clean React components with Tailwind CSS for modern styling. Responsive design optimized for financial services presentation. Professional color scheme and typography. Smooth animations and micro-interactions for enhanced UX.",
      outcome:
        "Demonstrates ability to deliver client-focused frontend solutions with attention to industry-specific design requirements.",
    },
    metrics: [
      { label: "Design", value: "Sleek" },
      { label: "Framework", value: "React" },
      { label: "Styling", value: "Tailwind" },
    ],
    color: "purple",
    stackColor: "accent",
    hook: "Financial services need trust and professionalism. I built their digital foundation.",
    oneliner:
      "Sleek, professional frontend website for financial services with modern design and responsive UX.",
    impact: [
      "Professional design for financial industry",
      "Responsive layout with modern aesthetics",
      "Client-focused frontend solution",
    ],
    problem:
      "Built professional frontend website for financial services company to establish online presence.",
    github: "https://github.com/jarvishiv62/basic_finance_partner_website",
    build:
      "This was a client project where the focus was on creating a professional, trustworthy appearance for a financial services company. I used React with Tailwind CSS to achieve a clean, modern design. The color scheme and typography were carefully chosen to convey professionalism and stability. I implemented smooth micro-interactions to enhance user experience without being distracting. The responsive design ensures the site looks professional on all devices, which is crucial for financial services.",
    proudOf:
      "I'm proud of how well I captured the professional aesthetic needed for financial services. The sleek design conveys trust and reliability while maintaining modern appeal. The responsive implementation works flawlessly across devices. Most importantly, the client was satisfied with how the website represents their brand professionally - it shows I can adapt my design skills to specific industry requirements.",
  },
  {
    slug: "finance-dashboard-backend",
    title: "Finance Dashboard Backend",
    name: "Finance Dashboard",
    tagline: "Backend API for financial analytics dashboard",
    year: "2024",
    status: "development",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Authentication",
      "Financial Data",
    ],
    summary:
      "Backend API service for financial analytics dashboard with secure authentication, data processing, and comprehensive REST endpoints.",
    story: {
      problem:
        "Financial analytics dashboard needed robust backend API for data processing, user management, and secure data access.",
      solution:
        "Built comprehensive backend API with authentication, data processing endpoints, and secure financial data handling.",
      technical:
        "RESTful API design with Express.js for financial data endpoints. Secure authentication system with JWT tokens. MongoDB for financial data storage with proper indexing. Data validation and sanitization for security. Rate limiting and API throttling.",
      outcome:
        "Demonstrates backend development capabilities with focus on security, data integrity, and API design best practices.",
    },
    metrics: [
      { label: "API", value: "REST" },
      { label: "Database", value: "MongoDB" },
      { label: "Auth", value: "JWT" },
    ],
    color: "purple",
    stackColor: "violet",
    hook: "Financial data needs security and reliability. I built the engine that powers it.",
    oneliner:
      "Secure backend API for financial analytics dashboard with authentication and data processing.",
    impact: [
      "Secure REST API with JWT authentication",
      "Financial data processing and validation",
      "Scalable backend architecture",
    ],
    problem:
      "Built secure backend API to power financial analytics dashboard with comprehensive data management.",
    github: "https://github.com/jarvishiv62/Finanace_dashborad_backend",
    build:
      "I focused on building a secure, scalable backend for financial data. Used Express.js with proper middleware for authentication and request validation. Implemented JWT-based authentication for secure API access. MongoDB was chosen for its flexibility with financial data structures. I added comprehensive input validation and sanitization to prevent security vulnerabilities. Rate limiting was implemented to prevent abuse. The API follows RESTful principles for easy frontend integration.",
    proudOf:
      "I'm proud of the security measures I implemented in this backend. The JWT authentication system is robust with proper token management. Input validation and sanitization protect against common vulnerabilities. The rate limiting prevents abuse while maintaining performance. Most importantly, the API design is clean and follows RESTful principles, making it easy for frontend developers to integrate with.",
  },
  {
    slug: "hackathon-notes",
    title: "Hackathon Notes",
    name: "Notes App",
    tagline: "Full-stack notes application with authentication",
    year: "2024",
    status: "shipped",
    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Authentication",
      "CRUD Operations",
      "Full-Stack",
    ],
    summary:
      "Complete notes taking web application with user authentication, CRUD operations, and modern full-stack architecture built during hackathon.",
    story: {
      problem:
        "Hackathon participants needed a simple, reliable notes application for collaborative note-taking during events.",
      solution:
        "Built full-stack notes app with authentication, real-time updates, and intuitive user interface for hackathon environment.",
      technical:
        "MERN stack implementation with secure authentication. CRUD operations for notes management. Real-time updates for collaboration. Responsive design for mobile hackathon use. Clean API architecture for scalability.",
      outcome:
        "Demonstrates ability to build complete full-stack applications quickly and efficiently under hackathon time constraints.",
    },
    metrics: [
      { label: "Stack", value: "MERN" },
      { label: "Features", value: "CRUD" },
      { label: "Timeline", value: "Hackathon" },
    ],
    color: "purple",
    stackColor: "cosmic",
    hook: "Hackathon teams needed better note-taking. I built a full-stack solution in record time.",
    oneliner:
      "Full-stack notes application with authentication and CRUD operations built for hackathon collaboration.",
    impact: [
      "Complete CRUD operations for notes",
      "Secure authentication system",
      "Responsive design for mobile use",
    ],
    problem:
      "Built full-stack notes application to solve collaborative note-taking challenges during hackathons.",
    github: "https://github.com/jarvishiv62/hackathon_notes",
    build:
      "This was built during a hackathon, so speed and efficiency were crucial. I used the MERN stack because I could prototype quickly while maintaining quality. The authentication system ensures users' notes remain private. CRUD operations work seamlessly with proper error handling. I focused on mobile responsiveness since most hackathon participants use phones. The API is clean and well-documented for easy integration.",
    proudOf:
      "I'm proud that I built a complete full-stack application during hackathon time constraints. The authentication system works securely with proper session management. All CRUD operations function reliably with good error handling. The responsive design ensures it works well on mobile devices. Most importantly, this shows I can deliver functional software quickly without sacrificing quality - a crucial skill for fast-paced development environments.",
  },
  {
    slug: "java-learning",
    title: "Java Learning Projects",
    name: "Java Learning",
    tagline: "Java programming skill enhancement projects",
    year: "2024",
    status: "learning",
    stack: [
      "Java",
      "OOP",
      "Data Structures",
      "Algorithms",
      "Spring Boot",
      "Maven",
    ],
    summary:
      "Collection of Java programming projects and exercises aimed at enhancing Java skills and understanding object-oriented programming concepts.",
    story: {
      problem:
        "Needed to strengthen Java programming skills and gain deeper understanding of object-oriented design patterns.",
      solution:
        "Created comprehensive learning projects covering core Java concepts, data structures, algorithms, and Spring Boot framework.",
      technical:
        "Core Java projects focusing on OOP principles. Data structure implementations from scratch. Algorithm practice problems. Spring Boot applications for web development. Maven for dependency management and build automation.",
      outcome:
        "Demonstrates commitment to continuous learning and skill development in enterprise programming languages.",
    },
    metrics: [
      { label: "Language", value: "Java" },
      { label: "Framework", value: "Spring" },
      { label: "Focus", value: "Learning" },
    ],
    color: "purple",
    stackColor: "accent",
    hook: "Every developer needs strong Java fundamentals. I built my skills from the ground up.",
    oneliner:
      "Java learning projects covering OOP, data structures, algorithms, and Spring Boot development.",
    impact: [
      "Object-oriented programming mastery",
      "Data structures and algorithms practice",
      "Spring Boot web development skills",
    ],
    problem:
      "Built comprehensive Java learning projects to strengthen programming fundamentals and enterprise development skills.",
    github: "https://github.com/jarvishiv62/java_learning",
    build:
      "I created this repository to systematically improve my Java skills. Started with core Java concepts and OOP principles - inheritance, polymorphism, encapsulation. Implemented common data structures from scratch to understand algorithms deeply. Added algorithm practice problems to sharpen problem-solving skills. Later included Spring Boot projects to learn enterprise Java development. Maven handles dependencies and build processes professionally.",
    proudOf:
      "I'm proud of the systematic approach I took to learning Java. Instead of just tutorials, I implemented concepts from scratch - this gave me deep understanding. The data structures implementations taught me algorithmic thinking. Spring Boot projects show I can apply Java skills to enterprise scenarios. Most importantly, this demonstrates my commitment to continuous learning and self-improvement as a developer.",
  },
  {
    slug: "clearro-website",
    title: "ClearRo Static Website",
    name: "ClearRo Website",
    tagline: "Fully functional static website",
    year: "2024",
    status: "shipped",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Static Site",
      "Responsive Design",
      "Performance",
    ],
    summary:
      "Fully functional static website project focusing on performance, SEO optimization, and modern web development best practices.",
    story: {
      problem:
        "Client needed a fast, reliable static website with excellent performance and SEO without the complexity of dynamic systems.",
      solution:
        "Built optimized static website with clean code structure, responsive design, and focus on performance and accessibility.",
      technical:
        "Semantic HTML5 structure for SEO and accessibility. Optimized CSS with modern layout techniques. Minimal JavaScript for enhanced functionality. Performance optimization with lazy loading and compression. Mobile-first responsive design.",
      outcome:
        "Demonstrates ability to build efficient, performant static websites with modern best practices and focus on user experience.",
    },
    metrics: [
      { label: "Type", value: "Static" },
      { label: "Focus", value: "Performance" },
      { label: "SEO", value: "Optimized" },
    ],
    color: "purple",
    stackColor: "gold",
    hook: "Sometimes the simplest solution is the best. I built a static site that's fast and effective.",
    oneliner:
      "Fully functional static website with performance optimization and SEO best practices.",
    impact: [
      "Fast loading static website",
      "SEO-optimized structure",
      "Responsive design with accessibility",
    ],
    problem:
      "Built performant static website focusing on speed, SEO, and modern web development standards.",
    github: "https://github.com/jarvishiv62/ClearRo-live-webproject",
    build:
      "I focused on creating a highly optimized static website. Used semantic HTML5 structure for better SEO and accessibility. CSS was optimized with modern techniques like Grid and Flexbox for responsive layouts. JavaScript was kept minimal for better performance. Implemented lazy loading for images and compression for assets. The mobile-first approach ensures excellent user experience on all devices.",
    proudOf:
      "I'm proud of the performance optimizations I achieved with this static website. The semantic HTML5 structure provides excellent SEO benefits and accessibility. The responsive design works perfectly across all devices. Most importantly, the site loads extremely fast - static sites don't need to compromise on performance, and this project demonstrates how to achieve optimal speed while maintaining functionality.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun Sharma",
    role: "Senior Backend Developer",
    company: "Dizi Global Solutions",
    text: "UTKARSH is the kind of intern who reads the error message before googling it. Refreshing. His API optimization cut response times genuinely — not by tweaking a timeout value, but by actually fixing the queries. Would hire without hesitation.",
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
    text: "UTKARSH built a real product — not a tutorial clone — while managing coursework and two internships. He's the reason our placement cell started taking portfolio projects seriously. Industry-ready well before graduation.",
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
    "hey 👋 i'm the AI version of UTKARSH. slightly more patient, equally obsessed with API performance. ask me anything.",
  skills:
    "strongest skill? laravel + REST API design, no contest. 92% proficiency (self-rated, but the 30% speed boost is receipted). also solid with next.js and growing fast.",
  experience:
    "two real internships — innovilla (jun–sep 2025) and dizi global (oct 2025–jan 2026). both on-site, both with actual clients, both shipped on time. no localhost:3000 projects.",
  projects:
    "main three: DailyDrive (AI-powered productivity suite), LaTeX Resume Optimizer (microservices AI platform), and VitalFlow (multi-tenant health SaaS). all production-ready with advanced features.",
  dailydrive:
    "DailyDrive is my AI-powered productivity suite with 9 integrated modules — calendar, pomodoro, diary, gamification, and intelligent chatbot. Built to solve the subscription fatigue problem.",
  "resume-builder":
    "LaTeX Resume Optimizer uses microservices architecture with 3 AI engines (Grok, Gemini, non-AI fallback). Features real-time ATS scoring and Monaco editor with live diff viewing.",
  vitalflow:
    "VitalFlow is an AI-powered multi-tenant health SaaS platform with real-time collaboration, sentiment analysis, and automated workflows. Built for hackathon with enterprise-grade architecture.",
  api: "the 30% improvement came from query optimization — eliminating N+1s with eager loading and adding indexes on columns we actually filter by. also stopped doing SELECT * on wide tables. wild what that does.",
  open: "yes, actively looking for a full-stack or backend role/internship. available june 2026 after graduation. open to remote too. if you're reading this, maybe it's fate 👀",
  contact:
    "hit up virmauryauttu@gmail.com or use the contact form below. he responds within 24hr — usually faster because he checks email way too much.",
  laravel:
    "laravel is home. sanctum for auth, eloquent for ORM, artisan for everything else. been using it seriously for 2 years and still discovering things.",
  nextjs:
    "next.js clicked when i had to build a client project with SSR for SEO. now i can't go back to plain react. the DX is genuinely different.",
  default:
    "good question. UTKARSH would know better than me — drop him an email at virmauryauttu@gmail.com or use the contact form below 👇",
};

export const HERO_STATS: Array<{
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}> = [
  { label: "projects shipped", value: 13, suffix: "+" },
  { label: "internships survived", value: 2 },
  { label: "API speedup", value: 30, suffix: "%" },
];

export const TECH_TAGS = [
  "Laravel",
  "PHP",
  "Next.js",
  "React",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "REST API",
  "Sanctum",
  "RBAC",
  "Postman",
  "Git",
  "Agile",
  "Vercel",
  "PWA",
  "OpenAI",
  "xAI Grok",
  "Google Gemini",
  "Python",
  "FastAPI",
  "Docker",
  "TypeScript",
  "Node.js",
  "Express.js",
  "Prisma ORM",
  "Server-Sent Events",
];

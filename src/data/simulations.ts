import type { SimulationContent } from "@/shared/types";

export const SIMULATIONS: Record<string, SimulationContent> = {
  dailydrive: {
    projectSlug: "dailydrive",
    title: "Building DailyDrive - AI Productivity Suite",
    description:
      "Step-by-step process of building a comprehensive productivity platform",
    steps: [
      {
        id: "planning",
        title: "Step 1: Planning & Architecture",
        description: "Designing the database schema and system architecture",
        details: [
          "Started with Laravel 11 for its robust Eloquent ORM and powerful relationship management system",
          "Designed a normalized database schema to eliminate data redundancy and ensure referential integrity",
          "Planned RESTful API endpoints with real-time AJAX updates for seamless user experience",
          "Chose MySQL as the primary database for its reliability with complex queries and full-text search capabilities",
          "Implemented foreign key constraints to maintain data consistency across related tables",
          "Added proper indexing strategies to optimize query performance for large datasets",
        ],
      },
      {
        id: "auth",
        title: "Step 2: Authentication & User Management",
        description:
          "Implementing secure user authentication with Laravel Sanctum",
        details: [
          "Implemented Laravel Sanctum for token-based API authentication with fine-grained access control",
          "Created comprehensive user registration system with email verification and account activation",
          "Built secure login endpoints with rate limiting to prevent brute force attacks",
          "Added JWT token management for mobile app compatibility and cross-platform authentication",
          "Implemented secure password reset functionality with expiring reset tokens",
          "Configured middleware for automatic token validation and user context injection",
        ],
      },
      {
        id: "core-modules",
        title: "Step 3: Core Modules Development",
        description: "Building the essential productivity modules",
        details: [
          "Built comprehensive Task Management module with full CRUD operations and bulk actions",
          "Implemented Goal Setting system with progress tracking, milestone management, and deadline reminders",
          "Created Diary/Journal module with mood tracking, entry categorization, and search functionality",
          "Developed Pomodoro Timer with task association, session tracking, and productivity analytics",
          "Added data validation and sanitization layers to ensure data integrity and security",
          "Implemented soft deletes for data recovery and audit trails for user actions",
        ],
      },
      {
        id: "ai-integration",
        title: "Step 4: AI Chatbot Integration",
        description:
          "Integrating OpenAI API for intelligent chatbot functionality",
        details: [
          "Integrated OpenAI GPT-3.5-turbo API for intelligent contextual responses and task assistance",
          "Implemented context awareness system that analyzes user data including tasks, goals, and journal entries",
          "Added intelligent rate limiting with token bucket algorithm to control API costs and prevent abuse",
          "Created sophisticated fallback response system for graceful handling of API failures and timeouts",
          "Implemented prompt engineering techniques to optimize response quality and relevance",
          "Added conversation history management for maintaining context across multiple interactions",
        ],
      },
      {
        id: "testing",
        title: "Step 5: Testing & Deployment",
        description: "Comprehensive testing and production deployment",
        details: [
          "Wrote comprehensive unit tests using PHPUnit with 95%+ code coverage for critical business logic",
          "Implemented feature tests for API endpoints covering authentication, CRUD operations, and edge cases",
          "Added browser automation tests using Laravel Dusk for critical user workflows and UI interactions",
          "Set up CI/CD pipeline with GitHub Actions for automated testing, code quality checks, and deployment",
          "Created database seeding and migration testing to ensure schema changes work correctly",
          "Implemented load testing scenarios to verify system performance under expected user traffic",
        ],
      },
    ],
  },
  "resume-builder": {
    projectSlug: "resume-builder",
    title: "Building Resume Optimizer - Microservices AI Platform",
    description:
      "Step-by-step process of building a microservices platform with AI-powered resume optimization",
    steps: [
      {
        id: "architecture",
        title: "Step 1: Microservices Architecture Design",
        description: "Designing the three-tier microservices architecture",
        details: [
          "Designed three-tier microservices architecture with clear separation of concerns between API, NLP, and Frontend layers",
          "Chose Docker for containerization enabling consistent development environments and simplified deployment orchestration",
          "Planned RESTful service communication with comprehensive API documentation using OpenAPI specifications",
          "Designed asynchronous data flow between services using message queues for improved scalability and reliability",
          "Implemented service discovery patterns for dynamic endpoint resolution and load balancing",
          "Added comprehensive logging and monitoring strategy for distributed system observability",
        ],
      },
      {
        id: "laravel-backend",
        title: "Step 2: Laravel Backend API",
        description:
          "Building the main API service with authentication and resume management",
        details: [
          "Built Laravel 11 backend with Sanctum authentication providing secure API access and user management",
          "Created comprehensive resume CRUD operations with file upload, version control, and user permission management",
          "Implemented advanced LaTeX parsing engine for extracting structured data from resume templates",
          "Added intelligent job description matching using semantic similarity analysis and keyword extraction",
          "Designed RESTful API with proper HTTP status codes, error handling, and response formatting",
          "Implemented data validation layers and request sanitization for security and data integrity",
        ],
      },
      {
        id: "nlp-service",
        title: "Step 3: Python NLP Service",
        description:
          "Building the FastAPI service for keyword extraction and ATS analysis",
        details: [
          "Built FastAPI service with automatic API documentation and high-performance async request handling",
          "Implemented TF-IDF vectorization for sophisticated keyword extraction with importance scoring",
          "Added RAKE (Rapid Automatic Keyword Extraction) algorithm for multi-word phrase identification",
          "Created ATS scoring algorithm using cosine similarity and weighted keyword matching",
          "Designed caching layer using Redis for improved response times and reduced API costs",
          "Implemented batch processing capabilities for handling multiple resume analyses efficiently",
        ],
      },
      {
        id: "frontend",
        title: "Step 4: Next.js Frontend with Monaco Editor",
        description:
          "Building the React frontend with advanced code editing capabilities",
        details: [
          "Created Next.js 14 frontend with TypeScript ensuring type safety and improved developer experience",
          "Integrated Monaco Editor providing professional code editing experience with LaTeX syntax highlighting",
          "Implemented real-time validation with error highlighting and intelligent auto-completion suggestions",
          "Added collaborative editing features with conflict resolution and change tracking capabilities",
          "Designed responsive UI with mobile-first approach and accessibility compliance",
          "Implemented client-side state management with optimized re-rendering and performance",
        ],
      },
      {
        id: "ai-integration",
        title: "Step 5: Multi-AI Integration",
        description:
          "Implementing intelligent AI optimization with fallback chain",
        details: [
          "Implemented multi-AI optimization strategy with Grok, Gemini, and local fallback models for maximum reliability",
          "Created intelligent fallback chain with exponential backoff and circuit breaker patterns for resilience",
          "Developed sophisticated prompt engineering tailored for each AI engine to optimize resume optimization quality",
          "Implemented comprehensive rate limiting with per-user quotas and fair usage policies",
          "Added advanced error handling with retry mechanisms, fallback strategies, and detailed logging",
          "Designed performance monitoring with latency tracking and success rate analytics across AI engines",
        ],
      },
    ],
  },
  vitalflow: {
    projectSlug: "vitalflow",
    title: "Building VitalFlow - Multi-tenant Health SaaS Platform",
    description:
      "Step-by-step process of building an enterprise-grade health platform",
    steps: [
      {
        id: "multi-tenant-design",
        title: "Step 1: Multi-tenant Architecture Design",
        description:
          "Designing the database schema for complete workspace isolation",
        details: [
          "Designed multi-tenant database architecture with complete workspace isolation using foreign key constraints",
          "Implemented row-level security policies to ensure data segregation and prevent cross-tenant data access",
          "Created comprehensive workspace management system with role-based access control and permission inheritance",
          "Added tenant-specific configurations allowing customization of features, branding, and business rules",
          "Designed scalable schema with proper indexing strategies for performance across multiple tenants",
          "Implemented data migration strategies for seamless onboarding of new organizations",
        ],
      },
      {
        id: "nextjs-setup",
        title: "Step 2: Next.js Frontend Setup",
        description:
          "Setting up the frontend with TypeScript and modern tooling",
        details: [
          "Set up Next.js 16 with App Router for improved performance and modern routing patterns",
          "Implemented comprehensive TypeScript configuration with strict type checking and custom type definitions",
          "Created workspace-based routing system with dynamic subdomains and path-based tenant identification",
          "Added authentication middleware with automatic session validation and workspace context injection",
          "Designed component architecture with reusable UI components and consistent design system",
          "Implemented error boundaries and comprehensive error handling for improved user experience",
        ],
      },
      {
        id: "patient-management",
        title: "Step 3: Patient Management System",
        description: "Building comprehensive patient records and management",
        details: [
          "Created comprehensive patient CRUD operations with audit logging and data versioning for compliance",
          "Implemented advanced medical history tracking with chronological timeline and event categorization",
          "Added intelligent appointment scheduling system with conflict detection and automated reminders",
          "Created sophisticated patient search and filtering with faceted search and advanced query capabilities",
          "Designed data export/import functionality supporting multiple formats and HIPAA compliance requirements",
          "Implemented patient portal access with secure messaging and document sharing capabilities",
        ],
      },
      {
        id: "real-time-collaboration",
        title: "Step 4: Real-time Collaboration with SSE",
        description: "Implementing Server-Sent Events for real-time updates",
        details: [
          "Implemented Server-Sent Events (SSE) for real-time updates providing low-latency communication channel",
          "Created comprehensive event broadcasting system with topic-based filtering and subscription management",
          "Added workspace-specific event filtering ensuring users only receive relevant notifications",
          "Implemented automatic reconnection logic with exponential backoff and connection state management",
          "Designed event persistence layer for missed event delivery and offline message queuing",
          "Added performance monitoring with connection metrics and event delivery analytics",
        ],
      },
      {
        id: "ai-integration",
        title: "Step 5: AI-Powered Features",
        description: "Integrating AI for sentiment analysis and smart replies",
        details: [
          "Integrated OpenAI GPT models for sophisticated sentiment analysis with emotion detection and context understanding",
          "Created intelligent smart reply generation system using patient history and conversation context for personalized responses",
          "Implemented comprehensive patient history context awareness including medications, allergies, and previous interactions",
          "Added HIPAA-compliant data handling with encryption, audit trails, and strict access controls",
          "Designed AI model monitoring with performance tracking, bias detection, and continuous improvement mechanisms",
          "Implemented fallback procedures for AI failures with human escalation paths and manual review processes",
        ],
      },
      {
        id: "deployment",
        title: "Step 6: Production Deployment",
        description: "Deploying to production with comprehensive monitoring",
        details: [
          "Set up production Docker environment with multi-stage builds, security scanning, and optimized image sizes",
          "Implemented comprehensive health checks with custom endpoints, dependency verification, and automated recovery",
          "Added monitoring infrastructure with Prometheus metrics collection, Grafana dashboards, and alerting rules",
          "Configured automated backup strategies with point-in-time recovery, cross-region replication, and disaster recovery testing",
          "Designed blue-green deployment strategy with zero-downtime deployments and instant rollback capabilities",
          "Implemented security hardening with network segmentation, secret management, and regular vulnerability scanning",
        ],
      },
    ],
  },
};

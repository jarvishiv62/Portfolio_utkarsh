# DevPort - Utkarsh

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS. This project showcases web development skills with a clean, professional design and smooth interactions.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Component Architecture**: Well-organized, reusable components
- **Type Safety**: Full TypeScript implementation for better code quality
- **Contact Form**: Functional contact form with email integration (ready for Resend)
- **AI Chatbot**: Integrated AI chat functionality (ready for Anthropic API)
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth user experience

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Home page
├── features/           # Feature-specific components
│   ├── contact/        # Contact form components
│   ├── hero/           # Hero section
│   ├── projects/       # Projects showcase
│   └── ...             # Other features
└── shared/             # Shared utilities and components
    ├── components/     # Reusable UI components
    ├── lib/            # Utility functions
    └── types/          # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/devport-utkarsh.git
cd devport-utkarsh
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy the environment variables file:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌐 Deployment

This project is configured for deployment on Vercel:

1. Connect your repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `RESEND_API_KEY` - For contact form emails
- `ANTHROPIC_API_KEY` - For AI chatbot functionality

## 📧 Contact Form Integration

The contact form is ready to be integrated with Resend for email sending:

1. Sign up for a Resend account
2. Get your API key
3. Add it to your environment variables
4. The form handler will automatically use Resend to send emails

## 🤖 AI Chatbot Integration

The AI chatbot is prepared for Anthropic API integration:

1. Get an Anthropic API key
2. Add it to your environment variables
3. The chatbot will use Claude for intelligent responses

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for design system changes
- Update colors, fonts, and spacing in the configuration
- Components use Tailwind classes for consistent styling

### Content
- Update hero section in `src/features/hero/`
- Modify projects in `src/features/projects/`
- Adjust contact information in `src/features/contact/`

## 🔧 Code Quality

This project includes:
- **TypeScript** for type safety
- **ESLint** for code consistency
- **Prettier** (recommended) for code formatting
- **Component-driven architecture** for maintainability

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- Portfolio: [https://devport-utkarsh.vercel.app](https://devport-utkarsh.vercel.app)
- Email: [virmauryauttu@gmail.com](mailto:virmauryauttu@gmail.com)
- GitHub: [jarvishiv62](https://github.com/jarvishiv62)

---

Built with ❤️ using Next.js, React, and Tailwind CSS

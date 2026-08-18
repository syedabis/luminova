# Cortexa (Formiqa) - AI & Automation Agency Website

A highly interactive, modern B2B AI Agency landing page and web application built with Next.js (App Router). It features complex 3D WebGL components, scroll-driven GSAP animations, a custom AI Chat Widget with fallback logic, and a serverless lead-capture system integrated directly with Google Sheets.

## Architecture

```
Frontend (Next.js App Router, React 18)
  → Renders globally synchronized GSAP animations (PageAnimations.tsx)
  → Uses Lenis for buttery-smooth scroll hijacking (SmoothScroll.tsx)
  → Hosts 3D WebGL / Canvas components (CircularGallery.jsx, OGL)
  → Uses CSS Modules & Inline styles (NO Tailwind CSS)

Backend (Next.js Serverless API Routes)
  → /api/chat: Serves the floating AI Chatbot. Tries OpenAI (GPT-4o-mini) first, falls back to Google Gemini if OpenAI fails or key is missing. Uses internal knowledge base (knowledge.ts).
  → /api/lead: Captures form submissions (Contact / Footer forms) and writes them directly to Google Sheets using a Google Service Account JWT.

Database / Storage
  → No SQL database. 
  → Lead Generation: Google Sheets via Google Sheets API (v4).
  → AI Knowledge: Statically defined in `knowledge.ts`.
```

All interactions are purely serverless. The application runs natively on Vercel without requiring a persistent SQL database or Docker containers.

## Third-Party Integrations & Environment Variables

- **Vercel**: Deployment platform (`NEXT_PUBLIC_SITE_URL`).
- **Google Sheets**: Serves as the CRM/Database. 
  - `GOOGLE_CLIENT_EMAIL` (Service Account Email)
  - `GOOGLE_PRIVATE_KEY` (Service Account Private Key)
  - `GOOGLE_SHEET_ID` (The unique ID from the Sheet URL)
  - `GOOGLE_SHEET_NAME` (The specific tab name, e.g., "Cortexa Leads")
- **OpenAI**: Primary LLM engine (`OPENAI_API_KEY`).
- **Google Gemini**: Fallback LLM engine (`GEMINI_KEY`).

*All variables must be defined in `.env.local` for local development, and added to Vercel Environment Variables for production.*

## Known Gotchas

- **Global GSAP ScrollTriggers vs Local Ones**: `PageAnimations.tsx` runs a global GSAP context on route changes using `usePathname()`. Do **not** use `ScrollTrigger.getAll().forEach(t => t.kill())` globally, as it will destroy local component ScrollTriggers (like the one used in `ScrollExpand.tsx`). The global `gsap.context()` natively handles its own cleanup.
- **Next.js App Router Navigation**: Because `layout.tsx` persists across page navigations, global animations (like the hero staggers) must be explicitly re-triggered in a `useEffect` that listens to `pathname` changes, otherwise navigating via links will result in invisible (un-animated) hero elements.
- **Google Service Account Private Keys**: Next.js and Vercel handle multiline environment variables (like RSA Private Keys) inconsistently. The `/api/lead` route includes an explicit fallback parser (`getPrivateKeyFromEnvFile`) to read `.env.local` directly if `process.env` fails to parse the newlines correctly in development.
- **Strict Dependencies**: The project relies on specific versions of GSAP, Framer Motion, and OGL. 
- **CircularGallery Font Loading**: `CircularGallery.jsx` requires valid font files or URLs. If no `items` are passed, it defaults to a grayscale picsum image. 

## File Map

```
formiqa-clone/
├── .env.local                     Local environment variables (DO NOT COMMIT)
├── guide.md                       This architecture and documentation file
├── package.json                   NPM dependencies and scripts
│
└── src/
    ├── app/
    │   ├── layout.tsx             Global layout, mounts Navbar, Footer, ChatWidget, PageAnimations
    │   ├── page.tsx               Homepage (Hero, Solutions, Services, etc.)
    │   ├── globals.css            Global CSS variables and resets
    │   ├── custom.css             Global utility classes (.section-xl, .container)
    │   │
    │   ├── api/                   Serverless API Routes
    │   │   ├── chat/
    │   │   │   ├── route.ts       LLM API handler (OpenAI + Gemini fallback)
    │   │   │   └── knowledge.ts   System instructions and company knowledge base
    │   │   └── lead/
    │   │       └── route.ts       Google Sheets API integration for contact forms
    │   │
    │   ├── contact/               Contact Us page
    │   ├── engineer/              AI Engineer page
    │   ├── industries/            Industries page
    │   ├── solutions/             Solutions page
    │   └── technology/            Technology page
    │
    └── components/
        ├── PageAnimations.tsx     Global GSAP Timeline controller (listens to route changes)
        ├── SmoothScroll.tsx       Lenis global smooth scrolling wrapper
        ├── Navbar.tsx             Global header navigation
        ├── Footer.tsx             Global footer with CTA and mini-form
        ├── ChatWidget.tsx         Floating AI representative widget
        │
        ├── UI & Animation Primitives:
        │   ├── ScrollExpand.tsx   (Video/Image that expands to full screen on scroll)
        │   ├── DepthCarousel.tsx  (3D GSAP-driven infinite carousel)
        │   ├── CircularGallery.jsx(OGL WebGL 3D cylinder gallery)
        │   ├── LogoLoop.tsx       (Infinite horizontal marquee)
        │   ├── SpotlightCard.tsx  (Cards with mouse-tracking hover glow)
        │   └── SmoothDOMGallery.tsx
        │
        └── Page Sections:
            ├── Hero.tsx
            ├── Services.tsx
            ├── Solutions.tsx
            ├── Technology.tsx
            ├── Testimonials.tsx
            ├── ValueProps.tsx
            ├── FAQ.tsx
            └── CTA.tsx
```

## Deployment

- **Hosting**: Deployed natively on Vercel. 
- **Command**: `npm run build` generates static pages and compiles the serverless functions.
- **Pushing**: Any push to the `main` branch on GitHub automatically triggers a Vercel production build. Wait for the `next build` command to succeed locally before pushing to prevent deployment failures.

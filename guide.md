# Formiqa — AI & Automation Agency Website

Marketing/portfolio website for **Formiqa**, a B2B AI & automation agency. The
site is a **Next.js 14 App Router** project (TypeScript) styled entirely with
**vanilla CSS** (a large Webflow-exported `globals.css` plus a small hand-written
`custom.css`). It has no backend database — the only external API call at runtime
is to **Google Gemini** for the chat widget.

## Architecture

```
Next.js 14 App Router  (src/app/ — file-system routing)
  → page routes: / | /solutions | /industries | /technology | /contact | /engineer
  → one API route: /api/chat  (POST, server-side, calls Google Gemini)

src/components/          Shared & page-scoped React components (TSX, all 'use client'
  Navbar.tsx             unless they are pure server-renderable)
  Hero.tsx
  ...
  solutions/             Sub-folders mirror the page they belong to
  industries/
  technology/
  contact/
  engineer/

public/images/           All static assets (SVGs, WebP logos, MP4 hero video,
                         certificate images) — no Next.js Image optimisation
                         (unoptimized: true in next.config.js)

src/app/globals.css      ~310 KB Webflow CSS export — defines all layout classes
                         (.container, .section-xl, .page-wrapper, body token
                         classes such as background-colour-b, text-colour-a)
src/app/custom.css       ~825 B hand-written overrides: hover micro-animations
                         (.hover-card-glow, .dropdown-item-hover, .solution-card,
                         .tool-badge-item) and the responsive nav breakpoint
                         (@media max-width 991px hides .nav-center-desktop,
                         shows .mobile-menu-btn)
```

**There is no app-level database.** All content is hard-coded directly in
components (no CMS, no Supabase, no Sheets). The only runtime secret is
`GEMINI_KEY` — the Gemini API key used by `/api/chat`.

## Typography & Fonts

Two Google Fonts are loaded in `src/app/layout.tsx`:
- **Plus Jakarta Sans** (`--font-jakarta`, weights 400–800) — default body font
  (`plusJakarta.className` applied to `<body>`).
- **Inter** (`--font-inter`, weights 300–700) — available as a CSS variable for
  targeted overrides.

Both are loaded with `display: swap` to avoid FOUT blocking.

## Design System

Styling lives almost entirely in the giant `globals.css` (Webflow export).
Key conventions:
- **Background**: `#010101` (near-black) for every section; `#0c0e12` / `#090b0e`
  for footer and CTA panel.
- **Primary accent**: `#10b981` (emerald green) — buttons, badges, "After Formiqa"
  callouts, star fills in testimonials, ChatWidget trigger border glow.
- **Secondary accents** (per-feature): `#60a5fa` blue (Industries headline links,
  nav), `#c084fc` purple (Solutions nav header), `#fbbf24` amber (SaaS card),
  `#f472b6` pink (RAG card), `#2dd4bf` teal (multi-agent card), `#a855f7` purple
  (ValueProps icons), `#ec4899` pink (Hero badge gradient tail).
- **Muted text**: `#94a3b8` / `#64748b` (Tailwind slate hex values — no Tailwind
  library is installed).
- **Cards**: `background: rgba(255,255,255,0.025)`, `border: 1px solid rgba(255,255,255,0.08)`,
  `border-radius: 16px`. Hover via `.hover-card-glow` (custom.css):
  `border-color rgba(96,165,250,0.3)`, `translateY(-4px)`, subtle drop shadow.
- **Glassmorphism**: used on the Navbar (`backdrop-filter: blur(16px)`) and the
  ChatWidget panel (dark translucent background + border).
- All inline styles are written directly on JSX elements (no CSS Modules, no
  styled-components). `custom.css` is the only additional stylesheet — it handles
  interactive pseudo-class states (`:hover`) that inline styles cannot reach.

## Pages & Routes

| Route | File | Description |
|---|---|---|
| `/` | `src/app/page.tsx` | Home — all homepage sections assembled in order |
| `/solutions` | `src/app/solutions/page.tsx` | Solutions deep-dive with category filter state |
| `/industries` | `src/app/industries/page.tsx` | Industries landing with category filter + ROI calc |
| `/technology` | `src/app/technology/page.tsx` | Enterprise AI stack — models, RAG, voice, security |
| `/contact` | `src/app/contact/page.tsx` | Contact form, office locations, FAQ |
| `/engineer` | `src/app/engineer/page.tsx` | Personal portfolio for lead engineer Syed Abis |
| `/api/chat` | `src/app/api/chat/route.ts` | Server-side POST to Google Gemini |

All non-API pages are **client components** (except `/contact` and `/engineer`
which are server components with exported `metadata`). `/solutions` and
`/industries` hold category-filter state at the page level and pass it down as
props to their hero and list sub-components.

## Component Inventory

### Shared / Global

| Component | Notes |
|---|---|
| `Navbar.tsx` | Fixed, glassmorphic. Scroll listener adds opacity on scrollY > 20. Four dropdown menus (Industries, Solutions, Services, Learn) toggle on click via `activeDropdown` state. Mobile drawer appears below 991px breakpoint. "Get in Touch" CTA routes to `/contact`. |
| `SmoothScroll.tsx` | Wraps all children in root layout. Uses **Lenis** (`duration: 1.2`, custom ease). `lenis.destroy()` on unmount. |
| `CTA.tsx` | Glassmorphic card on `#0c0e12` bg. "Get in Touch" mailto link (`hello@formiqa.io`). Background shape image at 25% opacity. Etymology copy explains the brand name (Latin *formica* = ant). |
| `Footer.tsx` | Auto-fit grid (Services / Industries / Solutions / Company columns). Copyright auto-year. LinkedIn + YouTube icon links. |
| `ChatWidget.tsx` | Fixed bottom-right floating button. Opens a 380×560 glassmorphic chat panel. Sends conversation history to `/api/chat`. Renders `**bold**` markdown via `renderFormattedText()`. Shows 3 quick-start suggestion chips on first open. Scrolls to latest message via `messagesEndRef`. |

### Homepage Sections (assembled in `src/app/page.tsx`)

| Component | Section | Notes |
|---|---|---|
| `Hero.tsx` | Hero | Badge pill with gradient border (blue → purple → pink). Large fluid headline "Align. Automate. Accelerate." Auto-playing MP4 video (`/images/asset_12_file.mp4`) scaled 1.12× and shifted -4.5% vertically to crop the empty black margin at the top. |
| `ValueProps.tsx` | Value Props | 3-column grid with Lucide icons (Gauge, PiggyBank, Award — all `#a855f7`). Pure stat/copy cards, no interactivity. |
| `Solutions.tsx` | Solutions teaser | 3×2 responsive grid of solution cards (Finance, Operations, Marketing, Sales categories). Hover: `.hover-card-glow`. A lightweight teaser — not the same as the full `/solutions` page. |
| `Technology.tsx` | Integrations marquee | Category filter tabs (All / AI Models / CRMs & Sales / Productivity / Forms & Scheduling / Communication). Splits filtered tools into 2 rows running in opposite directions (`marqueeLeft` / `marqueeRight` keyframes, 35s each). Hover pauses. |
| `Services.tsx` | Portfolio marquee | 6 project cards in a single-row infinite marquee (`singleRowMarquee`, 40s, `translateX(-33.333%)` on 3× duplicated array). Hover pauses. Each card: category label, badge, Lucide icon, title, description, tech-stack chips, footer metric. |
| `Testimonials.tsx` | Social proof | Featured "Before/After" split card at top. 3-card grid below with before/after quotes, Unsplash avatars, roles, and 5-star `<Star fill>` rows. |
| `FAQ.tsx` | FAQ | Accordion — single-open via `openIndex` state (defaults to index 1). Plus/X icon toggle. 6 questions covering AI vs automation, timelines, tool integrations. |

### Solutions Page (`src/components/solutions/`)

| Component | Notes |
|---|---|
| `SolutionsHero.tsx` | Category filter buttons. Calls back `onSelectCategory` in the page, which triggers smooth scroll to `#solutions-list`. |
| `SolutionsGrid.tsx` | Filtered grid of solution cards, `id="solutions-list"`. Receives `selectedCategory` prop. |
| `SolutionsFlowVisualizer.tsx` | Animated workflow diagram/visual showing how automation flows work. |
| `SolutionsIntegrations.tsx` | Integration logo strip relevant to solutions. |
| `SolutionsFAQ.tsx` | Solutions-specific accordion FAQ. |

### Industries Page (`src/components/industries/`)

| Component | Notes |
|---|---|
| `IndustriesHero.tsx` | Category picker — calls `onSelectCategory`, which scrolls to `#verticals`. |
| `IndustryVerticals.tsx` | Industry detail cards filtered by `selectedCategory`, `id="verticals"`. 6 verticals: Professional Services, Finance & FinTech, Healthcare & Life Sciences, Real Estate & Property, Recruitment & HR, Technology & Software. |
| `IndustryRoiCalculator.tsx` | Interactive ROI calculator — largest industries component (~13 KB). |
| `IndustryCaseStudies.tsx` | Case study cards (~9 KB). |
| `IndustrySecurity.tsx` | Security & compliance callout. |
| `IndustryFAQ.tsx` | Industry-specific FAQ accordion. |

### Technology Page (`src/components/technology/`)

| Component | Notes |
|---|---|
| `TechHero.tsx` | Stack overview headline (~11 KB — largest tech component). |
| `TechModels.tsx` | LLM model gateway — GPT-4, Claude, Gemini, Groq. |
| `TechVectorRAG.tsx` | Hybrid vector search / RAG architecture explainer. |
| `TechVoicePipeline.tsx` | Sub-350 ms voice AI pipeline details. |
| `TechSecurity.tsx` | Zero-hallucination guardrails / data privacy callouts. |
| `TechIntegrations.tsx` | Native API connector list. |
| `TechPlayground.tsx` | Interactive demo / playground UI (~10 KB). |
| `TechCTA.tsx` | Page-level CTA variant (~8 KB). |

### Contact Page (`src/components/contact/`)

| Component | Notes |
|---|---|
| `ContactHero.tsx` | Headline + sub-copy for contact page. |
| `ContactFormSection.tsx` | The primary contact form (~24 KB — largest contact component). Scope: book a 15-min feasibility call or send a workflow scope for a custom SLA proposal. |
| `ContactOfficeLocations.tsx` | Office address / location grid. |
| `ContactFAQ.tsx` | Contact-specific FAQ. |

### Engineer Portfolio Page (`src/components/engineer/`)

Personal/team portfolio for **Syed Abis**, Lead AI & Autonomous Systems Architect.
Page metadata: `Syed Abis | Lead AI & Autonomous Systems Architect @ Formiqa`.
Specialisms stated: LLM multi-agent orchestration, RAG vector search, production AI workflows.

| Component | Notes |
|---|---|
| `EngineerHero.tsx` | Name, title, headline (~9 KB). |
| `EngineerProjects.tsx` | Featured AI project cards (~8 KB). |
| `EngineerCaseStudies.tsx` | Detailed case studies (~10 KB — largest engineer component). |
| `EngineerTechStack.tsx` | Personal tech stack breakdown (~5 KB). |
| `EngineerExperience.tsx` | Work history / timeline (~4 KB). |
| `EngineerOpenSource.tsx` | Open-source contributions (~6 KB). |
| `EngineerTestimonials.tsx` | Client / colleague testimonials (~7 KB). |
| `EngineerCertifications.tsx` | Certs with images from `public/certificates/` (~8 KB). |
| `EngineerContact.tsx` | Inline contact form or link (~8 KB). |

## Gemini AI Chat (`/api/chat`)

File: `src/app/api/chat/route.ts`

- **Method**: POST. Body: `{ messages: [{role, content}] }`.
- **Auth**: reads `process.env.GEMINI_KEY`. Returns `500` if unset.
- **Model fallback chain** (tried in order until one succeeds):
  `gemini-2.5-flash` → `gemini-flash-latest` → `gemini-3.5-flash` → `gemini-2.5-pro`.
- **System instruction** hard-coded in the route: Formiqa AI Assistant persona,
  6 core service bullets, strict 40–50-word response limit, no filler intros,
  bold one metric, end with a one-sentence CTA.
- Conversation history forwarded as `contents` array with `role: 'model'` for
  assistant turns (Gemini SDK format — not `'assistant'`).
- Returns `{ reply: string }` on success or `{ error: string }` on failure.

The client (`ChatWidget.tsx`) maps `assistant` → `model` before sending history,
and parses `**bold**` markdown in replies via `renderFormattedText()`.

**Adding services to the bot**: edit the `systemInstruction` string inside
`route.ts` — no other file needs changing. Do not exceed 50 words per response
in the instruction or the persona becomes verbose.

## Marquee Animation Pattern

Two patterns are used across the site — do not mix them up:

1. **Single-row horizontal (Services)**: array tripled → `translateX(-33.333%)`
   over 40s. Track class: `.single-row-marquee-track`.
2. **Dual-row opposing (Technology)**: array quadrupled →
   - Row 1 `marqueeLeft`: `translateX(0% → -50%)`, 35s
   - Row 2 `marqueeRight`: `translateX(-50% → 0%)`, 35s

Both use `width: max-content` on the track, `overflow: hidden` on the container,
and a `maskImage` linear-gradient fade on the edges. Hover pauses via
`animation-play-state: paused`. Keyframes are injected via `<style jsx>` inside
the component (not in any external CSS file).

## Known Gotchas

- **`images.unoptimized: true`** in `next.config.js` — all `<img>` tags are plain
  HTML. Do not swap to `next/image` without testing; the Webflow asset naming
  convention (long hash filenames) may conflict with Image optimization caching.
- **`globals.css` is 310 KB** — do not open and edit it manually for layout tweaks;
  it is a Webflow export. Use inline styles on components or `custom.css` for
  any overrides.
- **`/solutions` and `/industries` cannot export `metadata`** because they are
  `'use client'` pages. If SEO titles are needed for those pages, the filter state
  must be lifted to a server parent layout.
- **Contact form is not wired to a backend** (`NEXT_PUBLIC_FORMSPREE_KEY` is
  commented out in `.env.example`). `ContactFormSection.tsx` will need a
  submission handler added before the form is functional.
- **Framer Motion is installed** (`^11.1.7` in `package.json`) but not visibly
  used in the components explored — it may be used inside the larger page-scoped
  components (`SolutionsFlowVisualizer`, `TechPlayground`, etc.). Check before
  removing it from dependencies.
- **Lenis version `^1.3.26`** — the import path is `import Lenis from 'lenis'`
  (no subpath). Earlier versions used `@studio-freight/lenis`. If upgrading,
  check the import path changes.

## Utility Scripts (repo root — not part of the web app)

One-off Node.js helper scripts used during the initial Webflow → Next.js
conversion. Safe to ignore during normal development:

| File | Purpose |
|---|---|
| `analyze_sections.js` | Inspects section structure in the source HTML |
| `copy_css.js` | Copies/extracts CSS from the Webflow export |
| `dump_all_sections_markup.js` | Dumps raw section markup for inspection |
| `dump_clean_html.js` | Produces a cleaned HTML snapshot |
| `extract_full_details.js` | Extracts detailed section data |
| `extract_nav_html.js` | Extracts the nav HTML fragment |
| `extract_sections_data.js` | Parses section data into JSON |
| `parse.js` / `parse_sections.js` | HTML parsing utilities |
| `image_mapping.json` | Maps original Webflow image names to local asset filenames |
| `clean_body.html` / `page.html` | Webflow HTML reference snapshots |
| `webflow.css` | Original Webflow CSS export (307 KB) |

## Static Assets

`public/images/` contains:
- **Logos**: `asset_2_*_Logo-flat.svg` (nav/footer), `asset_53_*_Logo-markv2.svg` (favicon).
- **Hero video**: `asset_12_file.mp4` — auto-plays, looped, muted, `playsInline`.
- **Integration logos**: WebP files named `asset_N_<hash>_<toolname>.webp`.
- **CTA background shape**: `asset_51_*_Shape_*.png` (overlaid at 25% opacity).
- **Tech/other section images**: additional WebP assets.

`public/certificates/` — certificate images used by `EngineerCertifications.tsx`.

## SEO

Page-level `metadata` exports on server-component pages:

| Page | Title |
|---|---|
| `/` (root layout) | `AI & Automation Agency :: Formiqa` |
| `/contact` | `Contact Us & Book AI Discovery Audit \| Formiqa AI Agency` |
| `/engineer` | `Syed Abis \| Lead AI & Autonomous Systems Architect @ Formiqa` |
| `/technology` | `Enterprise AI Stack & Infrastructure Technology \| Formiqa` |

`/solutions` and `/industries` are `'use client'` pages — they inherit the root
layout title. If you need per-page SEO for those routes, introduce a server
layout.tsx in their directories and pass filter state via URL params instead.

## Env Vars

| Variable | Required | Purpose |
|---|---|---|
| `GEMINI_KEY` | **Yes** | Google Gemini API key — used by `/api/chat`. Chat widget returns 500 without it. |
| `NEXT_PUBLIC_SITE_URL` | No | Base URL (`http://localhost:3000`). Reserved — not consumed yet. |
| `NEXT_PUBLIC_SITE_NAME` | No | Site name string. Reserved. |
| `NEXT_PUBLIC_FORMSPREE_KEY` | No | Contact form service key — commented out, not yet wired. |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics ID — commented out, not yet wired. |

Copy `.env.example` → `.env.local`, fill in `GEMINI_KEY`. **Never commit `.env.local`.**

## Dev & Deploy

```bash
npm install
npm run dev        # http://localhost:3000

npm run build      # production bundle — only when validating
npm start
```

- **Never run `npm run build` while `npm run dev` is active** — can corrupt `.next` cache.
- Deployment: **Vercel** (push `main` → auto-deploy). Add `GEMINI_KEY` to Vercel
  project environment variables.

## File Map

```
d:\Ahmer\Formiqa\
├── .env.example                   Env vars template (copy → .env.local)
├── next.config.js                 reactStrictMode: true, images.unoptimized: true
├── tsconfig.json                  Standard Next.js TS config
├── package.json                   next@14, react@18, framer-motion, lenis,
│                                  lucide-react, @google/generative-ai
│
├── public/
│   ├── images/                    All static image/video assets
│   └── certificates/              Engineer certification images
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             Root layout — Plus Jakarta Sans + Inter fonts,
│   │   │                          SmoothScroll wrapper, root metadata
│   │   ├── page.tsx               Home page — Navbar → Hero → ValueProps →
│   │   │                          Solutions → Technology → Services →
│   │   │                          Testimonials → FAQ → CTA → Footer → ChatWidget
│   │   ├── globals.css            Webflow CSS export (~310 KB, do not hand-edit)
│   │   ├── custom.css             Hover effects + responsive nav breakpoint
│   │   ├── api/chat/route.ts      POST /api/chat → Google Gemini (server only)
│   │   ├── contact/page.tsx       Server component, exports metadata
│   │   ├── solutions/page.tsx     Client component — holds activeCategory state
│   │   ├── industries/page.tsx    Client component — holds activeCategory state
│   │   ├── technology/page.tsx    Server component, exports metadata
│   │   └── engineer/page.tsx     Server component, exports metadata
│   │
│   └── components/
│       ├── Navbar.tsx             Global nav with dropdowns + mobile drawer
│       ├── Hero.tsx               MP4 video hero + gradient-bordered badge
│       ├── ValueProps.tsx         3-column value prop grid
│       ├── Solutions.tsx          Homepage solutions teaser grid
│       ├── Technology.tsx         Integration marquee with category filter
│       ├── Services.tsx           Portfolio project single-row marquee
│       ├── Testimonials.tsx       Before/After social proof section
│       ├── FAQ.tsx                Accordion FAQ (6 questions)
│       ├── CTA.tsx                Glassmorphic CTA panel (mailto link)
│       ├── Footer.tsx             Site footer — columns + social icons
│       ├── ChatWidget.tsx         Gemini AI chat floating widget
│       ├── SmoothScroll.tsx       Lenis smooth scroll wrapper
│       ├── solutions/             SolutionsHero, SolutionsGrid,
│       │                          SolutionsFlowVisualizer, SolutionsIntegrations,
│       │                          SolutionsFAQ
│       ├── industries/            IndustriesHero, IndustryVerticals,
│       │                          IndustryRoiCalculator, IndustryCaseStudies,
│       │                          IndustrySecurity, IndustryFAQ
│       ├── technology/            TechHero, TechModels, TechVectorRAG,
│       │                          TechVoicePipeline, TechSecurity,
│       │                          TechIntegrations, TechPlayground, TechCTA
│       ├── contact/               ContactHero, ContactFormSection,
│       │                          ContactOfficeLocations, ContactFAQ
│       └── engineer/              EngineerHero, EngineerProjects,
│                                  EngineerCaseStudies, EngineerTechStack,
│                                  EngineerExperience, EngineerOpenSource,
│                                  EngineerTestimonials, EngineerCertifications,
│                                  EngineerContact
│
└── [migration scripts]            analyze_sections.js, copy_css.js, parse.js, …
                                   (one-off Webflow → Next.js conversion helpers,
                                   safe to ignore)
```

# Product Requirements Document — welcome.planhat.com

**Version:** 1.0
**Date:** April 9, 2026
**Owner:** Planhat Marketing

---

## 1. Purpose

A single-page marketing site designed to attract top-tier candidates for the **VP of Revenue Operations** role at Planhat. The page serves as a brand impression piece — showing what Planhat is building, who's behind it, and why this role matters — rather than a traditional job listing.

**URL:** `welcome.planhat.com`

---

## 2. Goals

| Goal | Measure |
|------|---------|
| Create a compelling first impression for prospective candidates | Time on page, scroll depth |
| Communicate Planhat's product vision and market position | Qualitative (candidate interviews) |
| Showcase leadership team and company culture | LinkedIn profile visits from referral |
| Reinforce Planhat's brand as a design-forward, AI-first company | Brand perception |

---

## 3. Target Audience

Senior GTM / RevOps leaders evaluating Planhat as their next company. These are people who will research thoroughly before applying — they need substance, not hype.

---

## 4. Page Structure

The page is a vertical scroll of 8 content sections plus navigation and footer. Sections alternate between dark and light backgrounds to create visual rhythm.

### 4.1 Navigation

- Fixed top bar with glassmorphism (backdrop blur + translucent background on scroll)
- Planhat wordmark logo (SVG, white on dark)
- Anchor links to each section: The Platform, AI, Recognition, Customers, See it in action, The team
- Mobile: hamburger menu with full-screen overlay, body scroll lock, close on Escape/backdrop tap

### 4.2 Hero

- Full-viewport section with atmospheric background image (`hero-bg.jpg`) and dark overlay
- **Eyebrow:** "VP of Revenue Operations"
- **Headline:** "The future of AI GTM operations is being built here."
- **Body:** Acknowledges the volume of applications received and frames the page as a window into what Planhat is building
- **CTAs:** Two ghost-style buttons — "See the platform" (anchor to #platform) and "Watch the demo" (anchor to #demo)
- Scroll indicator at bottom

### 4.3 The Planhat Story (`#platform`)

- **Background:** Light
- **Eyebrow:** "The agentic customer platform"
- **Headline:** "One system. The entire customer lifecycle."
- **Body:** Introduces "the Loop" — Planhat's approach to centralizing commercial reality, deploying AI agents, and keeping humans in control
- **Three pillars** in a grid:
  1. **Context** — Data centralization and modeling
  2. **Agents** — Trustworthy AI automation
  3. **Human & AI collaboration** — Integrated system design

### 4.4 AI Platform (`#ai`)

- **Background:** Dark
- **Eyebrow:** "Planhat AI Platform (AIP)"
- **Headline:** "The commercial AI platform."
- **Body:** Positions the platform as purpose-built for commercial orgs with hundreds of use cases
- **Three value propositions** in a grid:
  1. Hundreds of use cases (no-code workflow builder)
  2. Solve processes end-to-end (integration with tools and data)
  3. Built for commercial teams (domain expertise, deployment program)
- **Gartner quote card:** Glassmorphism card with analyst quote about Planhat's generative AI health score

### 4.5 Market Recognition (`#recognition`)

- **Background:** Light
- **Eyebrow:** "Market recognition"
- **Headline:** "Planhat is a leader."
- **Four badges:** Gartner Magic Quadrant Leader, Gartner Leader 2024 & 2025, IDC MarketScape Leader, G2 Momentum Grid Leader (9 categories)
- Each badge shows organization, award description, and "Leader" pill with accent styling

### 4.6 Customers & Impact (`#customers`)

- **Background:** Dark
- **Eyebrow:** "Customers"
- **Headline:** "Industry leaders build their business on Planhat."
- **Four stat cards** with customer quotes:
  - Trustpilot: 100+ hours saved
  - Macrobond: 22% faster onboarding
  - Thrive Learning: 20% less churn
  - Simple Poll: 500% increased upsells
- **Logo strip:** 12 customer logos (Trustpilot, Grafana, DigitalOcean, Synthesia, Dialpad, Cyera, Acoustic, TrendAI, Hoxhunt, Recruitee, Basis, Belkins) rendered as grayscale-inverted images with text fallbacks

### 4.7 Demo (`#demo`)

- **Background:** Light
- **Eyebrow:** "See it in action"
- **Headline:** "AI for commercial teams."
- Two-column layout:
  - **Left:** Video embed (iframe to planhat.com editorial) with play button overlay
  - **Right:** Description card with title, summary, and external link to planhat.com
- **Placeholder block** for future interactive demo embed (Navattic/Arcade)

### 4.8 Life at Planhat (Culture)

- **Background:** Dark
- **Eyebrow:** "Life at Planhat"
- **Headline:** "Where it happens."
- **Body:** "A glimpse into the team, the energy, and the environment behind the product."
- **Photo grid:** 7 images in a responsive masonry-style layout with captions (full team, team vibes, Kaveh at Harvard Business School, team dinner, team at an event, on the road, networking)
- Broken images fall back to labeled placeholder boxes

### 4.9 The Team (`#team`)

- **Background:** Light
- **Eyebrow:** "The people building this"
- **Headline:** "Follow along."
- **Body:** "The people shaping Planhat's AI GTM future. Follow them on LinkedIn to stay close to what's being built."
- **People grid** (3 columns on desktop, 1 on mobile):
  - Kaveh Rostampor — CEO & Co-founder
  - Erik Holm — CFO
  - Ambera Cruz — Head of Marketing
  - Alberto Lambert — Creative Director
  - Michael Gorodisher — Head of AI GTM
  - Planhat (company page) — "Follow the company"
- Each card: circular avatar, name, title, LinkedIn link

### 4.10 Footer

- Copyright: "2026 Planhat Inc."
- Tagline: "The Agentic Customer Platform"
- Link to planhat.com

---

## 5. Design System

### 5.1 Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Display / Headings | Geigy LL Duplex Var (`.woff2`, self-hosted) | 400-500 (normal) | H1, H2, H3, nav links |
| Body / UI | Inter Variable (`.ttf`, self-hosted) | 300-400 | Body text, labels, buttons, captions |

- Headings use light weight (400) for an editorial, modern feel
- Eyebrows: uppercase, 0.72rem, 0.15em letter-spacing
- No external font dependencies (Google Fonts removed)

### 5.2 Color Palette

**Dark sections:**

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | `#0e0e0e` | Page background |
| `surface` | `#111110` | Card surfaces |
| `white` | `#ffffff` | Primary text |
| `muted` | `rgba(255,255,255,0.5)` | Secondary text, eyebrows |
| `accent` | `#EF8534` | Sparingly — badges, play button |
| `divider` | `rgba(255,255,255,0.07)` | Grid lines, borders |

**Light sections:**

| Token | Value | Usage |
|-------|-------|-------|
| `light-bg` | `#FAF9F5` | Section background |
| `light-text` | `#1a1a1a` | Primary text |
| `light-muted` | `#958D7E` | Secondary text, eyebrows |
| `light-tertiary` | `#575551` | Tertiary text |
| `light-divider` | `rgba(0,0,0,0.08)` | Grid lines, borders |

### 5.3 Layout

- Max content width: `1100px`, centered
- Horizontal padding: `24px` (mobile), `48px` (desktop)
- Section padding: `80px` / `112px` vertical
- Grid gutters: `1px` hairlines with divider color fill (editorial grid style)

### 5.4 Components & Patterns

- **Ghost buttons:** Transparent with white border, uppercase text, right arrow suffix (`>`), 2px border-radius
- **Glassmorphism:** Backdrop blur + translucent backgrounds on nav bar and select cards
- **Scroll reveal:** Fade-up animation (24px translateY) triggered by IntersectionObserver via custom `useScrollReveal` hook
- **Image fallbacks:** All images have `onError` handlers that render text/icon placeholders

### 5.5 Favicon

- Adaptive favicon using Planhat hat symbol SVG
- Light variant (black hat) for light OS themes
- Dark variant (white hat) for dark OS themes
- Default fallback (white hat)

---

## 6. Technical Architecture

### 6.1 Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 19.x |
| Build tool | Vite | 8.x |
| Language | TypeScript | 6.x |
| Styling | Tailwind CSS | 4.x (via `@tailwindcss/vite`) |

### 6.2 Project Structure

```
planhat-welcome/
├── index.html
├── package.json
├── vite.config.ts
├── public/
│   ├── favicon.svg / favicon-dark.svg / favicon-light.svg
│   ├── fonts/
│   │   ├── GeigyLLDuplexVarWeb.woff2
│   │   └── Inter-Variable.ttf
│   └── images/
│       ├── hero-bg.jpg
│       ├── culture-1.jpg ... culture-7.jpg
│       ├── planhat-wordmark-dark.svg (+ light, symbol variants)
│       ├── kaveh-rostampor.png (+ other team headshots)
│       └── logos/ (customer logo SVGs)
└── src/
    ├── main.tsx
    ├── index.css (Tailwind + theme tokens + animations)
    ├── hooks/
    │   └── useScrollReveal.ts
    ├── data/
    │   └── content.ts (all static content)
    └── components/
        ├── Nav.tsx
        ├── Hero.tsx
        ├── PlatformStory.tsx
        ├── AIPlatform.tsx
        ├── Recognition.tsx
        ├── Customers.tsx
        ├── Demo.tsx
        ├── Culture.tsx
        ├── Team.tsx
        └── Footer.tsx
```

### 6.3 Key Decisions

- **No external dependencies** beyond React and Tailwind — no animation libraries, map libraries, or tracking scripts
- **Self-hosted fonts** — no Google Fonts CDN calls, improving privacy and load performance
- **No tracking or analytics** — privacy-first approach, no cookies
- **Static content** — all text content lives in `content.ts` for easy updates without touching components
- **Graceful degradation** — every image has a fallback (initials for avatars, text for logos, gradient for hero background)

---

## 7. Responsive Behavior

| Breakpoint | Layout adjustments |
|------------|-------------------|
| < 640px (mobile) | Single-column grids, hamburger nav, reduced heading sizes, hidden forced line breaks, compact padding |
| 640px+ (sm) | Two-column grids begin |
| 768px+ (md) | Three-column grids, desktop nav links visible, full heading sizes, wider padding |

- Navigation: hamburger overlay on mobile with scroll lock, Escape key close, backdrop click close
- All sections use responsive padding (`px-6` mobile, `px-12` desktop)
- `scroll-padding-top: 4rem` compensates for the fixed nav when jumping to anchors

---

## 8. Deployment

- **Target:** Vercel (static site)
- **Build command:** `tsc -b && vite build`
- **Output:** `dist/` directory with static HTML, CSS, JS, and assets
- **Domain:** `welcome.planhat.com`

---

## 9. Content that Needs Updating

| Item | Status | Notes |
|------|--------|-------|
| Customer logo SVGs (`/images/logos/*.svg`) | Placeholder | Currently falling back to text; need actual SVG files |
| Interactive demo embed | Placeholder | Dashed border block ready for Navattic/Arcade embed code |
| Office locations map | Built but disabled | `Offices.tsx` component exists with 9 locations; removed from render due to rendering issue |
| `AI_USE_CASES` data | Unused | 15 use case strings defined in content.ts but not rendered by any component |

---

## 10. Non-Goals

- No job application form or ATS integration (candidates apply through existing channels)
- No blog, multi-page navigation, or CMS
- No user accounts or authentication
- No A/B testing or analytics tracking
- No internationalization (English only)

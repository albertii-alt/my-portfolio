# SPEC.md — Jay-ar Daro Portfolio
> Drop this file in your project root. Reference it in every Amazon Q prompt.

---

## 1. Project Overview

**Owner:** Alberto Jr. Auxtero Daro (Jay-ar)
**Role Positioning:** Full-Stack Developer & AI Builder — 3rd Year IT Student
**Tagline:** "Building intelligent, practical systems that solve real community and business problems."
**Primary Goals:**
- Attract local freelance clients (small businesses in Bohol/Philippines)
- Get noticed by tech companies and recruiters
**Deployment Target:** Vercel

---

## 2. Tech Stack

| Concern | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler | Vite |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (dark theme) |
| Animation | Framer Motion |
| Icons | Lucide React |
| AI Assistant | Anthropic Claude API (claude-sonnet-4-20250514) |
| Fonts | Geist Mono (headings/code) + Inter (body) — via Google Fonts |
| Deployment | Vercel |

---

## 3. Design Tokens

### Color Palette

```css
--bg-base:        #0A0A0A;   /* Near-black page background */
--bg-surface:     #111111;   /* Cards, panels */
--bg-elevated:    #1A1A1A;   /* Hover states, nav */
--border:         #222222;   /* Subtle borders */
--border-active:  #333333;   /* Focused/hovered borders */
--accent:         #4ADE80;   /* Primary accent — terminal green */
--accent-dim:     #16A34A;   /* Dimmed accent for glows/backgrounds */
--text-primary:   #F4F4F5;   /* Main readable text */
--text-secondary: #A1A1AA;   /* Supporting text, metadata */
--text-muted:     #52525B;   /* Placeholder, disabled */
```

> **Why terminal green?** It's on-brand for a dev-tool aesthetic, ties into the "agentic/AI builder" positioning, and is distinctive without being trendy. It should be used with restraint — only on key interactive elements, accents, and the AI assistant.

### Typography Scale

```css
/* Display — Geist Mono, used for name, section labels, code snippets */
--font-display: 'Geist Mono', monospace;

/* Body — Inter, used for all readable paragraph content */
--font-body: 'Inter', sans-serif;

/* Scale */
--text-xs:   0.75rem;   /* 12px — metadata, tags */
--text-sm:   0.875rem;  /* 14px — secondary content */
--text-base: 1rem;      /* 16px — body */
--text-lg:   1.125rem;  /* 18px — lead text */
--text-xl:   1.25rem;   /* 20px — card titles */
--text-2xl:  1.5rem;    /* 24px — section headings */
--text-3xl:  2rem;      /* 32px — section display */
--text-5xl:  3.5rem;    /* 56px — hero name */
```

### Spacing & Radius

```css
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  12px;
--section-gap: 120px;  /* Vertical space between sections */
--content-max: 1100px; /* Max width for content container */
```

### Signature Element
A **monospaced blinking cursor** (`▋`) appended to the hero name or tagline — the single most memorable visual detail. It signals "developer" immediately without any decoration. Keep everything else quiet around it.

---

## 4. Site Structure (Single Page)

```
/
├── <Navbar />               — Fixed top, name + nav links + "Hire Me" CTA
├── <Hero />                 — Name, role, tagline, two CTAs, subtle grid bg
├── <About />                — Story paragraph + quick stat pills
├── <Skills />               — Grouped tech icons/tags by category
├── <Projects />             — 3 featured cards + "All Projects" expandable grid
├── <Experience />           — Timeline: academic + project milestones
├── <AskJayar />             — AI assistant section (Claude API powered)
└── <Contact />              — Email CTA + social links
```

No routing needed. All sections are scrollable on one page. Use smooth scroll.

---

## 5. Section Specs

### 5.1 Navbar
- Fixed, `bg-bg-base/80` with `backdrop-blur`
- Left: `Jay-ar` in Geist Mono with accent dot
- Right: nav links (`About`, `Skills`, `Projects`, `Ask Jay-ar`, `Contact`) + `Hire Me` button
- `Hire Me` — outlined button with accent border, links to `#contact`
- Mobile: hamburger menu with slide-down drawer
- Active section highlighted via scroll spy

### 5.2 Hero
- Full viewport height (`min-h-screen`)
- Background: subtle CSS dot-grid pattern (CSS only, no canvas) in `--border` color
- Layout: centered, left-aligned text
- Content:
  ```
  [ small label ]   "Full-Stack Developer & AI Builder"
  [ H1 ]            "Jay-ar Daro▋"   ← blinking cursor here
  [ subtext ]       "Building intelligent, practical systems that solve
                     real community and business problems."
  [ CTA row ]       [View My Work →]   [Let's Talk]
  [ meta row ]      "Based in Trinidad, Bohol · Open to Freelance & Opportunities"
  ```
- Framer Motion: staggered fade-up on load (name first, then tagline, then CTAs)
- NO hero image, NO avatar — pure text-based, dev-tool style

### 5.3 About
- Two-column on desktop, stacked on mobile
- Left: short story paragraph (3-4 sentences max), followed by a second paragraph on agentic development focus
- Right: 4 stat pills
  ```
  [ 8+ Projects Built ]
  [ 3 Years Learning ]
  [ Full-Stack + AI ]
  [ Open Source on GitHub ]
  ```
- Tone: confident, not academic. Write like a developer, not a student.

**Copy:**
```
I'm a 3rd year IT student at Trinidad Municipal College, but most of what
I know came from building real things — a POS system for a local food stall,
a dental clinic management platform, a mobile productivity app.

I focus on full-stack systems that small businesses and communities can
actually use. Right now I'm deep into agentic development — building software
with AI as a core collaborator, not just a tool.
```

### 5.4 Skills
- Section label: `Skills & Technologies`
- Grouped display (not a wall of badges):
  ```
  Languages      JS · TS · Java · PHP · Kotlin · HTML/CSS
  Frontend       React · React Native · Tailwind · shadcn/ui · Framer Motion
  Backend        Node.js · Express · SparkJava · PHP
  Databases      SQLite · MySQL · PostgreSQL · JSON
  Tools & Infra  Git · Vite · Tauri · Expo · Socket.IO · Zustand · Amazon Q
  AI & Agents    Claude API · Ollama · Continue (VS Code) · LLM integration
  ```
- Each group: label in `--text-muted` Geist Mono, tags as small pill chips
- Subtle fade-in on scroll

### 5.5 Projects
- Section label: `Projects`
- **Featured row (3 cards, horizontal scroll on mobile):**

  **Card 1 — Pinili Cutlet POS**
  - Tag: `Full-Stack · LAN · Real-World`
  - Problem: "Food stalls need unified order-taking and sales tracking across multiple devices — no internet required."
  - Stack pills: Node.js, Tauri, React, SQLite, TypeScript
  - Links: GitHub repo

  **Card 2 — Vantage Dental Clinic**
  - Tag: `Desktop · Enterprise · Java`
  - Problem: "Dental clinics struggle with appointment conflicts, role permissions, and patient communication."
  - Stack pills: Java Swing, MySQL, JavaMail, BCrypt
  - Links: GitHub repo

  **Card 3 — FlowDay**
  - Tag: `Mobile · Offline-First · Productivity`
  - Problem: "Productivity apps shouldn't need the cloud. Users deserve to own their data."
  - Stack pills: React Native, Expo, SQLite, Zustand
  - Links: GitHub repo

- Below featured: `"See All Projects"` toggle that reveals a compact 2-col grid of remaining 5 projects (smaller cards, less detail)
- Card hover: subtle `border-accent-dim` glow + slight lift (`translateY(-2px)`)

### 5.6 Experience / Timeline
- Section label: `Journey`
- Simple vertical timeline, left-aligned with accent line
- Entries (newest first):
  ```
  2025  — Pinili Cutlet POS System (Active Development)
  2025  — Set up Local LLM Dev Environment (Ollama + Continue)
  2024  — Vantage Dental Clinic System (Capstone)
  2024  — FlowDay Mobile App (MVP Complete)
  2024  — Lumina POS — Hardware Store System
  2023  — Started BS Information Technology @ Trinidad Municipal College
  ```

### 5.7 Ask Jay-ar (AI Assistant)
- Section label: `Ask Jay-ar`
- Subtitle: `"Powered by Claude · Knows my work, stack, and availability"`
- Layout: centered chat interface, max-width 680px
- Behavior: Claude API call with a detailed system prompt (see Section 7)
- UI:
  - Chat history displayed above input
  - Input bar at bottom with send button (accent colored)
  - Suggested starter questions shown before first message:
    ```
    "What projects have you built?"
    "Can you build a POS for my business?"
    "What's your tech stack?"
    "Are you available for freelance?"
    ```
  - Typing indicator (3 animated dots) while waiting for response
  - Messages styled: user = right-aligned pill, assistant = left-aligned with small avatar initial `J`
- Rate limit: max 10 messages per session (client-side counter, no backend needed)

### 5.8 Contact
- Section label: `Let's Work Together`
- Short line: `"Available for freelance projects, internships, and collaboration."`
- Large email button: `albertoiidaro0@gmail.com` — copies to clipboard on click, shows toast "Email copied!"
- Social row: GitHub (`albertii-alt`) · Facebook (`Jay-ar Daro`)
- Simple, no contact form — low friction is the goal

---

## 6. Component File Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── AskJayar.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── ProjectCard.tsx
│       ├── SkillGroup.tsx
│       ├── TimelineItem.tsx
│       ├── ChatMessage.tsx
│       └── BlinkingCursor.tsx
├── data/
│   ├── projects.ts       ← All project data as typed objects
│   ├── skills.ts         ← Skill groups data
│   └── timeline.ts       ← Journey entries
├── hooks/
│   ├── useScrollSpy.ts   ← Active section tracking for navbar
│   └── useChat.ts        ← Chat state + Claude API calls
├── lib/
│   └── claude.ts         ← Claude API client function
├── styles/
│   └── globals.css       ← CSS variables + base styles
├── App.tsx
└── main.tsx
```

---

## 7. AI Assistant — Claude System Prompt

Store this in `src/lib/claude.ts`. Never expose the API key client-side in production — for now, use a Vite env variable (`VITE_ANTHROPIC_API_KEY`) during local development.

```typescript
export const SYSTEM_PROMPT = `
You are Jay-ar's portfolio assistant. Jay-ar is Alberto Jr. Auxtero Daro,
a 3rd year BS Information Technology student at Trinidad Municipal College
in Trinidad, Bohol, Philippines.

Your job: answer questions from potential clients, recruiters, and collaborators
about Jay-ar's work, skills, and availability. Be concise, confident, and honest.
Never make up projects or skills not listed below.

== ABOUT JAY-AR ==
Full-stack developer and AI builder focused on practical systems for small
businesses and communities. Expert in JavaScript/TypeScript, React, Node.js,
Java, and SQLite. Currently exploring agentic development with local LLMs.

== PROJECTS ==
1. Pinili Cutlet POS — LAN-based multi-device POS (Node.js/Express, Tauri/React, SQLite)
2. Vantage Dental Clinic — Java Swing desktop app, MySQL, multi-role, email notifications
3. FlowDay — Offline-first React Native productivity app (Expo, SQLite, Zustand)
4. Lumina POS — PHP hardware store POS (MySQL, Bootstrap, Chart.js)
5. HomeBase Finder — Deployed React property browsing app (Vercel)
6. Library Management System — Java + SparkJava backend, JSON storage
7. Bisayang Kusina — Modern HTML/CSS/JS login UI
8. Portfolio Website — This site (React, TypeScript, Tailwind, Claude API)

== SKILLS ==
Languages: JavaScript, TypeScript, Java, PHP, Kotlin, HTML/CSS
Frontend: React, React Native, Tailwind CSS, shadcn/ui, Framer Motion
Backend: Node.js, Express, SparkJava
Databases: SQLite, MySQL, PostgreSQL
Tools: Git, Vite, Tauri, Expo, Socket.IO, Zustand, Amazon Q, Ollama

== AVAILABILITY ==
Open to freelance projects, especially POS systems, business management tools,
and web applications for local businesses. Also open to internship opportunities
and collaboration with developers.

== CONTACT ==
Email: albertoiidaro0@gmail.com
GitHub: https://github.com/albertii-alt

== BEHAVIOR RULES ==
- Keep answers to 2-4 sentences unless a detailed breakdown is asked for
- If asked about pricing, say rates depend on scope and to email for a quote
- If asked something outside your knowledge base, say you're not sure and suggest emailing Jay-ar directly
- Never break character or discuss being an AI unless directly asked
`;
```

---

## 8. Animation Guidelines (Framer Motion)

```typescript
// Standard fade-up for section entries
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

// Stagger container for grouped items (skills, project cards)
export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 }
  }
};

// Card hover
export const cardHover = {
  whileHover: { y: -2, borderColor: 'var(--accent-dim)' },
  transition: { duration: 0.2 }
};
```

Use `viewport={{ once: true }}` on all scroll-triggered animations. Don't animate things that are already visible on load.

---

## 9. Step-by-Step Build Order

Follow this order. Do not skip ahead.

```
Step 1  ✅ SPEC.md created (you are here)
Step 2  [ ] Scaffold Vite + React + TypeScript project
Step 3  [ ] Install and configure Tailwind CSS v4
Step 4  [ ] Install shadcn/ui, Framer Motion, Lucide React
Step 5  [ ] Set up CSS variables in globals.css (Section 3 tokens)
Step 6  [ ] Create data files (projects.ts, skills.ts, timeline.ts)
Step 7  [ ] Build Navbar component
Step 8  [ ] Build Hero section
Step 9  [ ] Build About section
Step 10 [ ] Build Skills section
Step 11 [ ] Build Projects section + ProjectCard component
Step 12 [ ] Build Experience/Timeline section
Step 13 [ ] Build AskJayar section (UI only first, no API)
Step 14 [ ] Wire Claude API to AskJayar (claude.ts + useChat hook)
Step 15 [ ] Build Contact section
Step 16 [ ] Assemble all sections in App.tsx
Step 17 [ ] Responsive polish (mobile breakpoints)
Step 18 [ ] Deploy to Vercel
```

---

## 10. Amazon Q Usage Tips

Always have `SPEC.md` open in VS Code when prompting Amazon Q.

**Good prompt patterns:**
```
"Based on SPEC.md section 5.2, generate the Hero.tsx component using
React, TypeScript, and Tailwind. Use the CSS variables defined in Section 3."

"Using the fadeUp animation from SPEC.md Section 8, add scroll-triggered
animations to the About.tsx component."

"Generate src/data/projects.ts with TypeScript types based on the
project data in SPEC.md Section 5.5."
```

**Bad prompt patterns:**
```
"Make a hero section"           ← too vague
"Add some animations"           ← no context
"Make it look good"             ← not actionable
```

The more you reference specific sections, the better Q's output will be.

---

*Last updated: June 2026 · Maintained by Jay-ar Daro*

# CLAUDE.md — Sudip Mondal Portfolio

## Overview
Photographer & filmmaker portfolio. Cinematic, premium, client-focused.
Vanilla HTML + CSS + JS. Single-page: `index.html`. Styles: `css/`. Scripts: `js/`. Assets: `assets/`.
Do NOT touch `react-app/` unless asked.

## Skills (MANDATORY)
Before ANY design/UI change, ALWAYS read relevant skills first:
- `/mnt/skills/public/frontend-design/SKILL.md` → all visual/design work
- UI UX Pro MAX skill → UX decisions, layout, user flows
- 21dev skill → development best practices
**No exceptions. Read skill → then code.**

## Theme (CSS Variables)
Use these variables — never hardcode colors.

### Light Mode (default)
```
--background: #ffffff     --foreground: #262626
--primary: #f59e0b        --primary-foreground: #000000
--secondary: #f3f4f6      --secondary-foreground: #4b5563
--accent: #fffbeb         --accent-foreground: #92400e
--muted: #f9fafb          --muted-foreground: #6b7280
--card: #ffffff           --card-foreground: #262626
--border: #e5e7eb         --input: #e5e7eb
--ring: #f59e0b           --destructive: #ef4444
--popover: #ffffff        --popover-foreground: #262626
```

### Dark Mode (.dark)
```
--background: #171717     --foreground: #e5e5e5
--primary: #f59e0b        --primary-foreground: #000000
--secondary: #262626      --secondary-foreground: #e5e5e5
--accent: #92400e         --accent-foreground: #fde68a
--muted: #262626          --muted-foreground: #a3a3a3
--card: #262626           --card-foreground: #e5e5e5
--border: #404040         --input: #404040
--ring: #f59e0b           --destructive: #ef4444
```

### Charts
```
--chart-1: #f59e0b  --chart-2: #d97706  --chart-3: #b45309
--chart-4: #92400e  --chart-5: #78350f
```

### Fonts
```
--font-sans: Inter, sans-serif
--font-serif: Source Serif 4, serif
--font-mono: JetBrains Mono, monospace
```

### Shadows & Spacing
```
--radius: 0.375rem        --spacing: 0.25rem
--shadow-offset-y: 4px    --shadow-blur: 8px
--shadow-spread: -1px     --shadow-opacity: 0.1
```

### Rule
Always use `var(--primary)` not `#f59e0b`. Always use `var(--foreground)` not `#262626`. This ensures dark mode works automatically.

## Layout Rules (STRICT)
- Flexbox/Grid ONLY — no floats, no absolute positioning for layout
- Every container: explicit `display: flex/grid` + `gap`
- No overlapping elements — normal document flow always
- No negative margins. No `!important`.
- Spacing: multiples of 8px. Section padding: 80-120px vertical.
- Max-width: 1200-1400px centered.

## Responsive
```
Mobile: 480px | Tablet: 768px | Small: 1024px | Desktop: 1440px
```
- Mobile-first, `min-width` media queries
- Hero: 2-col desktop → stacked mobile
- Nav: horizontal → hamburger on mobile
- Gallery: 4 → 3 → 2 → 1 columns
- Test: 375px, 768px, 1024px, 1440px before commit

## Brand
- Name: Sudip Mondal | Logo: "SUDIP" + "PHOTOGRAPHER & FILMMAKER" badge
- Tagline: "MAKING LIFE LOOK LIKE A MOVIE FRAME."
- Services: Portraits, Weddings, Events, Concerts, Cinematic Reels
- Stats: 5+ years | 170+ projects | 65+ clients
- Tone: cinematic, confident, artistic — not corporate

## Code Rules
- Semantic HTML (`section`, `nav`, `main`, `footer`)
- All styles in `css/`, all JS in `js/` — zero inline
- `const`/`let` only, no `var`, no jQuery
- Every `<img>`: `loading="lazy"` + `alt` text
- Use CSS variables from theme — never hardcode colors
- Transitions: specify properties, 0.3s ease, never `all`

## Animations
- Scroll-triggered: Intersection Observer (not scroll events)
- Use `transform` + `opacity` only — never animate layout properties
- Duration: 0.3-0.6s UI, 0.8-1.2s sections
- Easing: cubic-bezier(0.4,0,0.2,1)
- Respect `prefers-reduced-motion`

## Before Any Change
1. Read relevant skill files first
2. Read existing CSS — understand before modifying
3. Use `var(--token)` for all colors — never raw hex
4. Test all 4 breakpoints
5. Verify no new overlaps
6. Minimal changes — fix issue, don't rewrite unrelated code
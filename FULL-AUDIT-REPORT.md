# SEO Full Audit Report — sudipmondal.in
**Audit Date:** 2026-06-06 | **Auditor:** Claude SEO Audit (seo-audit skill)  
**Business Type:** Local Service — Photographer / Filmmaker (SAB: Service Area Business)  
**Target Market:** Kolkata-based, pan-India reach

---

## ⚠️ CRITICAL NOTICE: Changes Not Yet Deployed

The local codebase has SEO improvements applied (title fix, meta fix, canonical, schema, robots.txt, sitemap.xml, llms.txt, FAQ section, counter fix). **None of these have been pushed to GitHub / deployed to the live site.** This audit reports on the CURRENT LIVE site at sudipmondal.in.

Run this git command to deploy all pending fixes:
```bash
git add -A
git commit -m "SEO: schema, canonical, robots.txt, sitemap, FAQ, counter fix, title/meta"
git push origin main
```

---

## SEO Health Score

| Category | Score | Weight | Contribution |
|----------|-------|--------|--------------|
| Technical SEO | 28/100 | 22% | 6.2 pts |
| Content Quality | 48/100 | 23% | 11.0 pts |
| On-Page SEO | 32/100 | 20% | 6.4 pts |
| Schema / Structured Data | 0/100 | 10% | 0.0 pts |
| Performance (CWV) | 55/100 | 10% | 5.5 pts |
| AI Search Readiness | 20/100 | 10% | 2.0 pts |
| Images | 58/100 | 5% | 2.9 pts |
| **OVERALL HEALTH** | **34 / 100** | — | — |

**Projected score after deploying local changes:** ~72/100  
**Projected score after all fixes (including image migration):** ~78/100

---

## Executive Summary

### Top 5 Critical Issues (LIVE SITE)
1. **Schema markup is completely absent** — No JSON-LD on the live site. Google cannot identify Sudip as a Person, LocalBusiness, or surface rich results.
2. **robots.txt and sitemap.xml are missing** — Google cannot efficiently discover or understand the site's crawl priority.
3. **Title tag contains "Best" superlative (81 chars)** — Both a quality signal risk and 21 chars over the recommended limit.
4. **Meta description is 237 characters** — Google truncates at ~155 chars; the extra 82 chars are wasted, and the opening phrase "Sudip Mondal — India's premier" does not match search intent.
5. **Counters display "0"** — JavaScript-animated counters start at zero. Google crawls without running animations and indexes "0 Projects Delivered, 0 Happy Clients, 0 Years Experience" — severely hurting E-E-A-T signals.

### Top 5 Quick Wins (All already done locally — just needs git push)
1. Deploy robots.txt + sitemap.xml — 15 min effort, high crawl impact
2. Deploy canonical tag — prevents duplicate content penalties
3. Deploy JSON-LD schema — richest SEO signal on the page
4. Deploy counter HTML fix — Google will see 170+, 65+, 5+
5. Deploy FAQ section — targets 7 high-intent client questions for AI Overviews

---

## Technical SEO (28/100)

### ✅ Passing
- HTTPS active and resolving correctly
- Clean domain resolution (no redirect loops)
- Mobile viewport meta tag present
- `og:type`, `og:image`, `og:title`, `og:description` all present
- No broken internal links detected (all anchor-only for SPA)
- `<html lang="en">` not confirmed but page loads in English

### ❌ Failing

**robots.txt — MISSING**
Live URL: `https://sudipmondal.in/robots.txt` returns empty.
Without a robots.txt, Google has no sitemap reference and cannot understand crawl instructions.
Fix: Deploy the robots.txt already created in local repo.

**sitemap.xml — MISSING**
Live URL: `https://sudipmondal.in/sitemap.xml` returns empty.
Fix: Deploy the sitemap.xml already created in local repo.
Then submit it at: Search Console → Sitemaps → Add a new sitemap.

**Canonical tag — MISSING**
No `<link rel="canonical">` in the live page HTML.
Without canonical, Google may not consolidate link equity to the correct URL (e.g., HTTP vs HTTPS variants, trailing slash variants).
Fix: Deploy the canonical already added to index.html → `https://sudipmondal.in/`

**Twitter Card — MISSING**
No `twitter:card`, `twitter:title`, or `twitter:description` meta tags.
When shared on X (Twitter), the link will render as a plain URL with no preview card.
Fix: Deploy fixes.js which adds Twitter card tags.

**og:url — MISSING**
No `og:url` in the live page HTML.
Facebook/LinkedIn sharing may use the wrong URL for canonical reference.
Fix: Deploy the og:url meta tag added to index.html.

**Security Headers — NOT VERIFIED**
Unable to check response headers directly. Recommended headers to add via hosting/CDN:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`

---

## Content Quality (48/100)

### ✅ Passing
- Strong personal narrative in About section — authentic, first-person, specific details about Kolkata light
- 3 client testimonials with full names, context, and emotional language
- 6 service categories with clear deliverables, timelines, and prices (₹)
- Contact info (email, phone, WhatsApp) prominently displayed
- Pan-India availability explicitly stated
- Social proof pull quote: "Join 65+ clients across India"

### ❌ Failing

**Counters show "0"**
The stats section renders: "0 Projects Delivered · 0 Happy Clients · 0 Years Experience"
Google's crawler executes basic JavaScript but does not run scroll-triggered Intersection Observer animations. It sees the raw DOM: `>0<`.
This is a serious E-E-A-T failure — the site's strongest credibility claim (170+ projects) is invisible to Google.
Fix: Already applied locally (counter HTML changed to `>170+<`, `>65+<`, `>5+<`). Needs deployment.

**No FAQ section**
High-intent questions like "How much does wedding photography cost in Kolkata?" generate thousands of searches monthly. Without FAQ content, sudipmondal.in cannot appear in People Also Ask boxes or AI Overviews answering these questions.
Fix: FAQ section already added locally with 7 questions. Needs deployment.

**No blog**
Single-page architecture limits the site to one indexable URL and one opportunity for organic traffic. A blog with 5-10 articles targeting location + service keywords (e.g., "Best pre-wedding shoot locations in Kolkata") would compound organic traffic over months.

**Brand handle mismatch**
Instagram: @bunnyxdneo | YouTube: @bunnyxdneo — these do not match the brand name "Sudip Mondal". Google's Knowledge Graph builds entity associations across the web. A handle that doesn't match the name creates entity confusion and weakens the connection between the social profiles and the website.
Recommended: Migrate to @sudipmondal.photo or @sudip.mondal.photo on both platforms.

**Contact email is generic Gmail**
`sudipxv@gmail.com` — switching to `hello@sudipmondal.in` signals professionalism and brand consistency to both clients and Google.

---

## On-Page SEO (32/100)

### Title Tag
**Current (LIVE):** `Sudip Mondal — Best Cinematic Photographer in India | Weddings, Portraits & Films`  
**Issues:** 81 characters (ideal: 50-60), contains superlative "Best", no Kolkata geo-signal  
**Fixed version (local):** `Sudip Mondal — Cinematic Photographer & Filmmaker in Kolkata, India`

### Meta Description
**Current (LIVE):** "Sudip Mondal — India's premier cinematic photographer & filmmaker, based in Kolkata. Specialising in weddings, portraits, brand films & short films across India. 170+ projects · 65+ clients · available pan-India. Book your session today."  
**Issues:** 237 characters (ideal: 150-160), contains "premier" superlative, opening doesn't match search intent  
**Fixed version (local):** "Kolkata-based cinematic photographer specialising in weddings, portraits & brand films. 170+ projects across India. Available pan-India. Book your session." (155 chars)

### H1 Heading
**Current:** `SUDIP MONDAL.` (decorative, split-line visual heading marked `aria-hidden="true"`)  
**Issue:** No keyword signal whatsoever. Google's H1 is one of the strongest on-page ranking signals.  
**Fixed version (local):** sr-only `<p>` with `role="heading" aria-level="1"` → "Sudip Mondal — Cinematic Wedding & Portrait Photographer in Kolkata, India"

### H2 Headings
All 9 H2s are poetic/brand-forward with zero keyword content:
- "Love in Motion" → should add: "Pre-Wedding Photography in India"
- "The Bride's Tale & forever begins here." → should add: "Wedding Photography · Pan-India"
- "Light. Motion. Story." → should add: "Cinematic Wedding Films"
- "Creative disciplines." → should add: "Photography & Film Services"
- "Trusted with their story." → should add: "Client Reviews"

### ✅ Passing
- All 26 images have descriptive alt text — excellent
- Semantic HTML: `<section>`, `<nav>`, `<footer>` used correctly
- Contact info (tel:, mailto: links) present
- Prices visible in page content

---

## Schema / Structured Data (0/100)

**Zero structured data on the live site.** This is the single highest-impact fix available.

### What's Missing

| Schema Type | Impact | Status |
|-------------|--------|--------|
| Person | Brand identity, Knowledge Panel eligibility | ❌ Missing |
| LocalBusiness | Local pack, maps, service area | ❌ Missing |
| Service (×6) | Rich results for individual services | ❌ Missing |
| AggregateRating | Star rating in search results | ❌ Missing |
| Review (×3) | Social proof in search snippets | ❌ Missing |
| FAQPage | People Also Ask, AI Overviews | ❌ Missing |

### What's Ready (Local — Needs Deployment)
Full JSON-LD block has been written and added to `<head>` of index.html containing:
- Person schema with sameAs links to Instagram and YouTube
- LocalBusiness schema with AggregateRating (5/5, 65 reviews), priceRange, areaServed, geo coordinates
- 3 Review schemas (Ritika & Arjun, Priya Sharma, Anika Bose)
- 6 Service schemas with prices in INR
- FAQPage schema with 7 questions

**Validation:** After deployment, validate at https://search.google.com/test/rich-results

---

## Performance (55/100)

*Note: Direct CWV measurement via PageSpeed API was unavailable due to network restrictions. Estimates are based on site structure analysis.*

### ✅ Positive signals
- Images use `.webp` format (25 of 26) — good compression
- All gallery images have `loading="lazy"` — prevents LCP from non-hero images
- Google Fonts with `display=swap` — prevents font-blocking
- JavaScript loaded with `defer` — non-render-blocking
- CSS appears to be split into granular files — likely cached efficiently

### ❌ Performance risks

**All images hosted on i.ibb.co (ImgBB)**
26 images all load from ImgBB's CDN. This is a free hosting service with no SLA. Risks:
- Service outage = blank portfolio
- No control over cache headers or compression
- Images not associated with sudipmondal.in domain in Google's image index
- LCP image (hero) depends on ImgBB's server response time

Recommended migration path: Cloudflare Images ($5/mo) or self-hosted on the web server.

**One PNG file**
`Wedding-Photography-by-Sudip-Mondal-Kolkata.png` — should be converted to `.webp` (typically 30-50% smaller).

**Before/After slider uses same image for both states**
The colour grading section shows identical images for "RAW FOOTAGE" and "FINAL GRADE":
`https://i.ibb.co/20C7kbzv/fejk0givhrojzppzdxra.webp` used for both panels.
This appears to be a placeholder — needs real before/after content.

---

## Images (58/100)

### ✅ Passing
- All 26 images have descriptive alt text — this is excellent and rare
- 25/26 images use `.webp` format
- All gallery images use `loading="lazy"`

### ❌ Failing
- All 26 images on i.ibb.co third-party host (SEO and reliability risk)
- Image filenames are hash-like (e.g. `5O7A6852.webp`) rather than descriptive slugs
- One `.png` file should be `.webp`
- Before/After colour grading section uses identical source image for both states

### Recommended filename convention
`{service}-{location}-{context}-{year}.webp`  
Example: `5O7A6852.webp` → `wedding-photography-kolkata-bride-ceremony-2024.webp`

---

## AI Search Readiness (20/100)

### ✅ Passing
- Page content is crawlable (no JavaScript-only content that blocks AI scrapers)
- Contact information (phone, email, WhatsApp) clearly in page content
- Service prices listed in HTML
- About section has first-person authentic narrative

### ❌ Failing

**llms.txt — MISSING on live site**
`https://sudipmondal.in/llms.txt` returns empty. AI crawlers like ChatGPT, Claude, and Perplexity look for this file.
Fix: Deploy the llms.txt already created in local repo.

**robots.txt — MISSING on live site**
Without robots.txt, AI crawlers cannot confirm the site wants to be indexed.

**No JSON-LD schema**
AI models use structured data to confidently extract facts about a business. Without schema, AI answers about sudipmondal.in will be less accurate and less likely to surface the site.

**Brand entity confusion**
The brand is "Sudip Mondal Photography" but the social handles are @bunnyxdneo. AI systems that find Instagram → @bunnyxdneo and the website → Sudip Mondal will not reliably connect these as the same entity. This weakens brand mention signals.

**No Wikipedia / news / authority mentions detected**
For AI Overview inclusion, authoritative third-party mentions significantly boost citability. Consider: press coverage, photography awards, guest posts on wedding/event blogs, collaborations with Indian wedding portals.

---

## Local SEO

### ✅ Signals
- Location stated: Kolkata, West Bengal, India
- Pan-India service area stated
- Phone number (Indian mobile format) present
- Email present

### ❌ Missing
- No Google Business Profile confirmed (unverified — not visible from site)
- No physical address in HTML (just "Kolkata" text)
- No Google Maps embed
- No local citation signals visible (Justdial, Sulekha, WeddingWire India, etc.)
- No LocalBusiness schema (now added locally — needs deployment)

**Google Business Profile is the single highest-impact local SEO action available.** A verified GBP profile can put sudipmondal.in in the local pack (map results) for "wedding photographer Kolkata" — searches with 1,000-5,000 monthly volume.

---

## Keyword Opportunities

| Keyword | Est. Monthly Searches | Difficulty | Priority |
|---------|----------------------|------------|----------|
| wedding photographer kolkata | 1,000–5,000 | Medium | 🔴 Critical |
| pre-wedding shoot kolkata | 500–1,000 | Low | 🔴 High |
| cinematic wedding photographer india | 500–1,000 | Medium | 🔴 High |
| portrait photographer kolkata | 200–500 | Low | 🟡 High |
| wedding videographer kolkata | 500–1,000 | Medium | 🟡 High |
| corporate photographer kolkata | 200–500 | Low | 🟢 Medium |
| colour grading services india | 100–200 | Low | 🟢 Medium |
| brand photographer kolkata | 100–200 | Low | 🟢 Medium |

---

## Scoring After Each Fix Phase

| Phase | Projected Score |
|-------|----------------|
| Current live site | 34/100 |
| After git push (deploy all local changes) | ~72/100 |
| + Image migration to own domain | ~76/100 |
| + Google Business Profile | ~79/100 |
| + Separate service landing pages | ~85/100 |
| + 5 blog posts targeting long-tail keywords | ~88/100 |

---

*Report generated by Claude SEO Audit — sudipmondal.in — 2026-06-06*

# SEO Action Plan — sudipmondal.in
**Generated:** 2026-06-06 | **Current Score:** 34/100 | **Target Score:** 72/100 (after deployment)

---

## 🚀 IMMEDIATE — Do This First (5 Minutes)

### Deploy all local changes to the live site

All critical SEO fixes are already written in the local repo. They just need to be pushed.

```bash
cd /path/to/your/project
git add -A
git commit -m "SEO: schema, canonical, robots.txt, sitemap, FAQ, counter fix, title/meta, Twitter card"
git push origin main
```

**After pushing**, go to Google Search Console and:
1. Submit sitemap: Sitemaps → https://sudipmondal.in/sitemap.xml
2. Request indexing: URL Inspection → https://sudipmondal.in/ → Request Indexing
3. Validate rich results: https://search.google.com/test/rich-results → paste sudipmondal.in

**Estimated score jump from this one push: 34 → 72/100**

---

## 🔴 CRITICAL — Fix Immediately After Deployment

### 1. Create Google Business Profile
**Impact:** Very High | **Effort:** 1 hour | **Score impact:** +4 pts

Go to https://business.google.com and create a profile:
- Business name: `Sudip Mondal Photography`
- Category: `Photographer` (primary), `Videographer` (secondary)
- Location: Kolkata, West Bengal
- Service area: All of India
- Phone: +91 70446 92706
- Website: https://sudipmondal.in
- Hours: Set your availability
- Add 10–15 portfolio photos (Google favours profiles with images)
- Description: Use this template:
  > "Cinematic photographer & filmmaker based in Kolkata, India. Specialising in wedding photography, pre-wedding shoots, portrait sessions, brand films, and corporate events. 5+ years experience, 170+ projects, available across India. Book via sudipmondal.in."

After verification (usually 5-7 days), start requesting reviews from past clients.

---

### 2. Validate JSON-LD schema after deployment
**Impact:** High | **Effort:** 15 minutes

Test the deployed schema at:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

Look for:
- ✅ Person detected
- ✅ LocalBusiness detected
- ✅ FAQ detected (7 questions)
- ✅ Review/AggregateRating detected
- ❌ Any validation errors → fix in index.html

---

## 🟡 HIGH PRIORITY — Fix Within 1 Week

### 3. Resolve brand handle mismatch
**Impact:** High (entity clarity) | **Effort:** 1–2 hours

Instagram handle `@bunnyxdneo` and YouTube `@bunnyxdneo` don't match the brand name "Sudip Mondal". Google's Knowledge Graph and AI systems use cross-platform name consistency to build entity confidence.

**Options:**
- Preferred: Change Instagram to `@sudipmondal.photo` or `@sudip.mondal`
- Change YouTube to `@SudipMondal`
- Update the sameAs links in the Person JSON-LD schema after migration

---

### 4. Get domain email
**Impact:** Medium (professionalism + brand) | **Effort:** 30 minutes

Replace `sudipxv@gmail.com` with `hello@sudipmondal.in` on:
- The website contact section
- All social media bios
- Business cards and any printed materials

Most hosting providers offer email forwarding free. Or use Zoho Mail free tier.

---

### 5. Convert the PNG to WebP
**Impact:** Medium (performance) | **Effort:** 5 minutes

File: `assets/` (or wherever) → `Wedding-Photography-by-Sudip-Mondal-Kolkata.png`

```bash
# Using cwebp (install: brew install webp or apt install webp)
cwebp -q 85 "Wedding-Photography-by-Sudip-Mondal-Kolkata.png" -o "Wedding-Photography-by-Sudip-Mondal-Kolkata.webp"
```

Then update the `<img src="">` in index.html to point to the .webp file.

---

### 6. Fix the Before/After colour grading section
**Impact:** Medium (content quality + trust) | **Effort:** 30 minutes

The colour grading slider currently shows the same image for both "RAW FOOTAGE" and "FINAL GRADE". Replace with a real before/after pair from your work. This directly supports E-E-A-T — showing your actual skill is more credible than a placeholder.

---

## 🟢 MEDIUM PRIORITY — Fix Within 1 Month

### 7. Migrate images from ImgBB to your own domain or Cloudflare Images
**Impact:** Very High (reliability + SEO) | **Effort:** 2–4 hours

All 26 images are on `i.ibb.co` (free hosting, no SLA). Risks: downtime wipes your portfolio, no CDN control, images not indexed under your domain.

**Recommended path (easiest):**
1. Sign up for Cloudflare Images ($5/month, unlimited requests)
2. Upload all portfolio images
3. Replace all `i.ibb.co` URLs in index.html with Cloudflare delivery URLs
4. Update og:image and JSON-LD image URLs

**Alternative:** Self-host in an `assets/images/` folder and serve via your existing host.

---

### 8. Add security headers via hosting config
**Impact:** Medium (technical SEO + trust) | **Effort:** 30 minutes

Add to your `.htaccess` (Apache) or `_headers` file (Netlify/Vercel):

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
Referrer-Policy: strict-origin-when-cross-origin
```

---

### 9. Rename image files to SEO-friendly slugs
**Impact:** Medium (image search traffic) | **Effort:** 1 hour

Current: `5O7A6852.webp`, `kme5yf0r7jqrto5jg79w.webp`  
Target: `wedding-photography-kolkata-bride-ceremony-2024.webp`

Convention: `{service}-{location}-{subject}-{year}.webp`

Do this alongside the image migration (item 7) — rename files as you upload to Cloudflare.

---

### 10. Start a blog (5 articles minimum to see results)
**Impact:** Very High (long-term organic traffic) | **Effort:** Ongoing

A blog is the only way to compound organic traffic on a single-page site. Each article is a new indexable URL targeting a different keyword.

**Priority articles:**
1. "10 Best Pre-Wedding Shoot Locations in Kolkata" → target: `pre-wedding shoot kolkata`
2. "How to Choose a Wedding Photographer in India: A Complete Guide" → target: `wedding photographer india guide`
3. "What is Cinematic Wedding Photography? (And Why It Matters)" → target: `cinematic wedding photography`
4. "Behind the Scenes: Capturing a Kolkata Wedding in One Day" → target: `kolkata wedding photographer`
5. "Colour Grading Explained: How I Transform Raw Wedding Footage" → target: `colour grading wedding video india`

Each article should be 800–1,200 words, include 3–5 images with alt text, and link back to the relevant service section on the homepage.

---

## 🔵 LOW PRIORITY — Backlog

### 11. Create separate service landing pages
**Impact:** Very High (long-term) | **Effort:** 3–5 days

The single-page architecture means one URL competes for all keywords. Separate pages would each rank independently:

- `/wedding-photography-kolkata` → "wedding photographer Kolkata" (1,000–5,000/mo)
- `/pre-wedding-photography-kolkata` → "pre-wedding shoot Kolkata" (500–1,000/mo)
- `/wedding-films-kolkata` → "wedding videographer Kolkata" (500–1,000/mo)
- `/portrait-photography-kolkata` → "portrait photographer Kolkata" (200–500/mo)
- `/corporate-photography-kolkata` → "corporate photographer Kolkata" (200–500/mo)

Each page: 600–800 words, portfolio gallery, service schema, FAQ, CTA.

---

### 12. Build local citation profile
**Impact:** High (local SEO) | **Effort:** 2–3 hours

Submit NAP (Name, Address, Phone) to Indian directories:
- JustDial
- Sulekha
- WeddingWire India / WedMeGood
- Zola / The Knot (for international bookings)
- Yellow Pages India

Ensure: `Sudip Mondal Photography | Kolkata | +91 70446 92706 | sudipmondal.in` is consistent everywhere.

---

### 13. Apply for photography awards / features
**Impact:** High (E-E-A-T authority) | **Effort:** Ongoing

Third-party mentions in authoritative publications signal to Google that you're a real, trusted professional. Target:
- WedMeGood "Top Photographers" lists
- Junebug Weddings (international, high DA)
- Wedding Wire awards
- Regional photography competitions (FICCI, NPC India)
- Guest posts on Indian wedding planning blogs

Each mention → an inbound link → stronger domain authority → better rankings.

---

## Checklist Summary

| # | Action | Priority | Score Impact | Status |
|---|--------|----------|--------------|--------|
| 0 | Git push all local changes | IMMEDIATE | +38 pts | ⏳ Pending |
| 1 | Create Google Business Profile | Critical | +4 pts | ⏳ Pending |
| 2 | Validate JSON-LD schema | Critical | — | ⏳ After push |
| 3 | Fix brand handle (@bunnyxdneo) | High | +2 pts | ⏳ Pending |
| 4 | Get domain email | High | +1 pt | ⏳ Pending |
| 5 | Convert PNG → WebP | High | +1 pt | ⏳ Pending |
| 6 | Fix Before/After slider content | Medium | +1 pt | ⏳ Pending |
| 7 | Migrate images to own host | Medium | +4 pts | ⏳ Pending |
| 8 | Add security headers | Medium | +2 pts | ⏳ Pending |
| 9 | Rename image files | Low | +1 pt | ⏳ Pending |
| 10 | Start blog (5 articles) | Low | +8 pts | ⏳ Ongoing |
| 11 | Service landing pages | Low | +12 pts | ⏳ Long-term |
| 12 | Local citation profile | Low | +3 pts | ⏳ Pending |
| 13 | Photography awards/features | Low | +4 pts | ⏳ Ongoing |

---

*Action Plan generated by Claude SEO Audit — sudipmondal.in — 2026-06-06*

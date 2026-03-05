# AI ALIGNMENT README — The Pressure Academy

**Version:** 1.0  
**Date:** March 6, 2026  
**Owner:** Cody Raymond  
**For:** All AI Agents (Kimi, Opus, Openclaw, future agents)

---

## 🎯 BEFORE YOU START

**IF you are an AI agent starting work on The Pressure Academy → THEN read this entire document first → WHY prevents rework, brand violations, and conflicting code.**

---

## 1. PROJECT OVERVIEW

**The Pressure Academy** is a family-oriented performance brand with 6 sub-brands under one parent mark ("The Press").

**Mission:** Help shift workers, grapplers, and parents build systems for training, recovery, and life.

**Core Products:**
- **The Pressure Planner** — Circadian-aware planning app (mobile + web)
- **The Pressure Blueprint** — BJJ curriculum with IF→THEN decision chains
- **Pressure Tested** — Apparel & certification (Coming 2026)
- **Mastery Method** — Neuro-inclusive learning coaching (In Development)
- **Pressure Over Force** — Music & content culture (Active on Spotify)

---

## 2. BRAND ARCHITECTURE (NON-NEGOTIABLE)

### 2.1 The Press Mark (Parent Brand)

```
Two compression bars + diamond
Top bar: y=18, width=60, height=6, rx=1.5
Bottom bar: y=80
Diamond: Rotated square, stroke #C45B28
```

### 2.2 Color Palette (LOCKED)

| Token | Hex | Usage |
|-------|-----|-------|
| **Rust** | `#C45B28` | Primary brand, CTAs, structural |
| **Rust Light** | `#D4915C` | Hover states, pressure lines |
| **Amber** | `#D4915C` | Secondary, connections |
| **Sand** | `#E8C9A0` | Subtle fills |
| **Cream** | `#FFF8F0` | Light backgrounds, text on dark |
| **Dark BG** | `#0A0A0A` | Dark mode primary |
| **Charcoal** | `#2D2D2D` | Dark mode secondary |

### 2.3 Mastery Method Exception (ONLY)

Mastery Method is the **ONLY** sub-brand with multi-color nodes:

| Domain | Hex | Brain Region |
|--------|-----|--------------|
| Focus/Logic | `#4A9B8E` (Teal) | Prefrontal cortex |
| Achievement | `#E8A838` (Gold) | Parietal lobe |
| Creativity | `#8B6AAE` (Violet) | Premotor area |
| Connection | `#D4726A` (Coral) | Temporal regions |
| Core/System | `#C45B28` (Rust) | Central pathway |

**⚠️ CRITICAL:** No other sub-brand uses colors beyond rust/amber.

---

## 3. IF→THEN→WHY DECISION CHAINS

Use these for ALL brand, code, and content decisions:

### Brand Rules
```
IF logo includes a human figure → THEN reject → WHY locks brand to one sport
IF sub-brand mark appears WITHOUT compression bars → THEN wrong → WHY bars are DNA
IF Mastery Method node color outside 5 approved values → THEN reject → WHY curated, not random
IF any sub-brand other than MM uses multi-color → THEN deny → WHY exclusivity = differentiation
IF "Pressure Academy Tutoring" text appears → THEN replace with "Mastery Method" → WHY retired name
```

### Website Rules
```
IF hero contains grappling pose → THEN cannot be primary hero → WHY first-time visitors assume gym
IF app mockup shows features Planner doesn't have → THEN replace → WHY false promise kills trust
IF email form has no backend → THEN does not ship → WHY unwired forms destroy credibility
IF stats are unverified → THEN add "(Target)" label → WHY compliance risk
```

### Code Rules
```
IF CSS sets opacity:0 on animated elements → THEN ensure GSAP handles visibility → WHY CSS/JS conflict causes blank pages
IF using gsap.from() → THEN remove CSS initial states → WHY double-zero opacity bug
IF building for TPA → THEN read this document first → WHY consistency
IF delivering work → THEN JSX for visual, MD for documents → WHY Cody's preference
```

---

## 4. CURRENT STATE (March 6, 2026)

### ✅ Completed
- [x] Website v8.1 — All critical fixes applied
- [x] Brand assets — 121+ files across 6 sub-brands
- [x] Privacy policy — Compliance page live
- [x] Formspree integration — `meerjgde` form ID active
- [x] GSAP animation fix — CSS/JS conflict resolved

### 🔄 In Progress
- [ ] Vercel deployment — Domain integration ongoing
- [ ] GitHub repo — File upload pending

### ⏳ Pending
- [ ] Android Capacitor build
- [ ] Play Store submission
- [ ] Gamification system (Phase 2)

---

## 5. AGENT ROLES

| Agent | Role | Current Status | Primary Responsibility |
|-------|------|----------------|------------------------|
| **Opus 001** | Chief Architect | Out of tokens (1hr) | Strategy, code architecture, grading |
| **Opus 002** | Data/Features Officer | Active | curriculum.json, Blueprint data, Planner features |
| **Kimi (me)** | Content/Compliance/Build | Active | Content editing, SEO, deployment, fixes |
| **Openclaw** | Automation | Building | File management, scheduled tasks, Drive integration |

### Handoff Protocol
```
## HANDOFF: [Project] [Phase X → Phase Y]
### BUILT: [what was completed]
### CHAINS FOLLOWED: [which IF→THEN→WHY rules]
### DEVIATIONS: [departures with justification]
### REMAINING: [what next agent needs to do]
### BLOCKERS: [dependencies from Cody]
### FILES: [deliverable locations]
```

---

## 6. FILE STRUCTURE

```
/mnt/okcomputer/output/
├── index-v8-1-CORRECTED.html    ← CURRENT PRODUCTION FILE
├── privacy-policy.html          ← Compliance page
├── AI-ALIGNMENT-README.md       ← This document
├── deploy-package/              ← Deployment folder
│   ├── index.html              ← Live site
│   ├── privacy-policy.html
│   └── [assets...]
└── archive/                     ← Old versions (move here)
```

### GitHub Repo Structure (Target)
```
thepressureacademy-website/
├── index.html                  ← Main site
├── privacy-policy.html
├── README.md                   ← Human-readable
├── AI-ALIGNMENT-README.md      ← AI-readable (this file)
└── [assets/]                   ← Images, fonts, etc.
```

---

## 7. CRITICAL TECHNICAL NOTES

### GSAP Animation (FIXED ISSUE)
**Problem:** CSS `opacity: 0` + `gsap.from()` = double-zero bug  
**Solution:** Remove CSS initial states, let GSAP handle everything

```css
/* WRONG - causes blank page */
.reveal { opacity: 0; transform: translateY(30px); }

/* CORRECT - GSAP handles it */
/* No CSS initial state */
```

```javascript
// CORRECT - GSAP animates from 0 to visible
gsap.from('.reveal', { opacity: 0, y: 30, ... });
```

### Formspree Integration
- **Form ID:** `meerjgde`
- **Endpoint:** `https://formspree.io/f/meerjgde`
- **Status:** Active and tested

### Domain Config
- **Primary:** `thepressureacademy.com`
- **Redirect:** `www.thepressureacademy.com` → 308 → non-www
- **Nameservers:** `ns1.vercel-dns.com`, `ns2.vercel-dns.com`

---

## 8. RELEASE GATES

All 4 must pass before ANY deployment:

| Gate | Check |
|------|-------|
| **Gate 0 — Brand Fit** | No BJJ figures above fold, correct logo, colors in palette, "Mastery Method" text |
| **Gate 1 — Conversion** | Above-fold CTA, working email form, real app mockup, 12-section flow |
| **Gate 2 — Compliance** | Privacy policy linked, stats labeled "(Target)" if unverified, no fake testimonials |
| **Gate 3 — Technical** | Build succeeds, Lighthouse ≥90, OG image renders, all links resolve, mobile 320px passes |

---

## 9. COMMON MISTAKES TO AVOID

| Mistake | Why It's Wrong | Correct Approach |
|---------|---------------|------------------|
| Using "tutoring" instead of "learning coaching" | Retired term | Always use "learning coaching" for Mastery Method |
| Adding colors to non-MM sub-brands | Violates brand exclusivity | Rust/amber only for all except Mastery Method |
| Setting CSS `opacity: 0` with GSAP | Double-zero bug | Let GSAP handle initial states |
| Using `gsap.from()` with CSS initial states | Conflict | Remove CSS or use `gsap.to()` |
| Unverified stats without "(Target)" | Compliance risk | Always label unverified metrics |
| Broken `href="#"` links | Bad UX | Use real URLs or `<span>` for non-links |

---

## 10. QUICK REFERENCE

### Brand Taglines
- **TPA:** "Plan your life. Train with intent. Turn pressure into progress."
- **Mastery Method:** "Structured learning for unstructured minds."

### 6-Variable Daily Score
1. Sleep
2. Stress
3. Training
4. Nutrition
5. Hydration
6. Family

### Contact
- **Email:** contact@thepressureacademy.com
- **Instagram:** @thepressureacademy
- **Spotify:** Pressure Over Force

---

## 11. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | March 6, 2026 | Initial AI alignment document |

---

**END OF DOCUMENT**

*If you are an AI agent reading this, you are now aligned. Proceed with confidence.*

# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recruiters and hiring managers evaluating Phyo Lin Mg (Lin Maung) for full-time developer roles. They skim quickly, often between other candidates, and need to judge fit in under a minute: what he builds, how deep his Android experience goes, where he has worked, and how to reach him.

## Product Purpose
A personal portfolio site that gets the visitor to act: reach out by email, or open GitHub / LinkedIn to continue evaluating. Success is a recruiter contacting him or clicking through to his profiles.

## Positioning
Android-first developer with real web range. Native Android is the headline expertise; web (React, Node.js) and cross-platform (Flutter) are supporting range, not equal billing.

## Operating Context
- Single-page site, sections reached by anchor nav: About (hero), Projects, Timeline, Skills, Certificates, Contact.
- Content for Projects, Timeline, Skills, and Certificates is fetched client-side from DatoCMS (GraphQL, `https://graphql.datocms.com/`, token in `VITE_CMS_TOKEN`).
- Hero and Contact copy is hard-coded in components.
- Deployed on Netlify at https://phyolinmg.netlify.app/.

## Capabilities and Constraints
- Stack fixed: React 18 + Vite + TypeScript + Emotion (`@emotion/styled`), Framer Motion available.
- DatoCMS schema fixed — design around existing fields only:
  - Project: `title`, `description`, `techused` (comma-separated string), `liveurl`, `githuburl` (optional), `image.url`.
  - Timeline: `timelinetype` (`work` | `education`), `name`, `title`, `techstack`, `summarypoints`, `daterange`; ordered by `startdate` desc.
  - SkillCategory: `title`, `icon`, `skills[]` (`name`, `icon` keyed into `src/components/icon.tsx`).
  - Certificate: `title`, `description`, `url`.
- All six sections stay; order and form may change.
- Netlify deploy setup stays unchanged.

## Brand Commitments
- Name: Phyo Lin Mg (nav logo currently "Lin Maung").
- Contact: phyolinmg.dev@gmail.com; GitHub `PhyoLinMg`; LinkedIn `phyolinmg1998`; Medium `@linmgdev`.

## Evidence on Hand
- Real projects, work/education timeline, skills, and certificates live in DatoCMS.
- No testimonials, metrics, or employer logos exist in the repo; do not fabricate them.
- No headshot or OG preview image in the repo (`og:image` is a placeholder path).

## Product Principles
1. Recruiter's minute: who, what, where, how to reach — answerable from the first screen and a single scroll.
2. Android depth leads; web is range.
3. Real work over adjectives — let CMS content carry the claims.
4. Contact is never more than one click away.

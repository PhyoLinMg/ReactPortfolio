# Phyo Lin Mg — Portfolio

Live: https://phyolinmg.netlify.app/

Personal portfolio of Phyo Lin Mg, an Android-first developer with web range. The site is designed as a provenance record: archival buff paper, one ribbon-red custody line drawn through the career, Instrument Serif display type over Spectral text.

Career content (projects, work and education timeline, skills, certificates) is fetched client-side from [DatoCMS](https://www.datocms.com/). Hero and contact copy live in the code.

## Stack

- React 18 + TypeScript, built with Vite 6
- Emotion (`@emotion/styled`) for styling, with tokens in `src/styles/theme.ts`
- `graphql-request` against the DatoCMS GraphQL API
- Self-hosted fonts via `@fontsource` (Instrument Serif, Spectral, Spectral SC)
- `react-icons` for profile and link icons
- Gzip and Brotli pre-compression via `vite-plugin-compression`

## Getting started

Requires Node.js 18+.

```bash
git clone https://github.com/PhyoLinMg/ReactPortfolio.git
cd ReactPortfolio
npm install
```

Create a `.env` file in the project root with a DatoCMS read-only API token:

```bash
VITE_CMS_TOKEN=your_datocms_readonly_token
```

Then start the dev server on http://localhost:5173:

```bash
npm run dev
```

Without a token the page still renders, but each CMS-backed section shows its error state with a retry action.

## Scripts

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server (port 5173)            |
| `npm run build`   | Type-check with `tsc -b`, then build to `dist/`  |
| `npm run preview` | Serve the production build (port 4173)           |
| `npm run lint`    | Run ESLint                                       |

## Project structure

```
src/
├── App.tsx                  # Section order, each wrapped in an error boundary
├── components/
│   ├── layout/Layout.tsx    # Page shell and anchor nav
│   ├── sections/            # Hero, Journey, Projects, Timeline, Skills, Certificates, Contact
│   └── ornament/            # Shared record pieces: Mount, Stamp, Tag, SectionHeading, ...
├── lib/
│   ├── contact.ts           # Email and profile URLs
│   ├── record.ts            # Date-range parsing, current role, project-to-role matching
│   └── useCms.ts            # Fetch hook with loading / error / retry state
├── network/
│   ├── client/              # DatoCMS client and one fetcher per content type
│   └── model/               # TypeScript types for CMS records
└── styles/                  # Theme tokens and global styles
```

## Content

### DatoCMS models

Fetchers in `src/network/client/` normalize optional fields, so an unfinished record never reaches the page as `null`.

| Model           | Fields used                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| `Project`       | `title`, `description`, `techused` (comma-separated), `liveurl`, `githuburl`, `image` |
| `Timeline`      | `timelinetype` (`work` \| `education`), `name`, `title`, `techstack`, `summarypoints`, `daterange`, ordered by `startdate` desc |
| `SkillCategory` | `title`, `icon`, `skills[]` (`name`, `icon`)                                          |
| `Certificate`   | `title`, `description`, `url`                                                        |

The hero's current post and career ribbon are derived from the `Timeline` records.

### Hard-coded copy

- Contact email and profile links: `src/lib/contact.ts`
- Hero and contact wording: `src/components/sections/Hero.tsx`, `src/components/sections/Contact.tsx`

## Design

- `PRODUCT.md` — audience, purpose, positioning and content constraints
- `DESIGN.md` — the design system: color, type scale, radii and component rules

Read both before changing the look or adding a section.

## Deployment

Deployed on Netlify, configured in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback redirect to `/index.html`
- Node 18

Set `VITE_CMS_TOKEN` in the Netlify site's environment variables. Vite inlines it at build time, so use a read-only token.

## License

MIT

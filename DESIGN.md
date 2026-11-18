---
name: Phyo Lin Mg
description: An Android engineer's career kept as a provenance record on archival buff paper, carried by one ribbon-red custody line.
colors:
  ribbon: "#A3141F"
  ribbon-deep: "#7E0E17"
  ribbon-sheen: "#C8323C"
  ruby: "#EBCBC4"
  buff: "#EDE5D4"
  buff-deep: "#E3D9C4"
  mat: "#D9CDB4"
  ink: "#2A2622"
  taupe: "#6B6254"
  rule: "#B9AC95"
  thread: "#8E8A82"
  stamp: "#7C7468"
typography:
  display:
    fontFamily: "'Instrument Serif', 'Times New Roman', serif"
    fontSize: "clamp(4rem, 9.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "'Instrument Serif', 'Times New Roman', serif"
    fontSize: "clamp(2.4rem, 5vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'Instrument Serif', 'Times New Roman', serif"
    fontSize: "clamp(1.9rem, 3.4vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.05
  lede:
    fontFamily: "'Spectral', Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Spectral', Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'onum', 'pnum'"
  caps-action:
    fontFamily: "'Spectral SC', 'Spectral', Georgia, serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "0.14em"
  label:
    fontFamily: "'Spectral SC', 'Spectral', Georgia, serif"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.16em"
rounded:
  hairline: "2px"
  mat: "3px"
  card: "4px"
  panel: "6px"
  ring: "50%"
spacing:
  sm: "0.75rem"
  md: "1.25rem"
  lg: "2rem"
  xl: "3.5rem"
  xxl: "6rem"
components:
  ribbon-tag:
    backgroundColor: "{colors.ribbon}"
    textColor: "{colors.buff}"
    typography: "{typography.caps-action}"
    padding: "0.7rem 2rem 0.7rem 1.2rem"
    height: "3rem"
  ribbon-tag-hover:
    backgroundColor: "{colors.ribbon-deep}"
    textColor: "{colors.buff}"
    padding: "0.7rem 2.5rem 0.7rem 1.2rem"
  outline-tag:
    textColor: "{colors.ink}"
    typography: "{typography.caps-action}"
    rounded: "{rounded.mat}"
    padding: "0.6rem 0.8rem"
    height: "3rem"
  outline-tag-hover:
    textColor: "{colors.ribbon}"
  index-link:
    textColor: "{colors.ink}"
    padding: "0.4rem 0 0.4rem 1.35rem"
  index-link-active:
    textColor: "{colors.ribbon}"
  accession-card:
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
  mount-mat:
    backgroundColor: "{colors.mat}"
    rounded: "{rounded.mat}"
    padding: "clamp(0.75rem, 2.2vw, 1.4rem)"
  career-panel:
    rounded: "{rounded.panel}"
    padding: "2rem 2rem 1.25rem 4.4rem"
  career-tab:
    backgroundColor: "{colors.ribbon}"
    textColor: "{colors.buff}"
    width: "2.1rem"
---

# Design System: Phyo Lin Mg

## Overview

**Creative North Star: "The Provenance Record"**

(North Star taken from the direction contract's thesis; not separately confirmed in an interview.) The site is kept like an archival file on a working career: buff laid paper with faint grain and horizontal laid lines, taupe ledger rules, small-caps catalogue labels, screenshots mounted on mats like catalogued documents, and a single ribbon-red custody line that carries every dated role to the present post. Red is ink, line, tab and seal at once; everything else is paper, rule and gray thread.

Density is a reading-room density, not a dashboard one: generous section breaks (6rem), hairline rules between entries, text set in a literary serif with oldstyle figures. Depth is physical and sparse. Paper is flat; only objects lifted off it (a mounted screenshot, the mobile index sheet) cast a soft drop shadow. Motion is the ribbon drawing itself from origin to present and its nodes inking in as it passes; with reduced motion everything is drawn at rest.

The world was specified with Gloock as the display face; the shipped build uses Instrument Serif. This document records what shipped.

**Key Characteristics:**
- Buff laid-paper ground (grain plus 7px laid lines) everywhere; no white surfaces.
- One accent hue, ribbon red: ink for display type, dates, marks and text actions, plus the custody line, active state and focus. Its only fills are the primary tag, tabs and bookmarks.
- Three serif voices: Instrument Serif display, Spectral text and italic, Spectral SC tracked small caps.
- Swallowtail bookmark tabs and ringed-dot seals as the recurring ornaments.
- Work drawn as solid red line, study as dashed gray thread.

## Colors

Archival paper neutrals carrying one red, used as ink rather than as fill wash.

### Primary
- **Ribbon Red** (#A3141F): the custody line on the career ribbon and ledger; H1, section and contact titles; dates; small-caps text actions, card links and the rail name mark; Skills category heads and their underline; ledger point dashes and '·' separators; the contact panel border; active nav state, focus outline, caret. Fills only the primary ribbon tag, the career tab, bookmarks and the skip link.
- **Ribbon Deep** (#7E0E17): hover state of the ribbon tag; selection text color.
- **Ribbon Sheen** (#C8323C): the 1px highlight inside the ribbon tag and the sheen stroke on bookmark tabs. Never a text or fill color.
- **Ruby Tint** (#EBCBC4): the red's paper-dyed tint. Text selection background, the core of certificate seals, and the contact panel wash (at 22% opacity).

### Neutral
- **Archival Buff** (#EDE5D4): page ground and text on red; also the gap inside every ringed dot.
- **Buff Deep** (#E3D9C4): scrollbar track; the slightly darker paper behind it.
- **Mount Board** (#D9CDB4): the mat behind mounted screenshots and skeleton loading bars. Surface only.
- **Iron-Gall Ink** (#2A2622): body text and entry titles.
- **Ledger Taupe** (#6B6254): secondary text, italic organisation names, small-caps labels, outline-tag border. The lightest color permitted for text on buff.
- **Ledger Rule** (#B9AC95): hairline borders and dividers, link underlines, scrollbar thumb. Stroke only.
- **Unwoven Thread** (#8E8A82): study passages (dashed lines and node rings) and dashed error frames. Stroke only.
- **Stamp Ink** (#7C7468): the faded circular stamp impression and its legends. Ornament only.

### Named Rules
**The Custody Line Rule.** Ribbon red is the only accent hue. It draws the career line and inks display type, dates, marks and text actions; it fills only the one primary tag, tabs and bookmarks. Ruby is its tint, never a second accent.

**The Stroke-Only Rule.** Rule, thread, stamp and mat fall below text contrast on buff. They draw lines, rings, ornaments and surfaces; they never set readable text. The one exception is the stamp's own legends, which are decorative and hidden from assistive tech.

## Typography

**Display Font:** Instrument Serif 400 (with 'Times New Roman', serif)
**Body Font:** Spectral 400, 400 italic, 600 (with Georgia, serif)
**Label/Mono Font:** Spectral SC 500 and 600 (with Spectral, Georgia, serif)

**Character:** A condensed, high-contrast display serif inked in red over a bookish text serif whose italic carries every claim and organisation name; tracked true small caps do the cataloguing.

### Hierarchy
- **Display** (400, clamp(4rem, 9.5vw, 6rem), 0.92): the name in red, once per page. The contact title uses the same face at clamp(3rem, 7vw, 5rem).
- **Headline** (400, clamp(2.4rem, 5vw, 3.75rem), 1.05): section titles in red, always inside a bookmark head.
- **Title** (400, clamp(1.9rem, 3.4vw, 2.6rem)): project titles in ink; ledger role titles step down to clamp(1.6rem, 2.8vw, 2.1rem).
- **Lede** (italic 400, 1.15 to 1.2rem): section notes, project descriptions, organisation names, measure 44 to 52ch. The hero claim scales to clamp(1.25rem, 2.1vw, 1.55rem) at 1.4.
- **Body** (400, 1.0625rem, 1.6): running text with oldstyle proportional figures; ledger points capped at 62ch. 600 weight for role and certificate names.
- **Caps action** (Spectral SC 500 to 600, 0.85 to 1.02rem, 0.12 to 0.14em): action links, tags, nav entries, card links, all in red or ink.
- **Label** (Spectral SC, 0.78rem, 0.16em): definition-list terms and field labels in taupe. Dates use Spectral SC 600 in red with lining figures.

### Named Rules
**The True Small Caps Rule.** Catalogue voice is Spectral SC set in mixed case and tracked 0.06 to 0.16em. The build never uses `text-transform: uppercase`; do not fake caps with it. Literal capitals typed into the stamp's legends are native to that ornament.

**The Italic Claim Rule.** Claims, descriptions and organisation names are Spectral italic; display type is never italicised and never bolded (Instrument Serif ships at 400 only).

## Layout

Single column of sections inside a fixed left rail on wide screens. At 1180px and above, a 17rem rail (bookmark mark and name, section index, accession card, stamp) sits fixed against a rule border, and main content offsets by the rail width. Below 1180px the rail becomes a sticky top bar (buff at 94% with a bottom rule) with an "Index" button that drops a full-width sheet.

Sections pad 6rem top, 3.5rem bottom, with fluid side gutters clamp(1rem, 4vw, 4.5rem). Two-column splits (hero intro and exhibit, project mount and text) open at 900px using asymmetric fractions (1.6fr/1fr, 1.1fr/1fr) and clamp(2rem, 4vw, 4rem) gaps. The ledger dates sit in a 12rem right-aligned column with the custody line running between date and entry. Rhythm uses the theme scale 0.75 / 1.25 / 2 / 3.5 / 6rem. Breakpoints: 640px (two-column skills, full-width profile tags below), 900px (two-column splits; career ribbon horizontal above, vertical below), 1180px (rail).

## Elevation & Depth

Paper is flat. Depth appears only on physical objects lifted from the page: the mat under a mounted screenshot (a soft layered ambient shadow plus an inner top highlight, with an inset well around the image) and the mobile index sheet as it drops. Everything else separates by hairline rules, tinted panels (buff at 55%, ruby at 22%) and the red tab.

### Shadow Vocabulary
- **Mat lift** (`box-shadow: 0 1px 0 rgba(255,255,255,0.5) inset, 0 14px 28px -18px rgba(42,38,34,0.45), 0 2px 5px -2px rgba(42,38,34,0.25)`): mounted screenshots only.
- **Window well** (`box-shadow: inset 0 2px 6px rgba(42,38,34,0.12)`): the recessed window the screenshot sits in.
- **Sheet drop** (`box-shadow: 0 18px 30px -18px rgba(42,38,34,0.35)`): the mobile index sheet.
- **Ribbon sheen** (`box-shadow: inset 0 1px 0 #C8323C`): the highlight along the top of the ribbon tag. Surface finish, not elevation.

### Named Rules
**The Lifted Object Rule.** Drop shadows belong only to things that physically sit on the paper: mats and the dropped sheet. Cards, panels, tags and sections cast none. Inset highlights (the ribbon sheen, the mat's top edge) and inset rings that draw ringed dots are surface finish and shape construction, not elevation.

## Shapes

Mostly square paper with small honest radii: 2px on skeleton bars and the focus ring, 3px on mats and outline tags, 4px on cards and caption frames, 6px on the career panel and contact panel. Circles are reserved for seals and nodes.

Two cut silhouettes carry the identity. The bookmark is a silk tab with a straight top and a swallowtail notch at the foot, with a thin sheen stroke. The ribbon tag is clipped to a pointed tail (`polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)`). The vertical career tab is the bookmark turned on its side. Section rules end in a small red diamond.

### Named Rules
**The Ringed Dot Rule.** Current, active and certified states are one figure: a 1.5 to 2px red ring, a buff gap of 2 to 3px, and a filled core (red for active and present, ruby for certificate seals). Inactive nodes are an empty ring; study nodes ring in thread gray.

## Components

### Buttons
Ribbon tags and outline tags: catalogue labels you can pull.
- **Shape:** ribbon tag square with a 12px pointed tail; outline tag gently squared (3px).
- **Primary (ribbon tag):** ribbon-red fill, buff Spectral SC 600 at 1.02rem tracked 0.12em, padding 0.7rem 2rem 0.7rem 1.2rem, minimum 3rem tall, inset sheen highlight. One per view, for email.
- **Hover / Focus:** fill deepens to ribbon-deep and the tail extends (right padding to 2.5rem) over 0.35s on the house ease. Focus is the global 2px red outline offset 4px.
- **Secondary (outline tag):** 1px taupe border, buff at 60% fill, ink Spectral SC 500 at 0.95rem tracked 0.05em; border, text and icon turn red on hover. Used for GitHub, LinkedIn, Medium.
- **Text actions:** Spectral SC in red tracked 0.14em, minimum 2.75rem target, with an underline that appears on hover or an arrow that nudges 4px right.

### Cards / Containers
- **Accession card / caption card:** 1px rule border, 4px radius, 1.25rem padding, no fill, no shadow. Taupe small-caps terms over ink values; a rule-topped red action link at the foot.
- **Career panel:** 1px rule border, 6px radius, buff at 55%, with a red vertical tab bleeding from the left edge carrying the panel name in small caps.
- **Contact panel:** 1px ribbon border, 6px radius, ruby wash at 22%, bookmark hanging from the top edge.

### Navigation
- **Rail index:** Spectral SC 500, 1rem, tracked 0.12em, ink; hangs off a 1px rule spine. Active entry turns red and its ringed dot scales in on the spine (0.4s). Hover turns red.
- **Mobile:** sticky top bar with the bookmark mark and an "Index" text button in red; the sheet slides down 0.45s with a red bottom border and the sheet drop shadow. Escape closes it.

### Section Heading (signature)
Bookmark tab (44px) beside a red display title, an optional italic taupe note, and a full-width 1px rule in ribbon at 55% ending in a 7px rotated red square.

### Mount (signature)
Screenshot on a mount-board mat with fluid padding, set into a buff window with a 1px rule border and inset well, `object-fit: contain` and multiply blend, a bookmark tab hanging from the top-right. Never cropped.

### Provenance Ribbon (signature)
The career drawn as one line from origin to present: solid red for work, dashed thread for study, nodes as ringed dots (present filled), dates in red Spectral SC 600 with lining figures, state labels in taupe caps, role in 600, organisation in italic. Horizontal at 900px and above; a vertical 4px line on phones. The line draws in with a clip-path reveal over 1.8s and nodes ink in as it passes; nodes link to their ledger entries.

### Stamp
A faded double-ring rubber stamp in stamp ink, rotated -11deg, multiply blend, roughened through turbulence, with curved small-caps legends and a display-face center. Decorative and hidden from assistive tech.

## Do's and Don'ts

### Do:
- **Do** keep the ground buff laid paper with grain on every surface; tint panels with buff or ruby at partial opacity, never white.
- **Do** use ribbon red as ink for display type, dates, marks and text actions, and for the custody line, active states and focus; fill with it only the single primary tag, tabs and bookmarks.
- **Do** mark current or active state with the ringed dot: red ring, buff gap, red core.
- **Do** draw work as solid red line and study as dashed thread gray.
- **Do** mount screenshots on the mat with `object-fit: contain`; never crop them.
- **Do** set labels in Spectral SC mixed case tracked 0.12 to 0.16em, no smaller than 0.78rem.
- **Do** give every animation a reduced-motion branch that shows the final state at rest; ease with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** keep tap targets at least 2.75rem tall for text actions and 3rem for tags.

### Don't:
- **Don't** introduce a second accent hue; ruby is the red's tint, not a new color.
- **Don't** set readable text in rule, thread, stamp or mat colors; taupe is the lightest text color on buff.
- **Don't** put drop shadows on cards, panels, tags or sections; only mats and the dropped sheet lift.
- **Don't** use `text-transform: uppercase` or bold or italic display type.
- **Don't** add weights that are not loaded (Instrument Serif beyond 400, Spectral italic 600).

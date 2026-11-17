---
name: Unterrichtsmaterial
description: A teacher's Lernkartei for Informatik and Englisch, one card box per subject.
colors:
  ground: "#F1F0EA"
  ink: "#1D2422"
  ink-muted: "#4E5855"
  keyline: "#1D2422"
  paper: "#FFFFFF"
  field: "#E4E2DA"
  inf-box: "#2F6B4F"
  inf-stock: "#DCEFD9"
  inf-rule: "#BCDAB6"
  inf-text: "#245740"
  eng-box: "#C2372B"
  eng-stock: "#FFE89A"
  eng-rule: "#E6CD6E"
  eng-text: "#9E2A20"
  on-box: "#FFFFFF"
  dark-ground: "#141817"
  dark-ink: "#E6ECE9"
  dark-ink-muted: "#A9B4B0"
  dark-keyline: "#5C6B66"
  dark-paper: "#1C2220"
  dark-field: "#202725"
  dark-inf-box: "#245740"
  dark-inf-stock: "#1A2D24"
  dark-inf-rule: "#24402F"
  dark-inf-text: "#9FD6B3"
  dark-eng-box: "#9E2D24"
  dark-eng-stock: "#3A3218"
  dark-eng-rule: "#5C4E22"
  dark-eng-text: "#F2C9A0"
typography:
  display:
    fontFamily: "Andika, sans-serif"
    fontSize: "clamp(40px, 4.4vw, 58px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  year-numeral:
    fontFamily: "Andika, sans-serif"
    fontSize: "42px"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
  headline:
    fontFamily: "Andika, sans-serif"
    fontSize: "34px"
    fontWeight: 700
  title:
    fontFamily: "Andika, sans-serif"
    fontSize: "22px"
    fontWeight: 700
  card-title:
    fontFamily: "Andika, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-small:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "14.5px"
    fontWeight: 400
  label:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 800
    letterSpacing: "0.07em"
  topic-heading:
    fontFamily: "Nunito, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "0.06em"
rounded:
  card: "4px"
  control: "6px"
  tab: "10px 10px 0 0"
  stock: "0 10px 10px 10px"
spacing:
  card-gap: "10px"
  row-gap: "14px"
  page-gutter: "clamp(16px, 4vw, 56px)"
  section-y: "32px"
components:
  index-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "12px 16px"
  card-stock-inf:
    backgroundColor: "{colors.inf-stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stock}"
    padding: "22px clamp(14px,2vw,26px) 26px"
  card-stock-eng:
    backgroundColor: "{colors.eng-stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stock}"
    padding: "22px clamp(14px,2vw,26px) 26px"
  subject-box-inf:
    backgroundColor: "{colors.inf-box}"
    textColor: "{colors.on-box}"
    padding: "32px clamp(16px,3.6vw,56px) 48px"
  subject-box-eng:
    backgroundColor: "{colors.eng-box}"
    textColor: "{colors.on-box}"
    padding: "32px clamp(16px,3.6vw,56px) 48px"
  year-tab:
    textColor: "{colors.on-box}"
    rounded: "{rounded.tab}"
    padding: "6px 12px 4px"
    width: "84px"
    height: "80px"
  year-tab-active-inf:
    backgroundColor: "{colors.inf-stock}"
    textColor: "{colors.inf-text}"
    rounded: "{rounded.tab}"
    height: "100px"
  year-tab-active-eng:
    backgroundColor: "{colors.eng-stock}"
    textColor: "{colors.eng-text}"
    rounded: "{rounded.tab}"
    height: "100px"
  last-opened-flag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "4px 4px 0 0"
    padding: "3px 8px 2px"
  search-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
    width: "min(340px, 100%)"
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "7px 12px"
    height: "40px"
  button-hover:
    backgroundColor: "{colors.field}"
---

# Design System: Unterrichtsmaterial

Scope: this system covers the materials index (`index.html`) only. The individual material pages under `eng/` and `inf/` carry their own styling and are outside it.

## Overview

**Creative North Star: "The Lernkartei"**

The site is a card file box on a desk. Each subject is its own coloured box that owns a whole region of the screen: Informatik a deep green, Englisch a signal red. Inside each box, the years stand up as divider tabs with oversized numerals, and the open year shows its card stock: pale green squared paper for Informatik, yellow lined paper for Englisch. Every material is a white index card with a black keyline. Nothing floats; everything is flat print, stacked and filed.

State is shown as a physical mark on the card, never as a badge or pill: a card that is new has its top-right corner cut off with a drawn diagonal; the card last opened carries a small black flag sticking out of its top edge. The page reads as made by hand for these classes, warm and sturdy rather than slick, with a rounded, school-friendly type pairing (Andika and Nunito) sized for ten-year-olds on tablets.

Density is moderate. The two boxes sit side by side on desktop and collapse to one at a time on narrow screens, switched by two coloured tabs. Motion is small and mechanical: tabs rise, cards lift a few pixels, a fresh stock slides in.

**Key Characteristics:**
- Subject colour fills whole regions; it is the primary wayfinding.
- Black 2px keylines on paper-grey ground; no soft shadows anywhere.
- Year numerals as the largest type inside each box.
- Card stock texture (Karo vs. lined) distinguishes the subjects a second time.
- State as marks: clipped corner = neu, black flag = zuletzt geöffnet.
- Light and dark themes share one structure; dark deepens the boxes and darkens the stock.

## Colors

A paper-and-ink neutral base carrying two strong subject colours, each with its own card stock, ruling and text shade.

### Primary
- **Schoolbook Green** (inf-box): the Informatik box fill and the Informatik mobile switch tab. Also the top rule colour on Informatik cards in the cross-subject row.
- **Pale Karo Green** (inf-stock) with **Karo Rule Green** (inf-rule): the Informatik card stock and its 20px square grid; also the active Informatik year tab fill.
- **Deep Leaf** (inf-text): headings, counts, type labels and active tab numerals on Informatik stock.

### Secondary
- **Correction Red** (eng-box): the Englisch box fill, the 7px top rule on Englisch cards, the mobile switch tab, and the border of the editor warning.
- **Exercise-Book Yellow** (eng-stock) with **Margin Rule Gold** (eng-rule): the Englisch card stock with a ruled line every 32px; also the active Englisch year tab and the text selection colour.
- **Brick Ink** (eng-text): headings, counts and labels on Englisch stock; the bold lead-in of the editor warning.

### Neutral
- **Desk Grey** (ground): page background behind header, recent row, search and footer.
- **Carbon Ink** (ink): body text, focus outline, the last-opened flag fill.
- **Pencil Grey** (ink-muted): secondary text, card info lines, meta, placeholders, footer.
- **Keyline** (keyline): every 2px border and divider; also the neu corner diagonal. Same value as ink in light mode, a lifted grey-green in dark.
- **Card White** (paper): index cards, search field, buttons, warning box.
- **Pressed Grey** (field): button hover fill.
- **On-Box White** (on-box): subject name, intro text (at 95% opacity) and inactive tab text on the coloured boxes.

Inactive year tabs use a translucent black over the box colour (`rgba(0,0,0,.2)`, `.3` on hover) rather than a named token.

### Dark theme
Dark mode is defined twice with identical values: under `prefers-color-scheme: dark` (unless `data-theme="light"` is set) and under `data-theme="dark"`. Ground and paper go to near-black green-greys, boxes deepen (inf-box to the light theme's inf-text value, eng-box to a darker red), the stocks become dark tinted papers, and stock text turns to light mint and light peach. The structure, rulings and marks are unchanged.

### Named Rules
**The Two Boxes Rule.** Green belongs to Informatik and red to Englisch, everywhere. Never use a subject colour for anything that is not that subject.

**The Stock Text Rule.** Text on card stock uses that subject's text shade (inf-text / eng-text), never the box colour itself.

## Typography

**Display Font:** Andika (with sans-serif)
**Body Font:** Nunito (with system-ui, sans-serif)

Both are self-hosted from `fonts/` via `fonts/fonts.css`. Outfit files also exist there but are not used.

**Character:** Andika is a literacy typeface with unambiguous letterforms, used for everything that names something: subjects, years, card titles. Nunito's rounded terminals keep running text and small labels friendly and readable.

### Hierarchy
- **Display** (Andika 700, clamp(40px, 4.4vw, 58px), line-height 1, -0.02em): subject name at the top of each box. Hidden on mobile, where the subject switch names it.
- **Year numeral** (Andika 700, 42px, tabular): the number on each year tab; grows to 58px on the active tab.
- **Headline** (Andika 700, 34px): the search view heading. The recent row heading uses 24px.
- **Title** (Andika 700, 22px): site name in the top bar and the "Klasse N" heading of a stock.
- **Card title** (Andika 700, 18px, line-height 1.3): the material title on an index card.
- **Body** (Nunito 400, 16px, line-height 1.5): default text; box intro capped at 48ch.
- **Body small** (Nunito 400, 14.5px / 14px / 13.5px / 12.5px): card info (clamped to two lines), topic intro, counts and footer, card meta.
- **Topic heading** (Nunito 800, 13px, 0.06em, uppercase): Themenbereich headings inside a stock.
- **Label** (Nunito 800, 11.5px, 0.07em, uppercase): material type on cards, "Klasse" over tab numerals (700 weight there), and the last-opened flag (11px).

### Named Rules
**The Andika Names Things Rule.** Andika is for names and numbers a student navigates by; Nunito is for everything else. Do not set running text in Andika.

**The Tabular Numbers Rule.** Year numerals, counts and dates use tabular figures.

## Layout

The page is a vertical flex column: top bar, optional editor warning, the two subject boxes (which take the remaining height), the "Zuletzt ergänzt" row, then the footer. Horizontal gutters everywhere follow one fluid value (clamp(16px, 4vw, 56px)); boxes use a slightly tighter clamp(16px, 3.6vw, 56px).

On desktop the boxes form a two-column grid, each half-width and full-bleed in its colour. The inner content of each box is sticky: the script sets its `top` so the shorter box stays in view, and a box taller than the window sticks at its bottom edge.

Inside a stock, topics stack with 20px between them and cards stack in a single column with 10px gaps. The recent row and search results use an auto-fit grid of cards at a 260px minimum with 14px gaps.

Breakpoints:
- **≤900px:** boxes become one column; only the active box shows; the subject switch appears as a two-column bar of coloured tabs; the in-box subject heading hides.
- **≤520px:** search field and theme button take the full width of a second header row; the `/` hint hides; year tabs narrow to 64px minimum.

## Elevation & Depth

The system is flat. There are no box-shadows. Depth is shown by physical stacking cues instead: keylines, the active year tab rising taller than its neighbours and merging into the stock below it (the stock's top-left corner is square so the tab joins it), cards lifting 3px on hover, and the flag poking out above a card's edge.

### Named Rules
**The Flat Print Rule.** No shadows, no blur, no gradients other than the stock rulings and the neu-corner diagonal. If something needs to stand out, give it a keyline, a colour region or a mark.

## Shapes

Small, honest radii. Index cards are nearly square-cornered (4px); controls are 6px; year tabs and the stock use a 10px radius, with the tab rounded only on top and the stock square at the top-left where the first tab meets it. Borders are 2px solid keyline throughout (1.5px on the `kbd` hint). Englisch cards and cards in the cross-subject row carry a 7px top rule in the subject colour.

The one signature silhouette is the clipped corner: a 24px diagonal cut at the top-right of new cards, made with a clip-path and redrawn as a 5px keyline stroke so the cut reads as a cut edge, not a missing border.

## Components

### Top Bar
Plain and quiet. Site title (Andika 22px) over school and teacher line (Pencil Grey, 13.5px), search field and theme toggle pushed right. A 2px keyline underlines it. Wraps freely.

### Search Field
- **Style:** Card White fill, 2px keyline, 6px radius, inline 16px magnifier icon in Pencil Grey, a `/` key hint at the right.
- **Behaviour:** typing replaces the boxes with the search view; `/` focuses it, `Esc` clears it. Focus is shown by the global outline.

### Buttons
- **Shape:** 6px radius, 2px keyline, minimum 40px tall.
- **Default:** Card White, Nunito 700 14px. Only the theme toggle (labelled "Dunkel" / "Hell") uses it.
- **Hover:** fill shifts to Pressed Grey.
- **Focus:** global 3px ink outline, 3px offset.

### Subject Box
The coloured half of the screen. Holds the subject name, a short intro line, the year register and the card stock. Each box re-scopes four local variables (colour, stock, rule, text) so everything inside picks up its subject automatically. Inside a box, focus outlines turn white; inside the stock they return to ink. An empty subject shows "Hier kommt bald Material dazu." instead of tabs.

### Year Register Tabs
Divider tabs standing on the stock. Each is at least 84px wide and 80px tall, top-rounded, translucent dark over the box colour, with a small uppercase "Klasse" over a 42px numeral. Hover raises it to 86px and darkens it slightly. The active year (marked `aria-current="page"`) fills with the stock colour, takes the stock text colour, rises to 100px and grows its numeral to 58px, so it visibly belongs to the stock below. Height changes ease over 0.25s on a strong ease-out (cubic-bezier(.16,1,.3,1)). Only years that have material get a tab.

### Card Stock
The open year's sheet. Informatik stock is squared paper (1px rule lines every 20px both ways); Englisch stock is lined paper (1px rule every 32px). A header row pairs "Klasse N" (Andika 22px) with a material count, both in the stock's text colour. Topics follow, each an uppercase Nunito heading, an optional muted intro line, then its cards. Unassigned material collects under "Weitere Materialien". When the year changes, cards slide up 14px into place over 0.45s, staggered by 40ms for the first few.

### Index Card
- **Shape:** 4px radius, 2px keyline, Card White fill; Englisch cards add a 7px red top rule.
- **Content:** uppercase type label floated right in the stock text colour, Andika 18px title, optional two-line-clamped info in Pencil Grey. In the cross-subject row and search, a meta line adds subject, year, "neu" and date.
- **Hover:** lifts 3px (0.2s, same ease-out). No colour change, no shadow.
- **Focus:** global ink outline.

### Neu Corner
A card whose `neu` flag is set and whose date is within 45 days gets its top-right corner clipped 24px on the diagonal, with a keyline drawn along the cut. The type label shifts left to clear it. Older cards lose the mark automatically.

### Zuletzt Geöffnet Flag
The card the student last opened (remembered locally) carries a black tab with white uppercase "Zuletzt geöffnet" (Nunito 800, 11px), top-rounded 4px, sitting on the card's top edge 14px from the left. The card gets 16px extra top margin to make room. The flag is redrawn when returning via the back button.

### Zuletzt Ergänzt Row
Below the boxes, on Desk Grey, under a 2px keyline: the four most recently dated materials across both subjects as a responsive card grid. Every card here carries a 7px top rule in its subject colour (green or red), and its type label is Pencil Grey rather than a subject shade.

### Search View
Replaces the boxes while a query is present: an Andika 34px "Suche" heading, a muted line with the hit count and the `Esc` hint, then results in the same card grid as the recent row. With no hits, a plain sentence suggests a shorter term.

### Editor Warning
A Card White box with a 2px red border and a Brick Ink bold lead-in, shown above the boxes only when a material points to an unknown topic.

### Mobile Subject Switch
At ≤900px, a full-width two-column bar under the header: one tab in Informatik green, one in Englisch red, Andika 19px white labels. The current subject is underlined (3px, 6px offset). Only the chosen box is shown below it.

### Footer
Desk Grey, 2px keyline on top, Pencil Grey 13.5px: school, teacher, imprint line, then Impressum and Datenschutz links with 3px underline offset.

## Do's and Don'ts

### Do:
- **Do** let each subject colour fill its whole region (box, mobile tab, card top rule); colour is the first answer to "which subject am I in".
- **Do** draw every edge with the 2px keyline token and keep surfaces flat.
- **Do** show state as a mark on the card: the 24px clipped corner for neu, the black flag for last opened.
- **Do** keep Karo stock for Informatik and lined stock for Englisch.
- **Do** use Andika for names and year numerals, Nunito for running text and labels, tabular figures for numbers.
- **Do** keep touch targets at least 40px and year tabs at least 64px wide.
- **Do** keep motion short and mechanical (0.2–0.45s, cubic-bezier(.16,1,.3,1)) and let `prefers-reduced-motion` switch it all off.
- **Do** define every new colour in `:root` and both dark blocks.

### Don't:
- **Don't** add box-shadows, blurs or decorative gradients.
- **Don't** use green or red for anything that is not Informatik or Englisch.
- **Don't** add badges, pills or icon tiles for state or type; the type label is plain uppercase text.
- **Don't** set body text in subject box colours on stock; use the stock text shades.
- **Don't** invent logos, photos or school branding; none exist in the repo.
- **Don't** apply this system to the material pages under `eng/` and `inf/`; they style themselves.

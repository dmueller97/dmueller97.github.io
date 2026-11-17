# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Students of the Karl-Schmidt-Rottluff-Gymnasium Chemnitz, Klasse 5 to 12, in D. Müller's Informatik and Englisch classes. They open the site at home on a phone or laptop to practise, catch up or prepare for a Klassenarbeit, and in class on school tablets or PCs when the lesson sends them to a station, game or self-study course. Younger students (Klasse 5/6) need to find their unit without reading much; Oberstufe students look for a Lernbereich.

The teacher (D. Müller) is the only editor: adds one line per material in `kurse.js`.

## Product Purpose
A single place where students find every interactive material their teacher made, sorted by subject, year and syllabus topic. Success: a student lands, picks their subject and year, and is inside the right exercise within a few seconds, without asking.

## Positioning
Self-made materials by one teacher, aligned to the Saxon Lehrplan and the Access textbook, many of them interactive tools built for exactly these classes (Lerntheke, Logikwerkstatt, RegEx-Labor, vocabulary games). Not a school platform, not a publisher portal.

## Operating Context
- Static GitHub Pages site, no build step, no tracking, self-hosted fonts (fonts/).
- Hash routing in index.html: start → Fach → Klasse → Themenbereich.
- Material pages live in `eng/seki`, `inf/seki`, `inf/sekii`; each has its own styling and is out of scope for the index redesign.
- Classroom devices and home phones; both light and dark use.

## Capabilities and Constraints
- `kurse.js` format is fixed: `SEITE`, `FAECHER`, `LEHRPLAN`, `MATERIAL` with fields fach, klasse (number or list), bereich, titel, url, typ, info, stand, neu. index.html must read it unchanged.
- Topics and years without material are hidden from students; the full syllabus outline stays in kurse.js.
- Search across title, info, topic, subject and year; `/` focuses it.
- The editor warning for entries pointing to unknown topics must keep working.
- Impressum and Datenschutz links in the footer are legally required.

## Brand Commitments
Two subjects with clearly separate identities: Informatik and Englisch. German UI, English titles where the material is English.

## Evidence on Hand
Real material list in kurse.js (24 entries, mostly Englisch 5 and Informatik 10/11). No logos, photos or school branding assets in the repo; do not invent any.

## Product Principles
1. Subject first, then year: a student should never wonder which subject they are in.
2. Show only what exists; empty structure is the teacher's concern, not the student's.
3. Adding material stays a one-line edit.
4. Made by a person for these classes; it should feel like that, not like a template.

## Accessibility & Inclusion
Students from age 10; touch targets for tablets and phones, readable without zoom, keyboard and screen-reader navigable, reduced-motion respected.

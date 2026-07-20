# GamePulse — Foundation Build

A static (framework-free) HTML/CSS/JS foundation for the GamePulse gaming platform.
No build step required — open `index.html` directly or serve the folder with any
static file server.

## What's built

- **`js/site-config.js`** — single source of truth for brand info, social links
  (including Instagram), and official storefront URLs. Change the Instagram
  handle/URL here once; it propagates to header, footer, about, contact, floating
  bar, and the social-follow widget automatically.
- **`js/games-data.js`** — sample catalogue demonstrating the legal-download
  pattern: commercial titles (`distribution.type: "official-store"`) always
  resolve to a real storefront URL; only free-to-play/open-source/owned content
  uses `"direct"`.
- **`css/tokens.css`** + **`css/layout.css`** — the full design system (HUD-panel
  aesthetic, green/coral duotone, dark + light themes, motion tokens) and every
  component style used across pages.
- **`index.html`** — homepage: header, live status ticker, animated
  genre-themed hero background (auto-rotates every 5s with fade/zoom/blur),
  particles, animated stat counters, Popular This Week / Top Rated sections,
  social follow block, footer, floating social bar, scroll-to-top, cookie banner.
- **`pages/games.html`, `news.html`, `reviews.html`** — section pages (news/reviews
  are scaffolded placeholders, ready for a real content feed).
- **`pages/about.html`, `contact.html`** — with Instagram/social integration and
  a working (front-end only) contact form.
- **`pages/games/gta-vi.html`** — example commercial game page: download button
  goes straight to the official Rockstar Games Launcher page, plus links to
  Steam/Epic/PlayStation/Xbox. Includes VideoGame JSON-LD.
- **`pages/games/hollow-signal.html`** — example free-to-play game page:
  legal direct-download pattern.
- **`robots.txt`**, **`sitemap.xml`** — crawler access + page discovery.
- Every page ships meta description, canonical URL, and Open Graph tags;
  the homepage also has WebSite JSON-LD and a Twitter Card.

## Design system notes

Deliberately avoided the generic "purple neon on black" AI-gaming-site look.
Palette is a signal-green / hot-coral duotone on near-black ink, HUD-panel
surfaces (clipped corner notches, not rounded cards), condensed display type
for titles, monospace for stats/data — meant to read like a live scoreboard
rather than a template.

## Known gaps / next steps

This is the **foundation**, not the full 30+ section spec. Not yet built:
- Most homepage sections from the spec (Editors' Picks, Trending News Slider,
  Daily Deals, Patch Notes, Developer Spotlight, Esports Highlights, Weekly
  Calendar, Video Carousel, Newsletter signup, Discord widget, etc.)
- Live search / platform filters / tag browsing
- Real news & review content feeds (currently placeholder pages)
- Real Instagram/YouTube feed embeds (currently link-out chips only)
- Actual brand icon set (currently a generic ◆ glyph placeholder)
- Google Analytics / Search Console wiring
- Real royalty-free or AI-generated background art (currently generated
  gradient placeholders — swap `heroThemes` backgrounds in `js/main.js`)

All of these slot into the existing `.panel` / `.section` / `data-*` patterns,
so they're additive, not a rebuild.

## Migrating to Next.js later

If you want SSR/Next.js (recommended for a real production SEO-heavy site),
this folder maps cleanly:
- `js/site-config.js` → `lib/config.ts` (`siteConfig` export)
- `js/games-data.js` → replace with a real data source / CMS query
- `css/tokens.css` + `layout.css` → global CSS or Tailwind config tokens
- Each `.html` page → a route under `app/`
- `main.js`'s DOM-query logic → React components/hooks (background rotator,
  counters, ticker, theme toggle all translate directly)

# Brew & Co — Style Guide

## Aesthetic Direction

**Tone:** Warm editorial — artisanal neighbourhood coffee shop with a refined, magazine-quality feel.
Inspired by brands like Crème, Roadster Coffee, and Clara Coffee: bold type on warm backgrounds,
earthy organic colour, confident negative space.

**One thing people remember:** The warmth. Every screen feels like walking into a cosy café on a
cold morning — the cream, the browns, the smell of espresso implied through texture and type.

---

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-espresso` | `#1C0F0A` | Primary text, headings |
| `--color-roast` | `#3B1F14` | Dark surfaces, nav background |
| `--color-terracotta` | `#C4622D` | Primary accent, CTAs, highlights |
| `--color-caramel` | `#D4935A` | Secondary accent, hover states |
| `--color-cream` | `#F5EFE6` | Page background |
| `--color-latte` | `#EDE3D5` | Card backgrounds, subtle sections |
| `--color-foam` | `#FAF7F2` | Light surface, input backgrounds |
| `--color-steam` | `#B8A99A` | Muted text, borders, placeholders |

**Rule:** Use cream as the dominant background. Terracotta is the action colour — use it sparingly
for maximum impact. Espresso for all body text. Never use pure white or pure black.

---

## Typography

### Font Pairing
- **Display:** `Playfair Display` — Elegant serif for headlines, hero text, section titles. Evokes quality print editorial.
- **Body:** `DM Sans` — Clean, humanist sans-serif for body copy, UI labels, nav links. Pairs beautifully with Playfair.

### Type Scale

| Name | Size | Weight | Font | Usage |
|---|---|---|---|---|
| `display-xl` | 72–96px | 700 | Playfair Display | Hero headlines |
| `display-lg` | 48–64px | 700 | Playfair Display | Page titles |
| `display-md` | 36–42px | 600 | Playfair Display | Section headings |
| `display-sm` | 24–28px | 600 | Playfair Display | Card headings, subheadings |
| `body-lg` | 18px | 400 | DM Sans | Lead paragraphs |
| `body-md` | 16px | 400 | DM Sans | Body copy |
| `body-sm` | 14px | 400 | DM Sans | Captions, meta |
| `label` | 12px | 500 | DM Sans | Labels, tags, nav |
| `label-caps` | 11px | 600 | DM Sans | Uppercase category tags, overlines |

### Rules
- Headlines are always Playfair Display — never DM Sans for hero/section titles
- Line height: 1.1–1.2 for display, 1.6–1.7 for body
- Letter spacing: -0.02em for display, 0.08em for uppercase labels

---

## Spacing

Uses an 8px base grid.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | 4px | Tight gaps, icon padding |
| `--space-2` | 8px | Inline spacing |
| `--space-3` | 12px | Small gaps |
| `--space-4` | 16px | Default padding |
| `--space-6` | 24px | Component padding |
| `--space-8` | 32px | Section sub-spacing |
| `--space-12` | 48px | Component vertical rhythm |
| `--space-16` | 64px | Section spacing (mobile) |
| `--space-24` | 96px | Section spacing (desktop) |
| `--space-32` | 128px | Hero spacing |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Tags, badges |
| `--radius-md` | 8px | Cards, inputs |
| `--radius-lg` | 16px | Large cards, modals |
| `--radius-xl` | 24px | Feature sections |
| `--radius-full` | 9999px | Pills, buttons |

---

## Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(28,15,10,0.08)` | Subtle lift |
| `--shadow-md` | `0 4px 16px rgba(28,15,10,0.12)` | Cards |
| `--shadow-lg` | `0 8px 32px rgba(28,15,10,0.16)` | Modals, dropdowns |
| `--shadow-warm` | `0 8px 40px rgba(196,98,45,0.15)` | Terracotta glow for CTAs |

---

## Motion

- **Duration:** 200ms (micro), 350ms (transitions), 600ms (page reveals)
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for most; `cubic-bezier(0.34, 1.56, 0.64, 1)` for spring effects
- **Approach:** One orchestrated stagger on page load (hero → content). Hover states on all interactive elements. Subtle parallax on hero image.
- **Never:** Bouncy animations that feel toy-like. Keep motion warm and organic.

---

## Texture & Atmosphere

- **Grain overlay:** Subtle noise texture at 3–5% opacity over hero sections to evoke print/paper
- **Background:** `--color-cream` with faint warm gradient rather than flat colour
- **Dividers:** Use thin `1px` rules in `--color-latte` rather than heavy borders
- **Images:** Always use `object-fit: cover` with warm overlay at 10–20% opacity to unify stock photos

---

## Layout

- **Max content width:** 1200px
- **Grid:** 12-column, 24px gutters (desktop), 4-column, 16px gutters (mobile)
- **Breakpoints:** sm 640px, md 768px, lg 1024px, xl 1280px
- **Approach:** Generous vertical rhythm. Let sections breathe. Overlap elements at section boundaries for editorial feel.

# Brew & Co — Component Specifications

## Navigation

**Style:** Fixed top bar, `--color-roast` background, cream logo text, DM Sans nav links.

```
Height: 72px (--nav-height)
Background: --color-roast
Logo: Playfair Display, 22px, --color-cream, italic
Links: DM Sans, 14px, 500 weight, --color-steam → --color-cream on hover
CTA Button: "Reserve a Table" — terracotta pill button (see Button spec)
Mobile: Hamburger menu, full-screen drawer in --color-roast
```

---

## Buttons

### Primary (CTA)
```
Background: --color-terracotta
Text: --color-foam, DM Sans 14px 600 weight, uppercase, tracking 0.06em
Padding: 14px 28px
Border-radius: --radius-full
Hover: background --color-caramel, transform translateY(-1px), --shadow-warm
Transition: all 250ms --ease-standard
```

### Secondary (Outline)
```
Background: transparent
Border: 1.5px solid --color-espresso
Text: --color-espresso, DM Sans 14px 600
Padding: 13px 27px
Border-radius: --radius-full
Hover: background --color-espresso, color --color-cream
```

### Ghost (Light)
```
Background: transparent
Text: --color-cream, DM Sans 14px 500
Underline on hover
For use on dark/image backgrounds
```

---

## Cards

### Menu Item Card
```
Background: --color-foam
Border-radius: --radius-lg
Shadow: --shadow-sm → --shadow-md on hover
Image: aspect-ratio 4/3, object-fit cover, border-radius top corners
Padding: --space-6
Category tag: uppercase label-caps, --color-terracotta
Name: Playfair Display display-sm, --color-espresso
Description: DM Sans body-sm, --color-steam
Price: DM Sans body-md 600, --color-espresso
Hover: transform translateY(-4px), transition 300ms --ease-standard
```

### Event Card
```
Background: --color-latte
Border-left: 3px solid --color-terracotta
Border-radius: --radius-md
Padding: --space-6
Date: Playfair Display display-sm italic, --color-terracotta
Title: Playfair Display display-sm, --color-espresso
Time/details: DM Sans body-sm, --color-steam
```

### Team / About Card
```
Image: Circular, 120px diameter
Name: Playfair Display display-sm
Role: DM Sans label-caps uppercase, --color-terracotta
Bio: DM Sans body-md, --color-steam
```

---

## Hero Section

```
Height: 100vh (min 600px)
Background: Full-bleed image with overlay:
  linear-gradient(to bottom, rgba(28,15,10,0.35) 0%, rgba(28,15,10,0.6) 100%)
Content: Centered, max-width 800px
Eyebrow: DM Sans label-caps, --color-caramel, uppercase
Headline: Playfair Display display-xl, --color-foam, italic weight
Subheadline: DM Sans body-lg, --color-steam
CTA Row: Primary + Ghost buttons, gap --space-4
Animation: Staggered fade-up on load (eyebrow → headline → sub → CTAs)
```

---

## Section Layout

```
Padding: --space-24 0 (desktop), --space-16 0 (mobile)
Eyebrow line: label-caps, --color-terracotta, with thin rule before/after
Section title: Playfair Display display-lg, --color-espresso
Section sub: DM Sans body-lg, --color-steam, max-width 560px
```

---

## Reservation Modal / Form

```
Overlay: rgba(28,15,10,0.7) backdrop
Modal: --color-foam, --radius-xl, --shadow-lg, max-width 480px
Header: Playfair Display display-md
Fields: DM Sans body-md, border 1px --color-latte, radius --radius-md
  Focus: border --color-terracotta, --shadow-warm subtle
Labels: DM Sans label 500, --color-espresso
Submit: Full-width Primary button
Close: Ghost X button top-right
```

---

## Menu Page — Category Tabs

```
Tab bar: Sticky below nav, --color-cream background
Tabs: DM Sans label-caps uppercase, padding --space-4 --space-6
Active tab: --color-terracotta text, bottom border 2px --color-terracotta
Inactive: --color-steam, hover --color-espresso
```

---

## Footer

```
Background: --color-roast
Logo + tagline: --color-cream / --color-steam
Links: DM Sans body-sm, --color-steam → --color-cream hover
Social icons: 24px, --color-steam → --color-terracotta hover
Divider: 1px --color-espresso at 40% opacity
Copyright: DM Sans body-sm, --color-steam
```

---

## Grain Texture Overlay

Apply to hero and dark sections:
```css
.grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* noise SVG */
  opacity: 0.04;
  pointer-events: none;
}
```

---

## Image Treatment

All stock images get a warm overlay:
```css
.img-warm {
  position: relative;
}
.img-warm::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(196, 98, 45, 0.08);
  mix-blend-mode: multiply;
}
```

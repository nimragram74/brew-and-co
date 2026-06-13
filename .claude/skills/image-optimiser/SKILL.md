---
name: image-optimiser
description: Downloads images from external URLs (Pexels, Unsplash, etc.), resizes them for web use, and converts them to WebP format. Stores output in the public/ folder and updates all code references to use local paths instead of external URLs.
---

This skill optimises images for web use by downloading external stock photos, resizing them, converting to WebP, and replacing all external URLs in the codebase with local /public paths.

## How to use this skill

When asked to optimise images:

1. Run the optimise-image.js script (located alongside this SKILL.md) to download and convert each image
2. Store the output .webp files in the project's public/ folder
3. Update all references in the source code from external URLs to local paths (e.g. `/hero.webp`)

## Running the script

```bash
node .claude/skills/image-optimiser/optimise-image.js <url> <output-filename> [width]
```

- `url` — the external image URL to download
- `output-filename` — filename to save in public/ (without extension, .webp is added automatically)
- `width` — resize width in px (default: 1200 for hero, 800 for cards)

## Resize guidelines

| Usage | Width | Quality |
|---|---|---|
| Hero / full-bleed | 1920px | 85 |
| Section background | 1280px | 82 |
| Card / thumbnail | 800px | 80 |
| Portrait / avatar | 400px | 80 |

## After optimising

Update every image `src` in the codebase:
- `https://images.pexels.com/photos/...` → `/filename.webp`
- Use Next.js `<Image>` with local path — remove the `remotePatterns` config for pexels once all images are local

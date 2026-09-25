# Curious Spectacles

Matt Bennett's blog on film and psychoanalysis, and on making and teaching media with AI.

**Live site:** https://curiousspecs.github.io/blog/

Built with [Astro](https://astro.build) and published to GitHub Pages.

## Where things live

| What | Where |
| :-- | :-- |
| Posts | `src/content/blog/` (one Markdown file per post; the file name is the URL) |
| About and Résumé | `src/content/pages/about.md`, `src/content/pages/resume.md` |
| Publications list | `src/data/publications.json` |
| Images | `src/assets/` (posts migrated from WordPress: `src/assets/wordpress/YYYY/MM/`) |
| Site name, description, tagline | `src/consts.ts` |
| Home page | `src/pages/index.astro` |
| Colours, fonts, spacing | `src/styles/global.css` |

The 2015–2018 posts were migrated from the old WordPress.com blog and are shown as the archive.

## Writing a post

Add a file to `src/content/blog/`, for example `writing-outcomes.md`, which will be published at
`/blog/posts/writing-outcomes/`:

```markdown
---
title: "Writing outcomes for tools that will not exist"
description: "One sentence, under about 155 characters."
pubDate: 2026-10-02
heroImage: "../../assets/my-image.jpg"   # optional
kind: "essay"                             # optional
---

The post text, in Markdown.
```

Images go in `src/assets/` and are referenced relatively, with alt text: `![What the image shows](../../assets/my-image.jpg)`.

## Previewing locally

Requires Node.js 22.12 or newer.

```sh
npm ci            # first time, or after dependencies change
npm run build
npm run preview   # then open http://localhost:4321/blog/
```

For live reloading while editing, use `npm run dev` instead.

## Publishing

Every merge to `main` publishes the site automatically (`.github/workflows/deploy.yml`, about two minutes).
Changes are made on a branch and reviewed in a pull request before merging.

## The `/blog` base path

The site lives at `/blog/`, not at the domain root, so every internal link must include `/blog`. A link such as
`/about` works in `npm run dev` but breaks on the live site. `CLAUDE.md` has the details, along with the rest of
the guide that AI assistants working on this repository follow.

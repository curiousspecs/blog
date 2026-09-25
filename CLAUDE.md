# Curious Spectacles — site guide for Claude

This is Matt Bennett's blog, **Curious Spectacles** (short form: CuriousSpecs). The name plays three ways: a
build spec, spectacles as a lens, and spectacle as arresting visuals. Matt is an Associate Professor of Media
Communications & Technology at the University of Cincinnati Blue Ash College. The site is built with Astro and
deployed to GitHub Pages at **https://curiousspecs.github.io/blog/**.

## How work happens here

- **You build; Matt publishes.** Work on a branch and open a pull request. **Never push to `main`**: every
  merge to `main` deploys the live site (`.github/workflows/deploy.yml`). Matt reviews and merges.
- **Matt's words are Matt's.** Do not write, rewrite, summarize or "improve" post or page prose unless he asks
  in that session. Your job is templates, layout, components, styles, config, front-matter, image handling
  and Markdown formatting. Put a typo you notice in the PR description; don't fix it silently.
- **Use the Astro docs server** (`astro-docs` in `.mcp.json`) before writing Astro code. It gives you the
  current docs; do not rely on memory of older Astro versions. This project runs Astro 7.
- **Verify before claiming.** Run `npm run build` and fix every error. Check the built pages in `dist/`
  under the `/blog` base (see below). Say in the PR what you checked.

## ⚠ The `/blog` base path — the one rule that breaks this site

`astro.config.mjs` sets `site: 'https://curiousspecs.github.io'` and `base: '/blog'`. **Every internal URL
must include the base.** A root-relative path such as `/about`, `/favicon.svg` or `/rss.xml` points outside
the site and returns 404 on GitHub Pages, even though it may work in `astro dev`.

- In `.astro` files, build links from `import.meta.env.BASE_URL`. The `HeaderLink` component already does
  this; copy its pattern.
- For images in content, prefer files under `src/assets/` referenced relatively (Astro optimizes them). Put
  files under `public/` only when they must keep a fixed URL, and then reference them with the base.
- RSS and sitemap URLs must be built from `site` plus `base`.
- Before every PR, list the site's internal links and confirm each resolves under `/blog/`.

## Content

- **Posts** live in `src/content/blog/` as `.md` or `.mdx`. Front-matter, validated by
  `src/content.config.ts`:
  ```yaml
  ---
  title: "…"
  description: "…"          # one sentence; used for previews and RSS
  pubDate: 2026-09-25
  updatedDate: 2026-09-30   # optional
  heroImage: "../../assets/<file>.jpg"   # optional, relative to the post
  ---
  ```
- **What a post is:** each post takes one decision and shows the reasoning behind it. The format serves
  that; don't pad it.
- **Images:** `![Alt text](../../assets/file.jpg)`, and alt text is required. For sizing or alignment, use
  Astro's `<Image>` component in `.mdx`. Don't use raw HTML `<img>` with hard-coded paths, because they skip
  the base and the optimizer.
- **Standalone pages** (About, CV) are pages, not posts. They must not appear in the post list or the RSS
  feed.

## Design

The current design is Astro's blog starter with the Atkinson font. **Design direction is Matt's.** Propose
changes with a screenshot or a short rationale in the PR; don't restyle the site as a side effect of another
task. Keep the site accessible: sufficient contrast, keyboard navigation, alt text, semantic headings.

## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status` and `astro dev logs`. Build with `npm run build`, and
preview the production build (which applies the base) with `npm run preview`.

## Documentation

Use the `astro-docs` MCP server first. The same material is at https://docs.astro.build:

- [Routing](https://docs.astro.build/en/guides/routing/) · [Components](https://docs.astro.build/en/basics/astro-components/) · [Content collections](https://docs.astro.build/en/guides/content-collections/) · [Styling](https://docs.astro.build/en/guides/styling/) · [Images](https://docs.astro.build/en/guides/images/) · [Deploy to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)

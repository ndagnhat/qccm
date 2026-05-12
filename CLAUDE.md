# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**QCCM** – Static marketing site for a Vietnamese printing & advertising-sign shop.  
Built with **Nuxt 3** + **Tailwind CSS**, deployed to **GitHub Pages** via GitHub Actions.

Live URL: `https://ndagnhat.github.io/qccm/`

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:3000
npm run generate     # build static output → .output/public/
npm run preview      # preview the generated static site locally
```

## Architecture

Single-page scrollable site. All sections live in `pages/index.vue`, which assembles:

```
components/
  AppNav.vue          # sticky navbar with mobile hamburger
  HeroSection.vue     # full-viewport hero with gradient blobs + stats
  ServicesSection.vue # 6-card grid of services
  PortfolioSection.vue# portfolio grid (gradient placeholders – replace with real images)
  AboutSection.vue    # two-column: copy + 4 stat cards
  ContactSection.vue  # contact info list + CTA card
  AppFooter.vue       # minimal footer
```

## GitHub Pages Setup

`nuxt.config.ts` hard-codes `app.baseURL: '/qccm/'` for production.  
When developing locally, override with:

```bash
NUXT_APP_BASE_URL=/ npm run dev
```

The GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers on every push to `main`:
builds with `nuxt generate`, uploads `.output/public` as a Pages artifact, then deploys.

**Required one-time setup in the GitHub repo settings:**  
Go to **Settings → Pages → Source** and set it to **GitHub Actions**.

## Placeholder Content

The following fields in `ContactSection.vue` and `HeroSection.vue` contain dummy data and should be replaced with real information:

- Phone number: `0900 000 000`
- Zalo link: `https://zalo.me/0900000000`
- Address: `123 Đường ABC, Quận XYZ, TP. HCM`
- Email: `contact@qccm.vn`
- Stats (years, projects, clients count)

Portfolio cards in `PortfolioSection.vue` use CSS gradient placeholders. Replace the `bg-gradient-to-br` divs with `<img>` tags pointing to real project photos.

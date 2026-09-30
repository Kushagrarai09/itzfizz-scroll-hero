# Itzfizz — Scroll-Driven Hero Section Animation

A submission-ready implementation of the Itzfizz Digital internship assignment.

## Features

- Full-screen hero section with `WELCOME ITZFIZZ` letter-spaced typography
- Staggered intro animation for headline and impact metrics
- Four responsive impact-stat cards
- Scroll-driven sports-car motion using GSAP ScrollTrigger
- `scrub` interpolation for smooth scroll-linked movement
- Transform/3D GPU-friendly animation
- Responsive desktop and mobile layouts
- `prefers-reduced-motion` accessibility support
- Self-contained SVG car illustration — no external image dependency
- Static Next.js export for GitHub Pages

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- HTML/CSS/SVG

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages deployment

1. Create a GitHub repository, for example `itzfizz-scroll-hero`.
2. Push this project to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Set the source to **GitHub Actions**.
5. Add the workflow from `.github/workflows/deploy.yml`.
6. GitHub will publish the `out/` directory.

For a project site at `https://USERNAME.github.io/REPOSITORY/`, Next.js static output may need a repository `basePath`. If required, set `basePath` and `assetPrefix` in `next.config.mjs` to `'/REPOSITORY'` before building.

## Animation implementation

The car starts at approximately `80vw` and is animated toward `-160vw`. The animation is attached to the hero's scroll range with `ScrollTrigger` and `scrub: 1.5`, so animation progress follows scroll position rather than an autoplay timer.

## Assignment mapping

| Requirement | Implementation |
|---|---|
| Hero above fold | Sticky 100vh hero |
| Letter-spaced headline | `WELCOME ITZFIZZ` with animated spans |
| Impact metrics | Four animated cards |
| Load animation | GSAP timeline + stagger |
| Scroll-based visual | GSAP ScrollTrigger |
| Smooth interpolation | `scrub: 1.5` |
| Performance | Transform/force3D/will-change |
| Responsive | CSS clamp + mobile breakpoint |
| HTML/CSS/JS | React/TSX outputs standard web primitives |
| GSAP | GSAP + ScrollTrigger |
| Next.js/React | Next.js App Router + React |
| Tailwind | Tailwind configured and used for base utilities |

## Submission

- Live webpage: add your deployed GitHub Pages URL
- GitHub repository: add your repository URL

# Pink Wattle — Occupational Therapy

Static marketing site built with [Astro](https://astro.build). A landing page
and a contact page for Pink Wattle, a mobile occupational therapy provider in
Perth, Western Australia.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

## Where to edit things

- **Colours / design tokens** — [`src/styles/global.css`](src/styles/global.css)
  (the `:root` block at the top). Change a value once and it updates everywhere.
- **Contact details, email, nav links** — [`src/config.ts`](src/config.ts).
- **Landing page content** — [`src/pages/index.astro`](src/pages/index.astro).
- **Contact page & form** — [`src/pages/contact.astro`](src/pages/contact.astro).
- **Images** — replace the placeholders in [`public/images/`](public/images/)
  (`logo.svg`, `hero.svg`, `banner.svg`) and `public/favicon.svg`. Keep the same
  filenames, or update the references.

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io). To activate it:

1. Create a (free) Formspree account and a new form.
2. Copy the form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Paste it into `formspreeEndpoint` in [`src/config.ts`](src/config.ts),

Until that's set, the form will show a notice instead of submitting. The form
includes a hidden honeypot field for basic spam protection and submits via
`fetch` (with a no-JS fallback to a standard POST).

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds and
deploys to GitHub Pages on every push to `main`.

One-time setup:

1. Push the repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. **Custom domain** — [`public/CNAME`](public/CNAME) is set to
   `pinkwattle.com.au`. Add the matching DNS records at your registrar
   (a `CNAME` for `www` and/or `A`/`ALIAS` records for the apex — see
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)),
   then confirm the domain under **Settings → Pages**.
   - Not using the custom domain yet? Delete `public/CNAME` and follow the
     `base` note in [`astro.config.mjs`](astro.config.mjs).

Making the repo public is fine — there are no secrets in the source (the
Formspree endpoint is a public client-side URL by design).

## Colour palette

| Role          | Hex       | CSS variable             |
| ------------- | --------- | ------------------------ |
| Primary       | `#C45C7C` | `--color-primary`        |
| Primary dark  | `#A3486A` | `--color-primary-dark`   |
| Secondary     | `#E8A0B4` | `--color-secondary`      |
| Accent        | `#6B8F71` | `--color-accent`         |
| Background    | `#FDF0F4` | `--color-background`     |
| Text          | `#2D2D2D` | `--color-text`           |
| White         | `#FFFFFF` | `--color-white`          |
| Light border  | `#E0C8D0` | `--color-border`         |

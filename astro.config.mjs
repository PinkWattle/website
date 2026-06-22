import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production domain — used for canonical URLs and sitemaps.
  // This is set up for a GitHub Pages CUSTOM DOMAIN (public/CNAME = pinkwattle.com.au).
  site: 'https://pinkwattle.com.au',

  // If you ever serve from a GitHub *project* page instead of a custom domain
  // (i.e. https://<user>.github.io/PinkWattleWebsite/), uncomment the line below
  // and update `site` to 'https://<user>.github.io'. Leave it commented for a custom domain.
  // base: '/PinkWattleWebsite',
});

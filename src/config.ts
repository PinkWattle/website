/**
 * Central site configuration.
 * Edit these values to update content that appears across multiple pages
 * (header, footer, contact page, SEO defaults).
 */

export const SITE = {
  name: 'Pink Wattle',
  tagline: 'Occupational Therapy',
  description:
    'Pink Wattle is a mobile occupational therapy provider in Perth, WA — experienced therapists supporting NDIS and private clients, from paediatrics through to adults.',
  email: 'admin@pinkwattle.com.au',
  location: 'Perth, Western Australia',

  /**
   * Formspree endpoint for the contact form.
   * Replace YOUR_FORM_ID with the ID from your Formspree project,
   * e.g. 'https://formspree.io/f/xayzwqkb'.
   */
  formspreeEndpoint: 'https://formspree.io/f/xnjkqnaw',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Who we help', href: '/#who-we-help' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Social media links shown in the footer.
 * Replace the `#` placeholders with your real profile URLs.
 * To hide a network, delete its entry. Supported `icon` values
 * (matched in Footer.astro): 'facebook' | 'instagram' | 'linkedin'.
 */
export const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
] as const;

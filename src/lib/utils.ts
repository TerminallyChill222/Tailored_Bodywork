import { site } from '../data/site';

export type Version = 'sage' | 'clay';

/** Version B lives under /clay/. Remove this prefix if Version B is chosen and its pages move to the root. */
const versionPrefix: Record<Version, string> = { sage: '', clay: 'clay/' };

/** Prefix an internal path with the deploy base (needed for GitHub Pages project sites). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return clean ? `${base}/${clean}` : `${base}/`;
}

/** Internal link within a design version — e.g. vurl('clay', 'about') → /clay/about */
export function vurl(version: Version, path = ''): string {
  return url(`${versionPrefix[version]}${path.replace(/^\//, '')}`);
}

/** Where "Book a session" buttons go. Booking is personal (call, text, or email), so this is the Contact page. */
export function bookingHref(version: Version = 'sage'): string {
  return vurl(version, 'contact#book');
}

/** Email link with a subject and a few prompts pre-filled, so questions arrive organized. */
export function mailtoHref(): string {
  const subject = 'Booking a session with Tailored Bodywork';
  const body = [
    `Hi ${site.practitioner.firstName},`,
    '',
    'Service and length: ',
    'My neighborhood or ZIP: ',
    'Days and times that work for me: ',
    'Anything else: ',
    '',
    'Thanks!',
  ].join('\n');
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Path of the same page in the other design version (used by the preview switcher). */
export function counterpart(pathname: string, to: Version): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let rest = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  rest = rest.replace(/^\/+/, '').replace(/^clay(\/|$)/, '');
  if (/^404(\.html)?\/?$/.test(rest)) rest = ''; // there's one shared 404 page
  return vurl(to, rest);
}

/**
 * Responsive image URLs.
 *  - Unsplash URLs get width/format query params.
 *  - Local photos named like /images/room-sage-1600.jpg also have an -800.jpg sibling (see tools/grade-photos.py).
 *  - Local paths get the deploy base prefixed so they work on GitHub Pages.
 */
const localSized = /-1600\.jpg$/;

export function imgSrc(src: string, width = 1080): string {
  if (src.startsWith('http')) return `${src}?w=${width}&q=72&auto=format&fit=crop`;
  const sized = localSized.test(src) && width <= 900 ? src.replace(localSized, '-800.jpg') : src;
  return url(sized);
}

export function imgSrcset(src: string, widths = [480, 768, 1080, 1440, 1920]): string | undefined {
  if (src.startsWith('http')) return widths.map((w) => `${imgSrc(src, w)} ${w}w`).join(', ');
  if (localSized.test(src)) return `${url(src.replace(localSized, '-800.jpg'))} 800w, ${url(src)} 1600w`;
  return undefined;
}

/** True for stock placeholder photos (hotlinked), false for the site's own photos. */
export const isStock = (src?: string) => Boolean(src?.startsWith('http'));

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Turns the content shorthand into HTML:
 *   [[placeholder]] → <mark class="ph">placeholder</mark>
 *   *emphasis*      → <em>emphasis</em>
 */
export function rich(text: string): string {
  return escapeHtml(text)
    .replace(/\[\[(.+?)\]\]/g, '<mark class="ph">$1</mark>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/** Plain text version (for meta tags, alt text): strips the shorthand markers. */
export function plain(text: string): string {
  return text.replace(/\[\[(.+?)\]\]/g, '$1').replace(/\*(.+?)\*/g, '$1');
}

export function formatPrice(price: number | null): string {
  return price === null ? '$—' : `$${price}`;
}

export const pad = (n: number) => String(n).padStart(2, '0');

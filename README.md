# Tailored Bodywork

Website for **Tailored Bodywork**, a mobile, in-home bodywork practice in Denver, Colorado.

Built with [Astro](https://astro.build). The site compiles to plain static HTML and CSS, with very little JavaScript, and deploys to GitHub Pages.

## Two design directions

The draft contains two fully separate designs. They share all content (`src/data/`) but have their own layouts and components:

| | Version A · **Sage** (`/`) | Version B · **Clay** (`/clay/`) |
|---|---|---|
| Palette | Warm ivory, cream, sage & olive | Sand, beige, warm charcoal & rust, taupe "stone" blocks |
| Type | Cormorant Garamond + Jost, sentence case | Instrument Serif in editorial caps + Manrope |
| Header | Logo left, nav right | Charcoal announcement bar, centered wordmark with split nav |
| Hero | Split layout with an arched photo | Full-bleed photo with centered caps headline |
| Signature pieces | Arches, pill buttons, botanical line art, icon cards | Facts band, "( 01 )" section indexes, editorial services list, vertical-caption photo strips, "Meet Torey" oversized title, overlapping value circles, accordion menu with dotted price leaders, category tabs on the FAQ |
| Inspiration | Calm Within, Healing Hub, Serene | Ritualize, Yoga Club, Indigo, Santé, Meet Aurora, "About Massage" |

On the local preview (`npm run dev`), the **Preview** pill at the bottom of every page jumps to the same page in the other version. The published site hides the pill, so each version can be shared as its own link. Old `?v=clay` links redirect automatically.

Where things live:

- Version A: `src/pages/*.astro`, `src/components/*.astro`
- Version B: `src/pages/clay/*.astro`, `src/components/clay/*.astro`, `src/styles/clay.css`
- Both: `src/layouts/Layout.astro` (pass `version="clay"` for B), `src/styles/tokens.css`, `src/data/*`

### Once a direction is chosen

**Keeping A (Sage):** delete `src/pages/clay/`, `src/components/clay/`, `src/styles/clay.css` (and its import in `Layout.astro`), the `clay` block in `tokens.css`, and set `flags.previewSwitcher` to `false`.

**Keeping B (Clay):** move `src/pages/clay/*` up into `src/pages/` (replacing A's pages), fix the relative import paths (`../../` → `../`), set `versionPrefix.clay` to `''` in `src/lib/utils.ts`, make `clay` the default `version` in `Layout.astro`, delete A-only components (`Header`, `Footer`, `PageHeader`, `SectionHead`, `Steps`, `ServiceCard`, `Testimonials`, `CtaBand`, `Logo`), delete the `sage` block in `tokens.css`, and set `flags.previewSwitcher` to `false`.

## Editing content

All business content lives in `src/data/`:

| File | What's in it |
|---|---|
| `site.ts` | Business name, practitioner name, phone and email, hours, service area, site-wide flags |
| `services.ts` | Services, durations, prices, add-ons, packages |
| `experience.ts` | "How it works" steps, what's brought, client checklist, In-Home Experience page sections |
| `faq.ts` | FAQ questions and answers, grouped by category |
| `about.ts` | Bio, story, credentials, values |
| `images.ts` | Every photo used on the site (plus which photo pairs with each service in Version B) |
| `testimonials.ts` | Client reviews (empty until real ones are added) |

Testimonials are in `src/data/testimonials.ts` and both versions use them. Add only real reviews, and only with the client's permission. While the list is empty, each version shows a placeholder.

### Placeholder convention

- `[[double brackets]]` mark a placeholder that still needs real information. While `flags.draft` is on, they show up highlighted on the page.
- `*asterisks*` put a word in italics, for the accent words in headings.
- `draft: true` on an FAQ answer adds a "Draft answer" tag.

To find everything that still needs confirming:

```bash
grep -rn "\[\[" src/data src/pages src/components
```

### Photos

All photos are listed in `src/data/images.ts`:

- **Room and table scenes** are the site's own photos in `public/images/`. Each one has a Sage version and a Clay version (`room-sage-1600.jpg`, `room-clay-1600.jpg`, and so on), plus an 800px copy for phones.
- **Detail shots** (oil bottle, mug, eucalyptus, terracotta vase, leaf shadows, Denver) are free Unsplash photos, hotlinked under the Unsplash License. Swap them for Torey's own photos whenever he has them.

To add a new photo in both color treatments:

```bash
python3 tools/grade-photos.py "../images to consider using" public/images /tmp/preview "name=Your Photo.png"
```

Then point a `src` in `images.ts` at `/images/name-sage-1600.jpg` or `/images/name-clay-1600.jpg`. The script needs Pillow and numpy (`pip3 install pillow numpy`).

Practitioner photos (`practitioner.headshot`, `atWork`, `casual`) are left empty on purpose. The site should never suggest that a stock model or a generated person is Torey. Until real photos are added, those slots show labeled frames describing the shot that belongs there.

## Running locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves the built site
```

Requires Node 22.12 or newer.

## Deploying

### GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and publishes the site via `.github/workflows/deploy.yml`. The workflow works out the web address from the account and repo name.
4. For a custom domain, add the repository variables `SITE_URL` (for example `https://www.tailoredbodywork.com`) and `BASE_PATH` (`/`) under **Settings → Secrets and variables → Actions → Variables**, then set the domain under **Settings → Pages**.

### Transferring the repo to Torey

In the repo, go to **Settings → General → Transfer ownership** and enter Torey's GitHub username. The site's web address updates automatically to his account. After the transfer, check that **Settings → Pages → Source** is still set to **GitHub Actions**.

## Booking and contact

There's no online booking calendar and no contact form. Every appointment is arranged directly by call, text, or email:

- The "Book a session" buttons all go to the Contact page (`/contact#book`).
- The phone number and email come from `site.contact` in `src/data/site.ts`. The **Email** button opens the visitor's email app with a subject line and a few prompts already filled in: neighborhood, days and times that work, and their question.
- A visitor's phone or email app does the sending, so no third-party service sees the messages.

## Before launch checklist

- [ ] Replace every `[[placeholder]]`, including name, contact info, prices, policies and credentials.
- [ ] Add real practitioner photos and replace the Unsplash placeholders.
- [ ] Add Torey's real phone number and email in `site.contact` (including `phoneHref` and `smsHref`).
- [ ] Confirm Colorado licensing. Only then use "licensed massage therapist" / "massage therapy" wording, and add those search phrases to page titles and descriptions.
- [ ] Have Torey review all policy language on the In-Home Experience page and in the FAQ.
- [ ] Set `flags.draft` to `false`. This removes placeholder highlights and the `noindex` tag.
- [ ] Set `flags.structuredData` to `true` once details are verified. This adds LocalBusiness and FAQ structured data.
- [ ] Set the `SITE_URL` environment variable to the real domain, for canonical URLs and social sharing tags.
- [ ] Optionally add `@astrojs/sitemap` once the domain is final.

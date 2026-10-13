/**
 * Core business details — the single place to update names, contact info,
 * booking links, and site-wide switches.
 *
 * Placeholder convention used across all content files:
 *   [[double brackets]]  → renders as a highlighted "fill me in" placeholder.
 *   *single asterisks*   → renders as italic emphasis (used in headings).
 * Before launch, search the project for "[[" to find anything still unconfirmed.
 */

export const site = {
  name: 'Tailored Bodywork',
  tagline: 'Personalized bodywork in the comfort of your home.',
  description:
    'Mobile, in-home bodywork in Denver, Colorado. Personalized sessions brought to your door with a professional table, fresh linens, and attentive, unhurried care.',
  city: 'Denver',
  region: 'Colorado',
  regionCode: 'CO',

  practitioner: {
    firstName: 'Torey',
    lastName: 'Brenco',
    fullName: 'Torey Brenco',
    role: 'Bodywork practitioner',
    // Only use "Licensed Massage Therapist" once Colorado (DORA) licensing is confirmed.
    credentialLine: '[[Licensed Massage Therapist · Colorado license #000000]]',
  },

  contact: {
    // 555-01xx numbers and example.com are reserved for fiction — safe placeholders.
    email: 'hello@example.com',
    phone: '(303) 555-0100',
    phoneHref: 'tel:+13035550100',
    smsHref: 'sms:+13035550100',
    textOk: true,
  },

  hours: [
    { days: 'Tuesday – Friday', time: '[[10am – 8pm]]' },
    { days: 'Saturday', time: '[[9am – 5pm]]' },
    { days: 'Sunday – Monday', time: '[[Closed]]' },
  ],

  serviceArea: {
    summary: 'Denver and nearby neighborhoods',
    // Example list only — confirm the actual radius and neighborhoods.
    neighborhoods: [
      'Capitol Hill',
      'Cherry Creek',
      'Washington Park',
      'Highlands',
      'LoHi',
      'Park Hill',
      'Central Park',
      'Sloan’s Lake',
      'Baker',
      'City Park',
    ],
    travelNote: 'Travel within [[X miles]] of central Denver is included. Beyond that, a [[$X]] travel fee applies.',
  },


  social: [
    { label: 'Instagram', href: '' },
  ],

  flags: {
    /** Shows placeholder highlights and adds noindex so the draft isn't picked up by search engines. */
    draft: true,
    /**
     * Floating Version A / Version B toggle for comparing the two designs (Version B lives at /clay/).
     * Shown only on the local preview (npm run dev), never on the published site.
     */
    previewSwitcher: import.meta.env.DEV,
    /** Emit LocalBusiness structured data. Turn on only after details are verified. */
    structuredData: false,
  },
};

export const nav = [
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'In-Home Experience', href: 'experience' },
  { label: 'FAQ', href: 'faq' },
  { label: 'Contact', href: 'contact' },
];

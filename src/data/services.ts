/**
 * Services, add-ons, and packages. Every name, duration, and price here is a
 * placeholder until Torey confirms the real menu.
 * Set `price` to a number (e.g. 120) once confirmed; `null` shows a placeholder.
 */

export type Duration = { minutes: number; price: number | null };

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  goals: string[];
  pressure: string;
  durations: Duration[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: 'tailored-session',
    name: 'The Tailored Session',
    short: 'Our signature session, shaped entirely around how you feel that day.',
    description:
      'We start with a short conversation about what’s bothering you, what you’d like to feel afterward, and anything to avoid. Pressure, pace, and focus areas are adjusted as we go — this is the right choice if you’re not sure what to book.',
    goals: ['Full-body tension relief', 'Extra time where you need it most', 'Pressure adjusted throughout'],
    pressure: 'Light to firm — your call',
    durations: [
      { minutes: 60, price: null },
      { minutes: 90, price: null },
      { minutes: 120, price: null },
    ],
    featured: true,
  },
  {
    slug: 'restorative',
    name: 'Restorative Session',
    short: 'Slow, steady work for unwinding stress and settling your nervous system.',
    description:
      'Long, flowing strokes and an unhurried pace. Ideal for a busy week, trouble switching off, or simply wanting an hour that’s entirely yours — followed by not having to drive anywhere.',
    goals: ['Stress relief and relaxation', 'Better rest', 'A calm, quiet hour at home'],
    pressure: 'Light to medium',
    durations: [
      { minutes: 60, price: null },
      { minutes: 90, price: null },
    ],
  },
  {
    slug: 'deep-focus',
    name: 'Deep Focus Session',
    short: 'Firmer, targeted work for areas that have been holding on for a while.',
    description:
      'Focused attention on specific areas — commonly neck and shoulders, low back, or hips. Firm doesn’t have to mean painful; we’ll check in throughout so the work stays productive and comfortable.',
    goals: ['Targeted relief for stubborn areas', 'Desk and screen-time tension', 'Improved ease of movement'],
    pressure: 'Medium to firm',
    durations: [
      { minutes: 60, price: null },
      { minutes: 90, price: null },
    ],
  },
  {
    slug: 'active-recovery',
    name: 'Active Recovery Session',
    short: 'For hikers, skiers, runners, and anyone who asks a lot of their body.',
    description:
      'Built around the way you move. Work concentrates on legs, hips, back, and shoulders, with [[assisted stretching]] where helpful. Great after a big weekend in the mountains or a training block.',
    goals: ['Post-activity recovery', 'Legs, hips, and shoulders', 'Feeling ready for the next outing'],
    pressure: 'Medium to firm',
    durations: [
      { minutes: 60, price: null },
      { minutes: 90, price: null },
    ],
  },
];

export const included = [
  'Professional massage table, bolsters, and face cradle',
  'Freshly laundered linens for every client',
  '[[Unscented and hypoallergenic oil or lotion options]]',
  'Setup and breakdown — your space is left as you found it',
];

export const addOns = [
  { name: '[[Warm towel finish]]', detail: '[[Warmed towels for neck, shoulders, or feet to close your session.]]', price: '[[+$X]]' },
  { name: '[[Extended focus]]', detail: '[[An extra 15 minutes on one area without shortening the rest of your session.]]', price: '[[+$X]]' },
  { name: '[[Back-to-back sessions]]', detail: '[[Two people in the same home, one after the other — no second travel fee.]]', price: '[[Ask]]' },
];

export const packages = [
  { name: '[[Series of 3]]', detail: '[[Three sessions of the same length, used within X months.]]', price: '[[Save X%]]' },
  { name: '[[Series of 5]]', detail: '[[Five sessions of the same length, used within X months.]]', price: '[[Save X%]]' },
];

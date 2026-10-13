/**
 * "How it works" steps (homepage) and the detailed In-Home Experience page.
 * Anything in [[double brackets]] is an operational detail Torey needs to confirm.
 */

export const steps = [
  {
    title: 'Reach out to book',
    body: 'Call, text, or email with the service you’d like and a few times that work. I’ll reply personally to confirm your appointment.',
    icon: 'calendar',
  },
  {
    title: 'Prepare a comfortable space',
    body: 'Clear a spot with a little room to walk around the table — a living room, bedroom, or office all work. We’ll confirm exact space needs when you book.',
    icon: 'home',
  },
  {
    title: 'I arrive with everything',
    body: 'A professional table, fresh linens, bolsters, and oils all come with me. Setup is quick and quiet, and you don’t need to provide anything.',
    icon: 'table',
  },
  {
    title: 'Relax — then stay put',
    body: 'Enjoy a session shaped around you. Afterward, I pack up and leave your space as I found it, so you can go straight from the table to the couch.',
    icon: 'leaf',
  },
];

export const brings = [
  { label: 'Professional massage table', icon: 'table' },
  { label: 'Fresh, laundered linens for every client', icon: 'linen' },
  { label: 'Bolsters, pillows, and a face cradle', icon: 'pillow' },
  { label: '[[A light blanket for cooler rooms]]', icon: 'blanket' },
  { label: '[[Unscented and hypoallergenic oil or lotion]]', icon: 'drop' },
  { label: '[[Quiet music, if you’d like it]]', icon: 'music' },
];

export const checklist = [
  'A clear spot with room to walk around the table',
  'A comfortable room temperature',
  'Pets settled in another room, if possible',
  'Parking or building-access details shared ahead of time',
  '[[Your intake form completed before the appointment]]',
];

export type ExperienceSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  list?: string[];
  note?: string;
};

export const experience: ExperienceSection[] = [
  {
    id: 'after-booking',
    eyebrow: 'Booking',
    title: 'How booking works',
    body: [
      'Booking is personal — there’s no online calendar. Call, text, or email with the service and session length you’d like, your neighborhood, and a few days and times that work. I’ll reply personally, usually within [[one business day]], to settle on a time.',
      'Once we’ve agreed on a time, I’ll confirm the date, time, service, and address in writing. [[Before your first visit, I’ll share a short intake form covering your goals, any areas to focus on or avoid, and relevant health history — or we can go through it together when I arrive.]]',
    ],
  },
  {
    id: 'confirmation',
    eyebrow: 'Before the visit',
    title: 'How your appointment is confirmed',
    body: [
      'I’ll send a personal text [[the day before]] to confirm the time, parking, and anything I should know about getting in — a gate code, a buzzer, or which door to use.',
      'On the day, I’ll text when I’m on my way, so you always know when to expect me.',
    ],
  },
  {
    id: 'equipment',
    eyebrow: 'What I bring',
    title: 'Everything for your session comes with me',
    body: [
      'You don’t need to provide sheets, towels, pillows, or oil. I arrive with a full professional setup, and every client gets freshly laundered linens.',
    ],
  },
  {
    id: 'setup',
    eyebrow: 'Setup & breakdown',
    title: 'Quick, quiet, and tidy',
    body: [
      'Setup takes about [[X minutes]] and [[happens before your session time begins]], so you get the full length you booked. Breakdown takes about [[X minutes]] afterward.',
      'I’ll bring everything in, set up in the space you’ve chosen, and leave it exactly as I found it.',
    ],
  },
  {
    id: 'prepare',
    eyebrow: 'Your part',
    title: 'What to prepare',
    body: ['Very little. A few small things help the session go smoothly:'],
  },
  {
    id: 'during',
    eyebrow: 'The session',
    title: 'What happens during your appointment',
    body: [
      'We’ll start with a brief conversation — how you’re feeling, what you’d like from today, and any areas to focus on or skip. Then I’ll step out of the room while you undress to your level of comfort and settle under the top sheet.',
      'I’ll knock and wait for your okay before coming back in. During the session, I’ll check in on pressure and comfort, and you’re always welcome to speak up — or simply enjoy the quiet.',
      'When we’re finished, I’ll step out again so you can take your time getting up and dressed.',
    ],
  },
  {
    id: 'consent',
    eyebrow: 'Comfort & consent',
    title: 'You’re in control of your session',
    body: [
      'Your comfort guides every part of the session. You decide which areas are worked on, and you can ask for lighter or firmer pressure, a change in focus, or a pause at any time — no explanation needed.',
      'Some areas, such as the glutes or abdomen, are only worked on with your explicit, in-the-moment permission. You’re also always welcome to have a partner, friend, or family member at home during your appointment.',
    ],
  },
  {
    id: 'draping',
    eyebrow: 'Draping & boundaries',
    title: 'Professional draping, every time',
    body: [
      'You’ll stay covered by a sheet throughout the session, and only the area being worked on is uncovered. Intimate areas are never uncovered or touched.',
      'Every session is strictly professional and therapeutic. Either of us may end a session at any time if those boundaries aren’t respected.',
    ],
  },
  {
    id: 'payment',
    eyebrow: 'Payment & tipping',
    title: 'Simple and upfront',
    body: [
      'Payment is due [[at the end of your session]]. I accept [[cards, Apple Pay, and Venmo]].',
      'Tipping is [[appreciated but never expected]]. Prices are listed upfront, including any travel fee, so there are no surprises.',
    ],
  },
];

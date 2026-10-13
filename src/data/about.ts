/**
 * Practitioner bio content — used on the About page and the homepage introduction.
 * Bracketed text is a prompt for Torey to fill in with his own details and voice.
 */

export const intro = {
  short:
    'I started Tailored Bodywork to make thoughtful, skilled bodywork easier to fit into real life. After [[X years]] of practice, I’ve learned that the best sessions begin with listening — so every appointment starts with a conversation about what you need that day.',
  highlights: [
    '[[Licensed Massage Therapist (CO)]]',
    '[[X years of experience]]',
    '[[Training / school name]]',
  ],
};

export const story = [
  {
    id: 'background',
    title: 'Background & experience',
    body: [
      '[[A few sentences about how Torey found bodywork — what drew him to it, where he trained, and the kinds of clients and settings he’s worked with (studios, clinics, sports teams, spas, etc.).]]',
      '[[Anything that shaped his approach — e.g., his own experience with injury or recovery, an athletic background, or a mentor who influenced him.]]',
    ],
  },
  {
    id: 'why-mobile',
    title: 'Why I bring the session to you',
    body: [
      'A great session can be undone by a drive across town. Coming to you means no traffic, no waiting room, and no rushing to get dressed and back to your car — you get to stay in that settled feeling a little longer.',
      '[[A sentence or two in Torey’s own words about why he started the business and who he hopes to help — busy parents, people who work from home, new clients who prefer a familiar environment, active Coloradans, etc.]]',
    ],
  },
  {
    id: 'approach',
    title: 'How I work',
    body: [
      'No two bodies — or two days — are the same, so I don’t follow a fixed routine. We’ll talk before we begin, I’ll check in as we go, and the session adapts to what you tell me and what I notice.',
      'Clear communication matters as much as technique. You’ll always know what to expect, you’ll always be in control of your session, and you’ll never be pressured into longer sessions, add-ons, or packages.',
    ],
  },
];

export const credentials = [
  { label: 'License', value: '[[Colorado Licensed Massage Therapist · License #000000]]' },
  { label: 'Training', value: '[[School or program name · Year · Hours completed]]' },
  { label: 'Specialized training', value: '[[Continuing education — e.g., sports recovery, myofascial techniques]]' },
  { label: 'Insurance', value: '[[Professional liability insurance through PROVIDER]]' },
  { label: 'Certifications', value: '[[CPR / First Aid · Background check · Memberships (e.g., AMTA, ABMP)]]' },
];

export const values = [
  {
    title: 'Listen first',
    body: 'Every session starts with a conversation, and your feedback shapes everything that follows.',
  },
  {
    title: 'Clear and consistent',
    body: 'Upfront pricing, predictable appointments, and the same professional standards every time.',
  },
  {
    title: 'Your pace, your space',
    body: 'You choose the room, the music, and the pressure. I’ll bring the rest.',
  },
];

export const personal =
  '[[A short, human note about life outside of work — favorite Denver trails, a dog, a coffee order, a hobby. This helps clients feel they know who’s arriving at their door.]]';

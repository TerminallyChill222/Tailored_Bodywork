/**
 * FAQ content, grouped by category.
 * `draft: true` marks answers that describe policies or details Torey still needs to confirm;
 * they show a small "Draft answer" tag while site.flags.draft is on.
 */

export type Faq = { q: string; a: string; draft?: boolean };
export type FaqGroup = { id: string; title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: 'space',
    title: 'Preparing your space',
    items: [
      {
        q: 'How much space do I need for the massage table?',
        a: 'Enough to fit the table with a little room to walk around all sides. Most living rooms, bedrooms, and home offices work well. The exact footprint is [[table dimensions + clearance]] — if you’re unsure, send a quick photo and I’ll let you know.',
        draft: true,
      },
      {
        q: 'Do I need to move furniture?',
        a: 'Sometimes a coffee table or chair needs to shift a few feet. I’m happy to help move light pieces and put them back afterward.',
        draft: true,
      },
      {
        q: 'Do you bring your own massage table?',
        a: 'Yes. I bring a professional massage table along with bolsters, a face cradle, and everything else needed for the session.',
      },
      {
        q: 'Do I need to provide sheets, towels, or pillows?',
        a: 'No. Every client gets freshly laundered linens, and I bring pillows and bolsters for support.',
      },
      {
        q: 'Do I need to provide music or anything else?',
        a: 'Nothing is required. [[I can bring quiet music]], or you’re welcome to play your own — or enjoy silence.',
        draft: true,
      },
      {
        q: 'Do you need access to an electrical outlet or sink?',
        a: '[[An outlet nearby is helpful for a table warmer, but not essential. Access to a sink to wash hands before and after the session is appreciated.]]',
        draft: true,
      },
      {
        q: 'Can you provide massage in an apartment or hotel?',
        a: '[[Yes — apartments, condos, and hotel rooms all work as long as there’s room for the table. For hotels, please share your room number and any front-desk instructions when booking.]]',
        draft: true,
      },
    ],
  },
  {
    id: 'experience',
    title: 'The session',
    items: [
      {
        q: 'What should I wear?',
        a: 'Whatever you’re comfortable with. Many people undress fully under the sheet; others prefer to leave underwear or loose clothing on. Either is completely fine — I’ll work with whatever you choose.',
      },
      {
        q: 'How does draping work?',
        a: 'You’ll be covered by a sheet for the entire session. Only the area being worked on — a leg, an arm, your back — is uncovered at a time, then covered again. Intimate areas are never uncovered or touched.',
      },
      {
        q: 'Can I request lighter or deeper pressure?',
        a: 'Absolutely, and at any point. I’ll check in throughout, but you never need to wait to be asked.',
      },
      {
        q: 'What if I’m uncomfortable at any point?',
        a: 'Just say so. We can adjust pressure, skip an area, change position, take a pause, or end the session — no explanation needed. Your comfort comes first.',
      },
      {
        q: 'Can I choose which areas are worked on?',
        a: 'Yes. We’ll talk before we begin about where you’d like focus and anything you’d like skipped, and you can change your mind during the session.',
      },
      {
        q: 'What if I’ve never had a massage before?',
        a: 'You’re in good company. I’ll walk you through what to expect before we begin, keep pressure on the lighter side to start, and check in more often. The Tailored Session is a good first booking.',
      },
      {
        q: 'How do I know which service is right for me?',
        a: 'If you’re not sure, book The Tailored Session — we’ll shape it around what you need once we talk. You can also send a message beforehand and I’ll help you choose.',
      },
    ],
  },
  {
    id: 'booking',
    title: 'Booking & logistics',
    items: [
      {
        q: 'Which Denver neighborhoods do you serve?',
        a: '[[Denver and nearby neighborhoods within X miles of central Denver, including Capitol Hill, Cherry Creek, Wash Park, the Highlands, and Park Hill.]] Not sure if you’re in range? Send a message with your neighborhood.',
        draft: true,
      },
      {
        q: 'Is there an additional travel fee?',
        a: '[[Travel within X miles is included. Beyond that, a $X travel fee applies and is shown before you book.]]',
        draft: true,
      },
      {
        q: 'How far in advance should I book?',
        a: '[[Booking a few days ahead gives the best choice of times; evenings and weekends tend to fill first.]]',
        draft: true,
      },
      {
        q: 'Do you offer same-day appointments?',
        a: '[[Occasionally, when the schedule allows. Text or call to check same-day availability.]]',
        draft: true,
      },
      {
        q: 'What is your cancellation policy?',
        a: '[[Please give at least 24 hours’ notice to cancel or reschedule. Late cancellations may be charged X% of the session price.]]',
        draft: true,
      },
      {
        q: 'What payment methods do you accept?',
        a: '[[Cards, Apple Pay, and Venmo, paid at the end of your session.]]',
        draft: true,
      },
      {
        q: 'Can I book appointments for two people?',
        a: '[[Yes — two sessions can be booked back-to-back at the same address. Mention it when booking so I can plan time and linens.]]',
        draft: true,
      },
    ],
  },
  {
    id: 'health',
    title: 'Health & safety',
    items: [
      {
        q: 'Are you licensed and insured?',
        a: '[[Yes. I’m a licensed massage therapist in Colorado (license #000000) and carry professional liability insurance through PROVIDER.]] License details can be verified through the Colorado Division of Professions and Occupations.',
        draft: true,
      },
      {
        q: 'Do I need to complete an intake form?',
        a: 'Yes. Before your first session, you’ll fill out a short intake form covering your goals, any areas to focus on or avoid, and relevant health history. [[I’ll share it ahead of time, or we can go through it together when I arrive.]] Please don’t send medical details by email or text.',
        draft: true,
      },
      {
        q: 'Are there any conditions that would prevent me from receiving bodywork?',
        a: 'Some situations — such as a fever or contagious illness, a recent injury or surgery, or certain circulatory and skin conditions — may mean we should wait or adapt the session. If you’re unsure, check with your doctor first, and note anything relevant on your intake form so we can plan together.',
      },
      {
        q: 'What hygiene and sanitation practices do you follow?',
        a: 'Every client gets freshly laundered linens. The table, face cradle, and bolsters are [[cleaned and disinfected between every appointment]], and I wash my hands before and after each session. [[I’ll reschedule if I’m feeling unwell, and ask that you do the same.]]',
        draft: true,
      },
    ],
  },
];

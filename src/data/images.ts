/**
 * Every photo used on the site.
 *
 * Room and table scenes are the site's own photos in /public/images, color-graded into a Sage and a
 * Clay version (see tools/grade-photos.py). Detail shots are free Unsplash placeholders, hotlinked
 * under the Unsplash License — they show a small "Placeholder photo" tag while the site is in draft.
 *
 * To swap a photo: drop the file in /public/images and point `src` at '/images/your-file.jpg'.
 * Practitioner photos are intentionally left empty so the site never implies a stock model is Torey.
 */

type Img = { src: string; alt: string; credit?: string };

const U = 'https://images.unsplash.com/';

/** Room and table scenes, graded per design version. */
export const scenes = {
  sage: {
    room: { src: '/images/room-sage-1600.jpg', alt: 'A massage table dressed in soft linen in a sunlit room with an olive tree' },
    corner: { src: '/images/corner-sage-1600.jpg', alt: 'A linen-draped massage table beside a wooden bench with a vase of olive branches' },
    oliveLinens: { src: '/images/olive-linens-sage-1600.jpg', alt: 'A massage table with cream and olive linens in a sunlit room' },
    towel: { src: '/images/towel-sage-1600.jpg', alt: 'A rolled towel resting on a linen-covered massage table in morning light' },
    towelDetail: { src: '/images/towel-detail-sage-1600.jpg', alt: 'A freshly rolled towel on a linen-covered massage table' },
    linenFold: { src: '/images/linen-fold-sage-1600.jpg', alt: 'Cream and olive linens layered over a massage table' },
  },
  clay: {
    room: { src: '/images/room-clay-1600.jpg', alt: 'A massage table dressed in soft linen in a warm, sunlit room' },
    corner: { src: '/images/corner-clay-1600.jpg', alt: 'A linen-draped massage table beside a wooden bench in golden light' },
    towel: { src: '/images/towel-clay-1600.jpg', alt: 'A rolled towel resting on a linen-covered massage table in warm light' },
    towelDetail: { src: '/images/towel-detail-clay-1600.jpg', alt: 'A freshly rolled towel on a linen-covered massage table in warm light' },
    towelStrip: { src: '/images/towel-strip-clay-1600.jpg', alt: 'A rolled towel on fresh linens beside a sunlit curtain' },
    session: { src: '/images/session-clay-1600.jpg', alt: 'A client resting face-down under a linen sheet while her upper back is massaged' },
  },
} satisfies Record<'sage' | 'clay', Record<string, Img>>;

/** Detail shots (stock placeholders). */
export const images = {
  eucalyptus: { src: `${U}photo-1510520745063-ceaa7314a820`, alt: 'Eucalyptus branches in a ceramic vase', credit: 'Alex Lvrs' },
  terracotta: { src: `${U}photo-1738511498466-0920ad8d5092`, alt: 'Dried grasses in a terracotta vase against a warm sand wall', credit: 'Joyce G' },
  leafShadow: { src: `${U}photo-1570019177956-e959fed60484`, alt: 'Leaf shadows on a warm beige wall', credit: 'Suhyeon Choi' },
  supplies: { src: `${U}photo-1671493234279-57ef0c8f34e6`, alt: 'An amber oil bottle resting on natural linen', credit: 'Denise Chan' },
  denver: { src: `${U}photo-1733559566466-309e731e3549`, alt: 'Downtown Denver seen from the foothills', credit: 'Abhi Verma' },
  morning: { src: `${U}photo-1518548981607-b068130027d2`, alt: 'A stoneware mug on linen with dried flowers in soft light', credit: 'Debby Hudson' },
} satisfies Record<string, Img>;

/** Version B pairs each service with a photo (keyed by service slug). */
export const serviceImages: Record<string, Img> = {
  'tailored-session': scenes.clay.towel,
  restorative: images.morning,
  'deep-focus': images.supplies,
  'active-recovery': images.denver,
};

/** Practitioner photography — leave src empty until Torey's real photos are ready. */
export const practitioner = {
  headshot: { src: '', alt: 'Torey, smiling, in natural light', label: 'Torey’s headshot — warm, natural light, relaxed smile' },
  atWork: { src: '', alt: 'Torey setting up a massage table in a client’s living room', label: 'Torey setting up the table in a bright living room' },
  casual: { src: '', alt: 'Torey outdoors in Denver', label: 'A casual photo of Torey — outdoors or around Denver' },
};

export interface EventItem {
  id: string;
  // ISO date used for sorting and for splitting upcoming and past. For an event
  // without a fixed date this is an estimate; dateLabel is what visitors see.
  date: string;
  dateLabel: string;
  title: string;
  teaser: string;
  location: string;
  audience: string;
  href?: string; // landing page
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

export const HACKATHON_CHECKOUT = 'https://go.klikwork.com/checkout/hr-hackathon-2-february-2027';
// Early bird runs through 31 December 2026; from 1 January the regular price applies.
export const EARLY_BIRD_UNTIL = '2026-12-31';
export const HACKATHON_DATE = '2027-02-02';
export const hackathonPrice = () => {
  const earlyBird = today() <= EARLY_BIRD_UNTIL;
  return { earlyBird, amount: earlyBird ? 647 : 797, label: earlyBird ? 'Early bird, t/m 31 december' : 'Per persoon' };
};
export const isUpcoming = (date: string) => date >= today();

export const NOTIFY_2027 =
  'mailto:hello@klikwork.com?subject=Houd%20me%20op%20de%20hoogte%20van%20Recruit%20AI%20Live%202027';

export const events: EventItem[] = [
  {
    id: 'hr-hackathon-2027',
    date: '2027-02-02',
    dateLabel: 'Dinsdag 2 februari 2027',
    title: 'HR Hackathon',
    teaser: 'Bouw in één dag je eigen HR-applicatie met vibe coding. Met Marcel van der Meer en Bas van de Haterd.',
    location: 'Utrecht Centraal',
    audience: 'HR-professionals en corporate recruiters',
    href: '/hr-hackathon',
  },
  {
    id: 'recruit-ai-live-2027',
    date: '2027-03-01',
    dateLabel: 'Voorjaar 2027, datum volgt',
    title: 'Recruit AI Live 2027',
    teaser: 'De AI-conferentie voor recruitmentbureaus, deze keer in het Nederlands.',
    location: 'Locatie volgt',
    audience: 'Eigenaren, directeuren en senior recruiters van recruitmentbureaus',
    href: '/',
  },
  {
    id: 'recruit-ai-live-2026',
    date: '2026-06-02',
    dateLabel: 'Dinsdag 2 juni 2026',
    title: 'Recruit AI Live 2026',
    teaser:
      'Vier sprekers over AI in recruitment: Bas van de Haterd, Leandro Gomes da Silva, Bryan Peereboom en Marcel van der Meer. Voertaal Engels.',
    location: 'Van der Valk Hotel Breukelen',
    audience: 'Eigenaren, directeuren en senior recruiters van recruitmentbureaus',
  },
];

export const upcomingEvents = () =>
  events.filter((e) => e.date >= today()).sort((a, b) => a.date.localeCompare(b.date));
export const pastEvents = () =>
  events.filter((e) => e.date < today()).sort((a, b) => b.date.localeCompare(a.date));

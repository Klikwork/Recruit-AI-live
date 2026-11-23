export interface EventItem {
  id: string;
  date: string; // ISO date of the (first) event day; used for sorting and past/upcoming
  dateLabel: string;
  time?: string;
  title: string;
  hosts?: string;
  location: string;
  audience: string;
  summary: string;
  highlights: string[];
  bring?: string;
  pricing?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

// Single source of truth for the agenda page and the homepage announcement.
export const events: EventItem[] = [
  {
    id: 'recruit-ai-live-2027',
    // Exact date not set yet; this value only orders it in the agenda. Update when confirmed.
    date: '2027-03-01',
    dateLabel: 'Voorjaar 2027, datum volgt binnenkort',
    title: 'Recruit AI Live 2027',
    location: 'Locatie volgt binnenkort',
    audience: 'Eigenaren, directeuren en senior recruiters van recruitmentbureaus. Voertaal: Nederlands',
    summary:
      'De hands-on AI-conferentie voor recruitmentbureaus is terug, deze keer in het Nederlands. Mensen uit de praktijk, echte toepassingen, geen verkooppraatjes.',
    highlights: [
      'Praktijkverhalen over AI in sourcing, automatisering en kandidaatcontact',
      'Werkwijzen die je de dag erna kunt toepassen',
      'Onafhankelijk en zonder sponsors',
    ],
    ctaLabel: 'Houd me op de hoogte',
    ctaHref: 'mailto:hello@klikwork.com?subject=Houd%20me%20op%20de%20hoogte%20van%20Recruit%20AI%20Live%202027',
  },
  {
    id: 'hr-hackathon-2027',
    date: '2027-02-02',
    dateLabel: 'Dinsdag 2 februari 2027',
    time: '10:00 tot 16:00, inclusief lunch',
    title: 'HR Hackathon: bouw je eigen apps met vibe coding',
    hosts: 'Marcel van der Meer & Bas van de Haterd',
    location: 'Utrecht Centraal Station',
    audience: 'HR- en recruitmentprofessionals',
    summary:
      'Samen met andere HR- en recruitmentprofessionals leer je in één dag hoe je goede ideeën omzet in werkende producten.',
    highlights: [
      'Excel-documenten omzetten in een slimme applicatie',
      'Een dashboard maken om iets goed te communiceren',
      'Het maandelijkse verzamelen van data voor je rapport automatiseren',
      "Een werkend prototype bouwen tegen een 'fake ATS' met fake cv's en vacatures",
    ],
    bring:
      'Een laptop waarop je Claude kunt en mag installeren, en een Claude Code-abonnement van 20 dollar per maand (na één maand meteen op te zeggen).',
    pricing: [
      'Early bird tot en met 31 december: 647 euro excl. btw (geen teamkorting)',
      'Vanaf 1 januari: 797 euro excl. btw',
      'Teamkorting: met 2 personen 747 euro, met 3 personen 727 euro, met 4 of meer 697 euro per ticket, excl. btw',
    ],
    ctaLabel: 'Schrijf je in',
    ctaHref: 'https://go.klikwork.com/checkout/hr-hackathon-2-february-2027',
  },
  {
    id: 'recruit-ai-live-2026',
    date: '2026-06-02',
    dateLabel: 'Dinsdag 2 juni 2026',
    time: '12:00 tot 16:45',
    title: 'Recruit AI Live 2026',
    location: 'Van der Valk Hotel Breukelen',
    audience: 'Eigenaren, directeuren en senior recruiters van recruitmentbureaus. Voertaal: Engels',
    summary:
      'Vier sprekers uit de praktijk over AI in recruitment, zonder verkooppraatjes.',
    highlights: [
      'AI: Evolution or Revolution? (Bas van de Haterd)',
      'Stop buying AI tools (Leandro Gomes da Silva)',
      'SEO is dead. GEO is next. (Bryan Peereboom)',
      'The gap between you and your competitor? Setup and agents. (Marcel van der Meer)',
    ],
  },
];

export const today = () => new Date().toISOString().slice(0, 10);
export const upcomingEvents = () =>
  events.filter((e) => e.date >= today()).sort((a, b) => a.date.localeCompare(b.date));
export const pastEvents = () =>
  events.filter((e) => e.date < today()).sort((a, b) => b.date.localeCompare(a.date));

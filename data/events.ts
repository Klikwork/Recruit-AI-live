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
    id: 'hr-hackathon-2027',
    date: '2027-02-02',
    dateLabel: 'Tuesday, February 2, 2027',
    time: '10:00 – 16:00, lunch included',
    title: 'HR Hackathon: build your own apps with vibe coding',
    hosts: 'Marcel van der Meer & Bas van de Haterd',
    location: 'Utrecht Centraal Station',
    audience: 'HR and recruitment professionals',
    summary:
      'In one day you learn to turn good ideas into working products yourself, together with other HR and recruitment professionals.',
    highlights: [
      'Turn Excel files into a smart application',
      'Build a dashboard that tells your story clearly',
      'Automate the monthly data collection for your reports',
      'Prototype against a practice ATS with sample CVs and vacancies',
    ],
    bring:
      'A laptop on which you can and may install Claude, plus a Claude Code subscription (20 dollar per month, cancel after one month).',
    pricing: [
      'Early bird until December 31: 647 euro excl. VAT (no team discount)',
      'From January 1: 797 euro excl. VAT',
      'Team discount: 2 people 747 euro, 3 people 727 euro, 4 or more 697 euro per ticket, excl. VAT',
    ],
    ctaLabel: 'Register now',
    ctaHref: 'https://go.klikwork.com/checkout/hr-hackathon-2-february-2027',
  },
  {
    id: 'recruit-ai-live-2026',
    date: '2026-06-02',
    dateLabel: 'Tuesday, June 2, 2026',
    time: '12:00 – 16:45',
    title: 'Recruit AI Live 2026',
    location: 'Van der Valk Hotel Breukelen',
    audience: 'Recruitment agency owners, directors and senior recruiters',
    summary:
      'The hands-on AI conference for recruitment agencies. Four practitioners, real-world insights, no vendor pitches.',
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

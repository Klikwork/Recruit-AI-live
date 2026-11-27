import React from 'react';
import { ArrowRight } from 'lucide-react';
import Page from './components/Page';
import { Button, Container, DateStrip, H2, Lead, Section } from './components/ui';
import { HACKATHON_DATE, NOTIFY_2027, isUpcoming } from './data/events';

const MARCEL = '/images/hosts/marcel-van-der-meer.webp';
const BAS = '/images/hosts/bas-van-de-haterd.webp';

const sessions2026: { title: string; speaker: string; summary: string }[] = [
  {
    title: 'AI: Evolution or Revolution?',
    speaker: 'Bas van de Haterd',
    summary:
      'Is AI gewoon een nieuwe technologie, of verandert het de wereld? Over de snelheid van de ontwikkelingen, de gevolgen voor de arbeidsmarkt en welke talenten meer waard worden.',
  },
  {
    title: 'Stop buying AI tools',
    speaker: 'Leandro Gomes da Silva',
    summary:
      'De meeste bureaus gebruiken AI-tools, maar weinig zien resultaat. Het probleem zit niet in de tools, maar in waar je begint en wie de eigenaar is. Plus: hoe je resultaat meet.',
  },
  {
    title: 'SEO is dead. GEO is next.',
    speaker: 'Bryan Peereboom',
    summary:
      'Kandidaten zoeken niet meer naar vacatures, ze vragen het aan ChatGPT, Perplexity of Copilot. Hoe die tools bepalen welke werkgevers ze aanbevelen, en wat recruiters kunnen doen om zichtbaar te blijven.',
  },
  {
    title: 'The gap between you and your competitor? Setup and agents.',
    speaker: 'Marcel van der Meer',
    summary:
      'Het verschil met je concurrent zit niet in AI, maar in de setup. Wat je eerst oplost voordat je automatiseert, en hoe een agent uitzoekt hoeveel kandidaten in je database nog kloppen.',
  },
];

const App: React.FC = () => (
  <Page>
    <Container className="pt-14 md:pt-24 pb-16 md:pb-24">
      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-16 items-end">
      <div>
      <DateStrip date="Voorjaar 2027" rest="Locatie volgt, voertaal Nederlands" />
      <h1 className="mt-7 text-6xl md:text-8xl lg:text-[6.5rem] font-extrabold text-white tracking-[-0.04em] leading-[0.9] mb-8">
        Recruit AI <span className="text-sky-400">Live</span> 2027
      </h1>
      <Lead>
        De AI-conferentie voor recruitmentbureaus komt terug. Deze keer in het Nederlands. Datum en locatie maken we
        binnenkort bekend.
      </Lead>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href={NOTIFY_2027}>Houd me op de hoogte</Button>
        <Button href="/agenda" variant="secondary">Bekijk de agenda</Button>
      </div>
      </div>
      <aside className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
        <h2 className="text-xl font-bold text-white">Vorige editie</h2>
        <p className="text-sm text-slate-400 mt-1 mb-4">2 juni 2026, Breukelen. Voertaal Engels.</p>
        <ul className="divide-y divide-white/10">
          {sessions2026.map(({ title, speaker }) => (
            <li key={title} className="py-3">
              <p className="text-white leading-snug">{title}</p>
              <p className="text-sm text-slate-400 mt-0.5">{speaker}</p>
            </li>
          ))}
        </ul>
      </aside>
      </div>
    </Container>

    <Section id="wat-is-recruit-ai-live">
      <Container>
        <H2>Wat is Recruit AI Live?</H2>
        <Lead>
          Recruit AI Live is een onafhankelijke conferentie over AI in recruitment, een initiatief van Klikwork en
          Digitaal-Werven. Sprekers uit de praktijk laten zien hoe recruitmentbureaus AI echt inzetten, zonder sponsors.
          De eerste editie was op 2 juni 2026 in Breukelen, in het Engels. De editie van 2027 is in het voorjaar en in het
          Nederlands.
        </Lead>
        <h3 className="mt-10 text-xl font-bold text-white">Voor wie</h3>
        <p className="mt-2 text-slate-300 leading-relaxed max-w-[65ch]">
          Eigenaren, directeuren en senior recruiters van recruitmentbureaus die willen zien hoe andere bureaus AI
          inzetten.
        </p>
      </Container>
    </Section>

    <Section id="terugblik-2026">
      <Container>
        <H2>Terugblik op 2026</H2>
        <Lead className="mb-10">Vier sessies over AI in recruitment, op 2 juni 2026 in Van der Valk Hotel Breukelen.</Lead>
        <ul className="grid md:grid-cols-2 gap-4 max-w-5xl">
          {sessions2026.map(({ title, speaker, summary }) => (
            <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
              <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>
              <p className="text-sm text-sky-300 mt-1 mb-3">{speaker}</p>
              <p className="text-slate-300 leading-relaxed">{summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>

    {isUpcoming(HACKATHON_DATE) && (
    <Section className="pb-24">
      <Container>
        <H2>Ook op de agenda</H2>
        <a
          href="/hr-hackathon"
          className="group flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl rounded-2xl border border-white/10 bg-slate-900/60 hover:border-sky-400/50 p-6 md:p-8 transition-colors"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
            <div className="flex shrink-0" aria-hidden>
              <img src={MARCEL} alt="" className="w-14 h-14 rounded-full object-cover" />
              <img src={BAS} alt="" className="w-14 h-14 rounded-full object-cover -ml-4 ring-4 ring-ink" />
            </div>
          <div>
            <p className="text-sm text-slate-400 mb-2">Dinsdag 2 februari 2027, Utrecht</p>
            <h3 className="text-3xl font-extrabold text-white mb-2">HR Hackathon</h3>
            <p className="text-slate-300 max-w-[55ch]">
              Bouw in één dag je eigen HR-applicatie met vibe coding. Voor HR-professionals en corporate recruiters.
            </p>
          </div>
          </div>
          <span className="inline-flex items-center gap-2 text-sky-400 group-hover:text-sky-300 font-semibold whitespace-nowrap">
            Naar de hackathon <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </Container>
    </Section>
    )}
  </Page>
);

export default App;

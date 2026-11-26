import React from 'react';
import { ArrowRight } from 'lucide-react';
import Page from './components/Page';
import { Button, Container, DateStrip, H2, Lead, Section } from './components/ui';
import { HACKATHON_DATE, NOTIFY_2027, isUpcoming } from './data/events';

const MARCEL = '/images/hosts/marcel-van-der-meer.webp';
const BAS = '/images/hosts/bas-van-de-haterd.webp';

const sessions2026 = [
  ['AI: Evolution or Revolution?', 'Bas van de Haterd'],
  ['Stop buying AI tools', 'Leandro Gomes da Silva'],
  ['SEO is dead. GEO is next.', 'Bryan Peereboom'],
  ['The gap between you and your competitor? Setup and agents.', 'Marcel van der Meer'],
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
          {sessions2026.map(([title, speaker]) => (
            <li key={title} className="py-3">
              <p className="text-white leading-snug">{title}</p>
              <p className="text-sm text-slate-400 mt-0.5">{speaker}</p>
            </li>
          ))}
        </ul>
      </aside>
      </div>
    </Container>

    <Section>
      <Container>
        <H2>Voor wie</H2>
        <Lead>
          Eigenaren, directeuren en senior recruiters van recruitmentbureaus die willen zien hoe andere bureaus AI
          inzetten. Sprekers uit de praktijk, geen sponsors.
        </Lead>
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

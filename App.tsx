import React from 'react';
import { Calendar, MapPin, MessageSquare, ArrowRight } from 'lucide-react';
import Page from './components/Page';
import { Button, Container, Fact, H2, Lead, Section } from './components/ui';
import { NOTIFY_2027 } from './data/events';

const sessions2026 = [
  ['AI: Evolution or Revolution?', 'Bas van de Haterd'],
  ['Stop buying AI tools', 'Leandro Gomes da Silva'],
  ['SEO is dead. GEO is next.', 'Bryan Peereboom'],
  ['The gap between you and your competitor? Setup and agents.', 'Marcel van der Meer'],
];

const App: React.FC = () => (
  <Page>
    <Container className="pt-20 md:pt-32 pb-16 md:pb-24">
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
        Recruit AI <span className="text-sky-400">Live</span> 2027
      </h1>
      <Lead>
        De AI-conferentie voor recruitmentbureaus komt terug. Deze keer in het Nederlands. Datum en locatie maken we
        binnenkort bekend.
      </Lead>
      <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl">
        <Fact icon={<Calendar size={18} />} label="Wanneer">Voorjaar 2027</Fact>
        <Fact icon={<MapPin size={18} />} label="Waar">Volgt binnenkort</Fact>
        <Fact icon={<MessageSquare size={18} />} label="Voertaal">Nederlands</Fact>
      </div>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href={NOTIFY_2027}>Houd me op de hoogte</Button>
        <Button href="/agenda" variant="secondary">Bekijk de agenda</Button>
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

    <Section>
      <Container>
        <H2>Dit stond er in 2026 op het programma</H2>
        <p className="text-slate-400 mb-6">Vorige editie, 2 juni 2026, Breukelen.</p>
        <ul className="divide-y divide-white/10 border-y border-white/10 max-w-3xl">
          {sessions2026.map(([title, speaker]) => (
            <li key={title} className="py-4 flex flex-col sm:flex-row sm:justify-between gap-1">
              <span className="text-white">{title}</span>
              <span className="text-slate-400 text-sm sm:text-base">{speaker}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>

    <Section className="pb-24">
      <Container>
        <H2>Ook op de agenda</H2>
        <a
          href="/hr-hackathon"
          className="group flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-4xl rounded-2xl border border-white/10 bg-slate-900/60 hover:border-sky-400/50 p-6 md:p-8 transition-colors"
        >
          <div>
            <p className="text-sm text-slate-400 mb-2">Dinsdag 2 februari 2027, Utrecht</p>
            <h3 className="text-2xl font-bold text-white mb-2">HR Hackathon</h3>
            <p className="text-slate-300 max-w-[55ch]">
              Bouw in één dag je eigen HR-applicatie met vibe coding. Voor HR-professionals en corporate recruiters.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sky-400 group-hover:text-sky-300 font-semibold whitespace-nowrap">
            Naar de hackathon <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </Container>
    </Section>
  </Page>
);

export default App;

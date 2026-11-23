import React from 'react';
import Page from './components/Page';
import { Button, Container, H2, Kicker, Lead, Section } from './components/ui';
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
      <Kicker>Nieuwe editie</Kicker>
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">Recruit AI Live 2027</h1>
      <Lead>
        De AI-conferentie voor recruitmentbureaus komt terug. Deze keer in het Nederlands. Datum en locatie maken we
        binnenkort bekend.
      </Lead>
      <dl className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl text-sm">
        <div>
          <dt className="text-gray-500 mb-1">Wanneer</dt>
          <dd className="text-white font-medium">Voorjaar 2027</dd>
        </div>
        <div>
          <dt className="text-gray-500 mb-1">Waar</dt>
          <dd className="text-white font-medium">Volgt binnenkort</dd>
        </div>
        <div>
          <dt className="text-gray-500 mb-1">Voertaal</dt>
          <dd className="text-white font-medium">Nederlands</dd>
        </div>
      </dl>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href={NOTIFY_2027}>Houd me op de hoogte</Button>
        <Button href="/agenda" variant="secondary">Bekijk de agenda</Button>
      </div>
    </Container>

    <Section>
      <H2>Voor wie</H2>
      <Lead>
        Eigenaren, directeuren en senior recruiters van recruitmentbureaus die willen zien hoe andere bureaus AI
        inzetten. Sprekers uit de praktijk, geen sponsors.
      </Lead>
    </Section>

    <Section>
      <Kicker>Vorige editie, 2 juni 2026, Breukelen</Kicker>
      <H2>Dit stond er in 2026 op het programma</H2>
      <ul className="divide-y divide-white/10 border-y border-white/10 max-w-3xl">
        {sessions2026.map(([title, speaker]) => (
          <li key={title} className="py-4 flex flex-col sm:flex-row sm:justify-between gap-1">
            <span className="text-white">{title}</span>
            <span className="text-gray-400 text-sm sm:text-base">{speaker}</span>
          </li>
        ))}
      </ul>
    </Section>

    <Section>
      <Kicker>Ook op de agenda</Kicker>
      <a href="/hr-hackathon" className="group block max-w-3xl rounded-xl border border-white/10 hover:border-white/30 p-6 md:p-8 transition-colors">
        <p className="text-sm text-gray-400 mb-2">Dinsdag 2 februari 2027, Utrecht</p>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-sky-300">HR Hackathon</h3>
        <p className="text-gray-300">
          Bouw in één dag je eigen HR-applicatie met vibe coding. Voor HR-professionals en corporate recruiters.
        </p>
      </a>
    </Section>
  </Page>
);

export default App;

import React from 'react';
import Page from './components/Page';
import { Container } from './components/ui';
import { upcomingEvents, pastEvents, EventItem } from './data/events';

const Row: React.FC<{ event: EventItem; past?: boolean }> = ({ event, past }) => {
  const body = (
    <div className="grid md:grid-cols-[12rem_1fr_auto] gap-2 md:gap-8 py-8 border-b border-white/10">
      <p className={`text-sm ${past ? 'text-slate-400' : 'text-slate-300'}`}>{event.dateLabel}</p>
      <div>
        <h3 className={`text-xl font-bold mb-2 ${past ? 'text-slate-300' : 'text-white group-hover:text-sky-300'}`}>
          {event.title}
        </h3>
        <p className="text-slate-400 leading-relaxed mb-2">{event.teaser}</p>
        <p className="text-sm text-slate-400">
          {event.location}. Voor wie: {event.audience}.
        </p>
      </div>
      {event.href && !past && (
        <span className="self-center text-sm font-medium text-sky-400 group-hover:text-sky-300 whitespace-nowrap">
          Naar het event
        </span>
      )}
    </div>
  );
  return event.href && !past ? (
    <a href={event.href} className="group block">
      {body}
    </a>
  ) : (
    body
  );
};

const AgendaPage: React.FC = () => {
  const upcoming = upcomingEvents();
  const past = pastEvents();
  return (
    <Page>
      <Container className="pt-16 md:pt-24 pb-4">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Agenda</h1>
        <p className="text-lg text-slate-300 max-w-[65ch]">Alle events van Recruit AI Live op een rij. Klik door naar een event voor het programma en de inschrijving.</p>
      </Container>
      {upcoming.length > 0 && (
        <Container className="pt-8 md:pt-12 pb-12" >
          <h2 className="text-sm font-medium text-slate-400 mb-2">Binnenkort</h2>
          {upcoming.map((e) => (
            <Row key={e.id} event={e} />
          ))}
        </Container>
      )}
      {past.length > 0 && (
        <Container className="pb-20">
          <h2 className="text-sm font-medium text-slate-400 mb-2">Eerdere edities</h2>
          {past.map((e) => (
            <Row key={e.id} event={e} past />
          ))}
        </Container>
      )}
    </Page>
  );
};

export default AgendaPage;

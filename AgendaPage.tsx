import React from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import SiteFooter from './components/SiteFooter';
import { upcomingEvents, pastEvents } from './data/events';

const AgendaPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-32">
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">Agenda</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Komende sessies en eerdere edities van Recruit AI Live.
          </p>
        </header>
        <Events id="upcoming" heading="Binnenkort" items={upcomingEvents()} />
        <Events id="past" heading="Eerdere edities" items={pastEvents()} past />
      </main>
      <SiteFooter />
    </div>
  );
};

export default AgendaPage;

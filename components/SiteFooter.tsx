import React from 'react';

const SiteFooter: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Over Recruit AI Live</h3>
        <p className="leading-relaxed mb-4">
          Recruit AI Live is een onafhankelijke eventreeks over de praktische toepassing van AI in recruitment. We helpen recruitmentprofessionals ruis van signaal te scheiden en AI om te zetten in echte resultaten.
        </p>
        <p className="leading-relaxed">Geen sponsors, dus geen verkooppraatjes. Alleen eerlijke sessies van experts, voor mensen die het werk echt doen.</p>
      </div>
      <div className="md:text-right flex flex-col md:items-end justify-between gap-6">
        <nav className="flex gap-6">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/agenda" className="hover:text-white">Agenda</a>
          <a href="mailto:hello@klikwork.com" className="hover:text-white">hello@klikwork.com</a>
        </nav>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Recruit AI Live</p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;

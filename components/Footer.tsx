import React from 'react';
import { Container } from './ui';

const Footer: React.FC = () => (
  <footer className="border-t border-white/10 py-12 text-sm text-slate-400">
    <Container className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
      <div className="max-w-md">
        <p className="font-bold text-white mb-2">Recruit AI Live</p>
        <p>Onafhankelijke events over AI in recruitment, zonder sponsors. Een initiatief van Klikwork.</p>
      </div>
      <div className="flex flex-col gap-2 md:items-end">
        <a href="/agenda" className="hover:text-white">Agenda</a>
        <a href="mailto:hello@klikwork.com" className="hover:text-white">hello@klikwork.com</a>
        <span className="text-slate-500">© {new Date().getFullYear()} Klikwork BV</span>
      </div>
    </Container>
  </footer>
);

export default Footer;

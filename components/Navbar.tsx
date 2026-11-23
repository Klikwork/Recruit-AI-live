import React from 'react';
import { Container } from './ui';

const links = [
  { name: 'Agenda', href: '/agenda' },
  { name: 'HR Hackathon', href: '/hr-hackathon' },
];

const Navbar: React.FC = () => (
  <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/10">
    <Container className="flex items-center justify-between h-16">
      <a href="/" className="text-lg font-bold text-white tracking-tight">
        Recruit AI <span className="text-sky-400">Live</span>
      </a>
      <nav className="flex items-center gap-5 sm:gap-8 text-sm">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition-colors">
            {l.name}
          </a>
        ))}
      </nav>
    </Container>
  </header>
);

export default Navbar;

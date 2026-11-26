import React from 'react';
import { Container } from './ui';

const links = [
  { name: 'Agenda', href: '/agenda' },
  { name: 'HR Hackathon', href: '/hr-hackathon' },
];

// Pages are served as /agenda or /agenda.html depending on the host, so compare without the extension.
const current = () =>
  typeof window === 'undefined' ? '' : window.location.pathname.replace(/\.html$/, '').replace(/\/$/, '') || '/';

const Navbar: React.FC = () => (
  <header className="sticky top-0 z-50 bg-ink/85 backdrop-blur-md border-b border-white/10">
    <Container className="flex items-center justify-between h-16">
      <a href="/" className="font-display text-lg font-extrabold text-white tracking-tight">
        Recruit AI <span className="text-sky-400">Live</span>
      </a>
      <nav className="flex items-center gap-5 sm:gap-8 text-sm">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            aria-current={current() === l.href ? 'page' : undefined}
            className="py-2 text-slate-300 hover:text-white transition-colors aria-[current=page]:text-white aria-[current=page]:underline aria-[current=page]:decoration-sky-400 aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
          >
            {l.name}
          </a>
        ))}
      </nav>
    </Container>
  </header>
);

export default Navbar;

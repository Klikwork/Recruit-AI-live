import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Section: React.FC<{ id?: string; children: React.ReactNode; className?: string }> = ({ id, children, className = '' }) => (
  <section id={id} className={`py-14 md:py-20 border-t border-white/10 scroll-mt-24 ${className}`}>{children}</section>
);

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-[-0.03em] leading-[1.05] mb-6 text-balance">{children}</h2>
);

export const Lead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-lg md:text-xl text-slate-300 leading-relaxed max-w-[65ch] ${className}`}>{children}</p>
);

export const Button: React.FC<{ href: string; children: React.ReactNode; variant?: 'primary' | 'secondary'; full?: boolean }> = ({
  href,
  children,
  variant = 'primary',
  full = false,
}) => (
  <a
    href={href}
    className={`${full ? 'flex w-full' : 'inline-flex'} items-center justify-center px-7 py-3.5 rounded-full font-bold transition-colors ${
      variant === 'primary'
        ? 'text-slate-950 bg-sky-400 hover:bg-sky-300 shadow-[0_6px_16px_-6px_rgba(0,0,0,0.6)]'
        : 'text-white border border-white/20 hover:border-white/50 hover:bg-white/5'
    }`}
  >
    {children}
  </a>
);

export const Fact: React.FC<{ icon: React.ReactNode; label: string; children: React.ReactNode }> = ({ icon, label, children }) => (
  <div className="flex items-start gap-3">
    <span className="mt-0.5 text-sky-400 shrink-0" aria-hidden>{icon}</span>
    <div>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-white font-semibold">{children}</p>
    </div>
  </div>
);

// Visible marker for information that still has to come from Marcel.
export const Todo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-1.5 py-0.5 rounded bg-amber-300/15 text-amber-200 font-mono text-[0.85em]">[{children}]</span>
);

// Date strip: the one fixed anchor at the top of every event. Filled segment for the date, outlined for the rest.
export const DateStrip: React.FC<{ date: React.ReactNode; rest: React.ReactNode }> = ({ date, rest }) => (
  <p className="inline-flex flex-wrap items-stretch rounded-lg overflow-hidden border border-sky-400/40 text-sm">
    <span className="bg-sky-400 text-slate-950 font-semibold px-3 py-1.5">{date}</span>
    <span className="px-3 py-1.5 text-sky-100">{rest}</span>
  </p>
);

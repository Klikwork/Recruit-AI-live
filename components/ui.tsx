import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-5xl mx-auto px-4 sm:px-6 ${className}`}>{children}</div>
);

export const Section: React.FC<{ id?: string; children: React.ReactNode; className?: string }> = ({ id, children, className = '' }) => (
  <section id={id} className={`py-16 md:py-24 border-t border-white/10 scroll-mt-20 ${className}`}>
    <Container>{children}</Container>
  </section>
);

export const Kicker: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-sm font-medium text-sky-400 mb-4">{children}</p>
);

export const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-6">{children}</h2>
);

export const Lead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{children}</p>
);

export const Button: React.FC<{ href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' }> = ({
  href,
  children,
  variant = 'primary',
}) => (
  <a
    href={href}
    className={
      variant === 'primary'
        ? 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-ink bg-sky-400 hover:bg-sky-300 transition-colors'
        : 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white border border-white/20 hover:border-white/40 transition-colors'
    }
  >
    {children}
  </a>
);

// Visible marker for information that still has to come from Marcel.
export const Todo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-1.5 py-0.5 rounded bg-amber-300/15 text-amber-200 font-mono text-[0.85em]">[{children}]</span>
);

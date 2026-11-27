import React, { useEffect, useRef, useState } from 'react';

// Small, dependency-free motion helpers for the hackathon page.
// All CSS lives in hr-hackathon.html; prefers-reduced-motion switches everything to a static end state.

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function useInView<T extends Element>(options: IntersectionObserverInit = { rootMargin: '0px 0px -12% 0px' }) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || prefersReducedMotion()) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView] as const;
}

// Fades and lifts its content into place the first time it scrolls into view.
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'figure';
  variant?: 'up' | 'zoom';
}> = ({ children, delay = 0, className = '', as = 'div', variant = 'up' }) => {
  const [ref, inView] = useInView<HTMLElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

// Headline whose words rise in one after another on load.
export const WordRise: React.FC<{ text: string; accent?: string; className?: string }> = ({ text, accent, className = '' }) => {
  const words = text.split(' ');
  const accentWords = accent ? accent.split(' ') : [];
  const start = accent ? words.length - accentWords.length : words.length;
  return (
    <h1 className={className} aria-label={text}>
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="word-mask" aria-hidden>
            <span
              className={`word-rise ${i >= start ? 'text-gradient' : ''}`}
              style={{ animationDelay: `${120 + i * 70}ms` }}
            >
              {w}
            </span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </h1>
  );
};

// Slow drifting light behind the hero. Pure CSS, GPU-friendly transforms only.
export const Aurora: React.FC = () => (
  <div className="aurora" aria-hidden>
    <span className="aurora-blob aurora-a" />
    <span className="aurora-blob aurora-b" />
    <span className="aurora-blob aurora-c" />
    <span className="aurora-grid" />
  </div>
);

// A prompt being typed and turned into an app: shows what vibe coding is in five seconds.
export const PromptCard: React.FC<{ prompts: string[]; className?: string }> = ({ prompts, className = '' }) => {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setTyped(prompts[0]);
      setDone(true);
      return;
    }
    const full = prompts[i];
    let n = 0;
    let t: number;
    setDone(false);
    const type = () => {
      n += 1;
      setTyped(full.slice(0, n));
      if (n < full.length) t = window.setTimeout(type, 34 + Math.random() * 40);
      else t = window.setTimeout(() => {
        setDone(true);
        t = window.setTimeout(() => setI((x) => (x + 1) % prompts.length), 2600);
      }, 450);
    };
    t = window.setTimeout(type, 700);
    return () => window.clearTimeout(t);
  }, [i]);

  return (
    <div className={`prompt-card ${className}`} aria-hidden>
      <div className="flex items-center gap-1.5 mb-3">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-auto text-[11px] text-slate-400">jouw prompt</span>
      </div>
      <p className="text-sm text-white leading-snug min-h-[2.75rem]">
        {typed}
        {!done && <span className="caret" />}
      </p>
      <div className={`app-build ${done ? 'is-done' : ''}`}>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
          <span className="grid place-items-center h-4 w-4 rounded-full bg-emerald-400/20">✓</span>
          Werkende eerste versie
        </div>
        <div className="mt-2.5 space-y-1.5">
          <span className="build-bar w-[85%]" />
          <span className="build-bar w-[60%]" />
          <span className="build-bar w-[72%]" />
        </div>
      </div>
    </div>
  );
};

// Card with a soft light that follows the pointer.
export const Spotlight: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onPointerMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
};

// Fills a vertical line as the element scrolls through the viewport (0 to 1 in --p).
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.setProperty('--p', '1');
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / r.height));
      el.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

// Which section is currently in view, for the sticky nav.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

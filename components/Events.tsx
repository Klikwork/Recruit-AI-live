import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Laptop, ArrowRight } from 'lucide-react';

interface EventItem {
  date: string; // ISO date, used for sorting and hiding past events
  dateLabel: string;
  time: string;
  title: string;
  hosts: string;
  location: string;
  audience: string;
  summary: string;
  highlights: string[];
  bring?: string;
  pricing?: string[];
  ctaLabel: string;
  ctaHref: string;
}

// Add new events here. Past events are hidden automatically.
const events: EventItem[] = [
  {
    date: '2027-02-02',
    dateLabel: 'Tuesday, February 2, 2027',
    time: '10:00 – 16:00, lunch included',
    title: 'HR Hackathon: build your own apps with vibe coding',
    hosts: 'Marcel van der Meer & Bas van de Haterd',
    location: 'Utrecht Centraal Station',
    audience: 'HR and recruitment professionals',
    summary:
      'In one day you learn to turn good ideas into working products yourself, together with other HR and recruitment professionals.',
    highlights: [
      'Turn Excel files into a smart application',
      'Build a dashboard that tells your story clearly',
      'Automate the monthly data collection for your reports',
      'Prototype against a practice ATS with sample CVs and vacancies',
    ],
    bring: 'A laptop on which you can and may install Claude, plus a Claude Code subscription (20 dollar per month, cancel after one month).',
    pricing: [
      'Early bird until December 31: 647 euro excl. VAT (no team discount)',
      'From January 1: 797 euro excl. VAT',
      'Team discount: 2 people 747 euro, 3 people 727 euro, 4 or more 697 euro per ticket, excl. VAT',
    ],
    ctaLabel: 'Register now',
    ctaHref: 'https://go.klikwork.com/checkout/hr-hackathon-2-february-2027',
  },
];

const Events: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const today = new Date().toISOString().slice(0, 10);
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  if (upcoming.length === 0) return null;

  return (
    <section id="events" className="py-24 relative" ref={sectionRef}>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[800px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Upcoming events</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-10">
          {upcoming.map((event, i) => (
            <article
              key={event.date + event.title}
              className={`glass-card rounded-3xl p-8 md:p-12 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">{event.hosts}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-slate-300 text-lg mb-6">{event.summary}</p>
                  <ul className="space-y-3 text-slate-300 mb-6">
                    {event.highlights.map((h) => (
                      <li key={h} className="flex items-start">
                        <ArrowRight className="w-5 h-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  {event.bring && (
                    <p className="flex items-start text-slate-400">
                      <Laptop className="w-5 h-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                      <span><span className="font-semibold text-slate-300">What to bring: </span>{event.bring}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-5">
                  <div className="flex items-start text-slate-300">
                    <Calendar className="w-5 h-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                    <span className="font-semibold">{event.dateLabel}</span>
                  </div>
                  <div className="flex items-start text-slate-300">
                    <Clock className="w-5 h-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start text-slate-300">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-start text-slate-300">
                    <Users className="w-5 h-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                    <span>{event.audience}</span>
                  </div>
                  {event.pricing && (
                    <ul className="pt-4 border-t border-white/10 space-y-2 text-sm text-slate-400">
                      {event.pricing.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={event.ctaHref}
                    className="inline-flex w-full items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-full transition-all animate-glow"
                  >
                    {event.ctaLabel}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

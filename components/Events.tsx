import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Users, Laptop, ArrowRight } from 'lucide-react';
import type { EventItem } from '../data/events';

interface EventsProps {
  id: string;
  heading: string;
  items: EventItem[];
  past?: boolean;
}

const Events: React.FC<EventsProps> = ({ id, heading, items, past = false }) => {
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

  if (items.length === 0) return null;

  return (
    <section id={id} className="py-24 relative" ref={sectionRef}>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[800px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{heading}</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-10">
          {items.map((event, i) => (
            <article
              key={event.id}
              className={`glass-card rounded-3xl p-8 md:p-12 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  {past && (
                    <p className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10">Concluded</p>
                  )}
                  {event.hosts && (
                    <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">{event.hosts}</p>
                  )}
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
                  {event.time && (
                    <div className="flex items-start text-slate-300">
                      <Clock className="w-5 h-5 mr-3 mt-0.5 text-brand-400 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  )}
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
                  {!past && event.ctaHref && (
                    <a
                      href={event.ctaHref}
                      className="inline-flex w-full items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-full transition-all animate-glow"
                    >
                      {event.ctaLabel}
                    </a>
                  )}
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

import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Languages, ArrowRight, Users, Lightbulb, Zap, Target } from 'lucide-react';

export const NOTIFY_HREF =
  'mailto:hello@klikwork.com?subject=Houd%20me%20op%20de%20hoogte%20van%20Recruit%20AI%20Live%202027';

const expectations = [
  {
    icon: <Users className="w-8 h-8 text-brand-300" />,
    title: 'Leren en verbinden',
    description: 'Gericht leren en echte gesprekken met andere leiders uit de recruitmentbranche.',
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-brand-300" />,
    title: 'Praktijkverhalen',
    description: 'Mensen uit de praktijk delen hoe zij AI inzetten voor sourcing, automatisering, kandidaatcontact en business development.',
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-300" />,
    title: 'Direct toepasbaar',
    description: 'Werkwijzen die je meteen kunt gebruiken, of je nu net begint met AI of het al in je hele team inzet.',
  },
  {
    icon: <Target className="w-8 h-8 text-brand-300" />,
    title: 'Geen verkooppraatjes',
    description: 'Onafhankelijk en zonder sponsors. Geen gesponsorde content, alleen kennis die je morgen kunt toepassen.',
  },
];

const audience = [
  'Eigenaren en directeuren van recruitmentbureaus die hun bureau toekomstbestendig willen maken',
  'Senior recruiters en teamleads die een stap verder willen',
  'Operations managers die efficiencywinst met AI zoeken',
  'Iedereen die klaar is met AI-hype en echte toepassingen wil zien',
];

const Announcement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);
  const fade = (delay: string) =>
    `transition-all duration-1000 ${delay} ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`;

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={`inline-block mb-8 px-5 py-2 rounded-full text-sm font-bold tracking-wide text-brand-200 bg-brand-500/10 border border-brand-500/30 ${fade('')}`}>
            Nieuwe editie aangekondigd
          </p>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 drop-shadow-2xl ${fade('')}`}>
            Recruit AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-200 to-indigo-300">Live</span>{' '}
            <span className="block mt-2 text-4xl md:text-6xl text-slate-200">2027</span>
          </h1>
          <p className={`text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light mb-12 leading-relaxed ${fade('delay-200')}`}>
            De hands-on AI-conferentie voor eigenaren, directeuren en senior recruiters van recruitmentbureaus. Deze keer in het Nederlands.
          </p>

          <div className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-slate-300 mb-14 ${fade('delay-300')}`}>
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3">
              <Calendar className="w-5 h-5 text-brand-400" />
              <span className="font-medium">Voorjaar 2027, datum volgt binnenkort</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3">
              <MapPin className="w-5 h-5 text-brand-400" />
              <span className="font-medium">Locatie volgt binnenkort</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3">
              <Languages className="w-5 h-5 text-brand-400" />
              <span className="font-medium">Voertaal: Nederlands</span>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-5 justify-center ${fade('delay-500')}`}>
            <a href={NOTIFY_HREF} className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-full transition-all animate-glow">
              Houd me op de hoogte
            </a>
            <a href="/agenda" className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-medium text-slate-200 glass-card rounded-full hover:text-white">
              Bekijk de agenda <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="verwachten" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Wat je kunt verwachten</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {expectations.map((f) => (
              <div key={f.title} className="glass-card rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row gap-6">
                <div className="w-16 h-16 p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="voor-wie" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Voor wie?</h2>
            <ul className="space-y-5">
              {audience.map((a) => (
                <li key={a} className="flex items-start text-slate-200 text-lg">
                  <ArrowRight className="w-5 h-5 mr-4 mt-1 text-brand-400 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <a href="/agenda#upcoming" className="glass-card rounded-3xl p-8 md:p-10 block group">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">Ook op de agenda</p>
            <h3 className="text-2xl font-bold text-white mb-3">HR Hackathon, 2 februari 2027</h3>
            <p className="text-slate-400 font-light mb-4">In één dag je eigen apps bouwen met vibe coding, in Utrecht.</p>
            <span className="inline-flex items-center gap-2 text-brand-300 group-hover:text-white font-semibold">Bekijk details <ArrowRight className="w-4 h-4" /></span>
          </a>
          <a href="/agenda#past" className="glass-card rounded-3xl p-8 md:p-10 block group">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">Terugblik</p>
            <h3 className="text-2xl font-bold text-white mb-3">Recruit AI Live 2026</h3>
            <p className="text-slate-400 font-light mb-4">Bekijk het programma van de editie van 2 juni 2026 in Breukelen.</p>
            <span className="inline-flex items-center gap-2 text-brand-300 group-hover:text-white font-semibold">Naar de terugblik <ArrowRight className="w-4 h-4" /></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Announcement;

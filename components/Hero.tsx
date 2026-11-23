import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-700"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[900px] h-[900px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-1000" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[90px] mix-blend-overlay"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-8 drop-shadow-2xl transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="block mb-2">
            Recruit AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-200 to-indigo-300 drop-shadow-[0_0_10px_rgba(14,165,233,0.5)]">Live</span>
          </span>
        </h1>
        
        <p 
            className={`text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light mb-12 leading-relaxed tracking-wide transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          The hands-on AI conference for recruitment agency owners, directors, and senior recruiters who want to stay ahead.
        </p>

        <div 
            className={`flex flex-col md:flex-row justify-center items-center gap-6 text-slate-300 mb-16 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-colors">
                <Calendar className="w-5 h-5 text-brand-400" />
                <span className="font-medium">June 2, 2026</span>
            </div>
            <div className="glass-panel px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-white/5 transition-colors">
                <MapPin className="w-5 h-5 text-brand-400" />
                <span className="font-medium">Van der Valk Hotel Breukelen</span>
            </div>
        </div>

        <div 
            className={`max-w-4xl mx-auto glass-card rounded-[2rem] p-8 md:p-12 mb-16 text-left relative overflow-hidden group border-white/10 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-500/30 transition-colors duration-700"></div>
            <p className="text-slate-200 text-lg md:text-xl leading-relaxed relative z-10 font-light">
                <strong className="text-white font-semibold">AI is transforming how agencies source, engage, and place candidates.</strong> But between the hype and the reality, what actually works?
                <br /><br />
                Recruit AI Live brings together four leading practitioners to share real-world insights. <span className="text-brand-300 font-semibold drop-shadow-[0_0_8px_rgba(125,211,252,0.3)]">No vendor pitches. No sponsored content.</span> Just actionable knowledge.
            </p>
        </div>

        <div 
            className={`flex flex-col items-center transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <span 
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-slate-400 glass-card border border-white/10 rounded-full select-none cursor-not-allowed"
                >
                    Registration Closed
                </span>
                <a 
                    href="#programme" 
                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-slate-200 glass-card rounded-full hover:text-white transition-all hover:border-brand-500/50 hover:bg-white/5"
                >
                    View Program
                </a>
            </div>
            
            {/* Event Concluded Badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-900/40 border border-white/10 shadow-lg cursor-default select-none">
                <p className="text-sm font-bold text-slate-300 tracking-wide">
                    This event successfully concluded on June 2, 2026
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
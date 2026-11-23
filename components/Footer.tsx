import React, { useEffect, useRef, useState } from 'react';
import { Tag, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10 relative overflow-hidden" ref={sectionRef}>
      {/* Footer glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-brand-900/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-6">About Recruit AI Live</h3>
            <p className="leading-relaxed mb-6 max-w-lg text-slate-400 font-light">
              Recruit AI Live is an independent conference series focused on the practical application of AI in recruitment. Our mission is simple: help recruitment professionals separate signal from noise and turn AI potential into real business results.
            </p>
            <p className="text-brand-400 font-medium mb-8">
              No sponsors means no sales pitches – just honest, expert-led sessions designed for people who actually do the work.
            </p>

            <div className="pt-6 border-t border-white/5">
               <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Mediapartner</h4>
               <a href="https://www.flexnieuws.nl/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-white hover:text-brand-400 transition-colors">
                 <span className="font-semibold text-lg">FlexNieuws</span>
                 <ExternalLink size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
               </a>
            </div>
          </div>
          
          <div 
            className={`flex flex-col justify-center items-start md:items-end transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div id="register" className="glass-card p-8 rounded-3xl border border-white/10 w-full max-w-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-[40px] pointer-events-none"></div>
                
                <div className="text-center mb-6 relative z-10">
                    <h4 className="text-white font-bold text-2xl mb-2">Event Concluded</h4>
                    <p className="text-sm text-slate-400">Registrations are closed as the event took place on June 2, 2026.</p>
                </div>

                <div className="space-y-3 mb-8 relative z-10">
                    {/* Tier 1 - Expired */}
                    <div className="flex justify-between items-center p-3 px-4 rounded-xl bg-white/5 border border-white/5 opacity-50 transition-opacity">
                        <div>
                            <p className="text-slate-500 font-medium text-sm line-through">Super Early Bird</p>
                            <p className="text-xs text-slate-600">Ended March 14</p>
                        </div>
                        <p className="text-lg font-semibold text-slate-600 line-through">219 <span className="text-sm font-normal">euro</span></p>
                    </div>
                    
                    {/* Tier 2 - Expired */}
                    <div className="flex justify-between items-center p-3 px-4 rounded-xl bg-white/5 border border-white/5 opacity-50 transition-opacity">
                        <div>
                            <p className="text-slate-500 font-medium text-sm line-through">Early Bird</p>
                            <p className="text-xs text-slate-600">Ended April 14</p>
                        </div>
                        <p className="text-lg font-semibold text-slate-600 line-through">239 <span className="text-sm font-normal">euro</span></p>
                    </div>
                    
                    {/* Tier 3 - Expired */}
                    <div className="flex justify-between items-center p-3 px-4 rounded-xl bg-white/5 border border-white/5 opacity-50 transition-opacity">
                        <div>
                            <p className="text-slate-500 font-medium text-sm line-through">Regular</p>
                            <p className="text-xs text-slate-600">Ended May 15</p>
                        </div>
                        <p className="text-lg font-semibold text-slate-600 line-through">259 <span className="text-sm font-normal">euro</span></p>
                    </div>
                    
                    {/* Tier 4 - Expired */}
                    <div className="flex justify-between items-center p-3 px-4 rounded-xl bg-white/5 border border-white/5 opacity-50 transition-opacity">
                        <div>
                            <p className="text-slate-500 font-medium text-sm line-through">Late / Last Minute</p>
                            <p className="text-xs text-slate-600">Ended June 2</p>
                        </div>
                        <p className="text-lg font-semibold text-slate-600 line-through">279 <span className="text-sm font-normal">euro</span></p>
                    </div>
                </div>

                <span className="block text-center w-full py-4 bg-white/5 border border-white/10 text-slate-400 font-bold rounded-xl select-none cursor-not-allowed relative z-10">
                    Registration Closed
                </span>
                <p className="text-center text-xs text-slate-500 mt-4 relative z-10">All prices excl. VAT</p>
            </div>
          </div>
        </div>

        <div className={`border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-6 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm text-slate-500">© 2026 Recruit AI Live. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
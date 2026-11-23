import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Audience: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const attendees = [
    "Agency owners and directors looking to future-proof their business",
    "Senior recruiters and team leads ready to level up their skills",
    "Operations managers exploring AI-powered efficiency gains",
    "Anyone tired of generic AI hype and hungry for real-world applications"
  ];

  return (
    <section id="who" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Splashes */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className={`lg:w-1/2 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Who should attend</h2>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed font-light">
                Recruit AI Live is designed for recruitment agency professionals who make strategic decisions. 
                Whether you're running a boutique agency or leading a large recruitment team, you'll leave with concrete strategies tailored to agency life.
                </p>
                
                <div className="space-y-5">
                {attendees.map((item, index) => (
                    <div 
                        key={index} 
                        className={`flex items-start gap-4 group transition-all duration-700 ease-out`}
                        style={{ 
                            transitionDelay: `${500 + (index * 100)}ms`,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                        }}
                    >
                    <div className="mt-1 p-1 rounded-full bg-brand-500/20 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="text-slate-200 font-medium">{item}</span>
                    </div>
                ))}
                </div>
            </div>
            
            <div className={`lg:w-1/2 relative transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 to-purple-500/20 rounded-3xl transform rotate-3 blur-md"></div>
                <img 
                src="https://picsum.photos/seed/audience/800/600" 
                alt="Engaged audience at a conference" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity hover:scale-[1.02] duration-500"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
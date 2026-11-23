import React, { useEffect, useRef, useState } from 'react';
import { Users, Lightbulb, Target, Zap } from 'lucide-react';

const Features: React.FC = () => {
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

  const features = [
    {
      icon: <Users className="w-8 h-8 text-brand-300" />,
      title: "Focused learning & connection",
      description: "An afternoon of focused learning and meaningful connections with fellow recruitment leaders."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-brand-300" />,
      title: "Four expert sessions",
      description: "Practitioners sharing implementation stories covering sourcing, automation, candidate engagement, and business development."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-300" />,
      title: "Practical frameworks",
      description: "Frameworks you can apply immediately, whether you're just exploring AI or already scaling it across your team."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-300" />,
      title: "Actionable insights",
      description: "Whether you are a novice or advanced at using AI in your work, you’ll get actionable insights you can implement tomorrow."
    }
  ];

  return (
    <section id="expect" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">What to expect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent mx-auto rounded-full opacity-80 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`glass-card p-10 rounded-[2rem] group cursor-default transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-18 h-18 p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center group-hover:bg-brand-500/20 group-hover:border-brand-500/40 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-500">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors drop-shadow-md">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light group-hover:text-slate-300 transition-colors">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React, { useState, useEffect, useRef } from 'react';
import { Clock, ChevronDown, ChevronUp, Star } from 'lucide-react';

interface ScheduleItem {
    time: string;
    title: string;
    subtitle: string;
    type: string;
    details?: {
        heading: string;
        takeaways: string[];
    };
}

const Schedule: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scheduleItems: ScheduleItem[] = [
    { time: "12:00", title: "Doors open", subtitle: "Lunch & networking", type: "break" },
    { time: "13:00", title: "Welcome & opening", subtitle: "", type: "session" },
    { 
        time: "13:10", 
        title: "AI: Evolution or Revolution?", 
        subtitle: "Bas van de Haterd", 
        type: "session",
        details: {
            heading: "Is AI just another technology or is it changing the world?",
            takeaways: [
                "The latest AI developments and the impact on society",
                "The speed of change and the expectation for the near future",
                "The implications for the labor market in general and the talents that will become more valuable",
                "The impact on talent acquisition and the possibilities of identifying talent"
            ]
        }
    },
    { 
        time: "13:45", 
        title: "Stop buying AI tools", 
        subtitle: "Leandro Gomes da Silva", 
        type: "session",
        details: {
            heading: "Most agencies use AI tools. Few see results. Work increases instead of disappearing. The problem is not the tools. The problem is where you start and who owns it.",
            takeaways: [
                "How to identify the right problems to solve with AI, and in what order",
                "What the person who owns AI inside your agency actually looks like",
                "Why the “talent engineer” model from big tech fails in agencies",
                "How to measure results so you can justify the investment"
            ]
        }
    },
    { time: "14:20", title: "Coffee break & networking", subtitle: "Generous time to connect with peers", type: "break" },
    { 
        time: "15:10", 
        title: "SEO is dead. GEO is next.", 
        subtitle: "Bryan Peereboom", 
        type: "session",
        details: {
            heading: "Candidates no longer search for jobs. They ask ChatGPT, Perplexity or Copilot. These tools give one answer. You are in that answer, or you are invisible.",
            takeaways: [
                "Why AI search changes how candidates discover employers",
                "How AI tools decide which companies they recommend",
                "Why careers pages and job ads barely influence AI answers",
                "What recruiters can change tomorrow to stay visible in AI search"
            ]
        }
    },
    { 
        time: "15:45", 
        title: "The gap between you and your competitor? Setup and agents.", 
        subtitle: "Marcel van der Meer", 
        type: "session",
        details: {
            heading: "Most agencies use AI tools. Few see results. Work increases instead of disappearing. That is not an AI problem. That is a setup problem.",
            takeaways: [
                "Why your competitor is better at business development. And how to solve this with the right setup and agents.",
                "The first thing to fix before you automate anything (most agencies skip this and fail)",
                "Your database has thousands of candidates. How many are still accurate? One agent can find out this week.",
                "Why your most tech savvy recruiter should build systems, not place candidates."
            ]
        }
    },
    { time: "16:20", title: "Closing remarks & networking drinks", subtitle: "", type: "session" },
    { time: "16:45", title: "End of program", subtitle: "", type: "end" },
  ];

  return (
    <section id="programme" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Program</h2>
          <p className="text-slate-400 text-lg">A tightly packed afternoon of insights and networking.</p>
        </div>

        <div className="relative">
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 transform md:-translate-x-1/2"></div>
          
          {/* Animated Progress Line - Draws from top to bottom */}
          <div 
            className={`absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-400 to-transparent transform md:-translate-x-1/2 transition-all ease-linear`}
            style={{ 
                height: isVisible ? '100%' : '0%', 
                transitionDuration: '1500ms'
            }}
          ></div>

          <div className="space-y-8 relative z-10">
            {scheduleItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot - Animated Scale Pop-in */}
                <div 
                    className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full z-10 shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${item.type === 'break' ? 'bg-slate-800 border-2 border-slate-600 top-6 md:top-auto' : 'bg-brand-500 border-2 border-white top-6 md:top-auto'}`}
                    style={{
                        transform: isVisible ? 'translateX(-50%) scale(1)' : 'translateX(-50%) scale(0)',
                        transitionDelay: `${200 + (index * 150)}ms` 
                    }}
                ></div>

                {/* Time Display - Slide in towards center */}
                <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div 
                    className={`hidden md:block transition-all duration-700 ease-out`}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : (index % 2 === 0 ? 'translateX(20px)' : 'translateX(-20px)'),
                        transitionDelay: `${300 + (index * 150)}ms`
                    }}
                  >
                     <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold tracking-wide glass-panel hover:bg-white/10 transition-colors ${item.type === 'break' ? 'text-slate-400' : 'text-brand-300 border-brand-500/20'}`}>
                        <Clock className="w-3.5 h-3.5 mr-2" />
                        {item.time}
                     </span>
                  </div>
                </div>

                {/* Content Card - Slide up and fade in */}
                <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div 
                    className={`p-6 rounded-2xl glass-card transition-all duration-700 ease-out ${item.type === 'break' ? 'border-white/5 opacity-80' : ''} ${item.details ? 'cursor-pointer hover:border-brand-400/30 hover:shadow-[0_0_25px_rgba(14,165,233,0.15)] hover:-translate-y-1' : ''}`}
                    onClick={() => item.details && toggleExpand(index)}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                        transitionDelay: `${400 + (index * 150)}ms`
                    }}
                  >
                    <div className="md:hidden mb-3">
                         <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-white/10 text-slate-300">
                            <Clock className="w-3 h-3 mr-1" />
                            {item.time}
                         </span>
                    </div>
                    
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className={`text-lg font-bold ${item.type === 'break' ? 'text-slate-400' : 'text-white'}`}>{item.title}</h3>
                            {item.subtitle && <p className={`mt-1 font-medium ${item.type === 'break' ? 'text-slate-500' : 'text-brand-400'}`}>{item.subtitle}</p>}
                        </div>
                        {item.details && (
                            <button className="text-brand-400 hover:text-brand-300 transition-colors ml-2 mt-1">
                                {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                        )}
                    </div>

                    {/* Expandable Content */}
                    {item.details && (
                         <div 
                         className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                             expandedIndex === index ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                         }`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                    <h4 className="text-brand-300 font-semibold mb-3 text-sm flex items-center gap-2">
                                        <Star size={14} className="fill-brand-300/20" />
                                        {item.details.heading}
                                    </h4>
                                    <ul className="space-y-2">
                                        {item.details.takeaways.map((takeaway, idx) => (
                                            <li key={idx} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                                                <span className="w-1 h-1 rounded-full bg-slate-500 mt-2 flex-shrink-0"></span>
                                                {takeaway}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
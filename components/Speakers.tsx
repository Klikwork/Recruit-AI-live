import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface Speaker {
  name: string;
  role: string;
  session: string;
  bio: string;
  image: string;
  linkedin: string;
  takeawaysHeading?: string;
  takeaways?: string[];
}

const Speakers: React.FC = () => {
  const [expandedSpeaker, setExpandedSpeaker] = useState<number | null>(null);
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
    setExpandedSpeaker(expandedSpeaker === index ? null : index);
  };

  const speakers: Speaker[] = [
    {
      name: "Bas van de Haterd",
      role: "Author & Speaker",
      session: "AI: Evolution or Revolution?",
      bio: "Bas is a recognized expert in recruitment technology and assessments. He helps organizations leverage AI to make fairer and more efficient hiring decisions, separating true innovation from marketing hype. Talked about this topic globally, from Sydney to Dubai, from Bogota to Berlin and from London to Jaipur.",
      image: "https://media-01.imu.nl/storage/klikwork.com/32015/bas-vd-haterd.jpeg",
      linkedin: "https://www.linkedin.com/in/basvandehaterd/",
      takeawaysHeading: "Is AI just another technology or is it changing the world?",
      takeaways: [
        "The latest AI developments and the impact on society",
        "The speed of change and the expectation for the near future",
        "The implications for the labor market in general and the talents that will become more valuable",
        "The impact on talent acquisition and the possibilities of identifying talent"
      ]
    },
    {
      name: "Leandro Gomes da Silva",
      role: "Head of AI Operations, Nobel",
      session: "Stop buying AI tools",
      bio: "Most people building AI for recruitment have never recruited a day in their life. Leandro Gomes da Silva spent a decade doing it before he touched an AI tool.\n\nHe knows what to automate, what to augment, and what must remain human. As Head of AI Operations at Nobel Recruitment, he applies this every day. Earlier he helped scale companies like Loop Earplugs and Backbase as a TA operator.",
      image: "https://media-01.imu.nl/storage/klikwork.com/32015/1756723439238.jpeg",
      linkedin: "https://www.linkedin.com/in/leandro-gomesdasilva/",
      takeawaysHeading: "Most agencies use AI tools. Few see results. Work increases instead of disappearing. The problem is not the tools. The problem is where you start and who owns it.",
      takeaways: [
        "How to identify the right problems to solve with AI, and in what order",
        "What the person who owns AI inside your agency actually looks like",
        "Why the “talent engineer” model from big tech fails in agencies",
        "How to measure results so you can justify the investment"
      ]
    },
    {
      name: "Bryan Peereboom",
      role: "AI & GEO specialist",
      session: "SEO is dead. GEO is next.",
      bio: "With more than fifteen years in recruitment, Bryan works at the intersection of AI, employer branding and recruitment marketing. He is the founder of Forge35, a strategic AI advisory firm, the Nationale Academie voor AI and AI Rebels. His firm focuses on Generative Engine Optimization (GEO). Bryan is a keynote speaker at national and international events and co-host of the podcast Pretty Fly AI Guys.",
      image: "https://media-01.imu.nl/storage/klikwork.com/32015/bryan.jpeg",
      linkedin: "https://www.linkedin.com/in/bryanpeereboom/",
      takeawaysHeading: "Candidates no longer search for jobs. They ask ChatGPT, Perplexity or Copilot. These tools give one answer. You are in that answer, or you are invisible.",
      takeaways: [
        "Why AI search changes how candidates discover employers",
        "How AI tools decide which companies they recommend",
        "Why careers pages and job ads barely influence AI answers",
        "What recruiters can change tomorrow to stay visible in AI search"
      ]
    },
    {
      name: "Marcel van der Meer",
      role: "AI & automation trainer, Klikwork",
      session: "The gap between you and your competitor? Setup and agents.",
      bio: "Marcel van der Meer, founder of Klikwork Talent Imagineers, has trained thousands of recruiters and supported 500+ companies worldwide. He has spoken on all six continents about AI in recruitment. Most recruitment teams already use AI. Few see results. That is not an AI problem. That is a setup problem. Marcel helps teams identify where time leaks, decide what to fix first, and get support when things break.",
      image: "https://media-01.imu.nl/storage/klikwork.com/32015/marcel-van-der-meer-portret-1105-hr.jpg",
      linkedin: "https://www.linkedin.com/in/marcel-vd-meer/",
      takeawaysHeading: "Most agencies use AI tools. Few see results. Work increases instead of disappearing. That is not an AI problem. That is a setup problem.",
      takeaways: [
        "Why your competitor is better at business development. And how to solve this with the right setup and agents.",
        "The first thing to fix before you automate anything (most agencies skip this and fail)",
        "Your database has thousands of candidates. How many are still accurate? One agent can find out this week.",
        "Why your most tech savvy recruiter should build systems, not place candidates."
      ]
    }
  ];

  return (
    <section id="speakers" className="py-24 relative overflow-hidden" ref={sectionRef}>
       <div className="absolute left-0 bottom-0 w-full h-2/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-0"></div>
       <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px]"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-xl">Meet the speakers</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Industry veterans and innovators who are actually doing the work, not just talking about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className={`glass-card rounded-[2rem] overflow-hidden group flex flex-col h-full border border-white/5 hover:border-brand-500/30 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-96 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-brand-900/10 mix-blend-overlay z-10"></div>
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{speaker.name}</h3>
                    <p className="text-brand-300 font-medium tracking-wide text-sm uppercase">{speaker.role}</p>
                </div>
              </div>
              
              <div className="p-8 pt-6 flex flex-col flex-grow relative">
                <div className="mb-4 relative z-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3">
                        <span className="text-xs font-bold tracking-wider text-brand-200 uppercase">Session</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mt-1 group-hover:text-brand-300 transition-colors">{speaker.session}</h4>
                </div>

                {/* Harmonica / Accordion for Takeaways */}
                {speaker.takeaways && (
                  <div className="mb-6">
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors text-sm font-medium w-full group/btn"
                    >
                      <Sparkles size={16} className={expandedSpeaker === index ? "fill-brand-400/20" : ""} />
                      <span>{expandedSpeaker === index ? "Hide Key Takeaways" : "View Key Takeaways"}</span>
                      {expandedSpeaker === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    <div 
                      className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                        expandedSpeaker === index ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                          {speaker.takeawaysHeading && (
                            <h5 className="text-brand-300 font-semibold mb-3 text-sm">{speaker.takeawaysHeading}</h5>
                          )}
                          <ul className="space-y-2">
                            {speaker.takeaways.map((takeaway, idx) => (
                              <li key={idx} className="text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-brand-400 mt-2 flex-shrink-0"></span>
                                {takeaway}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light border-l-2 border-white/10 pl-4 group-hover:border-brand-500/50 transition-colors whitespace-pre-line">
                  {speaker.bio}
                </div>

                <div className="flex items-center pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors mt-auto">
                    <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium group/link hover:scale-105 origin-left">
                        <Linkedin size={16} className="group-hover/link:text-brand-400 transition-colors duration-300" /> 
                        <span className="relative">
                            Connect on LinkedIn
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-400 transition-all duration-300 group-hover/link:w-full"></span>
                        </span>
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
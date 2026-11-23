import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Coffee, Utensils, MessageSquare } from 'lucide-react';

const Details: React.FC = () => {
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
    <section id="practical" className="py-24 relative" ref={sectionRef}>
       {/* Background Glow */}
       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Practical Information</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Date & Time */}
            <div 
                className={`glass-card p-10 rounded-3xl hover:bg-white/10 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: '0ms' }}
            >
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center mb-6">
                    <Calendar className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Date & Time</h3>
                <p className="text-slate-300 text-lg">Tuesday, June 2, 2026</p>
                <div className="flex items-center mt-3 text-brand-200">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-semibold">12:00 – 16:45</span>
                </div>
            </div>

            {/* Location */}
             <div 
                className={`glass-card p-10 rounded-3xl hover:bg-white/10 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: '150ms' }}
             >
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Location</h3>
                <p className="text-slate-300 font-semibold text-lg">Van der Valk Hotel Breukelen</p>
                <p className="text-slate-400 mt-1">Stationsweg 91, 3621 LK Breukelen</p>
                <p className="text-slate-500 text-sm mt-1">The Netherlands</p>
            </div>

            {/* Included */}
            <div 
                className={`glass-card p-10 rounded-3xl hover:bg-white/10 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: '300ms' }}
            >
                <div className="w-14 h-14 bg-brand-500/10 rounded-2xl border border-brand-500/20 flex items-center justify-center mb-6">
                    <Coffee className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
                <ul className="space-y-4 text-slate-300">
                    <li className="flex items-center"><Utensils className="w-5 h-5 mr-3 text-brand-400" /> Delicious Lunch</li>
                    <li className="flex items-center"><Coffee className="w-5 h-5 mr-3 text-brand-400" /> Coffee & Refreshments</li>
                    <li className="flex items-center"><MessageSquare className="w-5 h-5 mr-3 text-brand-400" /> All 4 Speaker Sessions</li>
                </ul>
            </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block glass-panel rounded-full px-8 py-4">
                <span className="text-slate-400">Language: </span>
                <span className="font-bold text-white ml-2">English</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
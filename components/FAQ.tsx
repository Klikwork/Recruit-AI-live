import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-slate-200 group-hover:text-white transition-colors pr-8">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-400 flex-shrink-0 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-slate-300 flex-shrink-0 transition-colors" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-slate-400 leading-relaxed font-light">{answer}</div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
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

  const faqs = [
    {
      question: "What is Recruit AI Live?",
      answer: "Recruit AI Live is an independent conference focused on the practical application of AI in recruitment. Four expert speakers share real-world insights, proven strategies, and honest lessons learned – no vendor pitches, no sponsored content."
    },
    {
      question: "Can I still buy tickets?",
      answer: (
        <div>
          <p className="mb-2">No. The Recruit AI Live event has concluded as of June 2, 2026, and registrations are now permanently closed.</p>
          <p className="mb-2 font-mono text-xs text-slate-500">For historical reference, the ticket pricing tiers were (prices excl. VAT):</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-500">
            <li className="line-through"><span className="font-medium">219 euro</span> — Super Early Bird (Ended March 14)</li>
            <li className="line-through"><span className="font-medium">239 euro</span> — Early Bird (Ended April 14)</li>
            <li className="line-through"><span className="font-medium">259 euro</span> — Regular (Ended May 15)</li>
            <li className="line-through"><span className="font-medium">279 euro</span> — Late / Last Minute (Ended June 2)</li>
          </ul>
        </div>
      )
    },
    {
      question: "Who is this event for?",
      answer: "Agency owners, directors, team leads, and senior recruiters who want to understand how AI can improve their recruitment operations. Whether you're just starting to explore AI or already implementing it, you'll find valuable takeaways."
    },
    {
      question: "Why is the event in English?",
      answer: "Amsterdam has a large English-speaking recruitment community. Hosting the event in English ensures everyone can fully participate."
    },
    {
      question: "What's included in the ticket price?",
      answer: "Your ticket includes lunch, all four speaker sessions, coffee break, and networking opportunities. Everything you need for an afternoon of learning and connection."
    },
    {
      question: "Is there parking available?",
      answer: "Yes. Van der Valk Hotel Breukelen has free parking for all guests."
    },
    {
      question: "How do I get there by public transport?",
      answer: "The hotel is just a 2-minute walk from Breukelen train station. Direct trains run from Amsterdam Centraal (25 min) and Utrecht Centraal (10 min)."
    },
    {
      question: "Will the sessions be recorded?",
      answer: "No. Recruit AI Live is a live-only experience. This allows our speakers to share openly and encourages genuine conversation."
    },
    {
      question: "I'm a vendor – can I sponsor or exhibit?",
      answer: "Recruit AI Live is deliberately sponsor-free to guarantee unbiased content. We don't offer exhibition space or speaking slots in exchange for payment."
    },
    {
      question: "I'm a vendor – can I buy a ticket?",
      answer: (
        <span>
          Please contact us at <a href="mailto:hello@klikwork.com" className="text-brand-400 hover:text-brand-300 hover:underline">hello@klikwork.com</a>
        </span>
      )
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "No, tickets are non-refundable. However, they are transferable to a colleague. Please contact us at least 7 days before the event to arrange a transfer."
    }
  ];

  return (
    <section id="faq" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-400">Have a question? We're here to help.</p>
        </div>
        <div 
          className={`glass-card rounded-3xl px-8 py-4 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
        <div 
          className={`mt-12 text-center bg-white/5 p-8 rounded-2xl border border-white/5 backdrop-blur-sm transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <p className="text-slate-300">
                Still have questions? Email us at <a href="mailto:hello@klikwork.com" className="text-brand-400 font-semibold hover:text-brand-300 hover:underline">hello@klikwork.com</a>
            </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Events', href: '#events' },
    { name: 'What to expect', href: '#expect' },
    { name: 'Who should attend', href: '#who' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Program', href: '#programme' },
    { name: 'Practical Info', href: '#practical' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-slate-950/60 backdrop-blur-[50px] border-white/10 py-4 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white group">
              Recruit AI <span className="text-brand-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.8)] transition-all group-hover:text-brand-300">Live</span>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
              >
                {link.name}
              </a>
            ))}
            <span
              className="px-6 py-2.5 rounded-full text-sm font-bold text-slate-400 bg-white/5 border border-white/10 select-none cursor-not-allowed"
            >
              Registration Closed
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950/90 backdrop-blur-[50px] border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
             <span
              className="block mt-4 text-center px-3 py-3 text-base font-bold bg-white/5 border border-white/10 text-slate-400 rounded-lg select-none cursor-not-allowed"
            >
              Registration Closed
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
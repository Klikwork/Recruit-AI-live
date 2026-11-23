import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Audience from './components/Audience';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Details from './components/Details';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Audience />
        <Speakers />
        <Schedule />
        <Details />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
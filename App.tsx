import React from 'react';
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import SiteFooter from './components/SiteFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Announcement />
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;

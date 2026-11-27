import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Page: React.FC<{ children: React.ReactNode; initiative?: string }> = ({ children, initiative }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer initiative={initiative} />
  </div>
);

export default Page;

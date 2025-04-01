
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import Hero from '@/components/conference/Hero';
import About from '@/components/conference/About';
import CallForPapers from '@/components/conference/CallForPapers';
import Registration from '@/components/conference/Registration';
import Sponsors from '@/components/conference/Sponsors';
import Contact from '@/components/conference/Contact';
import Footer from '@/components/conference/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CallForPapers />
      <Registration />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

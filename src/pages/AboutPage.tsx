
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import About from '@/components/conference/About';
import Committees from '@/components/conference/Committees';
import Footer from '@/components/conference/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            About The Conference
          </h1>
        </div>
      </div>
      <About />
      <Committees />
      <Footer />
    </div>
  );
};

export default AboutPage;


import React from 'react';
import Navbar from '@/components/conference/Navbar';
import CallForPapers from '@/components/conference/CallForPapers';
import Footer from '@/components/conference/Footer';

const CallForPapersPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            Call For Papers
          </h1>
        </div>
      </div>
      <CallForPapers />
      <Footer />
    </div>
  );
};

export default CallForPapersPage;

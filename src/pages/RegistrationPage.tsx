
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import Registration from '@/components/conference/Registration';
import Footer from '@/components/conference/Footer';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            Registration
          </h1>
        </div>
      </div>
      <Registration />
      <Footer />
    </div>
  );
};

export default RegistrationPage;

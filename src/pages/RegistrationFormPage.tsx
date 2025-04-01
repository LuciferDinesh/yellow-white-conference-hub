
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import RegistrationForm from '@/components/conference/RegistrationForm';
import Footer from '@/components/conference/Footer';

const RegistrationFormPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            Conference Registration
          </h1>
        </div>
      </div>
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default RegistrationFormPage;

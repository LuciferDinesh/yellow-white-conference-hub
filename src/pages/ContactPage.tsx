
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import Contact from '@/components/conference/Contact';
import Footer from '@/components/conference/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            Contact Us
          </h1>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;

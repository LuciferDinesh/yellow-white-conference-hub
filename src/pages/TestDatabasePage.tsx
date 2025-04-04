
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import TestDatabaseConnection from '@/components/conference/TestDatabaseConnection';
import Footer from '@/components/conference/Footer';

const TestDatabasePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            Database Connection Setup
          </h1>
          <p className="text-center mt-4 text-conference-darkgray max-w-2xl mx-auto">
            Configure and test your MilesWeb database connection for the conference website
          </p>
        </div>
      </div>
      <div className="conference-container py-12 flex-grow">
        <TestDatabaseConnection />
      </div>
      <Footer />
    </div>
  );
};

export default TestDatabasePage;

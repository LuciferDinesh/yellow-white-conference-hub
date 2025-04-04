
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import TestDatabaseConnection from '@/components/conference/TestDatabaseConnection';
import Footer from '@/components/conference/Footer';

const TestDatabasePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            Database Connection Test
          </h1>
        </div>
      </div>
      <div className="conference-container py-12">
        <TestDatabaseConnection />
      </div>
      <Footer />
    </div>
  );
};

export default TestDatabasePage;

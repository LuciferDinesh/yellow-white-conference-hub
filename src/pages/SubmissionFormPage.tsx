
import React from 'react';
import Navbar from '@/components/conference/Navbar';
import SubmissionForm from '@/components/conference/SubmissionForm';
import Footer from '@/components/conference/Footer';

const SubmissionFormPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-16 bg-conference-yellow">
        <div className="conference-container">
          <h1 className="text-4xl md:text-5xl font-bold text-conference-darkgray text-center">
            Paper Submission
          </h1>
        </div>
      </div>
      <SubmissionForm />
      <Footer />
    </div>
  );
};

export default SubmissionFormPage;

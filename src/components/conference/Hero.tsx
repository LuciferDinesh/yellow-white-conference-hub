
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-conference-yellow to-amber-100">
      <div className="conference-container">
        <div className="py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-conference-darkgray mb-6">
            International Conference on Electrical & Electronics Systems
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
            June 15-18, 2025 • Virtual & In-Person
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/registration" className="conference-btn-primary">
              Register Now
            </Link>
            <Link to="/call-for-papers" className="conference-btn-secondary">
              Submit Paper
            </Link>
          </div>
          <div className="mt-12 bg-white/70 backdrop-blur-sm p-4 rounded-lg inline-block">
            <p className="text-lg font-semibold text-conference-darkgray">
              Abstract Submission Deadline: December 15, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

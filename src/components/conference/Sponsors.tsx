
import React from 'react';

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 bg-conference-lightgray">
      <div className="conference-container">
        <h2 className="section-title text-center">Our Sponsors</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Sponsor placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="h-20 w-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-medium">Sponsor Logo</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-700 mt-8">
            Interested in becoming a sponsor? 
            <a href="/contact" className="text-conference-darkgray font-medium underline ml-1">
              Contact us
            </a> 
            for sponsorship opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

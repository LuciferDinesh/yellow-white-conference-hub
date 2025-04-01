
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="conference-container">
        <h2 className="section-title text-center">About The Conference</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            The International Conference on Electrical & Electronics Systems (ICEES-2025) 
            is a premier forum for the presentation of new advances and research results 
            in the fields of Electrical and Electronics Engineering. The conference will 
            bring together leading researchers, engineers and scientists from around the 
            world.
          </p>
          
          <p className="text-lg text-gray-700 mb-6">
            ICEES-2025 aims to foster collaboration, innovation, and the exchange of 
            ideas in various disciplines including power systems, control systems, 
            telecommunications, signal processing, microelectronics, and emerging 
            technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-conference-lightgray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">Key Dates</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Abstract Submission:</span>
                  <span>December 15, 2024</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Acceptance Notification:</span>
                  <span>February 10, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Camera-Ready Paper:</span>
                  <span>March 15, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Early Registration:</span>
                  <span>April 30, 2025</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Conference Dates:</span>
                  <span>June 15-18, 2025</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-conference-lightgray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">Conference Themes</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-conference-yellow mr-2"></div>
                  <span>Power Systems & Smart Grids</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-conference-yellow mr-2"></div>
                  <span>Control Systems & Automation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-conference-yellow mr-2"></div>
                  <span>Signal Processing & Communications</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-conference-yellow mr-2"></div>
                  <span>VLSI Design & Microelectronics</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-conference-yellow mr-2"></div>
                  <span>Renewable Energy Technologies</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-conference-yellow mr-2"></div>
                  <span>AI & Machine Learning Applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

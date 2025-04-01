
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Check } from 'lucide-react';

const CallForPapers = () => {
  return (
    <section id="call-for-papers" className="py-16 bg-conference-lightgray">
      <div className="conference-container">
        <h2 className="section-title text-center">Call For Papers</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            ICEES-2025 invites original research contributions in all areas of electrical and 
            electronics engineering. Accepted papers will be published in the conference proceedings 
            and selected papers will be considered for publication in special issues of reputed journals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileText size={36} className="mx-auto mb-4 text-conference-yellow" />
              <h3 className="text-xl font-bold text-conference-darkgray mb-2">Submit Abstract</h3>
              <p className="text-gray-600">Prepare a 300-word abstract following the template</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Calendar size={36} className="mx-auto mb-4 text-conference-yellow" />
              <h3 className="text-xl font-bold text-conference-darkgray mb-2">Peer Review</h3>
              <p className="text-gray-600">All submissions undergo double-blind peer review</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Check size={36} className="mx-auto mb-4 text-conference-yellow" />
              <h3 className="text-xl font-bold text-conference-darkgray mb-2">Publication</h3>
              <p className="text-gray-600">Accepted papers appear in conference proceedings</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-conference-darkgray mb-6 text-center">Paper Submission Topics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <TopicItem>Power Generation, Transmission & Distribution</TopicItem>
              <TopicItem>Smart Grids & Renewable Energy Integration</TopicItem>
              <TopicItem>Control Systems & Industrial Automation</TopicItem>
              <TopicItem>Embedded Systems & IoT Applications</TopicItem>
              <TopicItem>Signal Processing & Machine Learning</TopicItem>
              <TopicItem>Wireless Communications & Networks</TopicItem>
              <TopicItem>VLSI Design & Microelectronics</TopicItem>
              <TopicItem>Antenna Design & RF Engineering</TopicItem>
              <TopicItem>Electric Vehicles & Transportation</TopicItem>
              <TopicItem>Power Electronics & Drives</TopicItem>
              <TopicItem>Biomedical Electronics & Instrumentation</TopicItem>
              <TopicItem>Emerging Trends in Electrical Engineering</TopicItem>
            </div>
            
            <div className="mt-10 text-center">
              <Link to="/submission-form" className="conference-btn-primary">
                Submit Your Paper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TopicItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center">
    <div className="h-3 w-3 rounded-full bg-conference-yellow mr-3"></div>
    <span className="text-gray-700">{children}</span>
  </div>
);

export default CallForPapers;


import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-conference-yellow">
      <div className="conference-container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">ICEES-2025</h3>
              <p className="text-gray-700">
                International Conference on Electrical & Electronics Systems
              </p>
              <p className="text-gray-700 mt-2">
                June 15-18, 2025
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-700 hover:text-conference-darkgray transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/call-for-papers" className="text-gray-700 hover:text-conference-darkgray transition-colors">
                    Call for Papers
                  </Link>
                </li>
                <li>
                  <Link to="/registration" className="text-gray-700 hover:text-conference-darkgray transition-colors">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link to="/committees" className="text-gray-700 hover:text-conference-darkgray transition-colors">
                    Committees
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">Important Dates</h3>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  <span className="font-medium">Abstract Submission:</span> Dec 15, 2024
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Notification:</span> Feb 10, 2025
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Early Registration:</span> Apr 30, 2025
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Conference:</span> Jun 15-18, 2025
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail size={18} className="text-conference-darkgray mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">info@icees2025.org</span>
                </li>
                <li className="flex items-start">
                  <Phone size={18} className="text-conference-darkgray mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="text-conference-darkgray mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Conference Secretariat, University Campus, City, Country
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-400 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} ICEES-2025. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-conference-darkgray transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 hover:text-conference-darkgray transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

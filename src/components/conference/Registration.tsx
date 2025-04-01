
import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <section id="registration" className="py-16 bg-white">
      <div className="conference-container">
        <h2 className="section-title text-center">Registration</h2>
        <div className="section-divider"></div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            Registration for ICEES-2025 includes access to all technical sessions, conference 
            materials, coffee breaks, and the conference banquet. Please register early to 
            secure your participation.
          </p>
          
          <div className="bg-conference-lightgray p-8 rounded-lg shadow-md mb-12">
            <h3 className="text-2xl font-bold text-conference-darkgray mb-6 text-center">Registration Fees</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-conference-yellow">
                    <th className="py-4 px-6 text-left text-conference-darkgray">Category</th>
                    <th className="py-4 px-6 text-center text-conference-darkgray">Early Bird<br/>(Before April 30, 2025)</th>
                    <th className="py-4 px-6 text-center text-conference-darkgray">Regular<br/>(After April 30, 2025)</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Academic Delegates</td>
                    <td className="py-4 px-6 text-center">$350</td>
                    <td className="py-4 px-6 text-center">$400</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Industry Professionals</td>
                    <td className="py-4 px-6 text-center">$450</td>
                    <td className="py-4 px-6 text-center">$500</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Students</td>
                    <td className="py-4 px-6 text-center">$200</td>
                    <td className="py-4 px-6 text-center">$250</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Virtual Attendance</td>
                    <td className="py-4 px-6 text-center">$150</td>
                    <td className="py-4 px-6 text-center">$200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">Registration Includes</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Access to all technical sessions</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Conference kit and proceedings</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Coffee breaks and lunches</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Welcome reception</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Conference banquet</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Certificate of participation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-conference-darkgray mb-4">Payment Methods</h3>
              <p className="text-gray-700 mb-4">
                Registration payments can be made through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">1</span>
                  </div>
                  <span className="text-gray-700">Credit/Debit Card (Visa, MasterCard, American Express)</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">2</span>
                  </div>
                  <span className="text-gray-700">Bank Transfer</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-conference-yellow flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                    <span className="text-white font-bold text-xs">3</span>
                  </div>
                  <span className="text-gray-700">PayPal</span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                Payment details will be provided in the registration form.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/registration-form" className="conference-btn-primary">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

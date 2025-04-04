
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set the conference date - April 9-10, 2025
    const conferenceDate = new Date('April 9, 2025 00:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = conferenceDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Updated background image more relevant to biomedical engineering */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=60')",
          backgroundBlendMode: "overlay"
        }}
      />
      
      {/* Secondary navigation */}
      <div className="relative z-10 flex justify-between items-center px-4 md:px-12 py-4">
        <div className="flex items-center">
          {/* College logo */}
          <img 
            src="/lovable-uploads/57101aa7-e9a4-42dc-a10c-79652d8a078e.png" 
            alt="College Logo" 
            className="h-16 md:h-20"
          />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <SecondaryNavLink href="/call-for-papers">Call For Papers</SecondaryNavLink>
          <SecondaryNavLink href="/registration">Registration</SecondaryNavLink>
          <SecondaryNavLink href="/committees">Committees</SecondaryNavLink>
          <SecondaryNavLink href="/speakers">Speakers</SecondaryNavLink>
          <SecondaryNavLink href="/contact">Contact Us</SecondaryNavLink>
        </nav>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 md:px-0 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="mb-6">
          <p className="text-conference-lightyellow text-xl md:text-2xl font-semibold mb-2">ANRF Sponsored</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">International Conference on</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient-green">
            Biomedical Engineering: AI and ML<br />in Non Invasive Techniques
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            ICBEAIMLNIT-2K25
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8">
          <span className="font-bold">9<sup>th</sup> - 10<sup>th</sup></span> April 2025
        </p>
        
        <Link to="/registration">
          <Button 
            className="bg-conference-lightyellow hover:bg-amber-400 text-conference-darkgray font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Register Now
          </Button>
        </Link>
        
        {/* Countdown timer */}
        <div className="mt-12 md:mt-16 max-w-xl mx-auto">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6">
            <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
              <CountdownItem value={timeLeft.days.toString().padStart(2, '0')} label="Days" />
              <CountdownItem value={timeLeft.hours.toString().padStart(2, '0')} label="Hours" />
              <CountdownItem value={timeLeft.minutes.toString().padStart(2, '0')} label="Minutes" />
              <CountdownItem value={timeLeft.seconds.toString().padStart(2, '0')} label="Seconds" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
        borderTopLeftRadius: '50% 100%', 
        borderTopRightRadius: '50% 100%' 
      }}></div>
      
      {/* Event details section - Updated styling */}
      <div className="relative bg-white text-gray-800 pt-20 pb-16">
        <div className="conference-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="bg-conference-yellow p-4 rounded-lg mr-4 flex items-center justify-center">
                <MapPin size={28} className="text-conference-darkgray" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-conference-darkgray">Where is the Event:</h3>
                <p className="text-gray-600">
                  University Campus, Green Fields,<br />
                  District, State, Country.<br />
                  Pincode: 000 000.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-conference-yellow p-4 rounded-lg mr-4 flex items-center justify-center">
                <CalendarDays size={28} className="text-conference-darkgray" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-conference-darkgray">When is the Event:</h3>
                <p className="text-gray-600">9th & 10th April 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper components
const SecondaryNavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link to={href} className="text-white hover:text-conference-lightyellow font-medium transition-colors">
    {children}
  </Link>
);

const CountdownItem = ({ value, label }: { value: string, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl md:text-5xl font-bold text-conference-lightyellow">{value}</div>
    <div className="text-sm md:text-base text-gray-200">{label}</div>
  </div>
);

export default Hero;

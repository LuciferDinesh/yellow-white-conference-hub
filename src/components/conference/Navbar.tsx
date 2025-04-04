
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-conference-yellow border-b border-amber-400 shadow-sm z-50">
      <div className="conference-container">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="font-bold text-2xl text-conference-darkgray">
            ICEES-2025
          </Link>
          
          {/* Desktop Navigation - Primary Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/call-for-papers">Call for Papers</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            <NavLink to="/committees">Committees</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-conference-darkgray p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 px-2 bg-conference-yellow border-t border-amber-300">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
              <MobileNavLink to="/call-for-papers" onClick={() => setIsMenuOpen(false)}>Call for Papers</MobileNavLink>
              <MobileNavLink to="/registration" onClick={() => setIsMenuOpen(false)}>Registration</MobileNavLink>
              <MobileNavLink to="/committees" onClick={() => setIsMenuOpen(false)}>Committees</MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-conference-darkgray font-medium hover:text-gray-700 transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }: { to: string, children: React.ReactNode, onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-conference-darkgray font-medium hover:text-gray-700 transition-colors block px-3 py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;

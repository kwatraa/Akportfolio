import React, { useState } from 'react';

function Navigation({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-md z-50 backdrop-filter backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
          AK
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
            <a 
              key={section}
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-800 transition-all duration-300`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown with smooth transition */}
      <div 
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-2">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
            <a 
              key={section}
              href={`#${section}`}
              className={`block py-2 ${
                activeSection === section ? 'text-blue-600' : 'text-gray-600'
              } hover:text-blue-800 hover:pl-1 transition-all duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
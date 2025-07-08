import React from 'react';

function Navigation({ activeSection }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 shadow-md z-50 backdrop-filter backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300">
          AK
        </div>
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
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
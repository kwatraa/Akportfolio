import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <span className="text-blue-500">A</span>ditya <span className="text-blue-500">K</span>watra
          </div>
          <div className="flex space-x-8">
            {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map(section => (
              <a 
                key={section}
                href={`#${section}`}
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-sm"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aditya Kwatra. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
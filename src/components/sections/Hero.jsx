import React, { useState } from 'react';
import Contact from './Contact';

function Hero() {
  const [button, setButton] = useState('');

  const handleButton = () => {
    // Scroll to the contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }

  const handleViewProjects = () => {
    // Scroll to the projects section
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="grid-background"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 fade-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Aditya Kwatra
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 typewriter">
              Software Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Experienced in JavaScript, React, Next.js, TypeScript, and Redux, with a strong focus on performance optimization, state management, and scalable architecture.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-all duration-300 transform hover:scale-105"
                onClick={handleViewProjects}
              >
                View Projects
              </button>
              <button 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded transition-all duration-300 transform hover:scale-105" 
                onClick={handleButton}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 fade-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AK</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="text-gray-500 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
        >
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}

export default Hero;
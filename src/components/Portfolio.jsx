import React, { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  
  // Sections refs for scroll animations
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  // Handle custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      threshold: 0.3,
    };
    
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          entry.target.classList.add('in-view');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [isLoading]);
  
  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white">
        <div className="text-5xl font-bold mb-8 animate-pulse">AK</div>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-loading-bar"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="font-sans text-gray-900 bg-gray-100 min-h-screen overflow-x-hidden">
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`
        }}
      />
      
      <Navigation activeSection={activeSection} />
      <Hero />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default Portfolio;
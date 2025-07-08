
import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          Recent Projects
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project-card">
            <div className="project-image">
              <div className="h-48 bg-blue-100 rounded-t-lg flex items-center justify-center">
                <i className="fas fa-home text-5xl text-blue-500"></i>
              </div>
              <div className="project-overlay">
                <div className="flex space-x-4">
                  <a href="#" className="project-link">
                    <i className="fas fa-link"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Real Estate Crime Risk Intelligence Platform</h3>
              <p className="text-gray-700 mb-4">A Streamlit dashboard utilizing Pandas, Plotly, and custom risk algorithms for data-driven real estate risk assessment.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Streamlit</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">Plotly</span>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <div className="h-48 bg-purple-100 rounded-t-lg flex items-center justify-center">
                <i className="fas fa-robot text-5xl text-purple-500"></i>
              </div>
              <div className="project-overlay">
                <div className="flex space-x-4">
                  <a href="#" className="project-link">
                    <i className="fas fa-link"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Coding Q&A Platform</h3>
              <p className="text-gray-700 mb-4">Custom LLM using Hugging Face, deployed via Ollama, enhancing search query responses for Medium and Stack Overflow.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Hugging Face</span>
                <span className="tech-tag">Ollama</span>
                <span className="tech-tag">Streamlit</span>
                <span className="tech-tag">LLM</span>
              </div>
            </div>
          </div>
          
          
          
          <div className="project-card">
            <div className="project-image">
              <div className="h-48 bg-indigo-100 rounded-t-lg flex items-center justify-center">
                <i className="fas fa-gamepad text-5xl text-indigo-500"></i>
              </div>
              <div className="project-overlay">
                <div className="flex space-x-4">
                  <a href="#" className="project-link">
                    <i className="fas fa-link"></i>
                  </a>
                  <a href="#" className="project-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Interactive Game-Inspired Portfolio</h3>
              <p className="text-gray-700 mb-4">Built an interactive, game-inspired portfolio that transforms resume browsing into an engaging journey with responsive design, theme-switching, and smooth animations.</p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Tailwind CSS</span>
                <span className="tech-tag">Framer Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;

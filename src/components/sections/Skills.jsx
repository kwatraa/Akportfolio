import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-100 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          Skills
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-code text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <ul className="space-y-2">
              <li className="skill-item">JavaScript</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">HTML5</li>
              <li className="skill-item">CSS3</li>
              <li className="skill-item">Python</li>
              <li className="skill-item">Bash</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-layer-group text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <ul className="space-y-2">
              <li className="skill-item">React JS</li>
              <li className="skill-item">Next JS</li>
              <li className="skill-item">Node JS</li>
              <li className="skill-item">Vue JS</li>
              <li className="skill-item">GraphQL</li>
              <li className="skill-item">Angular JS</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-tools text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
            <ul className="space-y-2">
              <li className="skill-item">Git & GitHub</li>
              <li className="skill-item">REST API</li>
              <li className="skill-item">AWS</li>
              <li className="skill-item">CI/CD</li>
              <li className="skill-item">Figma</li>
              <li className="skill-item">JIRA</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Technical Proficiency</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="progress-container">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Frontend Development</span>
                <span className="text-blue-600 font-semibold">95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            
            <div className="progress-container">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">React & Redux</span>
                <span className="text-blue-600 font-semibold">90%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="progress-container">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">UI/UX Design</span>
                <span className="text-blue-600 font-semibold">85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="progress-container">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Backend Development</span>
                <span className="text-blue-600 font-semibold">80%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
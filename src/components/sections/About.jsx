import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section id="about" ref={ref} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          About Me
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 slide-in-left">
            <div className="relative">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <img 
                  src="https://cdn.abacus.ai/images/f7e4ab6b-726d-45f9-bab7-d881b7906f33.png" 
                  alt="Profile" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    maxHeight: '300px'
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-lg transform rotate-12 animate-float"></div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12 slide-in-right">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">Software Developer</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a Software Developer with experience in JavaScript, React, Next.js, TypeScript, and Redux. Currently pursuing my Masters in Computer Science at Oregon State University, I bring professional experience from multiple roles where I've focused on performance optimization, state management, and building scalable architectures.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My passion lies in creating intuitive, high-performance web applications that deliver exceptional user experiences. I enjoy tackling complex problems and continuously expanding my technical expertise.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/kwatraa" className="social-icon">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/kwatraa/" className="social-icon">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
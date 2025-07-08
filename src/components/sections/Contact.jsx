import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          Contact Me
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-md mb-10 slide-in-left text-center">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-gray-700 mb-8 leading-relaxed font-light text-lg italic">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss potential projects or just want to connect!
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-700">Corvallis, Oregon</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center mt-4">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-700">kwatraa@oregonstate.edu</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center space-x-4">
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

export default Contact;
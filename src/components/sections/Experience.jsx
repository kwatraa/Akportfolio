import React, { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <section id="experience" ref={ref} className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 relative">
          Experience
          <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
        </h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content slide-in-right">
              <div className="timeline-date">Mar 2022 – Sep 2023</div>
              <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
              <h4 className="text-lg text-blue-600 mb-4">Bridging Gaps Management Solutions Private Limited</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Designed dynamic dashboards for HR analytics using Chart.js and D3.js, implementing interactive visualizations and real-time data updates, which improved workforce data clarity and reduced HR analysis time by 30%.</li>
                <li>Worked with cross-functional teams to align front-end design with business and HR consulting needs, optimizing UI/UX for a seamless user experience.</li>
                <li>Developed and optimized interactive web pages using React.js, implementing Redux for efficient state management, which improved component reusability and reduced load time by 30%.</li>
                <li>Debugged and optimized performance using Lighthouse and React Profiler, reducing render-blocking resources and improving page load speed.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content slide-in-left">
              <div className="timeline-date">Dec 2021 – Mar 2022</div>
              <h3 className="text-xl font-semibold mb-2">Front-end Developer Intern</h3>
              <h4 className="text-lg text-blue-600 mb-4">Bridging Gaps Management Solutions Private Limited</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Implemented React.js components with Redux state management to dynamically update content for service offerings, ensuring real-time updates and an enhanced user experience.</li>
                <li>Optimized website performance by reducing DOM reflow, implementing lazy loading, and leveraging Bootstrap 5, resulting in a 20% improvement in Lighthouse scores.</li>
                <li>Integrated AJAX and RESTful API calls to fetch and display dynamic data, enhancing interactivity and reducing client-server response times.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content slide-in-right">
              <div className="timeline-date">May 2021 – Sep 2021</div>
              <h3 className="text-xl font-semibold mb-2">React Developer Intern</h3>
              <h4 className="text-lg text-blue-600 mb-4">Evueme Technologies Private Limited</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Debugged and resolved UX issues using React DevTools and Chrome DevTools, accelerating bug resolution time and improving overall user experience.</li>
                <li>Integrated RESTful APIs using Axios and Fetch, enhancing data-fetching efficiency by 35% and improving application responsiveness.</li>
                <li>Collaborated with backend developers to define API contracts, enhancing data exchange efficiency and ensuring seamless front-end and back-end integration.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
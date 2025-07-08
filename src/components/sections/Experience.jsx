import React, { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <section id="experience" ref={ref} className="py-12 md:py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 relative">
          Experience
          <span className="block w-16 md:w-20 h-1 bg-blue-600 mx-auto mt-3 md:mt-4"></span>
        </h2>
        
        <div className="timeline relative border-l-2 border-blue-500 ml-4 md:ml-6 pl-6 md:pl-8">
          {/* Timeline Item 1 */}
          <div className="timeline-item mb-10 relative">
            <div className="timeline-dot absolute -left-[31px] w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="timeline-content">
              <div className="timeline-date text-sm md:text-base font-medium text-gray-500 mb-1">Mar 2022 – Sep 2023</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Software Developer</h3>
              <h4 className="text-base md:text-lg text-blue-600 mb-2 md:mb-4">Bridging Gaps Management Solutions Private Limited</h4>
              <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
                <li>Designed dynamic dashboards for HR analytics using Chart.js and D3.js, implementing interactive visualizations and real-time data updates, which improved workforce data clarity and reduced HR analysis time by 30%.</li>
                <li>Worked with cross-functional teams to align front-end design with business and HR consulting needs, optimizing UI/UX for a seamless user experience.</li>
                <li>Developed and optimized interactive web pages using React.js, implementing Redux for efficient state management, which improved component reusability and reduced load time by 30%.</li>
                <li>Debugged and optimized performance using Lighthouse and React Profiler, reducing render-blocking resources and improving page load speed.</li>
              </ul>
            </div>
          </div>
          
          {/* Timeline Item 2 */}
          <div className="timeline-item mb-10 relative">
            <div className="timeline-dot absolute -left-[31px] w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="timeline-content">
              <div className="timeline-date text-sm md:text-base font-medium text-gray-500 mb-1">Dec 2021 – Mar 2022</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Front-end Developer Intern</h3>
              <h4 className="text-base md:text-lg text-blue-600 mb-2 md:mb-4">Bridging Gaps Management Solutions Private Limited</h4>
              <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
                <li>Implemented React.js components with Redux state management to dynamically update content for service offerings, ensuring real-time updates and an enhanced user experience.</li>
                <li>Optimized website performance by reducing DOM reflow, implementing lazy loading, and leveraging Bootstrap 5, resulting in a 20% improvement in Lighthouse scores.</li>
                <li>Integrated AJAX and RESTful API calls to fetch and display dynamic data, enhancing interactivity and reducing client-server response times.</li>
              </ul>
            </div>
          </div>
          
          {/* Timeline Item 3 */}
          <div className="timeline-item relative">
            <div className="timeline-dot absolute -left-[31px] w-6 h-6 bg-blue-500 rounded-full"></div>
            <div className="timeline-content">
              <div className="timeline-date text-sm md:text-base font-medium text-gray-500 mb-1">May 2021 – Sep 2021</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">React Developer Intern</h3>
              <h4 className="text-base md:text-lg text-blue-600 mb-2 md:mb-4">Evueme Technologies Private Limited</h4>
              <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-sm md:text-base text-gray-700">
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
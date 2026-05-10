import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const features = [
  {
    title: 'Personalized Treatment',
    description: 'Every patient receives a customized treatment plan based on their specific condition and goals',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
    color: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    badge: 'bg-cyan-500',
    number: '01',
  },
  {
    title: 'Evidence-Based Methods',
    description: 'Using the latest research and proven techniques to ensure the best outcomes',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
    badge: 'bg-orange-500',
    number: '02',
  },
  {
    title: 'Holistic Approach',
    description: 'Addressing not just symptoms but the root cause for long-lasting results',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    badge: 'bg-purple-500',
    number: '03',
  },
];

const FeatureCard = ({ feature, index }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`relative group bg-white p-6 sm:p-8 pt-10 sm:pt-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden reveal ${
        visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className={`absolute -top-4 left-6 w-12 h-12 ${feature.badge} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        {feature.number}
      </div>

      <div
        className={`${feature.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {feature.icon}
        </svg>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-cyan-600 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      ></div>
    </div>
  );
};

const Features = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Key Features
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose My
            <br />
            <span className="text-gradient-animated">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Experience professional physiotherapy care that prioritizes your recovery and well-being
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

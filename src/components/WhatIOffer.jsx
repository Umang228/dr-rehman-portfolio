import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const offerings = [
  {
    title: 'Initial Assessment',
    description: 'Comprehensive evaluation of your condition, medical history, and treatment goals',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
    color: 'from-cyan-400 to-cyan-600',
    iconBg: 'bg-cyan-500',
  },
  {
    title: 'Treatment Plans',
    description: 'Customized therapy programs designed specifically for your recovery needs',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
    color: 'from-orange-400 to-orange-600',
    iconBg: 'bg-orange-500',
  },
  {
    title: 'Manual Therapy',
    description: 'Hands-on techniques including massage, mobilization, and manipulation',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    ),
    color: 'from-purple-400 to-purple-600',
    iconBg: 'bg-purple-500',
  },
  {
    title: 'Exercise Programs',
    description: 'Personalized exercise routines to strengthen and prevent future injuries',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    color: 'from-green-400 to-green-600',
    iconBg: 'bg-green-500',
  },
  {
    title: 'Pain Management',
    description: 'Evidence-based strategies to reduce and manage chronic pain effectively',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
    color: 'from-pink-400 to-pink-600',
    iconBg: 'bg-pink-500',
  },
  {
    title: 'Home Visits',
    description: 'Convenient in-home treatment sessions for patients with mobility challenges',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
    color: 'from-teal-400 to-teal-600',
    iconBg: 'bg-teal-500',
  },
];

const OfferCard = ({ offer, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden reveal-scale ${
        visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
      ></div>

      <div className="relative">
        <div
          className={`${offer.iconBg} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg`}
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {offer.icon}
          </svg>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-cyan-600 transition-colors duration-300">
          {offer.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{offer.description}</p>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${offer.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
      ></div>
    </div>
  );
};

const WhatIOffer = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-cyan-200/50 rounded-full blur-3xl animate-blob"></div>
      <div
        className="absolute bottom-1/4 -right-32 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Comprehensive Care for
            <br />
            <span className="text-gradient-animated">Your Recovery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            From initial assessment to complete recovery, I provide end-to-end physiotherapy
            services tailored to your specific needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {offerings.map((offer, index) => (
            <OfferCard key={index} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIOffer;

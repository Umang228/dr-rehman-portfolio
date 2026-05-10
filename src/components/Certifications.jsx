import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const approaches = [
  {
    title: 'Evidence-Based Practice',
    description: 'Using the latest research and proven techniques for optimal recovery outcomes.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    title: 'Holistic Assessment',
    description: 'Comprehensive evaluation of your physical, mental, and lifestyle factors.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
    color: 'from-orange-400 to-orange-600',
  },
  {
    title: 'Personalized Care',
    description: 'Tailored treatment plans designed specifically for your unique needs and goals.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
    color: 'from-purple-400 to-purple-600',
  },
];

const languages = [
  { name: 'English', level: 'Native', flag: '🇬🇧' },
  { name: 'German', level: 'Fluent', flag: '🇩🇪' },
  { name: 'Hindi', level: 'Native', flag: '🇮🇳' },
  { name: 'Arabic', level: 'Fluent', flag: '🇸🇦' },
];

const Certifications = () => {
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div
            ref={leftRef}
            className={`reveal-left ${leftVisible ? 'is-visible' : ''}`}
          >
            <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Treatment Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              My <span className="text-gradient-animated">Approach</span>
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group cursor-default"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${approach.color} rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {approach.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1 sm:mb-2 group-hover:text-cyan-600 transition-colors">
                      {approach.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`reveal-right ${rightVisible ? 'is-visible' : ''}`}
          >
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Languages
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Multilingual <span className="text-orange-500">Support</span>
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-500 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl group-hover:scale-125 transition-transform duration-500 inline-block">
                        {lang.flag}
                      </span>
                      <h3 className="font-bold text-gray-900 text-base sm:text-lg">{lang.name}</h3>
                    </div>
                    <span className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: rightVisible
                          ? lang.level === 'Native'
                            ? '100%'
                            : lang.level === 'Fluent'
                            ? '90%'
                            : '70%'
                          : '0%',
                        transitionDelay: `${index * 150}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 p-5 sm:p-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl text-white shadow-lg shadow-cyan-500/20 hover-lift">
              <h4 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">
                Available for International Patients
              </h4>
              <p className="text-cyan-50 text-xs sm:text-sm">
                I can communicate effectively in multiple languages to ensure you feel comfortable during treatment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

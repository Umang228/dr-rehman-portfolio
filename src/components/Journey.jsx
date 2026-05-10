import React, { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const STEPS = [
  {
    number: '01',
    title: 'Patient Assessment',
    description: 'Comprehensive evaluation of your condition, medical history, and movement patterns.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    number: '02',
    title: 'Diagnosis Understanding',
    description: 'Clear explanation of your condition and what is needed for your recovery journey.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    ),
  },
  {
    number: '03',
    title: 'Personalized Therapy Plan',
    description: 'Customized treatment protocol designed specifically for your needs and goals.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    ),
  },
  {
    number: '04',
    title: 'Treatment & Rehabilitation',
    description: 'Hands-on treatment sessions combining manual techniques and exercises.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    ),
  },
  {
    number: '05',
    title: 'Recovery Monitoring',
    description: 'Progress tracking and treatment adjustments for optimal outcomes.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
];

const Journey = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollReveal();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % STEPS.length);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      id="journey"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-200 to-transparent"></div>
      <div className="absolute -top-20 left-1/4 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-40 animate-blob"></div>
      <div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40 animate-blob"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block bg-cyan-100 text-cyan-600 px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your <span className="text-gradient-animated">Journey to Recovery</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            A systematic, patient-centered approach to ensure the best possible outcomes for your recovery.
          </p>
        </div>

        {/* Desktop View — Horizontal Cards (lg+) */}
        <div className="hidden lg:block relative">
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-cyan-500 to-gray-200 z-0"></div>

          <div className="grid grid-cols-5 gap-6 lg:gap-8 xl:gap-10 relative z-10 items-stretch">
            {STEPS.map((step, index) => {
              const isActive = activeCardIndex === index;
              return (
                <div
                  key={index}
                  className="group relative h-full"
                  onMouseEnter={() => setActiveCardIndex(index)}
                >
                  <div
                    className={`absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-700 ${
                      isActive ? 'bg-cyan-500 scale-110' : 'bg-gray-500'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`mt-8 p-6 xl:p-8 rounded-3xl h-[360px] flex flex-col transition-all duration-700 ${
                      isActive
                        ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-2xl -translate-y-2 scale-105 border border-cyan-400'
                        : 'bg-white text-gray-900 shadow-lg border border-gray-200'
                    }`}
                  >
                    <div
                      className={`mb-5 lg:mb-6 flex justify-center transition-colors duration-700 ${
                        isActive ? 'text-white' : 'text-cyan-500'
                      }`}
                    >
                      <div
                        className={`p-3 lg:p-4 rounded-2xl transition-colors duration-700 ${
                          isActive ? 'bg-white/20' : 'bg-cyan-50'
                        }`}
                      >
                        <svg className="w-9 h-9 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {step.icon}
                        </svg>
                      </div>
                    </div>

                    <h3
                      className={`text-base lg:text-lg font-bold mb-3 text-center transition-colors duration-700 ${
                        isActive ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-xs lg:text-sm leading-relaxed text-center transition-colors duration-700 flex-1 ${
                        isActive ? 'text-cyan-50' : 'text-gray-600'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl blur-2xl -z-10 transition-opacity duration-700 ${
                      isActive ? 'opacity-30' : 'opacity-0'
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet View — Vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-5 sm:left-7 top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-200 via-cyan-500 to-cyan-200"></div>

          <div className="space-y-5 sm:space-y-6">
            {STEPS.map((step, index) => {
              const isActive = activeCardIndex === index;

              return (
                <div
                  key={index}
                  className="relative pl-14 sm:pl-20"
                  onMouseEnter={() => setActiveCardIndex(index)}
                >
                  <div
                    className={`absolute left-0 sm:left-2 top-3 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-500 z-10 ${
                      isActive
                        ? 'bg-cyan-500 text-white scale-110 ring-4 ring-cyan-200'
                        : 'bg-white text-gray-700 border-2 border-gray-300'
                    }`}
                  >
                    {step.number}
                  </div>

                  <div
                    className={`p-5 sm:p-6 rounded-2xl transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-xl shadow-cyan-500/20'
                        : 'bg-white text-gray-900 shadow-md border border-gray-100'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`p-2 sm:p-3 rounded-xl flex-shrink-0 transition-colors duration-500 ${
                          isActive ? 'bg-white/20 text-white' : 'bg-cyan-50 text-cyan-500'
                        }`}
                      >
                        <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {step.icon}
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`text-base sm:text-lg font-bold mb-1.5 sm:mb-2 transition-colors duration-500 ${
                            isActive ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm leading-relaxed transition-colors duration-500 ${
                            isActive ? 'text-cyan-50' : 'text-gray-600'
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

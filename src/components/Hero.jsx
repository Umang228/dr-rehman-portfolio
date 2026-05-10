import React from 'react';
import heroIllustration from '../assets/illustrations/doctors_hwty.svg';

const Hero = () => {
  const stats = [
    {
      value: '150+',
      label: 'Patients Treated',
      bg: 'bg-cyan-500',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      value: '5+',
      label: 'Years Experience',
      bg: 'bg-orange-500',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
    },
    {
      value: '98%',
      label: 'Success Rate',
      bg: 'bg-purple-500',
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      ),
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24 lg:min-h-[88vh] flex items-center bg-gradient-to-br from-cyan-50 via-blue-50 to-white overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute top-16 -left-24 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob pointer-events-none"></div>
      <div
        className="absolute top-40 -right-24 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob pointer-events-none"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute -bottom-16 left-1/3 w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob pointer-events-none"
        style={{ animationDelay: '4s' }}
      ></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 lg:gap-10 xl:gap-14 items-center">
          <div className="lg:col-span-6 xl:col-span-7 space-y-5 sm:space-y-7 animate-slide-in-left">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-cyan-200 text-cyan-700 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Welcoming new patients
            </div>

            <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 tracking-tight">
              Helping You Move
              <br />
              Better.
              <br />
              <span className="text-gradient-animated inline-block relative">
                Live Pain-Free.
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/60 to-cyan-400/0 rounded-full"></span>
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-base xl:text-lg text-gray-600 leading-relaxed max-w-xl">
              Professional physiotherapy services designed to restore your mobility,
              reduce pain, and improve your quality of life through evidence-based treatment.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 pt-1">
              <button
                onClick={() => {
                  document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-shine bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 transform hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Book Consultation
              </button>
              <a
                href="#services"
                className="px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl font-semibold border-2 border-gray-200 bg-white/70 backdrop-blur text-gray-800 hover:border-cyan-400 hover:text-cyan-600 hover:bg-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-3 sm:pt-5 border-t border-cyan-100/60">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-5 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  <div
                    className={`${stat.bg} w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 xl:w-13 xl:h-13 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 transform hover:scale-110 hover:rotate-6 transition-transform duration-300`}
                  >
                    <svg
                      className="w-5 h-5 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {stat.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">{stat.value}</div>
                    <div className="text-[11px] sm:text-xs text-gray-600 font-medium leading-tight mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 relative animate-slide-in-right max-w-md sm:max-w-lg mx-auto w-full lg:max-w-none">
            {/* Decorative accents */}
            <div className="hidden sm:block absolute -top-8 -right-8 lg:-top-10 lg:-right-10 w-28 h-28 lg:w-32 lg:h-32 border-4 border-dashed border-cyan-300 rounded-full animate-spin-slow opacity-60 pointer-events-none"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 w-20 h-20 lg:w-24 lg:h-24 border-4 border-cyan-400 rounded-2xl opacity-40 rotate-12 pointer-events-none"></div>
            <div className="group relative bg-gradient-to-br from-cyan-100 via-blue-50 to-cyan-100 rounded-3xl p-5 sm:p-7 lg:p-8 shadow-2xl shadow-cyan-500/20 animate-float overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              {/* Soft glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-200/50 rounded-full blur-3xl pointer-events-none"></div>

              <img
                src={heroIllustration}
                alt="Doctor consulting with patient"
                className="relative w-full h-auto select-none"
                draggable={false}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-3xl -z-10 blur-3xl opacity-30 transform scale-105 animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

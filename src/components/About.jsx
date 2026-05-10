import React from 'react';
import aboutImage from '../assets/Image1.png';
import useScrollReveal from '../hooks/useScrollReveal';

const FEATURES = [
  {
    title: 'Certified Expert',
    sub: 'Licensed Physiotherapist',
    bg: 'bg-cyan-100',
    color: 'text-cyan-600',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Flexible Hours',
    sub: 'Evening & Weekend',
    bg: 'bg-orange-100',
    color: 'text-orange-600',
    path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Personalized',
    sub: 'Treatment Plans',
    bg: 'bg-purple-100',
    color: 'text-purple-600',
    path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    title: 'Compassionate',
    sub: 'Patient Care',
    bg: 'bg-pink-100',
    color: 'text-pink-600',
    path: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  },
];

const About = () => {
  const [imgRef, imgVisible] = useScrollReveal();
  const [textRef, textVisible] = useScrollReveal();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={imgRef}
            className={`relative reveal-left ${imgVisible ? 'is-visible' : ''} max-w-md sm:max-w-lg mx-auto w-full lg:max-w-none`}
          >
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-3xl p-1 shadow-2xl shadow-cyan-500/20 animate-tilt">
              <div className="bg-white rounded-3xl overflow-hidden">
                <img
                  src={aboutImage}
                  alt="About Dr. Rahman"
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover object-top rounded-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 sm:-bottom-8 sm:-left-8 bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-4 sm:p-6 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="text-3xl sm:text-4xl font-bold">5+</div>
              <div className="text-xs sm:text-sm">Years of Experience</div>
            </div>

            {/* Decorative dots */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-20 h-20 border-4 border-cyan-200 rounded-full"></div>
            <div className="hidden sm:block absolute top-1/2 -right-2 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
          </div>

          <div
            ref={textRef}
            className={`space-y-5 sm:space-y-6 reveal-right ${textVisible ? 'is-visible' : ''}`}
          >
            <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium">
              About Me
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Dedicated to Your
              <br />
              <span className="text-gradient-animated">Recovery Journey</span>
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              With over a decade of experience in physiotherapy, I've helped hundreds of patients
              recover from injuries, manage chronic conditions, and improve their quality of life.
              My approach combines evidence-based treatments with personalized care tailored to
              each individual's unique needs.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              I believe in empowering my patients through education and hands-on treatment,
              ensuring they understand their condition and are active participants in their
              recovery process.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
              {FEATURES.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div
                    className={`w-10 h-10 ${f.bg} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                  >
                    <svg
                      className={`w-5 h-5 ${f.color}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={f.path}
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{f.title}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

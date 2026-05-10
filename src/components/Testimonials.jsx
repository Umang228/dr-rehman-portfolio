import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Jasmeet',
    role: 'Cupping Therapy',
    text: 'I had severe upper-back tightness and constant fatigue. After a few cupping therapy sessions, my pain reduced significantly and I finally felt light and relaxed again.',
    rating: 5,
    image: 'J',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    name: 'Shivam',
    role: 'Migraine Therapy',
    text: 'I used to get frequent migraines that affected my work and sleep. The migraine therapy plan really helped, and now the episodes are much less frequent and manageable.',
    rating: 5,
    image: 'S',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Pulkit',
    role: 'Neurotherapy',
    text: 'I started neurotherapy for nerve-related weakness and poor balance. The sessions were well structured, and I noticed clear improvement in coordination and confidence while walking.',
    rating: 5,
    image: 'P',
    color: 'from-purple-400 to-purple-600',
  },
];

const TestimonialCard = ({ t, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`group relative reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden hover-tilt">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <svg className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="relative mb-5 sm:mb-6 flex items-start gap-3 sm:gap-4">
          <div
            className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${t.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
          >
            {t.image}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${t.color} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
            ></div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">{t.name}</h4>
            <p className="text-cyan-600 font-medium text-sm sm:text-base">{t.role}</p>
          </div>
        </div>

        <div className="flex mb-4 sm:mb-5 gap-1">
          {[...Array(t.rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 transform hover:scale-125 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-gray-600 leading-relaxed text-sm sm:text-base relative z-10">"{t.text}"</p>

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${t.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        ></div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${t.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
      ></div>
    </div>
  );
};

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollReveal();

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-cyan-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            What <span className="text-gradient-animated">Patients Say</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Real experiences from people I've had the privilege to help on their recovery journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} t={t} index={index} />
          ))}
        </div>

        <div className="mt-14 sm:mt-20 pt-12 sm:pt-16 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {[
              { v: '4.9/5', l: 'Average Rating' },
              { v: '500+', l: 'Happy Patients' },
              { v: '100%', l: 'Satisfaction' },
            ].map((b, i) => (
              <div
                key={i}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient-animated mb-1 sm:mb-2">
                  {b.v}
                </div>
                <div className="text-gray-600 text-xs sm:text-sm">{b.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

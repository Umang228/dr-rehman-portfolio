import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const services = [
  { title: 'Sports Injury', description: 'Specialized treatment for athletic injuries and performance optimization.', icon: '🏃', color: 'from-cyan-400 to-cyan-600' },
  { title: 'Manual Therapy', description: 'Hands-on techniques to restore movement and reduce pain effectively.', icon: '✋', color: 'from-orange-400 to-orange-600' },
  { title: 'Post-Surgery Rehab', description: 'Comprehensive rehabilitation programs for post-operative recovery.', icon: '🏥', color: 'from-pink-400 to-pink-600' },
  { title: 'Chronic Pain', description: 'Long-term pain management strategies for lasting relief.', icon: '💊', color: 'from-green-400 to-green-600' },
  { title: 'Pediatric Care', description: 'Gentle, effective treatment for children\'s developmental needs.', icon: '👶', color: 'from-pink-400 to-pink-500' },
  { title: 'Geriatric Care', description: 'Specialized care for age-related mobility and balance issues.', icon: '👴', color: 'from-teal-400 to-teal-600' },
  { title: 'Neurological', description: 'Expert treatment for neurological conditions and movement disorders.', icon: '🧠', color: 'from-amber-400 to-amber-600' },
  { title: 'Cupping Therapy', description: 'Traditional therapy technique to improve blood flow and reduce muscle tension.', icon: '🔴', color: 'from-rose-400 to-rose-600' },
  { title: 'Spinal Manipulation', description: 'Expert spinal adjustments to restore alignment and reduce pain.', icon: '🦴', color: 'from-purple-400 to-purple-600' },
];

const ServiceCard = ({ service, index }) => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`group relative h-full reveal-scale ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col hover-tilt">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
        ></div>

        <div className="relative mb-5 sm:mb-6">
          <div
            className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}
          >
            {service.icon}
          </div>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
          ></div>
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-cyan-600 transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6 flex-1">
          {service.description}
        </p>

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
        ></div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 -z-10`}
      ></div>
    </div>
  );
};

const Services = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-cyan-50 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 lg:mb-20 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Comprehensive
            <br />
            <span className="text-gradient-animated">Physiotherapy Services</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            From injury recovery to performance enhancement, specialized treatments tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaRef}
          className={`mt-14 sm:mt-20 text-center reveal-scale ${ctaVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block bg-gradient-to-r from-cyan-50 to-blue-50 p-6 sm:p-8 lg:p-12 rounded-3xl border border-cyan-200 shadow-xl shadow-cyan-500/5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-5 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Contact me for a free consultation and we'll discuss how I can help with your specific needs
            </p>
            <button
              onClick={() => {
                document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="btn-shine bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/30 font-semibold"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

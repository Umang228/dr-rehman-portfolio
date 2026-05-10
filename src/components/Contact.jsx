import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  const EMAIL = 'zeyaurrahman902@gmail.com';
  const PHONE_DISPLAY = '+91 9508565275';
  const PHONE_TEL = '+919508565275';
  const LOCATION = 'Fortis Hospital, Mohali, Punjab';

  const contactCards = [
    {
      bg: 'bg-cyan-500',
      title: 'Location',
      lines: [LOCATION],
      href: 'https://www.google.com/maps/search/?api=1&query=Fortis+Hospital+Mohali',
      cta: 'View on Maps',
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
    },
    {
      bg: 'bg-orange-500',
      title: 'Phone',
      lines: [PHONE_DISPLAY],
      href: `tel:${PHONE_TEL}`,
      cta: 'Call Now',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
    },
    {
      bg: 'bg-purple-500',
      title: 'Email',
      lines: [EMAIL, 'Replies within 24 hours'],
      href: `mailto:${EMAIL}`,
      cta: 'Send Email',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-cyan-50 to-blue-50 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-200 rounded-full blur-3xl opacity-50 animate-blob"></div>
      <div
        className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-50 animate-blob"
        style={{ animationDelay: '3s' }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          className={`max-w-3xl mx-auto text-center mb-12 sm:mb-16 reveal ${headerVisible ? 'is-visible' : ''}`}
        >
          <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Ready to Start Your{' '}
            <span className="text-gradient-animated">Recovery Journey?</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Reach out directly through any of the channels below — I usually respond
            within 24 hours and will help you book a consultation that fits your schedule.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 reveal ${cardsVisible ? 'is-visible' : ''}`}
        >
          {contactCards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative bg-white p-6 sm:p-8 rounded-2xl shadow-lg shadow-cyan-500/5 border border-gray-100 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>

              <div className="relative">
                <div
                  className={`${card.bg} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl shadow-lg flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {card.icon}
                  </svg>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p
                    key={i}
                    className={`${i === 0 ? 'text-gray-700 font-medium text-sm sm:text-base' : 'text-gray-500 text-xs sm:text-sm'} break-words leading-relaxed`}
                  >
                    {line}
                  </p>
                ))}

                <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-2 text-cyan-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>{card.cta}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`mt-12 sm:mt-16 text-center reveal ${ctaVisible ? 'is-visible' : ''}`}
        >
          <a
            href={`mailto:${EMAIL}?subject=Consultation%20Request`}
            className="btn-shine inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all transform hover:scale-105 font-semibold shadow-lg shadow-cyan-500/30 text-base sm:text-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

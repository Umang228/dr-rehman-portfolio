import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About Me', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#journey' },
  { name: 'Testimonials', href: '#testimonials' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToConsultationForm = () => {
    const formElement = document.getElementById('consultation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white/80 backdrop-blur-sm shadow-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center group cursor-pointer">
            <div className="relative">
              <span
                className={`font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent transition-all duration-300 ${
                  scrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
                }`}
              >
                Dr. Rahman
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 group-hover:w-full transition-all duration-500"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-gray-700 hover:text-cyan-500 transition-all duration-300 font-medium text-base group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button (lg+ only — below lg, the button lives inside the mobile menu) */}
          <div className="hidden lg:block">
            <button
              onClick={scrollToConsultationForm}
              className={`btn-shine relative bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl group ${
                scrolled ? 'px-5 py-2 text-sm' : 'px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base'
              }`}
            >
              <span className="relative z-10">Book Now</span>
            </button>
          </div>

          {/* Mobile / Tablet (below lg) Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="relative text-gray-700 p-2 rounded-lg hover:bg-cyan-50 transition-all duration-300"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="px-4 sm:px-6 pt-4 pb-6 space-y-1">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-cyan-500 hover:bg-cyan-50 rounded-xl transition-all duration-300 font-medium transform hover:translate-x-2"
                style={{
                  transitionDelay: isMenuOpen ? `${index * 40}ms` : '0ms',
                }}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={scrollToConsultationForm}
              className="btn-shine w-full mt-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 font-semibold shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

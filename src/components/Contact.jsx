import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [infoRef, infoVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitError('');

    try {
      const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || 'Failed to submit form.');

      setSubmitMessage(data?.message || 'Form submitted successfully.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition-all duration-300 bg-gray-50 focus:bg-white focus:-translate-y-0.5';

  const contactInfo = [
    {
      bg: 'bg-cyan-500',
      title: 'Location',
      lines: ['Fortis Hospital, Mohali Punjab'],
      icon: (
        <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </>
      ),
    },
    {
      bg: 'bg-orange-500',
      title: 'Phone Number',
      lines: ['+91 9508565275'],
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      ),
    },
    {
      bg: 'bg-purple-500',
      title: 'Email Address',
      lines: ['zeyaurrahman902@gmail.com', 'Response within 24 hours'],
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div
            ref={infoRef}
            className={`space-y-6 sm:space-y-8 reveal-left ${infoVisible ? 'is-visible' : ''}`}
          >
            <div>
              <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Ready to Start Your
                <br />
                <span className="text-gradient-animated">Recovery Journey?</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Take the first step towards a pain-free life. Book your consultation today
                and let me create a personalized treatment plan tailored to your needs.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-white/60 transition-all duration-300 group"
                >
                  <div
                    className={`${info.bg} p-3 sm:p-4 rounded-xl shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {info.icon}
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-0.5 sm:mb-1">
                      {info.title}
                    </h4>
                    {info.lines.map((line, i) => (
                      <p
                        key={i}
                        className={`text-gray-600 ${i === 0 ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} break-words`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={formRef}
            className={`bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-2xl border border-gray-100 reveal-right ${
              formVisible ? 'is-visible' : ''
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">
              Book Your Consultation
            </h3>
            <form id="consultation-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your phone"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1.5 sm:mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your condition..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-shine w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white py-3.5 sm:py-4 rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all transform hover:scale-[1.02] font-semibold shadow-lg shadow-cyan-500/30 text-base sm:text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Book Appointment'
                )}
              </button>
              {submitMessage && (
                <p className="text-green-600 text-sm font-medium animate-fade-in-up">{submitMessage}</p>
              )}
              {submitError && (
                <p className="text-red-600 text-sm font-medium animate-fade-in-up">{submitError}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

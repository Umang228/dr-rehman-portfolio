import React, { useEffect, useMemo, useRef, useState } from 'react';

const STATS = [
  { target: 98, suffix: '%', label: 'Patient Satisfaction', color: 'from-cyan-400 to-cyan-600' },
  { target: 95, suffix: '%', label: 'Recovery Success', color: 'from-pink-400 to-pink-600' },
  { target: 150, suffix: '+', label: 'Patients Treated', color: 'from-purple-400 to-purple-600' },
  { target: 5, suffix: '+', label: 'Years Experience', color: 'from-teal-400 to-teal-600' },
  { target: 24, suffix: '/7', label: 'Support Available', color: 'from-indigo-400 to-indigo-600' },
];

const Stats = () => {
  const [animateProgress, setAnimateProgress] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0, 0]);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const sectionRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${3 + Math.random() * 4}s`,
        delay: `${Math.random() * 2}s`,
        size: `${4 + Math.random() * 6}px`,
      })),
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEnteredView) return undefined;
    const progressTimer = setTimeout(() => setAnimateProgress(true), 150);
    return () => clearTimeout(progressTimer);
  }, [hasEnteredView]);

  useEffect(() => {
    if (!hasEnteredView) return undefined;

    const duration = 1500;
    const start = performance.now();

    let frameId;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValues(STATS.map((stat) => Math.round(stat.target * eased)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasEnteredView]);

  const gradientColor = (color, end) => {
    if (color.includes('cyan')) return end ? '#0891b2' : '#06b6d4';
    if (color.includes('pink')) return end ? '#db2777' : '#ec4899';
    if (color.includes('purple')) return end ? '#9333ea' : '#a855f7';
    if (color.includes('teal')) return end ? '#0d9488' : '#14b8a6';
    return end ? '#4f46e5' : '#6366f1';
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-cyan-900 to-teal-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 sm:left-20 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 sm:right-20 w-72 h-72 sm:w-96 sm:h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-30"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animation: `float ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-block bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Stats &amp; Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Proven <span className="text-gradient-animated">Track Record</span>
          </h2>
          <p className="text-cyan-100 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Numbers that speak for the quality of care and dedication
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 sm:gap-x-8 lg:gap-10 justify-items-center">
          {STATS.map((stat, index) => {
            const radius = 45;
            const circumference = 2 * Math.PI * radius;

            return (
              <div
                key={index}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 transform hover:scale-110 transition-all duration-500">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke={`url(#gradient-${index})`}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={animateProgress ? 0 : circumference}
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-dashoffset 1.6s cubic-bezier(0.22, 1, 0.36, 1)',
                        transitionDelay: `${index * 0.2}s`,
                      }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={gradientColor(stat.color, false)} />
                        <stop offset="100%" stopColor={gradientColor(stat.color, true)} />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-3">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-none">
                      {animatedValues[index]}
                      {stat.suffix}
                    </div>
                    <div className="text-cyan-100 text-[10px] sm:text-[11px] md:text-xs mt-1.5 sm:mt-2 font-medium leading-tight max-w-[7rem]">
                      {stat.label}
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

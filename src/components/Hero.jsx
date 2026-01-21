import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-white dark:bg-theme-dark-bg transition-colors duration-300"
    >
      <div className="hidden md:block absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          style={{ filter: 'drop-shadow(0 0 0px rgba(0,0,0,0))' }}
        >
          <g className="stroke-[#df7f1e] dark:stroke-[#df7f1eb1]"> {/* Warm graphite */}
            <path
              d="M-100 900 C 400 200, 1040 200, 1540 900"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path d="M0 900 L 400 280" strokeWidth="2" strokeLinecap="round" />
            <path d="M1440 900 L 1040 280" strokeWidth="2" strokeLinecap="round" />
            <path d="M0 850 L 1440 850" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Mobile Background Design (Creative Abstract) */}
      <div className="md:hidden absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Gradient overlay for light mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-amber-50/30 to-yellow-50/40 dark:from-transparent dark:via-transparent dark:to-transparent" />
        
        {/* Gradient overlay for dark mode */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-amber-950/15 to-yellow-950/20 dark:opacity-100 opacity-0" />
        
        <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#df7f1e" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#df7f1e" stopOpacity="0.05" />
            </linearGradient>
            <radialGradient id="glowGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#df7f1e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#df7f1e" stopOpacity="0" />
            </radialGradient>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#df7f1e" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          
          {/* Subtle Grid Background */}
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Animated Glowing Orbs */}
          <circle cx="350" cy="100" r="120" fill="url(#glowGrad)" style={{ filter: 'blur(40px)' }}>
            <animate attributeName="cy" values="100;120;100" dur="8s" repeatCount="indefinite" />
            <animate attributeName="r" values="120;140;120" dur="8s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="700" r="150" fill="url(#glowGrad)" style={{ filter: 'blur(50px)' }}>
            <animate attributeName="cy" values="700;680;700" dur="10s" repeatCount="indefinite" />
            <animate attributeName="r" values="150;170;150" dur="10s" repeatCount="indefinite" />
          </circle>
          
          {/* Abstract Knowledge Curves with animation */}
          <path d="M-50 300 Q 150 100 450 200" stroke="#df7f1e" strokeWidth="1.5" fill="none" opacity="0.2">
            <animate attributeName="d" values="M-50 300 Q 150 100 450 200;M-50 300 Q 150 150 450 200;M-50 300 Q 150 100 450 200" dur="6s" repeatCount="indefinite" />
          </path>
          <path d="M-50 350 Q 150 150 450 250" stroke="#df7f1e" strokeWidth="1" fill="none" opacity="0.15">
            <animate attributeName="d" values="M-50 350 Q 150 150 450 250;M-50 350 Q 150 200 450 250;M-50 350 Q 150 150 450 250" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M-50 400 Q 150 200 450 300" stroke="#df7f1e" strokeWidth="0.5" fill="none" opacity="0.1">
            <animate attributeName="d" values="M-50 400 Q 150 200 450 300;M-50 400 Q 150 250 450 300;M-50 400 Q 150 200 450 300" dur="8s" repeatCount="indefinite" />
          </path>
          
          {/* Floating particles */}
          <circle cx="80" cy="200" r="3" fill="#df7f1e" opacity="0.4">
            <animate attributeName="cy" values="200;150;200" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="5s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="400" r="2" fill="#df7f1e" opacity="0.3">
            <animate attributeName="cy" values="400;350;400" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="600" r="2.5" fill="#df7f1e" opacity="0.35">
            <animate attributeName="cy" values="600;550;600" dur="7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.35;0.65;0.35" dur="7s" repeatCount="indefinite" />
          </circle>
          
          {/* Vertical connection lines */}
          <line x1="200" y1="0" x2="200" y2="800" stroke="#df7f1e" strokeWidth="0.5" opacity="0.1" strokeDasharray="5 5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-3 sm:px-6 md:px-8 text-center max-w-6xl mx-auto">
        <h2 className="hero-tag text-black dark:text-white font-bold tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] xs:text-[9px] sm:text-xs md:text-sm lg:text-lg mb-4 sm:mb-6 md:mb-8">
          GyanSetu – Innovation in Education
        </h2>

        {/* Sanskrit Heading */}
        <div className="mt-4 xs:mt-6 sm:mt-12 md:mt-16 lg:mt-20 space-y-2 xs:space-y-3 sm:space-y-4">
          <h1
            className="hero-title px-1 xs:px-2 py-1 sm:p-2 md:p-4 font-devanagari text-[2.5rem] xs:text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-normal leading-[1.1] sm:leading-[1.1] text-brand-orange dark:text-brand-orange drop-shadow-lg"
          >
            ज्ञानसेतु –
          </h1>

          <h1
            className="hero-title font-devanagari text-[2rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-normal leading-[1.15] sm:leading-[1.1] text-theme-light-heading dark:text-white drop-shadow-md"
          >
            शिक्षायाः नवोन्मेषः
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;

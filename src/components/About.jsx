import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-24 bg-white dark:bg-theme-dark-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-theme-light-heading dark:text-white">
            About GyanSetu
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-theme-light-body dark:text-theme-dark-body px-2">
            Bridging timeless knowledge with modern learning experiences
          </p>
          <div className="mt-4 sm:mt-6 mx-auto h-[3px] w-20 sm:w-28 md:w-32 bg-[var(--bridge-gold)] rounded-full" />
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-light-heading dark:text-white">Who We Are</h3>
              <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg leading-relaxed text-theme-light-body dark:text-theme-dark-body">
                GyanSetu is an education‑focused initiative built on the belief that true learning happens when concepts are understood, not memorized. We design tools that help students think, explore, and apply knowledge with confidence.
              </p>
            </div>
            <div>
              <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden ring-1 ring-[var(--bridge-gold)]/20 shadow-xl">
                <img 
                  src="/about-who-we-are.png" 
                  alt="Who We Are - GyanSetu Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto px-3 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-light-heading dark:text-white">Our Vision</h3>
            <p className="mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed text-theme-light-heading dark:text-white">
              <span className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl ring-1 ring-[var(--bridge-gold)]/30 inline-block">
                To create a learning ecosystem where curiosity leads, understanding follows, and education becomes meaningful.
              </span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-first lg:order-none">
              <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden ring-1 ring-[var(--bridge-gold)]/20 shadow-xl">
                <img 
                  src="/about-our-mission.png" 
                  alt="Our Mission - Bridging Education" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="px-2 sm:px-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-light-heading dark:text-white">Our Mission</h3>
              <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg leading-relaxed text-theme-light-body dark:text-theme-dark-body">
                We aim to bridge traditional educational wisdom with modern technology by building intuitive tools that empower both students and educators.
              </p>
            </div>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <button
              onClick={() => window.location.href = '/about'}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30"
            >
              Learn More About Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

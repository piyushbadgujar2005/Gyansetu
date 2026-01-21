import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Play, Box, Puzzle, Brain, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MathLabPage = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');

  useGSAP(() => {
    // Hero Animation
    const tl = gsap.timeline();
    tl.fromTo('.hero-content', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    // Tab Content Animation
    gsap.fromTo('.tab-content',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: '.tab-content', start: 'top 90%' } }
    );

    // Feature Cards Stagger
    if (activeTab === 'features') {
      gsap.fromTo('.feature-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }

    // Benefits Stagger
    if (activeTab === 'benefits') {
      gsap.fromTo('.benefit-card',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }

  }, { scope: containerRef, dependencies: [activeTab] });

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'benefits', label: 'Benefits' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-theme-dark-bg text-theme-light-body dark:text-theme-dark-body pt-20 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-dark-bg via-transparent to-transparent" />
        
        <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium tracking-wider uppercase">
            Product Showcase
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-white drop-shadow-2xl">
            MathLab
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experiential learning for conceptual mathematics. <br/>
            <span className="opacity-80">Turn abstract numbers into tangible understanding.</span>
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-theme-light-bg/95 dark:bg-theme-dark-bg/95 backdrop-blur border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-12 overflow-x-auto no-scrollbar justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-6 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'text-brand-orange' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-theme-light-heading dark:hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange shadow-[0_0_10px_rgba(234,144,16,0.5)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 min-h-[60vh]">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="tab-content grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-theme-light-heading dark:text-white">What is MathLab?</h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  MathLab is a comprehensive hands-on learning solution designed to bridge the gap between abstract mathematical concepts and real-world understanding. It provides a physical environment where students can touch, feel, and experiment with math.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-orange">Why it exists?</h4>
                  <p className="text-gray-600 dark:text-gray-400">To move beyond rote memorization and foster deep conceptual clarity through "learning by doing".</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-brand-orange">Who is it for?</h4>
                  <p className="text-gray-600 dark:text-gray-400">K-12 schools, progressive educators, and students who want to master math logic.</p>
                </div>
              </div>

              <button className="flex items-center space-x-2 text-brand-orange font-semibold group">
                <span>Download Brochure</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Demo Video Card */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-video ring-1 ring-black/5 dark:ring-white/10">
               <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-90" />
               <div className="absolute inset-0 flex items-center justify-center z-10">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                   <Play className="w-8 h-8 text-white fill-current ml-1" />
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-white font-medium">Watch the MathLab Experience</p>
                 <p className="text-sm text-gray-400">Duration: 2:30</p>
               </div>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="tab-content grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Box, title: "Geometry Tools", desc: "Physical models for 2D/3D shapes, volume, and spatial reasoning." },
              { icon: Puzzle, title: "Activity Kits", desc: "Structured, gamified activities that encourage exploration." },
              { icon: Brain, title: "Logic Builders", desc: "Tools to visualize abstract theorems and algebraic patterns." },
              { icon: BookOpen, title: "Curriculum Map", desc: "Seamlessly aligned with CBSE, ICSE, and State Board syllabi." }
            ].map((feature, idx) => (
              <div key={idx} className="feature-card p-8 rounded-3xl bg-white dark:bg-theme-dark-card border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 text-brand-orange">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-theme-light-heading dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
           <div className="tab-content max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
             {[
               { title: "Conceptual Clarity", desc: "Builds a strong foundation for future learning by visualizing the 'why' behind the math." },
               { title: "Student Engagement", desc: "Makes math class the highlight of the day through active participation." },
               { title: "Anxiety Reduction", desc: "Transforms fear of numbers into curiosity and confidence." },
               { title: "Retention Mastery", desc: "Active learning leads to 75% higher retention rates compared to lectures." }
             ].map((benefit, idx) => (
               <div key={idx} className="benefit-card flex items-start space-x-5 p-8 rounded-3xl bg-white dark:bg-theme-dark-card border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                 <div className="mt-1 flex-shrink-0">
                   <CheckCircle className="w-6 h-6 text-green-500" />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold mb-2 text-theme-light-heading dark:text-white">{benefit.title}</h3>
                   <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                     {benefit.desc}
                   </p>
                 </div>
               </div>
             ))}
           </div>
        )}

      </div>
    </div>
  );
};

export default MathLabPage;

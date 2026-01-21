import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Play, Monitor, Touchpad, Users, Settings, CheckCircle, ArrowRight, Share2, Wifi } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InteractiveBoardsPage = () => {
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-theme-dark-bg via-transparent to-transparent" />
        
        <div className="hero-content relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
          <div className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-500/10 backdrop-blur-sm text-sm font-medium tracking-wider uppercase text-blue-300">
            Smart Classroom
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight text-white drop-shadow-2xl">
            Interactive Boards
          </h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Smart classroom technology for modern teaching. <br/>
            <span className="opacity-80">Seamlessly integrate digital content into every lesson.</span>
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
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-theme-light-heading dark:hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
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
                <h3 className="text-3xl font-bold mb-4 text-theme-light-heading dark:text-white">The Future of Teaching</h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Our Interactive Boards turn static whiteboards into dynamic, multi-touch canvases. Teachers can write, draw, play videos, and browse the web instantly, keeping students engaged and lessons flowing smoothly.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Digital Fluency</h4>
                  <p className="text-gray-600 dark:text-gray-400">Prepares students for a digital world by integrating technology naturally.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">Seamless Integration</h4>
                  <p className="text-gray-600 dark:text-gray-400">Works with your existing PDFs, PPTs, and educational apps.</p>
                </div>
              </div>

              <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group">
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Demo Video Card */}
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-gray-900 aspect-video ring-1 ring-black/5 dark:ring-white/10">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black opacity-90" />
               <div className="absolute inset-0 flex items-center justify-center z-10">
                 <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                   <Play className="w-8 h-8 text-white fill-current ml-1" />
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                 <p className="text-white font-medium">See the Smart Classroom in Action</p>
                 <p className="text-sm text-gray-400">Duration: 1:45</p>
               </div>
            </div>
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="tab-content grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Touchpad, title: "Multi-Touch", desc: "20-point touch technology allows multiple students to interact simultaneously." },
              { icon: Monitor, title: "4K UHD Display", desc: "Crystal clear visuals from any angle with anti-glare technology." },
              { icon: Wifi, title: "Wireless Casting", desc: "Cast screens from student tablets or laptops instantly." },
              { icon: Share2, title: "Instant Sharing", desc: "Save and share class notes via QR code or email with one click." }
            ].map((feature, idx) => (
              <div key={idx} className="feature-card p-8 rounded-3xl bg-white dark:bg-theme-dark-card border border-gray-100 dark:border-white/5 shadow-xl shadow-gray-200/50 dark:shadow-none hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
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
               { title: "Engagement Boost", desc: "Interactive lessons keep students focused and participating." },
               { title: "Teacher Efficiency", desc: "Access all your teaching tools and cloud resources in one place." },
               { title: "Visual Learning", desc: "Bring complex subjects to life with videos, 3D models, and animations." },
               { title: "Future Ready", desc: "Equip students with the digital skills they need for the modern world." }
             ].map((benefit, idx) => (
               <div key={idx} className="benefit-card flex items-start space-x-5 p-8 rounded-3xl bg-white dark:bg-theme-dark-card border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                 <div className="mt-1 flex-shrink-0">
                   <CheckCircle className="w-6 h-6 text-blue-500" />
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

export default InteractiveBoardsPage;

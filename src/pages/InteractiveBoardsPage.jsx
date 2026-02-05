import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Monitor, Touchpad, Users, CheckCircle, ArrowLeft, Download, Sparkles, Wifi, Share2, Zap, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InteractiveBoardsPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('overview');

  useGSAP(() => {
    // ENTRANCE ANIMATIONS
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.5 })
      .fromTo('.hero-title', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6")
      .fromTo('.hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.8");

    // Scroll Reveals
    gsap.fromTo('.tab-nav-sticky', 
      { opacity: 0 },
      { scrollTrigger: { trigger: '.tab-nav-sticky', start: 'top 90%' }, opacity: 1, duration: 1 }
    );

    // Dynamic Background Orbs
    gsap.to('.bg-orb', {
      x: 'random(-40, 40)',
      y: 'random(-40, 40)',
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  // Tab Content Entrance
  useGSAP(() => {
    gsap.fromTo('.active-tab-content > *',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power2.out', clearProps: "all" }
    );
  }, { dependencies: [activeTab], scope: containerRef });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'features', label: 'Technology', icon: Sparkles },
    { id: 'benefits', label: 'Impact', icon: Users },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-brand-dark transition-colors duration-500 overflow-hidden w-full">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-orb absolute top-[-10%] right-[-15%] sm:right-[-10%] w-[75vw] h-[75vw] sm:w-[60vw] sm:h-[60vw] bg-blue-500/10 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="bg-orb absolute bottom-[-10%] left-[-15%] sm:left-[-10%] w-[65vw] h-[65vw] sm:w-[50vw] sm:h-[50vw] bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      {/* Ultra-Premium Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-10">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-110"
            style={{ transform: 'translateZ(-10px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-brand-dark/70 to-brand-dark" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pt-24 sm:pt-28 md:pt-20">
          <button
            onClick={() => navigate('/')}
            className="hero-badge group inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:border-blue-400/40 transition-all mb-8 sm:mb-12"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase">Ecosystem Discovery</span>
          </button>

          <h1 className="hero-title text-5xl sm:text-7xl md:text-9xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[0.85]">
            Interactive <span className="text-blue-400">Boards</span>
          </h1>
          
          <p className="hero-description text-lg sm:text-xl md:text-2xl font-medium text-blue-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "Touch, teach, transform — <br className="hidden md:block"/> 
            <span className="text-blue-400">the future of classroom learning.</span>"
          </p>

          <div className="hero-description mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=100&h=100&fit=crop'
              ].map((img, i) => (
                <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-white/20 bg-white overflow-hidden shadow-lg">
                  <img src={img} alt={`School ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-xs sm:text-sm">Installed in 300+ Schools</p>
              <div className="flex gap-1 justify-center sm:justify-start">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-blue-400" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fluid Navigation Tabs */}
      <div className="tab-nav-sticky sticky top-20 z-40 bg-theme-light-bg/80 dark:bg-brand-dark/80 backdrop-blur-2xl border-y border-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex space-x-6 sm:space-x-12 md:space-x-20 overflow-x-auto no-scrollbar justify-start sm:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-6 sm:py-8 flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all duration-500 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-blue-500' 
                    : 'text-theme-light-body/40 dark:text-white/30 hover:text-blue-500'
                }`}
              >
                <tab.icon className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-500 ${activeTab === tab.id ? 'scale-125 rotate-12' : ''}`} />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 shadow-[0_-4px_20px_rgba(59,130,246,0.8)] rounded-t-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Content Surface */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
        <div className="active-tab-content min-h-[50vh]">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
              {/* Main Content - Left Side */}
              <div className="lg:col-span-3 space-y-8 sm:space-y-10">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-theme-light-heading dark:text-white tracking-tight leading-tight">
                    Turn Any Classroom into a <span className="text-blue-500">Smart Classroom</span>
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-theme-light-body dark:text-white/70 font-medium">
                    Interactive Boards are large touchscreen displays that replace traditional blackboards and projectors. Teachers can write, draw, show videos, and access the internet — all on one screen that responds to touch.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-theme-light-body dark:text-white/60">
                    Unlike regular whiteboards, these smart boards make lessons visual and interactive. Students can see 3D models, watch educational videos, and even come up to the board to solve problems themselves — making every class more engaging and memorable.
                  </p>
                </div>

                {/* What's Included Section */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-500/20">
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-500 flex items-center gap-2 sm:gap-3">
                    <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
                    What's Included
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">4K Ultra HD touchscreen display (55" to 86" options)</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Built-in Android system with educational apps pre-installed</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Wireless screen sharing from laptops and tablets</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Teacher training and 3-year warranty included</span>
                    </div>
                  </div>
                </div>

                {/* Demo Video Section */}
                <div className="relative group rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-video border-2 border-blue-500/20">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/Ym2NVpnweJ0?si=dHdX2gayEZ4vMBPr" 
                    title="Interactive Boards Demo" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button className="px-6 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl sm:rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 sm:gap-3">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Download Brochure</span>
                  </button>
                  <a 
                    href="https://wa.me/919768329786?text=Hi%2C%20I%20am%20interested%20in%20Interactive%20Boards.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-white/5 border-2 border-blue-500 text-blue-600 font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl sm:rounded-2xl hover:bg-blue-600 hover:text-white transition-all inline-flex items-center gap-2"
                  >
                    Request Demo
                  </a>
                </div>
              </div>

              {/* Sidebar - Right Side */}
              <div className="lg:col-span-2 space-y-6">
                {/* Designed For Card */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/[0.03] border border-blue-500/20 shadow-2xl lg:sticky lg:top-28">
                  <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-blue-500 flex items-center gap-2 sm:gap-3">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                    Perfect For
                  </h4>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl font-black text-blue-500">K-12</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">All Grade Levels</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">Works for kindergarten to grade 12 and beyond</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">Every Subject</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">Math, Science, Languages, History — all subjects benefit</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Monitor className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">Easy to Use</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">No tech expertise needed — as simple as using a phone</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-8 pt-8 border-t border-blue-500/10">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl sm:text-3xl font-black text-blue-500 mb-1">300+</div>
                        <div className="text-[10px] sm:text-xs text-theme-light-body dark:text-white/60 uppercase tracking-wider">Schools Trust Us</div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-black text-purple-500 mb-1">40%</div>
                        <div className="text-[10px] sm:text-xs text-theme-light-body dark:text-white/60 uppercase tracking-wider">More Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: Touchpad, title: "Multi-Touch Display", desc: "Up to 20 students can touch the screen at once. Great for group activities and collaborative learning.", color: "text-blue-500", bg: "bg-blue-500/10" },
                { icon: Monitor, title: "4K Crystal Clear", desc: "Ultra-high definition display that looks sharp from any seat in the classroom. Anti-glare coating reduces eye strain.", color: "text-purple-500", bg: "bg-purple-500/10" },
                { icon: Wifi, title: "Wireless Connection", desc: "Teachers and students can share their screens wirelessly from any device — laptops, tablets, or phones.", color: "text-cyan-500", bg: "bg-cyan-500/10" },
                { icon: Share2, title: "Save & Share", desc: "Save class notes instantly and share via QR code or email. Students never miss a thing.", color: "text-emerald-500", bg: "bg-emerald-500/10" }
              ].map((feature, idx) => (
                <div key={idx} className="group p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-white/[0.03] border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)]">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-inner transition-transform duration-500 group-hover:rotate-12`}>
                    <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-theme-light-heading dark:text-white tracking-tight">{feature.title}</h3>
                  <p className="text-theme-light-body dark:text-white/60 leading-relaxed font-medium">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                { title: "Students Pay More Attention", desc: "Visual and interactive content keeps students focused. No more zoning out during lectures — they're part of the lesson.", icon: CheckCircle, color: "text-blue-500" },
                { title: "Teachers Save Time", desc: "Access all your resources in one place. No more switching between laptops, projectors, and whiteboards.", icon: CheckCircle, color: "text-purple-500" },
                { title: "Complex Topics Made Simple", desc: "Show 3D models, play educational videos, and demonstrate concepts visually. Abstract ideas become easy to understand.", icon: CheckCircle, color: "text-cyan-500" },
                { title: "Future-Ready Students", desc: "Students learn to use technology naturally, preparing them for higher education and modern workplaces.", icon: CheckCircle, color: "text-emerald-500" }
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-8 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-white/[0.03] border border-blue-500/10 shadow-xl hover:border-blue-500/30 transition-all duration-500">
                  <div className="mt-1 flex-shrink-0">
                    <benefit.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${benefit.color}`} />
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-theme-light-heading dark:text-white tracking-tight">{benefit.title}</h3>
                    <p className="text-base sm:text-lg text-theme-light-body dark:text-white/60 font-medium leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default InteractiveBoardsPage;

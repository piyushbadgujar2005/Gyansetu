import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import langueTechHero from '../assets/about_education.png';
import { 
  Globe, 
  Languages, 
  GraduationCap, 
  Award, 
  CheckCircle, 
  ArrowLeft, 
  Download,
  Sparkles, 
  BookOpen, 
  Compass,
  FileText,
  Users,
  Plane,
  MessageCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LangueTechPage = () => {
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
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'trust', label: 'Impact', icon: Award },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-brand-dark transition-colors duration-500 overflow-hidden w-full">
      
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="bg-orb absolute top-[-10%] right-[-15%] sm:right-[-10%] w-[75vw] h-[75vw] sm:w-[60vw] sm:h-[60vw] bg-indigo-500/10 rounded-full blur-[100px] sm:blur-[120px]" />
        <div className="bg-orb absolute bottom-[-10%] left-[-15%] sm:left-[-10%] w-[65vw] h-[65vw] sm:w-[50vw] sm:h-[50vw] bg-purple-500/10 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      {/* Ultra-Premium Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden z-10">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ 
              backgroundImage: `url(${langueTechHero})`,
              transform: 'translateZ(-10px)' 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-brand-dark/70 to-brand-dark" />
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto pt-24 sm:pt-28 md:pt-20">
          <button
            onClick={() => navigate('/')}
            className="hero-badge group inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:border-indigo-400/40 transition-all mb-8 sm:mb-12"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[8px] sm:text-[10px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase">Ecosystem Discovery</span>
          </button>

          <h1 className="hero-title text-5xl sm:text-7xl md:text-9xl font-black text-white mb-6 sm:mb-8 tracking-tighter leading-[0.85]">
            Langue <span className="text-indigo-400">Tech</span>
          </h1>
          
          <p className="hero-description text-lg sm:text-xl md:text-2xl font-medium text-indigo-100/80 max-w-3xl mx-auto leading-relaxed italic">
            "Learn English, study abroad — <br className="hidden md:block"/> 
            <span className="text-indigo-400">your complete global pathway.</span>"
          </p>

          <div className="hero-description mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=100&h=100&fit=crop',
                'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=100&h=100&fit=crop'
              ].map((img, i) => (
                <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-white/20 bg-white overflow-hidden shadow-lg">
                  <img src={img} alt={`Student ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-white font-bold text-xs sm:text-sm">8,000+ Students Trained</p>
              <div className="flex gap-1 justify-center sm:justify-start">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-indigo-400" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fluid Navigation Tabs */}
      <div className="tab-nav-sticky sticky top-20 z-40 bg-theme-light-bg/80 dark:bg-brand-dark/80 backdrop-blur-2xl border-y border-indigo-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex space-x-6 sm:space-x-12 md:space-x-20 overflow-x-auto no-scrollbar justify-start sm:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-6 sm:py-8 flex items-center gap-2 sm:gap-3 text-[9px] sm:text-[11px] font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all duration-500 whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-indigo-500' 
                    : 'text-theme-light-body/40 dark:text-white/30 hover:text-indigo-500'
                }`}
              >
                <tab.icon className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-500 ${activeTab === tab.id ? 'scale-125 rotate-12' : ''}`} />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-indigo-500 shadow-[0_-4px_20px_rgba(99,102,241,0.8)] rounded-t-full" />
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
                    Your Complete Path to <span className="text-indigo-500">Studying Abroad</span>
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed text-theme-light-body dark:text-white/70 font-medium">
                    Langue Tech helps students prepare for international education. We teach English, help you crack exams like IELTS and TOEFL, and guide you through the entire process of getting admitted to universities in the USA, UK, Canada, Australia, and Europe.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-theme-light-body dark:text-white/60">
                    Many students dream of studying abroad but don't know where to start. We remove the confusion — from improving your English skills to writing your application essays, choosing the right university, and getting your visa approved. One trusted partner for your entire journey.
                  </p>
                </div>

                {/* What's Included Section */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-500/20">
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-indigo-500 flex items-center gap-2 sm:gap-3">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                    What We Help With
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">IELTS, TOEFL, PTE exam preparation with mock tests</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">Spoken English and interview preparation</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">University selection and application guidance</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <span className="text-sm text-theme-light-body dark:text-white/70">SOP/LOR writing and visa assistance</span>
                    </div>
                  </div>
                </div>

                {/* Key Destinations */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/[0.03] border border-purple-500/20">
                  <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-purple-500 flex items-center gap-2 sm:gap-3">
                    <Plane className="w-5 h-5 sm:w-6 sm:h-6" />
                    Where Our Students Go
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {['🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇩🇪 Germany', '🇮🇪 Ireland'].map((country, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-sm">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button className="px-6 sm:px-10 py-4 sm:py-5 bg-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl sm:rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 sm:gap-3">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Download Brochure</span>
                  </button>
                  <a 
                    href="https://wa.me/919768329786?text=Hi%2C%20I%20am%20interested%20in%20Langue%20Tech%20services.%20Please%20share%20more%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-10 py-4 sm:py-5 bg-white dark:bg-white/5 border-2 border-indigo-500 text-indigo-600 font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl sm:rounded-2xl hover:bg-indigo-600 hover:text-white transition-all inline-flex items-center gap-2"
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>

              {/* Sidebar - Right Side */}
              <div className="lg:col-span-2 space-y-6">
                {/* Expert Card */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-indigo-600 text-white shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Dr. Deepak K. Patil</h4>
                      <p className="text-indigo-200 text-sm">PhD, USA Experience</p>
                    </div>
                  </div>
                  <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                    "With 15+ years of experience and personal connections in top universities, I guide each student like my own."
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-black">8,000+</div>
                      <div className="text-[10px] uppercase tracking-wider text-indigo-200">Students Trained</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black">400+</div>
                      <div className="text-[10px] uppercase tracking-wider text-indigo-200">Abroad Admissions</div>
                    </div>
                  </div>
                </div>

                {/* Perfect For Card */}
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/[0.03] border border-indigo-500/20 shadow-2xl lg:sticky lg:top-28">
                  <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-indigo-500 flex items-center gap-2 sm:gap-3">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                    Who Is This For?
                  </h4>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-indigo-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">Students & Graduates</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">Planning to pursue Masters or PhD abroad</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">English Learners</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">Need to improve English for exams or career</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                        <Compass className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h5 className="font-bold text-theme-light-heading dark:text-white mb-1">Working Professionals</h5>
                        <p className="text-sm text-theme-light-body dark:text-white/60">Looking to upskill or relocate internationally</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { 
                  icon: Languages, 
                  title: "IELTS & TOEFL Prep", 
                  desc: "Get the score you need with focused exam training. Our certified trainers use real exam patterns and proven strategies.",
                  items: ["Band 7+ strategies", "Weekly mock tests", "Speaking & writing feedback"],
                  color: "text-indigo-500", 
                  bg: "bg-indigo-500/10" 
                },
                { 
                  icon: MessageCircle, 
                  title: "Spoken English", 
                  desc: "Build confidence to speak English fluently in interviews, presentations, and everyday conversations.",
                  items: ["Pronunciation practice", "Group discussions", "Interview preparation"],
                  color: "text-purple-500", 
                  bg: "bg-purple-500/10" 
                },
                { 
                  icon: GraduationCap, 
                  title: "Abroad Consultation", 
                  desc: "Complete guidance from choosing the right university to landing in your dream country.",
                  items: ["University shortlisting", "SOP & LOR drafting", "Visa interview prep"],
                  color: "text-cyan-500", 
                  bg: "bg-cyan-500/10" 
                }
              ].map((service, idx) => (
                <div key={idx} className="group p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-white/[0.03] border border-indigo-500/10 hover:border-indigo-500/30 transition-all duration-500 shadow-xl">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${service.bg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-inner transition-transform duration-500 group-hover:rotate-12`}>
                    <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-theme-light-heading dark:text-white tracking-tight">{service.title}</h3>
                  <p className="text-theme-light-body dark:text-white/60 leading-relaxed font-medium mb-6 sm:mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold text-theme-light-heading dark:text-white/80">
                        <CheckCircle className={`w-4 h-4 ${service.color}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Trust/Impact Tab */}
          {activeTab === 'trust' && (
            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6 sm:gap-8">
              {[
                { title: "Clear Guidance, No Confusion", desc: "We explain everything in simple terms. No complicated jargon or hidden fees. You always know what's happening with your application.", icon: CheckCircle, color: "text-indigo-500" },
                { title: "Affordable for Everyone", desc: "Quality education guidance shouldn't be expensive. We offer honest pricing that works for students from tier-2 and tier-3 cities.", icon: CheckCircle, color: "text-purple-500" },
                { title: "Personal Attention", desc: "You're not just a number. Our small batch sizes mean you get individual feedback and support throughout your journey.", icon: CheckCircle, color: "text-cyan-500" },
                { title: "Proven Results", desc: "400+ students admitted to top universities abroad. Our track record speaks for itself — we deliver results.", icon: CheckCircle, color: "text-emerald-500" }
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-8 p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] bg-white dark:bg-white/[0.03] border border-indigo-500/10 shadow-xl hover:border-indigo-500/30 transition-all duration-500">
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

export default LangueTechPage;

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft, Target, Lightbulb, Award, Users, Rocket, ShieldCheck, HelpCircle, ChevronDown } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import HoverRevealCard from '../components/HoverRevealCard';

const AboutPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const teamMembers = [
    {
      name: "Adv. Abhay A. Kulkarni",
      designation: "Director",
      qualification: "B.Sc., LL.M., MBA (H.R.), C.P.C.T.",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1751826586/Director_image_j167br.jpg",
      description: "Director, Gyansetu Global Growth Pvt. Ltd. & Waves Classes, Jalgaon | Trustee, Shikshan Prasarak Mandal | Chartered Secretary, Rotary Club of Jalgaon Green City"
    },
    {
      name: "Er. Sagar M. Patil",
      designation: "Director",
      qualification: "B.Tech (Information Technology), VESIT (Mumbai)",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769421070/sagar_sir_ywruow.jpg",
      description: "Founder & Director at Spectrum Classes, Educator at Vision Classes, and Private Home Tutor in Navi Mumbai"
    },
    {
      name: "Er. Pushpendra Singh Rathore",
      designation: "Director",
      qualification: "B.Tech (Mechanical Engineering), KNIT",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769421600/sir_zjfntp.jpg",
      description: "Engineer & Educator with 12+ years of experience, teaching Physics, Mathematics, and Logical Reasoning for IIT-JEE, NEET, CAT, Banking, and SSC aspirants."
    },
    {
      name: "Abhijit B. Patil",
      designation: "Director",
      qualification: "M.A. in Mass Communication, B.A. (Sociology)",
      image: "https://res.cloudinary.com/dweebldig/image/upload/v1769446615/e5ab2613-d6a3-420e-b316-e35ad4e4f56c_tswzoz.jpg",
      description: "Sub-Editor & Reporter at Lokmat since 2011, former Video Journalist at IBN Lokmat, LAADLI Media Award (UNFPA) winner, with experience in news coverage, camerawork, and social awareness initiatives"
    }
  ];

  useGSAP(() => {
    // ENTRANCE RESTORATION - 100% PRODUCTION VISIBILITY
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

    tl.fromTo('.header-content', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, clearProps: "all" }
    )
    .fromTo('.mission-vision-card', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.1, clearProps: "all" }, 
      "-=0.5"
    );

    // Safety ScrollTriggers - MOBILE OPTIMIZED
    gsap.utils.toArray('.team-card-trigger').forEach((card, i) => {
      gsap.fromTo(card, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.1,
          clearProps: "all"
        }
      );
    });

    gsap.utils.toArray('.value-card').forEach((card, i) => {
      gsap.fromTo(card,
        { scale: 0.95, opacity: 0 },
        {
          scrollTrigger: {
            trigger: card,
            start: 'top 95%',
          },
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: i * 0.05,
          clearProps: "all"
        }
      );
    });

    // Background orbs - subtle flow
    gsap.to('.bg-orb', {
      x: 'random(-30, 30)',
      y: 'random(-30, 30)',
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-theme-light-bg dark:bg-theme-dark-bg transition-colors duration-700 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="bg-orb absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-brand-orange/10 rounded-full blur-[140px]" />
        <div className="bg-orb absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-40 md:pb-32 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-colors duration-300">
          <button
            onClick={() => navigate('/')}
            className="header-content group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-brand-orange/20 text-theme-light-heading dark:text-theme-dark-heading hover:text-brand-orange dark:hover:text-brand-orange transition-all mb-6 sm:mb-12 shadow-lg shadow-brand-orange/5"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase">Back Home</span>
          </button>
          
          <div className="header-content max-w-5xl">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-theme-light-heading dark:text-white leading-[0.95] mb-4 sm:mb-10 tracking-tighter">
              Legacy in <br />
              <span className="text-brand-orange">Innovation.</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-theme-light-body dark:text-theme-dark-body leading-relaxed max-w-3xl opacity-90 font-medium">
              Bridging traditional educational wisdom with modern technology to empower the next generation of global learners.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="relative py-12 sm:py-16 md:py-32 bg-white/40 dark:bg-white/[0.02] border-y border-brand-orange/10 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            <div className="mission-vision-card group p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3.5rem] bg-white dark:bg-theme-dark-card border border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-500 shadow-xl sm:shadow-2xl hover:shadow-[0_20px_60px_rgba(234,144,16,0.1)]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-brand-orange/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 md:mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand-orange" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme-light-heading dark:text-white mb-3 sm:mb-4 md:mb-6">Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-theme-light-body dark:text-theme-dark-body leading-relaxed opacity-90 font-medium">
                To bridge traditional educational wisdom with modern technology by building intuitive tools that empower both students and educators to achieve meaningful learning outcomes.
              </p>
            </div>
            <div className="mission-vision-card group p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3.5rem] bg-white dark:bg-theme-dark-card border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 shadow-xl sm:shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.1)]">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 md:mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
                <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-blue-500" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-theme-light-heading dark:text-white mb-3 sm:mb-4 md:mb-6">Our Vision</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-theme-light-body dark:text-theme-dark-body leading-relaxed opacity-90 font-medium">
                To create a learning ecosystem where curiosity leads, understanding follows, and education becomes meaningful for every student across India.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Showcase */}
      <div className="relative py-12 sm:py-20 md:py-40 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header-content text-center mb-10 sm:mb-16 md:mb-36">
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-theme-light-heading dark:text-white mb-4 sm:mb-6 md:mb-10 tracking-tighter">
              Leadership <span className="text-brand-orange">Visionaries</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-theme-light-body dark:text-theme-dark-body max-w-3xl mx-auto opacity-70 font-medium">
              The passionate educators committed to transforming the educational landscape of India.
            </p>
          </div>

          <div className="team-section-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card-trigger h-full">
                <HoverRevealCard 
                  title={member.name}
                  description={`${member.designation} | ${member.qualification} \n\n ${member.description}`}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="relative py-12 sm:py-20 md:py-40 bg-white/40 dark:bg-white/[0.02] border-t border-brand-orange/10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header-content text-center mb-8 sm:mb-12 md:mb-24">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-light-heading dark:text-white mb-4 sm:mb-6 md:mb-8 tracking-tighter">
              The <span className="text-brand-orange">GyanSetu</span> Code
            </h2>
          </div>
          <div className="values-grid-box grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 lg:gap-10">
            {[
              { title: "Innovation", icon: Rocket, color: "text-brand-orange", bg: "bg-brand-orange/10", desc: "Exploring new ideas and technologies to create cutting-edge educational tools." },
              { title: "Impact", icon: Award, color: "text-blue-500", bg: "bg-blue-500/10", desc: "Creating measurable improvements in student understanding and performance." },
              { title: "Integrity", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", desc: "Honest practices and delivering exactly what we promise." },
              { title: "Collaboration", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10", desc: "Working closely with educators to build solutions together." },
              { title: "Accessibility", icon: Target, color: "text-cyan-500", bg: "bg-cyan-500/10", desc: "Affordable tools for every school in every corner of India." },
              { title: "Excellence", icon: Lightbulb, color: "text-amber-500", bg: "bg-amber-500/10", desc: "Striving for excellence in every aspect of our work." }
            ].map((value, index) => (
              <div
                key={index}
                className="value-card p-3 sm:p-5 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-[2.5rem] bg-white dark:bg-theme-dark-card border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-500 shadow-md sm:shadow-lg hover:shadow-xl"
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 ${value.bg} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 md:mb-5 shadow-inner`}>
                  <value.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${value.color}`} />
                </div>
                <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-theme-light-heading dark:text-white mb-1 sm:mb-2 md:mb-3 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-theme-light-body dark:text-theme-dark-body leading-snug sm:leading-relaxed opacity-80 font-medium">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section with Schema Markup */}
      <div className="relative py-12 sm:py-20 md:py-32 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="header-content text-center mb-8 sm:mb-12 md:mb-16">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-brand-orange/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8">
              <HelpCircle className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-brand-orange" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-light-heading dark:text-white mb-4 sm:mb-6 tracking-tighter">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-theme-light-body dark:text-theme-dark-body opacity-80">
              Everything you need to know about GyanSetu
            </p>
          </div>

          {/* FAQ Items with Schema Data */}
          <div 
            className="space-y-4 sm:space-y-6"
            itemScope 
            itemType="https://schema.org/FAQPage"
          >
            {[
              {
                question: "What is GyanSetu?",
                answer: "GyanSetu is an EdTech company based in Jalgaon, Maharashtra, India. We provide innovative smart classroom solutions including Interactive Boards, MathLab kits, and LangueTech language learning software for schools across India. Our mission is to bridge traditional education with modern technology."
              },
              {
                question: "What products does GyanSetu offer?",
                answer: "GyanSetu offers three main products: 1) Interactive Smart Boards - 4K Ultra HD touchscreen displays with multi-touch support for digital classrooms, 2) MathLab - Hands-on mathematics learning kits that make abstract concepts tangible, and 3) LangueTech - AI-powered language learning solutions for effective communication skills."
              },
              {
                question: "Where is GyanSetu located?",
                answer: "GyanSetu Global Growth Pvt. Ltd. is headquartered in Jalgaon, Maharashtra, India. Our address is C/O Abhay Kulkarni Csn, 8195 Chandraprabha Colony, Jalgaon 425001. We serve schools and educational institutions across India."
              },
              {
                question: "How can I contact GyanSetu?",
                answer: "You can reach GyanSetu through multiple channels: Email us at gyansetuglobal@gmail.com, call us at +91-9850969921, or visit our website at gyansetuglobal.in. Our team is available to assist with product inquiries, demos, and support in English, Hindi, and Marathi."
              },
              {
                question: "Is GyanSetu suitable for all types of schools?",
                answer: "Yes! GyanSetu's products are designed for schools of all sizes - from small primary schools to large secondary institutions. Our solutions are affordable, easy to implement, and come with comprehensive training and support. We work with government schools, private schools, and coaching institutes across India."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="faq-item p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-theme-dark-card border border-brand-orange/10 hover:border-brand-orange/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3 
                  className="text-base sm:text-lg md:text-xl font-bold text-theme-light-heading dark:text-white mb-3 sm:mb-4 flex items-start gap-3"
                  itemProp="name"
                >
                  <span className="text-brand-orange font-bold text-lg sm:text-xl">Q.</span>
                  {faq.question}
                </h3>
                <div 
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <p 
                    className="text-sm sm:text-base text-theme-light-body dark:text-theme-dark-body leading-relaxed opacity-90 pl-7"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AboutPage;

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import loadingBg from '../assets/loading-bg.png';

const LoadingPage = ({ onComplete }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // "Curtain" Exit Animation
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      }
    });

    // 1. Image Ken Burns Effect
    tl.fromTo(imageRef.current, 
      { scale: 1.2, filter: "brightness(0.5)" },
      { scale: 1, filter: "brightness(1)", duration: 2.5, ease: "power1.out" },
      0
    );

    // 2. Text Reveal
    tl.fromTo(textRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=1.5"
    );

    // 3. Progress Bar
    tl.fromTo(progressRef.current,
      { width: "0%" },
      { width: "100%", duration: 1.5, ease: "expo.inOut" },
      "-=1.0"
    );

    // 4. Hold
    tl.to({}, { duration: 0.5 });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img ref={imageRef} src={loadingBg} alt="Loading" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
        <div ref={textRef}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 drop-shadow-2xl">GyanSetu</h1>
          <p className="text-lg md:text-2xl font-light tracking-[0.3em] uppercase opacity-90">The Bridge to Knowledge</p>
        </div>
        <div className="mt-12 w-64 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div ref={progressRef} className="h-full bg-brand-orange" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

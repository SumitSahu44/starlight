// components/Hero.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const ctaRef = useRef(null);
  const solarPanelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          stagger: 0.15
        }
      );

      // Solar panel floating animation
      gsap.to(solarPanelRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Scroll-triggered text split animation - only on desktop
      if (window.innerWidth > 1024) {
        gsap.to(textLeftRef.current, {
          x: -80,
          opacity: 0.8,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          }
        });

        gsap.to(textRightRef.current, {
          x: 80,
          opacity: 0.8,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          }
        });
      }

      // CTA button pulse animation
      gsap.to(ctaRef.current, {
        scale: 1.03,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Background elements animation
      gsap.fromTo('.floating-element',
        { y: 0 },
        {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.3
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1020] py-20 lg:py-0"
    >
      {/* Background with solar panel house image */}
    {/* Background with video */}
<div className="absolute inset-0 z-0">

  {/* FULLSCREEN BACKGROUND VIDEO */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://media.istockphoto.com/id/2172873384/video/digital-solar-panels-and-renewable-energy-for-connectivity-sustainability-or-clean-power-grid.mp4?s=mp4-640x640-is&k=20&c=P0p5BsfPwirlcktg4_fAHr_A-X57XADftP1_iHRpxkQ="
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-[#0B1020]/50 z-10" />

  {/* Animated solar panel graphic */}
  {/* <div 
    ref={solarPanelRef}
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 z-20 opacity-20 lg:opacity-30"
  >
    <div className="grid grid-cols-4 gap-1 lg:gap-2 w-full h-full">
      {Array.from({ length: 16 }).map((_, i) => (
        <div 
          key={i}
          className="bg-gradient-to-br from-[#4A6ED1] to-[#0B1020] rounded-sm floating-element"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  </div> */}

  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
    {Array.from({ length: 12 }).map((_, i) => (
      <div
        key={i}
        className="absolute floating-element"
        style={{
          width: `${Math.random() * 80 + 30}px`,
          height: '1px',
          background: `linear-gradient(90deg, transparent, #4A6ED1, transparent)`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.2 + 0.1,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div>
</div>

      {/* Main Content */}
      <div className="relative z-30 text-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div ref={textLeftRef} className="space-y-6 lg:space-y-8  lg:text-left">
            {/* Main Heading */}
            <div className="space-y-3 lg:space-y-4">
              <h1 className="hero-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                GET
                <span className="block bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent mt-2">
                  SOLAR
                </span>
              </h1>
              
              <div className="hero-text text-xl sm:text-2xl md:text-3xl font-light text-[#B59A90]">
                <span className="font-bold text-white">POWERED</span>
              </div>
            </div>

            {/* Stats - Hidden on mobile, shown on tablet and up */}
            <div className="hero-text hidden sm:grid grid-cols-3 gap-4 lg:gap-6 pt-4">
              {[
                { number: "500Kwh", label: "Carbon Emision Saved" },
                { number: "00", label: "Trees Planted" },
                { number: "00", label: "Add krna hai" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs lg:text-sm text-[#B59A90]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Text Column */}
          <div ref={textRightRef} className="space-y-6 lg:space-y-8">
            {/* Description */}
            <div className="hero-text space-y-4 lg:space-y-6">
              <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90 lg:text-left">
                Residential & Commercial Solar Solutions from Zeno Renewables deliver daily reliable energy to homes and businesses across
              </p>
              
              <div className="text-base sm:text-lg lg:text-xl font-semibold lg:text-left">
                <span className="text-[#4A6ED1]">Calgary</span>, 
                <span className="text-[#FF7A2A]"> Edmonton</span>, 
                <span className="text-[#B59A90]"> Lethbridge</span>, and the 
                <span className="text-white"> Greater Toronto Area</span>.
              </div>
            </div>

            {/* Stats - Mobile only */}
            <div className="hero-text grid grid-cols-3 gap-4 sm:hidden pt-4">
              {[
                { number: "500Kwh", label: "Carbon Emision Saved" },
                { number: "Add Krne hai ", label: "trees Planted" },
                { number: "98%", label: "Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-[#B59A90]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hero-text pt-4 lg:pt-6 text-center lg:text-left">
              <button
                ref={ctaRef}
                className="group relative bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white w-full sm:w-auto px-8 py-4 lg:px-12 lg:py-4 rounded-full font-bold text-base lg:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
                  EXPLORE OUR SERVICES
                  <svg 
                    className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs lg:text-sm text-[#B59A90] uppercase tracking-wider">Scroll to Discover</span>
          <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-[#4A6ED1] rounded-full flex justify-center">
            <div className="w-1 h-2 lg:h-3 bg-[#4A6ED1] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10 w-3 h-3 lg:w-4 lg:h-4 bg-[#FF7A2A] rounded-full opacity-60 floating-element" />
      <div className="absolute bottom-16 left-6 lg:bottom-20 lg:left-10 w-4 h-4 lg:w-6 lg:h-6 bg-[#4A6ED1] rounded-full opacity-40 floating-element" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 lg:w-3 lg:h-3 bg-[#B59A90] rounded-full opacity-50 floating-element" />
    </section>
  );
};

export default Hero;
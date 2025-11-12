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
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power3.out",
          stagger: 0.2
        }
      );

      // Solar panel floating animation
      gsap.to(solarPanelRef.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Scroll-triggered text split animation
      gsap.to(textLeftRef.current, {
        x: -100,
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      gsap.to(textRightRef.current, {
        x: 100,
        opacity: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

      // CTA button pulse animation
      gsap.to(ctaRef.current, {
        scale: 1.05,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Background elements animation
      gsap.fromTo('.floating-element',
        { y: 0 },
        {
          y: -30,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.5
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0B1020]"
    >
      {/* Background with solar panel house image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage: 'url("https://media.istockphoto.com/id/1516933381/photo/3d-render-of-modern-forest-house-with-solar-panels-on-roof-at-night.jpg?s=612x612&w=0&k=20&c=irPqGAsgKWoVeDGCVwL-hp0C3IFYbyQ11pwDiWOGCQk=")'
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#0B1020]/10 z-10" />
        
        {/* Animated solar panel graphic */}
        <div 
          ref={solarPanelRef}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-20 opacity-30"
        >
          <div className="grid grid-cols-4 gap-2 w-full h-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i}
                className="bg-gradient-to-br from-[#4A6ED1] to-[#0B1020] rounded-sm floating-element"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute floating-element"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: '2px',
                background: `linear-gradient(90deg, transparent, #4A6ED1, transparent)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3 + 0.1,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-white max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div ref={textLeftRef} className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="hero-text text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                GET
                <span className="block bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
                  SOLAR
                </span>
              </h1>
              
              <div className="hero-text text-2xl md:text-3xl font-light text-[#B59A90]">
                <span className="font-bold text-white">POWERED</span>
              </div>
            </div>

            {/* Stats */}
            <div className="hero-text grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "25+", label: "Years Exp" },
                { number: "5K+", label: "Projects" },
                { number: "98%", label: "Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#FFf]">{stat.number}</div>
                  <div className="text-sm text-[#B59A90]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Text Column */}
          <div ref={textRightRef} className="space-y-8">
            {/* Description */}
            <div className="hero-text space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-[#B59A90]">
                Residential & Commercial Solar Solutions from Zeno Renewables deliver daily reliable energy to homes and businesses across
              </p>
              
              <div className="text-lg md:text-xl font-semibold">
                <span className="text-[#4A6ED1]">Calgary</span>, 
                <span className="text-[#FF7A2A]"> Edmonton</span>, 
                <span className="text-[#B59A90]"> Lethbridge</span>, and the 
                <span className="text-white"> Greater Toronto Area</span>.
              </div>
            </div>

            {/* CTA Button */}
            <div className="hero-text pt-4">
              <button
                ref={ctaRef}
                className="group relative bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-12 py-4 rounded-full font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  EXPLORE OUR SERVICES
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-[#B59A90] uppercase tracking-wider">Scroll to Discover</span>
          <div className="w-6 h-10 border-2 border-[#4A6ED1] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#4A6ED1] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-[#FF7A2A] rounded-full opacity-60 floating-element" />
      <div className="absolute bottom-20 left-10 w-6 h-6 bg-[#4A6ED1] rounded-full opacity-40 floating-element" />
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#B59A90] rounded-full opacity-50 floating-element" />
    </section>
  );
};

export default Hero;
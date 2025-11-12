// components/Clients.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const logosRef = useRef([]);

  // Add to logos ref array
  const addToRefs = (el) => {
    if (el && !logosRef.current.includes(el)) {
      logosRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite horizontal scroll animation
      const slideAnimation = gsap.to(sliderRef.current, {
        x: '-50%', // Since we duplicated the array, we move by half
        duration: 30,
        ease: "none",
        repeat: -1
      });

      // Logo entrance animation
      gsap.fromTo(logosRef.current,
        {
          scale: 0,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Pause animation on hover
      const sliderContainer = sectionRef.current.querySelector('.slider-container');
      
      sliderContainer.addEventListener('mouseenter', () => {
        slideAnimation.pause();
        
        // Add glow effect to all logos
        gsap.to('.client-logo', {
          scale: 1.02,
          duration: 0.3
        });
      });

      sliderContainer.addEventListener('mouseleave', () => {
        slideAnimation.play();
        
        // Reset scale
        gsap.to('.client-logo', {
          scale: 1,
          duration: 0.3
        });
      });

      // Individual logo hover effects
      logosRef.current.forEach((logo) => {
        logo.addEventListener('mouseenter', () => {
          gsap.to(logo, {
            scale: 1.15,
            y: -8,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
          
          // Add glow effect
          gsap.to(logo.querySelector('.logo-container'), {
            boxShadow: "0 0 30px rgba(255, 122, 42, 0.4)",
            borderColor: "rgba(255, 122, 42, 0.6)",
            duration: 0.3
          });
        });

        logo.addEventListener('mouseleave', () => {
          gsap.to(logo, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
          
          // Remove glow effect
          gsap.to(logo.querySelector('.logo-container'), {
            boxShadow: "0 0 0px rgba(255, 122, 42, 0)",
            borderColor: "rgba(74, 110, 209, 0.3)",
            duration: 0.3
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Client logos data - using actual company names
  const clients = [
    { name: "EcoHomes Ltd", logo: "🏡" },
    { name: "SolarTech Inc", logo: "☀️" },
    { name: "GreenEnergy Co", logo: "🌿" },
    { name: "PowerSolutions", logo: "⚡" },
    { name: "RenewCorp", logo: "🔋" },
    { name: "SunWorks", logo: "🌞" },
    { name: "EcoBuild", logo: "🏗️" },
    { name: "CleanPower", logo: "💧" }
  ];

  // Duplicate clients for seamless loop - we need enough for smooth transition
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section 
      ref={sectionRef}
      id="clients"
      className="relative py-20 lg:py-28 bg-[#0B1020] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#4A6ED1] rounded-full opacity-5 blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#FF7A2A] rounded-full opacity-5 blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #4A6ED1 1px, transparent 1px),
              linear-gradient(180deg, #4A6ED1 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
            Trusted by industry leaders and homeowners across the region
          </p>
        </div>

        {/* Single Row Client Logos Slider */}
        <div className="slider-container relative mb-16">
          <div className="flex overflow-visible py-4">
            <div 
              ref={sliderRef}
              className="flex items-center space-x-8 lg:space-x-12 px-4"
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`client-${index}`}
                  ref={addToRefs}
                  className="client-logo flex-shrink-0 group cursor-pointer"
                >
                  <div className="logo-container w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-2xl border-2 border-[#4A6ED1]/30 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1a1f38] group-hover:to-[#2a2f48]">
                    <div className="text-3xl lg:text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-center">
                      <span className="text-white/90 font-semibold text-xs lg:text-sm group-hover:text-[#FF7A2A] transition-colors duration-300">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section - Improved Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {[
            { number: "500+", label: "Happy Clients", color: "from-[#FF7A2A] to-[#FF9A52]" },
            { number: "98%", label: "Retention Rate", color: "from-[#4A6ED1] to-[#6B8CFF]" },
            { number: "4.9/5", label: "Average Rating", color: "from-[#B59A90] to-[#d4b8a8]" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-2xl border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/40 transition-all duration-500 hover:scale-105 group"
            >
              <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.number}
              </div>
              <div className="text-white/70 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Preview - Enhanced */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0B1020] to-[#1a1f38] rounded-2xl p-8 lg:p-10 border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/30 transition-all duration-500 group">
            <div className="text-4xl text-[#FF7A2A] mb-4">"</div>
            <p className="text-lg lg:text-xl text-[#B59A90] italic mb-6 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
              Starlight Solar completely transformed our energy infrastructure. Their professional approach and cutting-edge solutions have significantly reduced our operational costs while supporting our sustainability goals.
            </p>
            <div className="text-white font-semibold text-lg">— Sarah Johnson, CEO at EcoHomes Ltd</div>
            <div className="flex justify-center mt-4 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-[#FF7A2A] text-lg">⭐</span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Improved */}
        <div className="text-center mt-12">
          <button className="group relative bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-10 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <span className="relative z-10 flex items-center gap-3">
              Join Our Client Family
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000" />
          </button>
        </div>
      </div>

      {/* Floating Elements - Reduced Count */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] opacity-10"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
// components/Clients.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
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
      // Wait for images to load before calculating widths
      const images = sliderRef.current.querySelectorAll('img');
      const loadPromises = Array.from(images).map(img => {
        return new Promise(resolve => {
          if (img.complete) {
            resolve();
          } else {
            img.addEventListener('load', resolve);
            img.addEventListener('error', resolve); // Continue even if some images fail
          }
        });
      });

      Promise.all(loadPromises).then(() => {
        // Calculate the width of one set of logos (8 items)
        const firstLogo = sliderRef.current.children[0];
        if (firstLogo) {
          const logoWidth = firstLogo.offsetWidth;
          const gap = 32; // space-x-8 = 2rem = 32px
          const firstSetWidth = (logoWidth + gap) * 8;
          
          // Infinite horizontal scroll animation
          const slideAnimation = gsap.to(sliderRef.current, {
            x: `-=${firstSetWidth}`,
            duration: 25,
            ease: "none",
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize(gsap.utils.wrap(-firstSetWidth, 0))
            }
          });

          // Pause animation on hover
          const sliderContainer = sectionRef.current.querySelector('.slider-container');
          
          sliderContainer.addEventListener('mouseenter', () => {
            slideAnimation.pause();
            gsap.to('.client-logo', { scale: 1.02, duration: 0.3 });
          });

          sliderContainer.addEventListener('mouseleave', () => {
            slideAnimation.play();
            gsap.to('.client-logo', { scale: 1, duration: 0.3 });
          });
        }
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

      // Individual logo hover effects
      logosRef.current.forEach((logo) => {
        logo.addEventListener('mouseenter', () => {
          gsap.to(logo, {
            scale: 1.15,
            y: -8,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
          
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

  // Client logos data with actual image paths
  const clients = [
    { name: "EcoHomes Ltd", logo: "/images/brand1.jpeg" },
    { name: "SolarTech Inc", logo: "/images/brand2.jpeg" },
    { name: "GreenEnergy Co", logo: "/images/brand3.jpeg" },
    { name: "PowerSolutions", logo: "/images/brand4.jpeg" },
    { name: "RenewCorp", logo: "/images/brand5.jpeg" },
    { name: "SunWorks", logo: "/images/brand6.jpeg" },
    { name: "EcoBuild", logo: "/images/brand7.jpeg" },
    { name: "CleanPower", logo: "/images/brand8.jpeg" }
  ];

  // For infinite scroll, we need 3 copies (original + 2 duplicates)
  const infiniteClients = [...clients, ...clients, ...clients];

  return (
    <section 
      ref={sectionRef}
      id="clients"
      className="relative py-20 lg:py-28 bg-[#0B1020] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
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
              Brands
            </span>
          </h2>
          <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
            Trusted by industry leaders and homeowners across the region
          </p>
        </div>

        {/* Single Row Client Logos Slider */}
        <div className="slider-container relative mb-16 overflow-hidden">
          <div 
            ref={sliderRef}
            className="flex items-center space-x-8 lg:space-x-12 px-4"
            style={{ width: 'max-content' }}
          >
            {infiniteClients.map((client, index) => (
              <div
                key={`client-${index}`}
                ref={addToRefs}
                className="client-logo flex-shrink-0 group cursor-pointer"
              >
                <div className="logo-container w-40 h-40 lg:w-44 lg:h-44 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-2xl border-2 border-[#4A6ED1]/30 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#1a1f38] group-hover:to-[#2a2f48] p-4">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Fallback text if image fails to load */}
                    <div 
                      className="hidden text-center text-white font-semibold text-lg"
                      style={{ display: 'none' }}
                    >
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
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
      </div>

      {/* Floating Elements */}
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

      {/* Add CSS for float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Brands;
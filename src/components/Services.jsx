// components/Services.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeService, setActiveService] = useState(0);

  // Add to cards ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic button effect for service cards
      cardsRef.current.forEach((card) => {
        const button = card.querySelector('.service-card');
        
        card.addEventListener('mousemove', (e) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;
          
          gsap.to(button, {
            x: x * 20,
            y: y * 15,
            duration: 0.8,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
          });
        });
      });

      // Staggered card entrance with flip animation
      gsap.fromTo(cardsRef.current,
        {
          rotationY: 90,
          opacity: 0,
          scale: 0.8
        },
        {
          rotationY: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating icons animation
      gsap.to('.service-icon', {
        y: -10,
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // Background pulse effect
      gsap.to('.service-bg-pulse', {
        scale: 1.1,
        opacity: 0.3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 1,
      title: "Residential Solar Solutions",
      icon: "🏠",
      description: "Complete home solar systems designed for maximum efficiency and savings",
      features: [
        "Custom solar panel installation",
        "Smart energy storage systems",
        "24/7 performance monitoring",
        "25-year performance warranty",
        "Government incentive guidance",
        "Maintenance & support"
      ],
      color: "from-[#FF7A2A] to-[#FF9A52]",
      bgColor: "bg-gradient-to-br from-[#0B1020] via-[#1a1f38] to-[#0B1020]"
    },
    {
      id: 2,
      title: "Commercial Solar Systems",
      icon: "🏢",
      description: "Enterprise-grade solar solutions for businesses and organizations",
      features: [
        "Large-scale solar installations",
        "Energy consumption analysis",
        "ROI optimization",
        "Commercial financing options",
        "Peak demand management",
        "Carbon footprint reporting"
      ],
      color: "from-[#4A6ED1] to-[#6B8CFF]",
      bgColor: "bg-gradient-to-br from-[#0B1020] via-[#1a1f38] to-[#0B1020]"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="relative py-20 lg:py-32 bg-[#0B1020] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Pulse Elements */}
        <div className="service-bg-pulse absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#4A6ED1] opacity-20" />
        <div className="service-bg-pulse absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#FF7A2A] opacity-15" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(#4A6ED1 1px, transparent 1px),
              linear-gradient(90deg, #4A6ED1 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
            Tailored solar solutions that power your life while protecting our planet
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.id}
              ref={addToRefs}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Card */}
              <div className={`service-card relative ${service.bgColor} rounded-3xl p-8 lg:p-10 border-2 border-[#4A6ED1]/20 transition-all duration-500 group-hover:border-[#4A6ED1]/50 overflow-hidden`}>
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="service-icon text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#B59A90] text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-3 transform group-hover:translate-x-2 transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className={`group relative bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105`}>
                    <span className="relative z-10 flex items-center gap-3">
                      Learn More
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

                {/* Decorative Elements */}
                <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r ${service.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r ${service.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>

              {/* Connection Line - Only show on desktop */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#4A6ED1] to-transparent opacity-50" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-[#0B1020]/80 backdrop-blur-sm border border-[#4A6ED1]/30 rounded-2xl px-8 py-6">
            <span className="text-white text-lg font-semibold">
              Ready to start your solar journey?
            </span>
            <button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#4A6ED1] opacity-10"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
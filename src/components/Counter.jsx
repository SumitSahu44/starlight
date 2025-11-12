// components/Counter.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from 'react-countup';

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  // Add to counters ref array
  const addToRefs = (el) => {
    if (el && !countersRef.current.includes(el)) {
      countersRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter elements animation
      gsap.fromTo(countersRef.current,
        {
          scale: 0,
          opacity: 0,
          y: 50
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating elements animation
      gsap.to('.counter-float', {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // Background pulse animation
      gsap.to('.counter-pulse', {
        scale: 1.1,
        opacity: 0.8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { 
      number: 25, 
      suffix: '+', 
      label: 'Years Experience',
      icon: '🕐',
      color: 'from-[#FF7A2A] to-[#FF9A52]',
      description: 'Of solar excellence'
    },
    { 
      number: 5000, 
      suffix: '+', 
      label: 'Projects Completed',
      icon: '⚡',
      color: 'from-[#4A6ED1] to-[#6B8CFF]',
      description: 'Across homes & businesses'
    },
    { 
      number: 98, 
      suffix: '%', 
      label: 'Customer Satisfaction',
      icon: '⭐',
      color: 'from-[#B59A90] to-[#d4b8a8]',
      description: 'Rated 4.9/5 stars'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="counter-pulse absolute top-1/4 left-1/4 w-64 h-64 bg-[#4A6ED1] rounded-full opacity-10 blur-3xl" />
        <div className="counter-pulse absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF7A2A] rounded-full opacity-10 blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #4A6ED1 1px, transparent 1px),
              linear-gradient(180deg, #4A6ED1 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="counter-float absolute rounded-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] opacity-10"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">By The </span>
            <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
            Two decades of excellence in solar energy solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={addToRefs}
              className="group relative bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-3xl p-8 border-2 border-[#4A6ED1]/30 transition-all duration-500 hover:scale-105 hover:border-[#FF7A2A]/50 cursor-pointer"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#0B1020] to-[#2a2f48] rounded-2xl border-2 border-[#4A6ED1]/30 flex items-center justify-center group-hover:border-[#FF7A2A]/50 transition-colors duration-300">
                  <span className="text-3xl">{stat.icon}</span>
                </div>

                {/* Number */}
                <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <CountUp 
                    end={stat.number} 
                    duration={3}
                    suffix={stat.suffix}
                  />
                </div>

                {/* Label */}
                <div className="text-white font-bold text-xl mb-2 group-hover:text-[#FF7A2A] transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-[#B59A90] text-sm group-hover:text-[#B59A90]/80 transition-colors duration-300">
                  {stat.description}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-[#0B1020] to-[#1a1f38] rounded-2xl px-8 py-6 border border-[#4A6ED1]/20">
            <span className="text-white text-lg font-semibold">
              Ready to join our success story?
            </span>
            <button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
              <span className="flex items-center gap-3">
                Start Your Project
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
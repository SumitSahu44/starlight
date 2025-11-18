// components/About.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation - slide in from left
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation - slide in from right
      gsap.fromTo(contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number',
        { textContent: 0, opacity: 0.5 },
        {
          textContent: (i, target) => {
            const values = [25, 5000, 98];
            return values[i];
          },
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          snap: { textContent: 1 }
        }
      );

      // Floating elements in background
      gsap.to('.floating-about', {
        y: -15,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative py-20 lg:py-32 bg-[#0B1020] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(#4A6ED1 1px, transparent 1px),
              linear-gradient(90deg, #4A6ED1 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Solar Icons */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="floating-about absolute opacity-10"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #4A6ED1, #FF7A2A)`,
              borderRadius: '12px',
              transform: `rotate(${Math.random() * 45}deg)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
              Starlight
            </span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100px' }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Main Image */}
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Starlight Solar Team"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge */}
              {/* <div className="absolute top-6 right-6 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-6 py-3 rounded-full font-bold shadow-2xl">
                Since 1999
              </div> */}
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF7A2A] rounded-full opacity-20 z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#4A6ED1] rounded-full opacity-20 z-0" />
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            {/* Main Description */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Leading the Solar Revolution
              </h3>
              
              <p className="text-lg text-[#B59A90] leading-relaxed">
                For over two decades, Starlight Solar has been at the forefront of renewable energy innovation, 
                transforming how homes and businesses across Canada harness the power of the sun.
              </p>

              <p className="text-lg text-[#B59A90] leading-relaxed">
                Our commitment to excellence and sustainable practices has made us the trusted choice for 
                thousands of customers seeking reliable, efficient, and affordable solar solutions.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Premium Solar Panels",
                "Smart Energy Storage",
                "Fast Monitoring Service",
                "25-Year Warranty",
                "Expert Installation",
                "Local Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            {/* <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8 border-t border-[#4A6ED1]/30">
              {[
                { number: 25, suffix: "", label: "Years of Warranty" },
                { number: 100, suffix: "+", label: "Projects Completed" },
                { number: 98, suffix: "%", label: "Customer Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#FF7A2A] mb-2">
                    <span className="stat-number">0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-[#B59A90] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group relative bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-3">
                  Our Story
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
        </div>
      </div>
    </section>
  );
};

// You'll need to install framer-motion for the motion components
import { motion } from 'framer-motion';

export default About;
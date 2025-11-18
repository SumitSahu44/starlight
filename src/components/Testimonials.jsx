// components/Testimonials.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Add to cards ref array
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation
      gsap.fromTo('.testimonial-heading',
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      gsap.fromTo(cardsRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating elements animation
      gsap.to('.testimonial-float', {
        y: -15,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

      // Active card highlight animation
      gsap.to('.testimonial-card', {
        boxShadow: "0 0 0px rgba(255, 122, 42, 0)",
        borderColor: "rgba(74, 110, 209, 0.3)"
      });

      if (cardsRef.current[activeTestimonial]) {
        gsap.to(cardsRef.current[activeTestimonial], {
          boxShadow: "0 20px 40px rgba(255, 122, 42, 0.2)",
          borderColor: "rgba(255, 122, 42, 0.6)",
          scale: 1.02,
          duration: 0.5,
          ease: "power2.out"
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [activeTestimonial]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Homeowner",
      company: "EcoHomes Resident",
      rating: 5,
      text: "Starlight Solar transformed our energy consumption. Our electricity bills have reduced by 80% and the installation process was seamless from start to finish. Highly recommended!",
      image: "👩‍💼",
      color: "from-[#FF7A2A] to-[#FF9A52]"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "TechSolutions Inc.",
      rating: 5,
      text: "The commercial solar system installed by Starlight Solar has significantly reduced our operational costs. Their team was professional, knowledgeable, and delivered ahead of schedule.",
      image: "👨‍💼",
      color: "from-[#4A6ED1] to-[#6B8CFF]"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Property Manager",
      company: "Green Apartments",
      rating: 5,
      text: "Working with Starlight Solar was an exceptional experience. They handled our multi-unit installation with precision and provided excellent ongoing support. Our tenants love the green initiative!",
      image: "👩‍🔧",
      color: "from-[#B59A90] to-[#d4b8a8]"
    },
    {
      id: 4,
      name: "David Thompson",
      position: "Factory Owner",
      company: "Precision Manufacturing",
      rating: 5,
      text: "The ROI on our solar investment exceeded expectations. Starlight Solar's expertise in commercial systems is unmatched. We're already planning phase two of our solar transition.",
      image: "👨‍🏭",
      color: "from-[#FF7A2A] to-[#4A6ED1]"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="testimonial-float absolute top-1/4 -left-20 w-80 h-80 bg-[#4A6ED1] rounded-full opacity-10 blur-3xl" />
        <div className="testimonial-float absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FF7A2A] rounded-full opacity-10 blur-3xl" />
        
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

        {/* Floating Quote Marks */}
        <div className="testimonial-float absolute top-20 left-10 text-8xl text-[#4A6ED1] opacity-10">"</div>
        <div className="testimonial-float absolute bottom-20 right-10 text-8xl text-[#FF7A2A] opacity-10">"</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="testimonial-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Client </span>
            <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="testimonial-heading text-xl text-[#B59A90] max-w-2xl mx-auto">
            Discover why homeowners and businesses trust Starlight Solar for their energy transformation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={addToRefs}
              className="testimonial-card group relative bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-3xl p-8 border-2 border-[#4A6ED1]/30 transition-all duration-500 hover:scale-105 cursor-pointer"
              onMouseEnter={() => setActiveTestimonial(index)}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              
              {/* Quote Mark */}
              <div className="absolute top-6 right-6 text-4xl text-[#4A6ED1] opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                "
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex space-x-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-[#FF7A2A] text-lg">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 text-lg leading-relaxed mb-8 group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0B1020] to-[#2a2f48] rounded-2xl border-2 border-[#4A6ED1]/30 flex items-center justify-center group-hover:border-[#FF7A2A]/50 transition-colors duration-300">
                    <span className="text-2xl">{testimonial.image}</span>
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg group-hover:text-[#FF7A2A] transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#B59A90] text-sm group-hover:text-[#B59A90]/80 transition-colors duration-300">
                      {testimonial.position}
                    </p>
                    <p className="text-[#4A6ED1] text-sm font-semibold group-hover:text-[#4A6ED1]/80 transition-colors duration-300">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r ${testimonial.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { number: "100+", label: "Happy Clients", icon: "😊" },
            { number: "4.9/5", label: "Average Rating", icon: "⭐" },
            { number: "98%", label: "Would Recommend", icon: "👍" },
            { number: "24/7", label: "Support", icon: "🔧" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-2xl border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/40 transition-all duration-500 hover:scale-105 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1 group-hover:text-[#FF7A2A] transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-[#B59A90] text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12 bg-gradient-to-r from-[#0B1020] to-[#1a1f38] rounded-3xl p-8 lg:p-10 border border-[#4A6ED1]/20">
            <div className="text-left lg:text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Ready to Share Your Story?
              </h3>
              <p className="text-[#B59A90] text-lg">
                Join our growing family of satisfied solar customers
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                <span className="flex items-center gap-3">
                  Get Started Today
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
              
              <button className="border-2 border-[#4A6ED1] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4A6ED1] hover:border-[#4A6ED1] transition-all duration-300 transform hover:scale-105">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="testimonial-float absolute rounded-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] opacity-10"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
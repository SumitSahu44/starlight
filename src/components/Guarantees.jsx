import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Guarantees = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".guarantee-card", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".guarantee-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      gsap.from(".guarantee-subtitle", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const guarantees = [
    {
      icon: "🛡️",
      title: "5 Years of Craftsmanship Warranty",
      description: "We stand by our solar installations with a Lifetime Craftsmanship Warranty, ensuring your investment is protected with guaranteed quality and durability.",
      gradient: "from-[#4A6ED1] to-[#4A6ED1]/80",
      border: "border-[#4A6ED1]/40",
      bg: "from-[#4A6ED1]/10 to-[#4A6ED1]/5"
    },
    {
      icon: "💰",
      title: "Money Back Production Guarantee",
      description: "Our Money Back Production Guarantee ensures optimal performance and your satisfaction. If our panels don't meet the expected output, we'll refund you, securing your investment.",
      gradient: "from-[#FF7A2A] to-[#FF7A2A]/80",
      border: "border-[#FF7A2A]/40",
      bg: "from-[#FF7A2A]/10 to-[#FF7A2A]/5"
    },
    {
      icon: "⚡",
      title: "Installation Quality Guarantee",
      description: "We employ only trained, certified electricians and enforce a rigorous quality control review process. With the industry's best full-time market team, we ensure excellence in every aspect of our work.",
      gradient: "from-[#4A6ED1] to-[#FF7A2A]",
      border: "border-[#4A6ED1]/30",
      bg: "from-[#4A6ED1]/10 to-[#FF7A2A]/5"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="guarantees"
      className="relative py-20 bg-[#0B1020] overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 rounded-full bg-[#4A6ED1] opacity-15 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-[#FF7A2A] opacity-15 blur-3xl" />
        
        {/* Animated floating elements */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#FF7A2A] opacity-50 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#4A6ED1] opacity-60 rounded-full animate-bounce" />

        {/* Light Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
                linear-gradient(#4A6ED1 1px, transparent 1px),
                linear-gradient(90deg, #4A6ED1 1px, transparent 1px)
              `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4A6ED1]/20 to-[#FF7A2A]/20 px-6 py-3 rounded-full border border-[#4A6ED1]/30 mb-6">
            <span className="w-2 h-2 bg-[#FF7A2A] rounded-full animate-pulse"></span>
            <span className="text-[#B59A90] text-sm font-medium">Peace of Mind</span>
          </div>
          
          <h1 className="guarantee-title text-4xl md:text-5xl font-bold text-white mb-6">
            Our Guarantees
          </h1>
          
          <p className="guarantee-subtitle text-xl text-[#B59A90] max-w-2xl mx-auto">
            We stand behind our work with comprehensive guarantees that protect your investment and ensure your complete satisfaction.
          </p>
        </div>

        {/* GUARANTEE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="guarantee-card group relative"
            >
              {/* Main Card */}
              <div className={`relative bg-gradient-to-br ${guarantee.bg} backdrop-blur-md rounded-3xl p-8 border ${guarantee.border} h-full transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:border-[#4A6ED1]/60`}>
                
                {/* Icon Container */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-r ${guarantee.gradient} w-16 h-16 flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl">{guarantee.icon}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {guarantee.title}
                </h3>
                
                <p className="text-[#B59A90] leading-relaxed">
                  {guarantee.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${guarantee.gradient} transition-all duration-500 group-hover:w-3/4`}></div>
              </div>

              {/* Floating Decorative Element */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r ${guarantee.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        {/* <div className="text-center mt-16 fade-up">
          <div className="bg-gradient-to-r from-[#4A6ED1]/10 to-[#FF7A2A]/10 border border-[#4A6ED1]/30 rounded-3xl p-8 backdrop-blur-md">
            <p className="text-[#B59A90] text-lg mb-6">
              Your solar investment is protected by the industry's most comprehensive guarantee package
            </p>
            
            <button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] px-8 py-3 rounded-full text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg">
              Learn More About Our Guarantees
            </button>
          </div>
        </div> */}

        {/* TRUST BADGES */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 fade-up">
          {[
            { label: "Certified Installers", icon: "✅" },
            { label: "Quality Assured", icon: "⭐" },
            { label: "Insured Work", icon: "📄" },
            { label: "Local Support", icon: "🏠" }
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-[#B59A90]">
              <span>{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
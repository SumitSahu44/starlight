import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BuilderProgram = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".fade-left").forEach((el) => {
        gsap.from(el, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray(".fade-right").forEach((el) => {
        gsap.from(el, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="builder-program"
      className="relative py-24 bg-[#0B1020] overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#4A6ED1] opacity-20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FF7A2A] opacity-20 blur-3xl" />

        {/* Grid */}
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
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4A6ED1]/20 to-[#FF7A2A]/20 px-6 py-3 rounded-full border border-[#4A6ED1]/30 mb-8">
            <span className="w-2 h-2 bg-[#FF7A2A] rounded-full animate-pulse" />
            <span className="text-[#B59A90] text-sm">Partner Program</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#B59A90] bg-clip-text text-transparent">
            Builder Partnership Program  
          </h1>

          <p className="text-xl md:text-2xl text-[#B59A90] max-w-4xl mx-auto leading-relaxed">
            Build the future. Sell smarter. Partner with{" "}
            <span className="text-[#4A6ED1] font-semibold">Starlight Solar</span> 
            to create homes that sell themselves.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { number: "40%", label: "Faster Sales" },
              { number: "5%", label: "Higher Value" },
              { number: "100%", label: "Turnkey Solution" },
                ].map((stat, i) => (
              <div key={i} className="fade-up text-center">
                <div className="text-3xl font-bold text-white mb-1 hover:text-4xl cursor-pointer">{stat.number}</div>
                <div className="text-[#B59A90]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES + IMAGE */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Left section */}
          <div className="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 bg-[#FF7A2A]" />
              <span className="text-[#FF7A2A] font-semibold text-xl">For Builders</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Build Homes That Sell Themselves
            </h2>

            <p className="text-[#B59A90] text-lg leading-relaxed mb-8">
              Stand out in Alberta's competitive housing market with built-in solar solutions.
            </p>

            <div className="space-y-4">
              {[
                "Premium market positioning",
                "Faster closing times",
                "Higher profit margins",
                "Future-proof communities",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#4A6ED1] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="fade-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1599427303058-f04cbcf4756f"
                alt="Realtor Showing Solar Home"
                className="rounded-3xl border border-[#4A6ED1]/30 shadow-xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] p-4 rounded-2xl text-white shadow-2xl">
                <div className="font-bold text-lg">Sell Faster</div>
                <div className="text-sm opacity-90">Solar-Ready Homes</div>
              </div>
            </div>
          </div>
          </div>

        {/* BENEFITS GRID */}
        <div className="mb-24">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Builders Choose Us
            </h2>
            <p className="text-[#B59A90] text-lg max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for construction professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Seamless Integration", description: "Perfect coordination with your construction timeline" },
              { icon: "📈", title: "Market Advantage", description: "Stand out in competitive housing markets" },
              { icon: "🔧", title: "Turnkey Solution", description: "We handle design, permits, & installation" },
              { icon: "🎯", title: "Sales Support", description: "Marketing materials and buyer education" },
              { icon: "💸", title: "Cost Efficiency", description: "Exclusive partner pricing & financing" },
              { icon: "🛡️", title: "Warranty Protection", description: "Comprehensive coverage for peace of mind" },
            ].map((b, i) => (
              <div
                key={i}
                className="fade-up group bg-gradient-to-br from-[#1a1f38] to-[#0B1020] p-8 rounded-3xl border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
                <p className="text-[#B59A90]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>

       {/* PROCESS TIMELINE - Same Layout, Only Different Images */}
<div className="mb-28">
  <div className="text-center mb-16 fade-up">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      How It Works
    </h2>
    <p className="text-[#B59A90] text-lg max-w-3xl mx-auto">
      Simple, streamlined process from consultation to completion
    </p>
  </div>

  <div className="relative space-y-12">

    {/* Center Gradient Line */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4A6ED1] to-[#FF7A2A] opacity-30" />

    {[
      { 
        step: "01", 
        title: "Partnership Setup", 
        desc: "We understand your business and project requirements",
        img: "https://www.powerinfotoday.com/wp-content/uploads/news/12097/renewable_1.jpg"
      },
      { 
        step: "02", 
        title: "System Design", 
        desc: "Custom solar solutions for your home designs",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEDSFfUcKIIRP6wtzexiKPfzw57CW8afxEQ&s"
      },
      { 
        step: "03", 
        title: "Seamless Installation", 
        desc: "Coordinated installation during construction",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEJI5F1sycvVIc9VA3kR85SEVEv0SHYq9Mw&s"
      },
      { 
        step: "04", 
        title: "Certified City", 
        desc: "City compliance and certification made easy",
        img: "https://xnergs.in/wp-content/uploads/2025/06/commercial-solar-panel-1024x373.png"
      },
      { 
        step: "05", 
        title: "Sales Enablement", 
        desc: "Marketing support and buyer demonstrations",
        img: "https://corecommissions.com/wp-content/uploads/2023/01/Shutterstock_1902726649-1-1.jpg"
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`fade-up relative flex items-center gap-10 ${
          i % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Text Card */}
        <div className="flex-1">
          <div className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] p-8 rounded-3xl border border-[#4A6ED1]/30">
            <div className="text-[#FF7A2A] text-sm font-semibold mb-1">Step {item.step}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-[#B59A90]">{item.desc}</p>
          </div>
        </div>

        {/* Center Dot */}
        <div className="w-5 h-5 bg-[#4A6ED1] rounded-full border-4 border-[#0B1020] z-10" />

        {/* Unique Image for Each Step */}
        <div className="flex-1">
          <img
            src={item.img}
            className="rounded-2xl border border-[#4A6ED1]/20 shadow-lg w-full h-64 object-cover"
            alt={item.title}
          />
        </div>
      </div>
    ))}
  </div>
</div>
        {/* CTA */}
        <div className="text-center mb-20 fade-up">
          <div className="bg-gradient-to-r from-[#4A6ED1]/10 to-[#FF7A2A]/10 border border-[#4A6ED1]/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Ready to Build Brighter?
            </h2>

            <p className="text-[#B59A90] text-lg max-w-3xl mx-auto mb-6">
              Join forward-thinking builders using solar to sell faster & increase profits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] px-10 py-4 rounded-full text-white font-bold hover:scale-105 transition">
                Start Partnership
              </button>
              {/* <button className="border border-[#4A6ED1] px-10 py-4 rounded-full text-white font-bold hover:bg-[#4A6ED1]/20 transition">
                View Case Studies
              </button> */}
            </div>
          </div>
        </div>

        {/* FORM */}
       {/* FORM */}
<div className="fade-up bg-gradient-to-br from-[#1a1f38] to-[#0B1020] p-10 rounded-3xl border border-[#4A6ED1]/30">

  <h2 className="text-4xl font-bold text-white text-center mb-6">
    Start Your Solar Journey
  </h2>

  <p className="text-[#B59A90] text-lg text-center mb-10">
    Our partnership team will contact you within ASAP.
  </p>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      "Builder / Company Name",
      "Contact Person",
      "Position / Title",
      "Phone Number",
      "Email Address",
      "Website",
      "Project Locations",
      "Annual Home Volume",
    ].map((label, i) => {
      
      // Pehle 5 = required (index 0 to 4)
      const isRequired = i <= 4;

      return (
        <div key={i} className="fade-up">
          <label className="text-white/80 text-sm mb-2 block">
            {label}{" "}
            {isRequired && <span className="text-red-500">*</span>}
          </label>

          <input
            required={isRequired}
            className="w-full p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:border-[#FF7A2A] outline-none"
            placeholder={label}
          />
        </div>
      );
    })}
  </div>

  <button className="mt-10 w-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] py-4 rounded-xl text-white font-bold hover:scale-105 transition">
    Submit Partnership Inquiry
  </button>

  <p className="text-center text-[#B59A90] text-sm mt-4">
    You agree to our Privacy Policy and consent to contact.
  </p>
</div>

      </div>
    </section>
  );
};

export default BuilderProgram;

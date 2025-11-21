import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";  // <-- Ye add karna
import QuoteModal from "./QuoteModal";      // <-- Ye add karna
const SolarPanelsService = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const stats = [
    { number: "10", label: "Years Warranty", suffix: "" },
    { number: "99", label: "System Reliability", suffix: "%" },
    { number: "30", label: "Average Savings", suffix: "%" },
    
  ];
const [currentSlide, setCurrentSlide] = useState(0);  // <-- Ye add karo

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const features = [
    {
      icon: "⚡",
      title: "High Efficiency",
      description: "Advanced monocrystalline technology with up to 22.8% efficiency rating"
    },
    {
      icon: "🏡",
      title: "Home Integration",
      description: "Seamless integration with your existing electrical system"
    },
    {
      icon: "📱",
      title: "Smart Monitoring",
      description: "Real-time performance tracking through our mobile app"
    },
    {
      icon: "🌧️",
      title: "Weather Resistant",
      description: "Built to withstand extreme weather conditions"
    },
    {
      icon: "💰",
      title: "Tax Credits",
      description: "Eligible for federal and state solar tax incentives"
    },
    {
      icon: "🔧",
      title: "Easy Maintenance",
      description: "Minimal maintenance required for optimal performance"
    }
  ];

  const technologySpecs = [
    {
      category: "Performance",
      specs: [
        { name: "Estimated Efficiency Rate", value: "Up to 22.8%" },
        { name: "Estimated Power Output", value: "370-450W" },
        { name: "Estimated Temperature Coefficient", value: "-0.34%/°C" }
      ]
    },
    {
      category: "Physical",
      specs: [
        { name: "Dimensions", value: '68" x 41"' },
        { name: "Weight", value: "41 lbs" },
        { name: "Frame Material", value: "Anodized Aluminum" }
      ]
    },
    {
      category: "Warranty",
      specs: [
        { name: "Performance", value: "10 years" },
        // { name: "Product", value: "12 years" },
        { name: "Workmanship", value: "5 years" }
      ]
    }
  ];

  const installationProcess = [
    {
      step: "1",
      title: "Consultation",
      description: "Free energy assessment",
      duration: "1-2 days"
    },
    {
      step: "2",
      title: "Design",
      description: "Custom system planning",
      duration: "3-5 days"
    },
    {
      step: "3",
      title: "Approval",
      description: "Permits & documentation",
      duration: "2-4 weeks"
    },
    {
      step: "4",
      title: "Installation",
      description: "Professional setup",
      duration: "2-3 days"
    },
    {
      step: "5",
      title: "Activation",
      description: "System commissioning",
      duration: "1 day"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0B1020] overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] opacity-10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#4A6ED1] opacity-5 rounded-full blur-2xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#FF7A2A] rounded-full opacity-60 animate-float" />
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#4A6ED1] rounded-full opacity-40 animate-float delay-500" />
        <div className="absolute bottom-1/4 left-2/3 w-4 h-4 bg-[#FF7A2A] rounded-full opacity-30 animate-float delay-1000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(#4A6ED1 1px, transparent 1px),
                           linear-gradient(90deg, #4A6ED1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 ">
        {/* Navigation */}
        {/* <nav className="relative z-20 pt-8 px-6">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg">←</span>
              </div>
              <span className="text-[#B59A90] group-hover:text-white transition-colors duration-300">
                Back to Services
              </span>
            </Link>
          </div>
        </nav> */}

        {/* Hero Section */}
        <div className="relative pt-20 pb-32 px-6 mt-5">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4A6ED1]/20 to-[#FF7A2A]/20 px-6 py-3 rounded-full border border-[#4A6ED1]/30 mb-8">
                  <span className="w-2 h-2 bg-[#FF7A2A] rounded-full animate-pulse"></span>
                  <span className="text-[#B59A90] text-sm font-medium uppercase tracking-wider">Premium Solar Solutions</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Battery <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">Storage</span>
                </h1>
                
                <p className="text-xl text-[#B59A90] mb-8 leading-relaxed">
                  Harness the power of the sun with our premium solar panels. 
                  Designed for maximum efficiency, durability, and long-term savings 
                  for your home or business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button onClick={() => setIsQuoteModalOpen(true)} className="group relative px-8 py-4 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden">
                    <span className="relative z-10">Get Free Assessment</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  {/* <button className="px-8 py-4 bg-transparent border-2 border-[#4A6ED1]/30 text-white font-bold rounded-2xl hover:border-[#FF7A2A] hover:bg-[#FF7A2A]/10 transition-all duration-300">
                    View Case Studies
                  </button> */}
                </div>
              </motion.div>

              {/* Right Content - Visual */}
              {/* Right Content - Visual - Professional Carousel */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative"
>
  <div className="relative bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-3xl p-8 border border-[#4A6ED1]/30 backdrop-blur-lg">
    
    {/* Carousel Container */}
    <div className="relative w-full h-80 rounded-2xl overflow-hidden group">
      <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" 
           style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        
        {/* Slide 1 */}
        <div className="w-full h-full flex-shrink-0">
          <img 
            src="/images/battery.png"
            alt="Solar panels on modern home"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Slide 2 */}
        <div className="w-full h-full flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1662601311150-c20f76b7cb20?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Close-up of premium solar panels"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Slide 3 */}
        <div className="w-full h-full flex-shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1681263576084-e054b2d89903?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmF0dGVyeSUyMFN0b3JhZ2UlMjBzb2xhcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Solar farm with blue sky"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/70 via-transparent to-transparent pointer-events-none" />

      {/* Left/Right Arrows (visible on hover) */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
      >
        ←
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-[#FF7A2A] w-8' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine" />
    </div>

    {/* Stats Grid - Same as before */}
    <div className="grid grid-cols-2 gap-4 mt-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-4 bg-[#0B1020] rounded-xl border border-[#4A6ED1]/20">
          <div className="text-2xl font-bold text-[#FF7A2A] mb-1">
            {stat.number}<span className="text-white">{stat.suffix}</span>
          </div>
          <div className="text-sm text-[#B59A90]">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</motion.div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Our <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">Solar Panels</span>
              </h2>
              <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
                Engineered for exceptional performance and built to last, our solar panels deliver unmatched reliability and savings
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/50 transition-all duration-500 hover:transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#B59A90] leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Specifications */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-1 gap-12">
              {/* Technology Highlights */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Advanced Technology</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl border border-[#4A6ED1]/20">
                    <div className="w-12 h-12 bg-[#4A6ED1]/20 rounded-xl flex items-center justify-center text-2xl">
                      🔬
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Monocrystalline Silicon</h4>
                      <p className="text-[#B59A90]">Premium grade silicon cells for maximum efficiency and longevity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl border border-[#4A6ED1]/20">
                    <div className="w-12 h-12 bg-[#FF7A2A]/20 rounded-xl flex items-center justify-center text-2xl">
                      🛡️
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Weather Resistant</h4>
                      <p className="text-[#B59A90]">Built to withstand hail, high winds, and extreme temperatures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl border border-[#4A6ED1]/20">
                    <div className="w-12 h-12 bg-[#4A6ED1]/20 rounded-xl flex items-center justify-center text-2xl">
                      📊
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">Smart Optimization</h4>
                      <p className="text-[#B59A90]">Advanced micro-inverters for individual panel performance optimization</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Specifications */}
              {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Technical Specifications</h2>
                <div className="space-y-6">
                  {technologySpecs.map((category, index) => (
                    <div key={index} className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl p-6 border border-[#4A6ED1]/20">
                      <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                      <div className="space-y-3">
                        {category.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex justify-between items-center py-2 border-b border-[#4A6ED1]/10">
                            <span className="text-[#B59A90]">{spec.name}</span>
                            <span className="text-white font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div> */}
            </div>
          </div>
        </section>

    

        {/* Final CTA */}
        {/* Final CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-3xl p-12 border border-[#4A6ED1]/30 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF7A2A] rounded-full blur-2xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#4A6ED1] rounded-full blur-2xl" />
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-4 relative z-10">
                  Ready to Power Your Life with Solar?
                </h2>
                <p className="text-xl text-[#B59A90] mb-8 relative z-10 max-w-2xl mx-auto">
                  Join thousands of homeowners who are saving money and reducing their carbon footprint with our premium solar solutions
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
               <Link to="/contact"  ><button className="px-8 py-4 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-2xl">
                    Start Your Solar Journey
                  </button></Link> 
                
                  {/* CTA */}
               <button  onClick={() => setIsQuoteModalOpen(true)} className="px-8 py-4 bg-transparent border-2 border-[#4A6ED1]/30 text-white font-bold rounded-2xl hover:border-[#FF7A2A] hover:bg-[#FF7A2A]/10 transition-all duration-300">
                    Get a free quote
                  </button>

                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

 {/* Modal */}
            <QuoteModal 
              isOpen={isQuoteModalOpen} 
              onClose={() => setIsQuoteModalOpen(false)} 
            />
      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SolarPanelsService;
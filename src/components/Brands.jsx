// components/Clients.js (or Brands.js)
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const sectionRef = useRef(null);
  const brandSliderRef = useRef(null);
  const citySliderRef = useRef(null);
  const cityItemsRef = useRef([]);

  const addCityToRefs = (el) => {
    if (el && !cityItemsRef.current.includes(el)) {
      cityItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {

      // === BRAND LOGOS SLIDER ===
      const setupBrandSlider = () => {
        const slider = brandSliderRef.current;
        if (!slider || slider.children.length === 0) return;

        const firstItem = slider.children[0];
        const itemWidth = firstItem.offsetWidth;
        const gap = 48; // space-x-12 = 3rem = 48px (lg:space-x-12)
        const totalItemsPerSet = 7; // you have 7 brands
        const setWidth = (itemWidth + gap) * totalItemsPerSet;

        gsap.to(slider, {
          x: -setWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(gsap.utils.wrap(-setWidth, 0))
          }
        });
      };

      // === CITIES TEXT SLIDER ===
      const setupCitySlider = () => {
        const slider = citySliderRef.current;
        if (!slider || slider.children.length === 0) return;

        const firstCity = slider.children[0];
        const cityWidth = firstCity.offsetWidth;
        const gap = 64; // approx spacing
        const citiesCount = 11;
        const totalWidth = (cityWidth + gap) * citiesCount;

        const cityAnimation = gsap.to(slider, {
          x: -totalWidth,
          duration: 35,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(gsap.utils.wrap(-totalWidth, 0))
          }
        });

        const cityContainer = sectionRef.current.querySelector('.city-slider-container');

        cityContainer.addEventListener('mouseenter', () => {
          cityAnimation.pause();
          gsap.to('.city-item', { scale: 1.05, duration: 0.4 });
        });

        cityContainer.addEventListener('mouseleave', () => {
          cityAnimation.play();
          gsap.to('.city-item', { scale: 1, duration: 0.4 });
        });
      };

      // Run both after images/load
      setTimeout(() => {
        setupBrandSlider();
        setupCitySlider();
      }, 500);

      // City items entrance animation
      gsap.fromTo(cityItemsRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".cities-section",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const clients = [
    { name: "EcoHomes Ltd", logo: "/images/brandlogo.jpeg" },
    { name: "SolarTech Inc", logo: "/images/brandlogo2.jpeg" },
    { name: "GreenEnergy Co", logo: "/images/brandlogo3.jpeg" },
    { name: "PowerSolutions", logo: "/images/brandlogo4.jpeg" },
    { name: "RenewCorp", logo: "/images/brandlogo5.jpeg" },
    { name: "SunWorks", logo: "/images/brandlogo6.jpeg" },
    { name: "EcoBuild", logo: "/images/brandlogo7.jpeg" },
  ];

  const infiniteClients = [...clients, ...clients, ...clients];

  const cities = [
    "City of Edmonton",
    "City of Calgary",
    "City of St. Albert",
    "City of Leduc",
    "City of Spruce Grove",
    "City of Beaumont",
    "City of Wetaskiwin",
    "City of Airdrie",
    "Town of Devon",
    "Sturgeon County",
    "Strathcona County"
  ];

  // Duplicate cities 3 times for seamless infinite scroll
  const infiniteCities = [...cities, ...cities, ...cities];

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-[#0B1020] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#4A6ED1] rounded-full opacity-5 blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-[#FF7A2A] rounded-full opacity-5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(90deg, #4A6ED1 1px, transparent 1px), linear-gradient(180deg, #4A6ED1 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Brands Section */}
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

        <div className="slider-container relative mb-20 overflow-hidden">
          <div ref={brandSliderRef} className="flex items-center space-x-8 lg:space-x-12 px-4" style={{ width: 'max-content' }}>
            {infiniteClients.map((client, index) => (
              <div key={`brand-${index}`} className="flex-shrink-0">
                <div className="logo-container w-40 h-40 lg:w-44 lg:h-44 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-2xl border-2 border-[#4A6ED1]/30 flex items-center justify-center p-6 hover:scale-110 transition-all duration-500 group">
                  <img src={client.logo} alt={client.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cities Section */}
        <div className="cities-section text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Cities We Serve in </span>
            <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
              Alberta
            </span>
          </h2>
          <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
            Proudly powering homes across Alberta with clean, reliable solar energy
          </p>
        </div>

        {/* Infinite Cities Text Slider */}
        <div className="city-slider-container relative overflow-hidden mb-20">
          <div 
            ref={citySliderRef}
            className="flex items-center gap-10 lg:gap-16 px-8"
            style={{ width: 'max-content' }}
          >
            {infiniteCities.map((city, index) => (
              <div
                key={`city-${index}`}
                ref={addCityToRefs}
                className="city-item flex-shrink-0"
              >
                <div className="px-8 py-5 bg-gradient-to-r from-[#0B1020] to-[#1a1f38] border border-[#4A6ED1]/30 rounded-full 
                  text-white text-lg lg:text-2xl font-semibold tracking-wider
                  shadow-xl hover:shadow-2xl hover:shadow-[#FF7A2A]/20
                  transition-all duration-500 hover:scale-110 hover:border-[#FF7A2A]/60
                  bg-clip-text text-transparent bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] hover:from-[#4A6ED1] hover:to-[#FF7A2A]"
                >
                  {city}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { number: "100+", label: "Happy Clients", color: "from-[#FF7A2A] to-[#FF9A52]" },
            { number: "98%", label: "Retention Rate", color: "from-[#4A6ED1] to-[#6B8CFF]" },
            { number: "4.9/5", label: "Average Rating", color: "from-[#B59A90] to-[#d4b8a8]" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-[#0B1020] to-[#1a1f38] rounded-2xl border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/40 transition-all duration-500 hover:scale-105 group">
              <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform`}>
                {stat.number}
              </div>
              <div className="text-white/70 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 25 + 15}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default Brands;
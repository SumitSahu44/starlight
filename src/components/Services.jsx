// components/Services.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeService, setActiveService] = useState(0);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(cardsRef.current,
        { rotationY: 90, opacity: 0, scale: 0.8 },
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
          }
        }
      );

      gsap.to('.service-icon', {
        y: -10,
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      id: 1,
      slug: "SolarPanel",
      title: "Solar Panels",
      // icon: "☀️",
      image: "https://www.canadiansolar.com/wp-content/uploads/2019/11/27.png",
      description: "High-efficiency solar panel systems designed for long-term savings and reliable clean energy.",
      features: [
        "Reduce power bills",
        "Energy independence",
        "Long-term savings",
        "Low maintenance",
        "Protect against rising energy bills",
        "Contribute to a cleaner community"
      ],
      color: "from-[#FF7A2A] to-[#FF9A52]"
    },

    {
      id: 2,
       slug: "BatteryStorage",
      title: "Battery Storage",
      // icon: "🔋",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOVwVfQqfcJCLon7TeRtbaDMk_eWzX4K0Zg&s",
      description: "Store solar power and use it anytime—even at night or during outages—for full energy independence.",
      features: [
        "Use solar energy even at night",
        "Backup power during outages",
        "Reduce electricity dependency",
        "Lower peak-hour energy costs",
        "Extends solar system efficiency",
        "Smart home integration ready"
      ],
      color: "from-[#4A6ED1] to-[#6B8CFF]"
    },

    {
      id: 3,
       slug: "EVChargingStations",
      title: "EV Charging Stations",
      // icon: "🚗⚡",
      image: "https://media.electrify-canada.ca/assets/images/thumbnail/270-ElectrifyCanadaReginaSaskatchewan.jpg",
      description: "Fast, modern EV chargers for homes & businesses—powered by renewable solar energy.",
      features: [
        "Fast home EV charging setup",
        "Solar-powered EV charging",
        "Commercial charging solutions",
        "Compatible with all EV brands",
        "Smart charging mobile app",
        "Future-ready infrastructure"
      ],
      color: "from-[#FF7A2A] to-[#4A6ED1]"
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-32 bg-[#0B1020] overflow-hidden">

      {/* Section Heading */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-white">Our </span>
          <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
          Premium solar solutions built for modern homes, smart businesses, and sustainable living.
        </p>
      </div>

      {/* Cards */}
     {/* Cards */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
  {services.map((service) => (
    <Link
      key={service.id}
      to={`/services/${service.slug}`}
      className="block group relative cursor-pointer"
    >
      <div
        ref={addToRefs}
        className={`service-card bg-[#11172B] border border-[#4A6ED1]/20 rounded-3xl p-8 shadow-lg overflow-hidden transition-all duration-500 hover:border-[#4A6ED1]/50`}
      >
        {/* Image */}
        <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
        </div>

        {/* Icon */}
        <div className="text-5xl mb-4 service-icon">{service.icon}</div>

        <h3 className="text-3xl font-bold text-white mb-4">
          {service.title}
        </h3>

        <p className="text-[#B59A90] mb-6">{service.description}</p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-white/90">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
              {f}
            </li>
          ))}
        </ul>

        <button className={`relative bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all`}>
          Learn More
        </button>
      </div>
    </Link>
  ))}
</div>


      {/* CTA */}
      <div className="text-center mt-20">
        <button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-110 transition-all">
          Get Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Services;

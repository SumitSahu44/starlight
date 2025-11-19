// components/Services.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import QuoteModal from "./QuoteModal";
const Services = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const services = [
    {
      id: 1,
      slug: "SolarPanel",
      title: "Solar Panels",
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
      image: "/images/Gemini_Generated_Image_dllgyudllgyudllg.png",
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
      slug: "EVCharging",
      title: "EV Charging ",
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
    <section id="services" className="relative py-24 lg:py-32 bg-[#0B1020] overflow-hidden">

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className="block group relative cursor-pointer"
          >
            <div
              className={`service-card bg-[#11172B] border border-[#4A6ED1]/20 rounded-3xl p-8 shadow-lg overflow-hidden transition-all duration-500 hover:border-[#4A6ED1]/50 hover:scale-105`}
            >
              {/* Image */}
              <div className="w-full h-52 mb-6 rounded-2xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-[#B59A90] mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
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
      <div className="text-center mt-20" onClick={() => setIsQuoteModalOpen(true)}>
        <button  className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-110 transition-all">
          Get a Free Quote
        </button>
      </div>

      {/* Modal */}
            <QuoteModal 
              isOpen={isQuoteModalOpen} 
              onClose={() => setIsQuoteModalOpen(false)} 
            />
    </section>
  );
};

export default Services;
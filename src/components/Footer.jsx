// components/Footer.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer entrance animation
      gsap.fromTo(contentRef.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating elements animation
      gsap.to('.footer-float', {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // Social icon hover animations
      gsap.utils.toArray('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.2,
            y: -5,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });

        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        });
      });

    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative bg-gradient-to-br from-[#0B1020] to-[#1a1f38] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
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
        
        {/* Gradient Orbs */}
        <div className="footer-float absolute -top-20 -left-20 w-60 h-60 bg-[#4A6ED1] rounded-full opacity-10 blur-3xl" />
        <div className="footer-float absolute -bottom-20 -right-20 w-80 h-80 bg-[#FF7A2A] rounded-full opacity-10 blur-3xl" />
        
        {/* Solar Panel Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-5">
          <div className="grid grid-cols-12 gap-1 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-b from-[#4A6ED1] to-transparent" />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div ref={contentRef} className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 pt-16 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
                  Starlight Solar
                </h3>
                <p className="text-[#B59A90] text-sm mt-2">
                  Powering a Sustainable Future
                </p>
              </div>
              
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Leading the solar revolution with cutting-edge technology and unparalleled expertise. 
                Transforming energy consumption across homes and businesses.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: "📘", label: "Facebook", color: "hover:text-blue-400" },
                  { icon: "📷", label: "Instagram", color: "hover:text-pink-400" },
                  { icon: "💼", label: "LinkedIn", color: "hover:text-blue-300" },
                  { icon: "🐦", label: "Twitter", color: "hover:text-sky-400" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`social-icon w-10 h-10 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-lg flex items-center justify-center text-white/70 transition-all duration-300 hover:border-[#FF7A2A] hover:bg-[#FF7A2A]/10 hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-full" />
              </h4>
              
              <ul className="space-y-3">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Projects",
                  "Testimonials",
                  "Contact"
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-[#FF7A2A] transition-all duration-300 hover:translate-x-2 inline-block text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Our Services
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-full" />
              </h4>
              
              <ul className="space-y-3">
                {[
                  "Residential Solar",
                  "Commercial Solar",
                  "Solar Storage",
                  "System Monitoring",
                  "Maintenance",
                  "Consultation"
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-white/70 hover:text-[#4A6ED1] transition-all duration-300 hover:translate-x-2 inline-block text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                Contact Us
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-gradient-to-r from-[#FF7A2A] to-[#B59A90] rounded-full" />
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <div>
                    <p className="text-white/80 text-sm">
                      123 Solar Avenue<br />
                      Energy City, EC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">📞</span>
                  </div>
                  <a href="tel:+15551234567" className="text-white/80 hover:text-[#FF7A2A] transition-colors duration-300 text-sm">
                    +1 (555) 123-4567
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#FF7A2A] to-[#B59A90] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✉️</span>
                  </div>
                  <a href="mailto:info@starlightsolar.com" className="text-white/80 hover:text-[#4A6ED1] transition-colors duration-300 text-sm">
                    info@starlightsolar.com
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <p className="text-white/80 text-sm mb-3">Stay Updated</p>
                <div className="flex space-x-2">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-lg text-white/80 text-sm placeholder-white/40 focus:outline-none focus:border-[#FF7A2A] transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#4A6ED1]/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-white/60 text-sm">
                  © {new Date().getFullYear()} Starlight Solar. All rights reserved.
                </p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center md:justify-end space-x-6">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Sitemap"
                ].map((link, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="text-white/60 hover:text-[#FF7A2A] transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white rounded-full flex items-center justify-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group"
            aria-label="Back to top"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="footer-float absolute rounded-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] opacity-5"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
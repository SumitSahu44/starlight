// components/Footer.js
import React from 'react';
import { FaPinterest } from "react-icons/fa";

import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0B1020] to-[#1a1f38] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, #4A6ED1 1px, transparent 1px),
              linear-gradient(180deg, #4A6ED1 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4A6ED1] rounded-full blur-3xl opacity-10" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FF7A2A] rounded-full blur-3xl opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Company Info */}
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent mb-2">
                Starlight Solar
              </h3>
              <p className="text-[#B59A90] text-sm mb-6">Powering a Sustainable Future</p>
              <p className="text-white/70 text-sm leading-relaxed">
                Leading the solar revolution with cutting-edge technology and unmatched expertise across homes and businesses.
              </p>

              {/* Social Icons */}
            {/* Social Icons */}
<div className="flex space-x-4 mt-8">
  {[
    { Icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600" },
    { Icon: Instagram, href: "https://www.instagram.com/starlightsolar_inc/", color: "hover:text-pink-500" },
    { Icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400" },
    // Twitter (X) hata diya gaya
    { Icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 2H1L9.26037 13.0145L1.44995 22.0002H4.09942L10.4883 14.8671L16 22.0002H23L14.3917 10.3574L21.8 2H19.1506L13.1643 8.59862L8 2ZM17.538 20L5.462 4H6.974L19.05 20H17.538Z"/>
      </svg>
    ), href: "https://tiktok.com/@yourusername", color: "hover:text-white" }, // TikTok
    { 
  Icon: () => (
   <FaPinterest className='text-xl'/>
  ), 
  href: "https://pinterest.com/yourusername", 
  color: "hover:text-red-600" 
}
// Pinterest
  ].map(({ Icon, href, color }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-11 h-11 bg-[#0B1020]/80 border border-[#4A6ED1]/30 rounded-xl flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#FF7A2A]/10 hover:border-[#FF7A2A] hover:scale-110 ${color} group`}
    >
      <Icon className="group-hover:scale-110 transition" />
    </a>
  ))}
</div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Blogs", href: "/Blogs" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-white/70 hover:text-[#FF7A2A] transition-all duration-300 hover:translate-x-2 text-sm block text-left w-full"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Solar Panels", href: "/services/SolarPanel" },
                  { label: "Battery Storage", href: "/services/BatteryStorage" },
                  { label: "EV Charging", href: "/services/EVCharging" },
                
                ].map((service) => (
                  <li key={service.label}>
                    <button
                      onClick={() => handleNavigation(service.href)}
                      className="text-white/70 hover:text-[#4A6ED1] transition-all duration-300 hover:translate-x-2 text-sm block text-left w-full"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#FF7A2A] to-[#B59A90] rounded-full"></span>
              </h4>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <p className="text-white/80">
                    222-7923 Coronet Rd,<br /> Edmonton, AB T6E 4N7
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <a href="tel:+7809646364" className="text-white/80 hover:text-[#FF7A2A] transition">
                    +(780)-964-6364
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7A2A] to-[#B59A90] rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <a href="mailto:info@starlightsolar.ca" className="text-white/80 hover:text-[#4A6ED1] transition">
                    info@starlightsolar.ca
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              {/* <div className="mt-8">
                <p className="text-white/80 text-sm mb-3">Stay Updated</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#FF7A2A] transition text-sm"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold rounded-xl hover:shadow-xl transition-all hover:scale-105">
                    Join
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A6ED1]/20 mt-12">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-center items-center text-sm">
              <p className="text-white/60">
                © {new Date().getFullYear()} Starlight Solar. All rights reserved.
              </p>
              {/* <div className="flex gap-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                  <a key={link} href="#" className="text-white/60 hover:text-[#FF7A2A] transition">
                    {link}
                  </a>
                ))}
              </div> */}
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
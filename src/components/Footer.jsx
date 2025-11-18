// components/Footer.js
import React from 'react';
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

const Footer = () => {
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
              <div className="flex space-x-4 mt-8">
                {[
                  { Icon: Facebook, href: "#", color: "hover:text-blue-500" },
                  { Icon: Instagram, href: "#", color: "hover:text-pink-500" },
                  { Icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                  { Icon: Twitter, href: "#", color: "hover:text-sky-400" }
                ].map(({ Icon, href, color }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 bg-[#0B1020]/80 border border-[#4A6ED1]/30 rounded-xl flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-[#FF7A2A]/10 hover:border-[#FF7A2A] hover:scale-110 ${color} group`}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition" />
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
                {["Home", "About Us", "Services", "Projects", "Testimonials", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/70 hover:text-[#FF7A2A] transition-all duration-300 hover:translate-x-2 text-sm block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {["Residential Solar", "Commercial Solar", "Solar Storage", "System Monitoring", "Maintenance", "Consultation"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-white/70 hover:text-[#4A6ED1] transition-all duration-300 hover:translate-x-2 text-sm block">
                      {service}
                    </a>
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
                    123 Solar Avenue<br />Energy City, EC 12345
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-full flex items-center justify-center">
                    <Phone size={18} className="text-white" />
                  </div>
                  <a href="tel:+15551234567" className="text-white/80 hover:text-[#FF7A2A] transition">
                    +1 (555) 123-4567
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#FF7A2A] to-[#B59A90] rounded-full flex items-center justify-center">
                    <Mail size={18} className="text-white" />
                  </div>
                  <a href="mailto:info@starlightsolar.com" className="text-white/80 hover:text-[#4A6ED1] transition">
                    info@starlightsolar.com
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
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
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A6ED1]/20 mt-12">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <p className="text-white/60">
                © {new Date().getFullYear()} Starlight Solar. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                  <a key={link} href="#" className="text-white/60 hover:text-[#FF7A2A] transition">
                    {link}
                  </a>
                ))}
              </div>
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
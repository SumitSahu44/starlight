// components/Navbar.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import QuoteModal from "./QuoteModal";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const sectionId = href.replace("#", "");

      if (location.pathname === "/") {
        smoothScroll(sectionId);
      } else {
        navigate("/");
        setTimeout(() => smoothScroll(sectionId), 600);
      }
    } else {
      navigate(href);
    }
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    {
      label: "Our Programs",
      dropdown: true,
      items: [
        { label: "Builder Partnership Program ", href: "/BuilderProgram" },
        { label: "REALTOR Partnership", href: "/RealtorPartner" },
      ],
    },
    { label: "Blogs", href: "/Blogs" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1020]/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP BAR */}
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer flex items-center"
            onClick={() => handleNavigation("#home")}
          >
            <img
              src="/images/Logo (4).png"
              alt="StarLight"
              className="h-12 w-auto object-contain"
            />
          </motion.div>




          {/* MOBILE: Get a Quote Button */}
          <button
           onClick={() => setIsQuoteModalOpen(true)}
            className="md:hidden bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] 
                       text-white text-sm px-3 py-1.5 rounded-full font-semibold 
                       shadow-md mr-3"
          >
            Get a free Quote
          </button>

{/* Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />

          

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor">
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="text-white/90 hover:text-white font-medium">
                    {item.label}
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-0 mt-2 bg-[#0B1020] 
                                   border border-white/10 backdrop-blur-lg 
                                   rounded-lg p-3 shadow-xl"
                      >
                        {item.items.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => handleNavigation(sub.href)}
                            className="block px-4 py-2 w-[180px] text-white/90 
                                       hover:text-white hover:bg-white/10 
                                       rounded-md text-left"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.button
                  key={index}
                  onClick={() => handleNavigation(item.href)}
                  className="text-white/90 hover:text-white px-3 py-2 
                             rounded-md font-medium cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.button>
              )
            )}

            <motion.button
                onClick={() => setIsQuoteModalOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              className="hidden md:block bg-gradient-to-r from-[#FF7A2A] 
                         to-[#4A6ED1] text-white px-6 py-2 rounded-full 
                         font-semibold shadow-lg transition-all"
            >
              Get a Free Quote
            </motion.button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            className="md:hidden bg-[#0B1020]/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-3">

              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={index}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full text-left text-white/90 font-medium 
                                 flex justify-between items-center"
                    >
                      {item.label}
                      <span>{dropdownOpen ? "▲" : "▼"}</span>
                    </button>

                    {dropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.items.map((sub, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              handleNavigation(sub.href);
                              setMobileOpen(false);
                            }}
                            className="block text-white/80 hover:text-white 
                                       px-2 text-left"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={index}
                    onClick={() => {
                      handleNavigation(item.href);
                      setMobileOpen(false);
                    }}
                    className="block text-white/90 hover:text-white 
                               font-medium w-full text-left"
                  >
                    {item.label}
                  </button>
                )
              )}

              {/* <div className="px-4 pb-6">
                <button
                  onClick={() => {
                    handleNavigation("#contact");
                    setMobileOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#FF7A2A] 
                             to-[#4A6ED1] text-white px-6 py-3 rounded-full 
                             font-bold shadow-lg"
                >
                  Get a Quote
                </button>
              </div> */}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

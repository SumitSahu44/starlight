import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "Do solar panels work in the snow?",
      a: "Yes, solar panels do work in the snow. Cold temperatures actually help panels run more efficiently. Only heavy snow reduces production. Light snow melts quickly, dark panels absorb heat and melt faster, and even partial sunlight still generates power."
    },
    {
      q: "Do I need batteries with my solar panels?",
      a: "Most homes don't need batteries. Grid-tied systems send extra power to the grid and pull power at night. Batteries are optional for backup during outages or going off-grid."
    },
    {
      q: "Do I need to pay any upfront cost for solar?",
      a: "No. With our $0-down options, you can install solar without paying upfront. You pay in easy monthly installments, similar to your utility bill."
    },
    {
      q: "What is the warranty period on solar panels?",
      a: "Panel performance warranty is up to 25 years. Product/equipment warranty is 10–15 years. Installation workmanship warranty is provided by our partners. All details are clearly listed in your proposal."
    },
    {
      q: "Are there any rebates or incentives for going solar?",
      a: "Yes. Many homeowners qualify for government rebates or low-interest loans. These programs change regularly—we check the latest options and guide you when you request a quote."
    },
    {
      q: "Will my large appliances work on solar?",
      a: "Yes. In a grid-tied system, all large appliances work normally. The grid supplies extra power when needed. No manual switching required."
    },
    {
      q: "What is the processing time for solar installation?",
      a: "Installation + activation usually takes 6–10 weeks, including permits, approvals, installation (1–2 days), inspection and final utility connection."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 bg-[#0B1020] overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#4A6ED1] opacity-10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FF7A2A] opacity-10 blur-3xl" />
        
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

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4A6ED1]/20 to-[#FF7A2A]/20 px-6 py-3 rounded-full border border-[#4A6ED1]/30 mb-6">
            <span className="w-2 h-2 bg-[#FF7A2A] rounded-full animate-pulse"></span>
            <span className="text-[#B59A90] text-sm font-medium">Common Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
            Get answers to the most common questions about solar installation and savings
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl border border-[#4A6ED1]/30 hover:border-[#4A6ED1]/50 transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="p-6">
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <h3 className="text-white text-lg md:text-xl font-semibold pr-4 leading-relaxed group-hover:text-[#FF7A2A] transition-colors duration-300">
                    {item.q}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <span className="text-white font-bold text-lg">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {/* ANSWER */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-[#4A6ED1]/20">
                        <p className="text-[#B59A90] leading-relaxed text-lg">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#4A6ED1]/10 to-[#FF7A2A]/10 border border-[#4A6ED1]/30 rounded-2xl p-8 backdrop-blur-md">
            <p className="text-[#B59A90] text-lg mb-6">
              Still have questions? Our solar experts are here to help.
            </p>
            
            <button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] px-8 py-3 rounded-full text-white font-bold hover:scale-105 transition-all duration-300 shadow-lg">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
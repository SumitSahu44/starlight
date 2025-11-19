// components/QuoteModal.js
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      window.scrollTo(0, 0);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="bg-[#11172B] border border-[#4A6ED1]/30 rounded-3xl shadow-2xl w-full max-w-lg my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 pb-3 border-b border-[#4A6ED1]/20">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-[#B59A90] hover:text-white transition z-10 bg-[#0B1020]/50 rounded-full p-1"
              >
                <X size={26} />
              </button>
              <h2 className="text-3xl font-bold text-white pr-10">
                Get Your <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">Free Quote</span>
              </h2>
              <p className="text-[#B59A90] text-sm mt-1">We'll reply you ASAP!</p>
            </div>

            {/* Form */}
            <form className="p-6 space-y-5">
              {/* Existing Fields */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Full Name <span className="text-[#FF7A2A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Email <span className="text-[#FF7A2A]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Phone Number <span className="text-[#FF7A2A]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-1234"
                  className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition"
                />
              </div>

              {/* NEW FIELDS START HERE */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Installation Address <span className="text-[#FF7A2A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="123 Main Street, Apt 4B"
                  className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    City <span className="text-[#FF7A2A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Toronto"
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Province / State <span className="text-[#FF7A2A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ontario"
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Postal / ZIP Code <span className="text-[#FF7A2A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="M5V 2T6"
                  className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition"
                />
              </div>
              {/* NEW FIELDS END */}

              <div>
                <label className="block text-white font-medium mb-2">Interested In</label>
                <select className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:border-[#4A6ED1] focus:outline-none transition">
                  <option value="">Choose service (Optional)</option>
                  <option>Solar Panels</option>
                  <option>Battery Storage</option>
                  <option>EV Charging</option>
                  <option>All Services</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">How Did You Hear About Us?</label>
                <select className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:border-[#4A6ED1] focus:outline-none transition">
                  <option value="">Select an option</option>
                  <option>Google Search</option>
                  <option>Facebook / Instagram</option>
                  <option>YouTube</option>
                  <option>Friend / Family</option>
                  <option>Radio / TV</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold text-lg py-4 rounded-xl hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
              >
                Get My Free Quote Now!
              </button>

              <p className="text-center text-[#B59A90] text-xs">
                Zero spam. We respect your privacy 100%.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteModal;
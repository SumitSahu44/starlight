// components/QuoteModal.js
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Escape key close
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal - Compact Version */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-[#11172B] border border-[#4A6ED1]/30 rounded-3xl shadow-2xl w-full max-w-lg max-h-screen overflow-y-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 pb-3 border-b border-[#4A6ED1]/20">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#B59A90] hover:text-white transition z-10"
            >
              <X size={26} />
            </button>
            <h2 className="text-3xl font-bold text-white pr-10">
              Get Your <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">Free Quote</span>
            </h2>
            <p className="text-[#B59A90] text-sm mt-1">We'll reply within 24 hours!</p>
          </div>

          {/* Compact Form */}
          <form className="p-6 space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-white font-medium mb-2">
                Full Name <span className="text-[#FF7A2A]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-2">
                Email <span className="text-[#FF7A2A]">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition text-base"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-medium mb-2">
                Phone Number <span className="text-[#FF7A2A]">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="+1 (555) 000-1234"
                className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white placeholder-[#B59A90]/60 focus:border-[#4A6ED1] focus:outline-none transition text-base"
              />
            </div>

            {/* Service (Optional) */}
            <div>
              <label className="block text-white font-medium mb-2">Interested In</label>
              <select className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:border-[#4A6ED1] focus:outline-none transition text-base">
                <option value="">Choose service (Optional)</option>
                <option>Solar Panels</option>
                <option>Battery Storage</option>
                <option>EV Charging</option>
                <option>All Services</option>
              </select>
            </div>

            {/* Submit Button */}
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

      {/* Optional: Hide scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default QuoteModal;
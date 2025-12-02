// components/QuoteModal.js
import React, { useEffect, useState } from 'react';
import { X, Loader2, CheckCircle } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Body scroll lock logic
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (!isOpen) { 
          setLoading(false);
          setSuccess(false);
      }
    };
  }, [isOpen]);

  // Reset state when modal opens
  useEffect(() => {
    if(isOpen) {
        setLoading(false);
        setSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* FIX: Z-Index increased to 9998/9999 to ensure it sits on top of everything.
         Removed the outer 'relative' div so 'fixed' works relative to the viewport/screen.
      */}

      {/* Backdrop Layer (Black Transparent Background) */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998] transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Scrollable Container */}
      <div 
        className="fixed inset-0 z-[9999] overflow-y-auto overflow-x-hidden h-[100dvh]"
        onClick={onClose} // Clicking outside closes the modal
      >
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          
          {/* Modal Content Card */}
          <div
            className="relative transform overflow-hidden bg-[#11172B] border border-[#4A6ED1]/30 rounded-3xl shadow-2xl w-full max-w-lg my-8 text-left transition-all"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >

            {/* HEADER */}
            <div className="relative p-6 pb-3 border-b border-[#4A6ED1]/20">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-[#B59A90] hover:text-white transition z-10 bg-[#0B1020]/50 rounded-full p-1 cursor-pointer"
              >
                <X size={26} />
              </button>

              <h2 className="text-3xl font-bold text-white pr-10">
                Get Your <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">Free Quote</span>
              </h2>
              <p className="text-[#B59A90] text-sm mt-1">We'll reply you ASAP!</p>
            </div>

            {/* LOADING STATE */}
            {loading && !success && (
              <div className="p-10 text-center">
                <Loader2 className="mx-auto h-12 w-12 animate-spin text-white" />
                <p className="text-white mt-4 text-lg font-medium">Sending your request…</p>
                <p className="text-[#B59A90] text-sm mt-2">Please wait a moment</p>
              </div>
            )}

            {/* SUCCESS STATE */}
            {success && (
              <div className="p-10 text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-green-400" />
                <h3 className="text-white text-2xl font-bold mt-4">Request Sent Successfully!</h3>
                <p className="text-[#B59A90] mt-2">
                  Our team will contact you soon.
                </p>

                <button
                  onClick={onClose}
                  className="mt-6 w-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold text-lg py-4 rounded-xl hover:scale-105 transition"
                >
                  Close
                </button>
              </div>
            )}

            {/* FORM */}
            {!loading && !success && (
              <form
                className="p-6 space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);

                  const formData = new FormData(e.target);

                  try {
                    const API_BASE = "https://digitalsuccesssolutions.in/api/StarLightSolar";

                    const res = await fetch(`${API_BASE}/send-quote.php`, {
                      method: "POST",
                      body: formData,
                    });

                    const data = await res.json();

                    if (data.status === "success") {
                      setSuccess(true);
                    } else {
                      alert("Error: " + data.msg);
                      setLoading(false);
                    }
                  } catch (err) {
                    console.error(err);
                    alert("Server error! Please try again.");
                    setLoading(false);
                  }
                }}
              >
                {/* Full Name */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Full Name <span className="text-[#FF7A2A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullname"
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Email <span className="text-[#FF7A2A]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Phone Number <span className="text-[#FF7A2A]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (555) 000-1234"
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    Installation Address <span className="text-[#FF7A2A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="address"
                    placeholder="123 Main Street"
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all"
                  />
                </div>

                {/* City + State */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">City *</label>
                    <input
                      type="text"
                      required
                      name="city"
                      placeholder="Toronto"
                      className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">State *</label>
                    <input
                      type="text"
                      required
                      name="state"
                      placeholder="Ontario"
                      className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* ZIP */}
                <div>
                  <label className="block text-white font-medium mb-2">ZIP Code *</label>
                  <input
                    type="text"
                    required
                    name="zip"
                    placeholder="M5V 2T6"
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label className="block text-white font-medium mb-2">Interested In</label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all appearance-none"
                  >
                    <option value="">Choose service</option>
                    <option value="Solar Panels">Solar Panels</option>
                    <option value="Battery Storage">Battery Storage</option>
                    <option value="EV Charging">EV Charging</option>
                    <option value="All Services">All Services</option>
                  </select>
                </div>

                {/* SOURCE */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select
                    name="source"
                    required
                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white text-base focus:ring-2 focus:ring-[#4A6ED1] outline-none transition-all appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Facebook / Instagram">Facebook / Instagram</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Friend / Family">Friend / Family</option>
                    <option value="Radio / TV">Radio / TV</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold text-lg py-4 rounded-xl hover:scale-105 active:scale-95 transition"
                >
                  Get My Free Quote Now!
                </button>

                <p className="text-center text-[#B59A90] text-xs">
                  Zero spam. We respect your privacy 100%.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteModal;
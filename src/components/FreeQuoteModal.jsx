// components/FreeQuoteModal.js
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { XMarkIcon } from '@heroicons/react/24/outline';

const FreeQuoteModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    propertyType: 'residential'
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const ctx = gsap.context(() => {
        gsap.fromTo(modalRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)"
          }
        );

        gsap.fromTo('.form-element',
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3
          }
        );
      }, modalRef);

      return () => ctx.revert();
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
    alert('Thank you for your inquiry! We will contact you soon.');
    onClose();
  };

  const services = [
    'Solar Panels Installation',
    'Battery Storage Systems',
    'EV Charging ',
    'Commercial Solar Solutions',
    'Solar System Maintenance',
    'Not Sure Yet'
  ];

  const propertyTypes = [
    { value: 'residential', label: 'Residential Home' },
    { value: 'commercial', label: 'Commercial Building' },
    { value: 'industrial', label: 'Industrial Facility' },
    { value: 'farm', label: 'Farm/Rural Property' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-[#0B1020] border border-[#4A6ED1]/30 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="p-8 border-b border-[#4A6ED1]/20">
          <h2 className="text-3xl font-bold text-white mb-2">
            Get Your <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">Free Quote</span>
          </h2>
          <p className="text-[#B59A90]">
            Complete this form and our solar experts will contact you within ASAP.
          </p>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="form-element">
              <label className="block text-white text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-[#11172B] border border-[#4A6ED1]/30 rounded-xl px-4 py-3 text-white placeholder-[#B59A90] focus:border-[#4A6ED1] focus:outline-none transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div className="form-element">
              <label className="block text-white text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-[#11172B] border border-[#4A6ED1]/30 rounded-xl px-4 py-3 text-white placeholder-[#B59A90] focus:border-[#4A6ED1] focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone */}
            <div className="form-element">
              <label className="block text-white text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-[#11172B] border border-[#4A6ED1]/30 rounded-xl px-4 py-3 text-white placeholder-[#B59A90] focus:border-[#4A6ED1] focus:outline-none transition-colors"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Property Type */}
            <div className="form-element">
              <label className="block text-white text-sm font-medium mb-2">
                Property Type *
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                required
                className="w-full bg-[#11172B] border border-[#4A6ED1]/30 rounded-xl px-4 py-3 text-white focus:border-[#4A6ED1] focus:outline-none transition-colors"
              >
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Interested In */}
            <div className="form-element md:col-span-2">
              <label className="block text-white text-sm font-medium mb-2">
                Service Interested In *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full bg-[#11172B] border border-[#4A6ED1]/30 rounded-xl px-4 py-3 text-white focus:border-[#4A6ED1] focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="form-element md:col-span-2">
              <label className="block text-white text-sm font-medium mb-2">
                Additional Information
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full bg-[#11172B] border border-[#4A6ED1]/30 rounded-xl px-4 py-3 text-white placeholder-[#B59A90] focus:border-[#4A6ED1] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your energy needs, roof type, or any specific requirements..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-element mt-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Get My Free Quote
            </button>
          </div>

          {/* Privacy Note */}
          <p className="text-center text-[#B59A90] text-sm mt-4">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </form>
      </div>
    </div>
  );
};

export default FreeQuoteModal;
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  return (
    <section className="relative py-20 bg-[#0B1020] overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#4A6ED1] opacity-10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FF7A2A] opacity-10 blur-3xl" />
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-[#FF7A2A] opacity-30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-[#4A6ED1] opacity-40 rounded-full animate-bounce" />

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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4A6ED1]/20 to-[#FF7A2A]/20 px-6 py-3 rounded-full border border-[#4A6ED1]/30 mb-6">
            <span className="w-2 h-2 bg-[#FF7A2A] rounded-full animate-pulse"></span>
            <span className="text-[#B59A90] text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          
          <p className="text-xl text-[#B59A90] max-w-2xl mx-auto">
            Contact us for a free consultation and discover how solar can transform your energy costs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Starlight Solar?</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: "💬",
                    title: "Expert Consultation",
                    description: "Get personalized advice from solar experts"
                  },
                  {
                    icon: "⚡",
                    title: "Quick Installation",
                    description: "Professional installation in 6-10 weeks"
                  },
                  {
                    icon: "🛡️",
                    title: "Comprehensive Warranty",
                    description: "25-year performance warranty on panels"
                  },
                  {
                    icon: "💰",
                    title: "$0 Down Options",
                    description: "Start saving with no upfront costs"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-br from-[#1a1f38] to-[#0B1020] border border-[#4A6ED1]/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-1">{item.title}</h4>
                      <p className="text-[#B59A90]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTACT METHODS */}
            <div className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl p-6 border border-[#4A6ED1]/20">
              <h4 className="text-white font-bold text-lg mb-4">Other Ways to Reach Us</h4>
              
              <div className="space-y-3">
                {[
                  { icon: "📞", method: "Phone", details: "+17809646364", action: "Call Now" },
                  { icon: "📧", method: "Email", details: "info@starlightsolar.com", action: "Send Email" },
                 ].map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-[#0B1020] border border-[#4A6ED1]/10">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{contact.icon}</span>
                      <div>
                        <div className="text-white font-medium">{contact.method}</div>
                        <div className="text-[#B59A90] text-sm">{contact.details}</div>
                      </div>
                    </div>
                    <button className="text-[#FF7A2A] text-sm font-semibold hover:text-[#4A6ED1] transition-colors duration-300">
                      {contact.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-3xl p-8 border border-[#4A6ED1]/30 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
            <p className="text-[#B59A90] mb-8">Fill out the form below and we'll get back to you ASAP.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:outline-none focus:border-[#FF7A2A] transition-colors duration-300 placeholder-[#B59A90]/50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:outline-none focus:border-[#FF7A2A] transition-colors duration-300 placeholder-[#B59A90]/50"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:outline-none focus:border-[#FF7A2A] transition-colors duration-300 placeholder-[#B59A90]/50"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="text-white/80 text-sm font-medium mb-2 block">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:outline-none focus:border-[#FF7A2A] transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="residential-solar">Residential Solar Installation</option>
                    <option value="commercial-solar">Commercial Solar Project</option>
                    <option value="builder-partnership">Builder Partnership Program </option>
                    <option value="maintenance">System Maintenance</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-white/80 text-sm font-medium mb-2 block">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:outline-none focus:border-[#FF7A2A] transition-colors duration-300 placeholder-[#B59A90]/50 resize-none"
                  placeholder="Tell us about your solar needs..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 shadow-2xl ${
                  isSubmitting 
                    ? 'bg-gradient-to-r from-[#4A6ED1]/50 to-[#FF7A2A]/50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-center text-[#B59A90] text-sm">
                By submitting this form, you agree to our Privacy Policy and consent to contact about our services.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
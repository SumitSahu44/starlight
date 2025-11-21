import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";   // <-- ADD THIS

import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const RealtorProgram = () => {
  const sectionRef = useRef(null);
const [formData, setFormData] = useState({
    realtorName: "",
    company: "",
    title: "",
    cell: "",
    email: "",
    website: "",
    areas: "",
    contactTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // success / error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    try {
      const res = await fetch("/api/sendRealtorForm.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatusMessage("Thank you! Your REALTOR® partnership inquiry has been sent successfully. We'll contact you soon!");
        setStatusType("success");
        setFormData({
          realtorName: "", company: "", title: "", cell: "", email: "",
          website: "", areas: "", contactTime: ""
        });
      } else {
        setStatusMessage(data.message || "Something went wrong. Please try again.");
        setStatusType("error");
      }
    } catch (err) {
      setStatusMessage("Network error. Please check your connection and try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray(".fade-left").forEach((el) => {
        gsap.from(el, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });

      gsap.utils.toArray(".fade-right").forEach((el) => {
        gsap.from(el, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

 

  return (
    <section
      ref={sectionRef}
      id="realtor-program"
      className="relative py-24 bg-[#0B1020] overflow-hidden"
    >

      {/* BACKGROUND FX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#4A6ED1] opacity-20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#FF7A2A] opacity-20 blur-3xl" />

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

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HERO */}
        <div className="text-center mb-20 fade-up">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4A6ED1]/20 to-[#FF7A2A]/20 px-6 py-3 rounded-full border border-[#4A6ED1]/30 mb-8">
            <span className="w-2 h-2 bg-[#FF7A2A] rounded-full animate-pulse" />
            <span className="text-[#B59A90] text-sm">REALTOR® Partnership</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#B59A90] bg-clip-text text-transparent">
            REALTOR® Partnership Program
          </h1>

          <p className="text-xl md:text-2xl text-[#B59A90] max-w-4xl mx-auto leading-relaxed">
            Elevate your listings. Empower your clients. 
            Partner with{" "}
            <span className="text-[#4A6ED1] font-semibold">Starlight Solar</span>.
          </p>
        </div>




        {/* WHY PARTNER SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          

          {/* LEFT */}
          <div className="fade-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner with Starlight Solar?
            </h2>

            <p className="text-[#B59A90] text-lg leading-relaxed mb-8">
              Today’s homebuyers are choosing energy-efficient, 
              sustainable homes — and solar makes your listings stand out instantly.
            </p>

            <div className="space-y-4">
              {[
                "Stronger listings with lower projected energy costs",
                "Powerful talking points for showings & negotiations",
                "Build trust with transparent, expert solar guidance",
                "Access exclusive partner perks & referral rewards",
                "Custom solar savings visuals for your listings"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-[#4A6ED1] rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <div className="fade-right">
            <div className="relative">
              <img
                src="/images/r-img.png"
                alt="Realtor Showing Solar Home"
                className="rounded-3xl border border-[#4A6ED1]/30 shadow-xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] p-4 rounded-2xl text-white shadow-2xl">
                <div className="font-bold text-lg">Sell Faster</div>
                <div className="text-sm opacity-90">Solar-Ready Homes</div>
              </div>
            </div>
          </div>

        </div>

        {/* CLIENT BENEFITS */}
        <div className="mb-24">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real Savings. Real Value.
            </h2>
            <p className="text-[#B59A90] text-lg max-w-3xl mx-auto">
              Solar delivers powerful financial and lifestyle benefits for your clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Lower Bills",
                description: "Reduced monthly electricity costs"
              },
              {
                icon: "📉",
                title: "Protection from Rate Hikes",
                description: "Stable, predictable long-term energy profile"
              },
              {
                icon: "🏠",
                title: "Higher Home Value",
                description: "Solar boosts resale appeal"
              },
              {
                icon: "🌱",
                title: "Eco-Friendly",
                description: "Reduced carbon footprint"
              },
              {
                icon: "📊",
                title: "Smart Investment",
                description: "Energy savings with long-term ROI"
              },
              {
                icon: "🚀",
                title: "Faster Sales",
                description: "Homes with solar attract smarter buyers"
              },
            ].map((b, i) => (
              <div
                key={i}
                className="fade-up group bg-gradient-to-br from-[#1a1f38] to-[#0B1020] p-8 rounded-3xl border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{b.title}</h3>
                <p className="text-[#B59A90]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>


{/* --- YOUR EXISTING CONTENT ABOVE REMAINS UNCHANGED --- */}


{/* NEW SECTION — ALREADY SIGNED PARTNERS */}
<div className="mt-24 mb-24 fade-up">
<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
REALTOR® Partners Already Signed
</h2>


<p className="text-[#B59A90] text-lg text-center max-w-3xl mx-auto mb-12">
Trusted professionals who are already part of the Starlight Solar partnership.
</p>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
{[
{
img: "/images/WhatsApp Image 2025-11-17 at 11.05.16 AM.jpeg",
name: "Manpreet Singh",
email: "Manpreet@yegestates.com",
phone: "+1 (780) 238-8190",
},
{
img: "/images/WhatsApp Image 2025-11-17 at 11.04.15 AM.jpeg",
name: "Paras Bhardhwaj",
email: "paras@muveteam.com",
phone: "+1780-606-0786",
},
// {
// img: "/images/sample3.jpg",
// name: "Kevin Thompson",
// email: "kevin.t@example.com",
// phone: "+1 780-991-4477",
// },
].map((p, i) => (
<div
key={i}
className="fade-up bg-gradient-to-br from-[#1a1f38] to-[#0B1020] p-8 rounded-3xl border  border-[#4A6ED1]/20 hover:border-[#FF7A2A]/40 transition-all duration-300 hover:scale-105"
>
<img
src={p.img}
alt={p.name}
className="w-28 h-28 object-cover object-top rounded-full mx-auto mb-4 border border-[#4A6ED1]/40"
/>


<h3 className="text-xl font-bold text-white text-center mb-1">{p.name}</h3>
<p className="text-[#B59A90] text-center text-sm">{p.email}</p>
<p className="text-[#B59A90] text-center text-sm mt-1">{p.phone}</p>
</div>
))}
</div>
</div>
        {/* CTA */}
        <div className="text-center mb-20 fade-up">
          <div className="bg-gradient-to-r from-[#4A6ED1]/10 to-[#FF7A2A]/10 border border-[#4A6ED1]/30 rounded-3xl p-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Let’s Sell the Future — Together
            </h2>

            <p className="text-[#B59A90] text-lg max-w-3xl mx-auto mb-6">
              Join Alberta REALTORS® who close faster, win more listings, and deliver unmatched client value.
            </p>

           <Link to="#realatorform" ><button className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] px-10 py-4 rounded-full text-white font-bold hover:scale-105 transition">
              Join the REALTOR Program
            </button></Link>
          </div>
        </div>

      {/* FORM */}
{/* FORM SECTION */}
      <div id="realatorform" className="fade-up bg-gradient-to-br from-[#1a1f38] to-[#0B1020] p-10 rounded-3xl border border-[#4A6ED1]/30 shadow-2xl mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-6">REALTOR® Partnership Inquiry</h2>
          <p className="text-[#B59A90] text-lg text-center mb-10">Our team will contact you ASAP.</p>

          {/* Success / Error Message */}
          {statusMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-8 p-5 rounded-xl border text-center font-medium text-lg transition-all ${
                statusType === "success"
                  ? "bg-green-500/10 border-green-500/40 text-green-400"
                  : "bg-red-500/10 border-red-500/40 text-red-400"
              }`}
            >
              {statusType === "success" ? "Success" : "Error"} {statusMessage}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Realtor Name", name: "realtorName", req: true },
                { label: "Brokerage / Company", name: "company", req: true },
                { label: "Position / Title", name: "title", req: true },
                { label: "Cell Number", name: "cell", req: true },
                { label: "Email", name: "email", req: true },
                { label: "Website (optional)", name: "website" },
                { label: "Primary Service Areas", name: "areas" },
                { label: "Preferred Contact Time", name: "contactTime" },
              ].map((item) => (
                <div key={item.name}>
                  <label className="text-white/80 text-sm mb-2 block">
                    {item.label} {item.req && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={item.name === "email" ? "email" : "text"}
                    required={item.req}
                    name={item.name}
                    value={formData[item.name]}
                    onChange={handleChange}
                    className="w-full p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:border-[#FF7A2A] outline-none transition placeholder-[#B59A90]/50"
                    placeholder={item.label}
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`mt-10 w-full py-5 rounded-xl text-white font-bold text-lg transition-all shadow-xl ${
                loading
                  ? "bg-gradient-to-r from-[#4A6ED1]/50 to-[#FF7A2A]/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] hover:scale-105"
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting Inquiry...
                </div>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default RealtorProgram;

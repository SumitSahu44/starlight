// components/About.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null); // ab yeh carousel container ko refer karega
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Carousel container animation (slide in from left)
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating background animation
      gsap.to('.floating-about', {
        y: -15,
        rotation: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Carousel Images - apne images daal do yahan
  const carouselImages = [
    "/images/man-worker-firld-by-solar-panels.jpg",
    "/images/about2.jpeg",
   
  ];

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="relative py-20 lg:py-32 bg-[#0B1020] overflow-hidden"
    >
      {/* Background Elements - Same as before */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(#4A6ED1 1px, transparent 1px),
              linear-gradient(90deg, #4A6ED1 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="floating-about absolute opacity-10"
            style={{
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #4A6ED1, #FF7A2A)`,
              borderRadius: '12px',
              transform: `rotate(${Math.random() * 45}deg)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Same */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] bg-clip-text text-transparent">
              Starlight
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* CAROUSEL SECTION - YEH CHANGE HUA HAI */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden group">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
                spaceBetween={0}
                className="w-full h-[500px]"
              >
                {carouselImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img 
                      src={src}
                      alt={`Starlight Solar Project ${index + 1}`}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Gradient Overlay - Same */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative Circles - Same */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FF7A2A] rounded-full opacity-20 z-0" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#4A6ED1] rounded-full opacity-20 z-0" />
          </div>

          {/* Content Section - Bilkul Same */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Leading the Solar Revolution
              </h3>
              
              <p className="text-lg text-[#B59A90] leading-relaxed">
                For two years, Starlight Solar has been at the forefront of renewable energy innovation, 
                transforming how homes and businesses across Canada harness the power of the sun.
              </p>

              <p className="text-lg text-[#B59A90] leading-relaxed">
                Our commitment to excellence and sustainable practices has made us the trusted choice for 
                thousands of customers seeking reliable, efficient, and affordable solar solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Premium Solar Panels",
                "Smart Energy Storage",
                "Fast Monitoring Service",
                "30-Year Warranty",
                "Expert Installation",
                "Local Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
               <Link to="/contact"> <button className="group relative bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
             
               <span className="relative z-10 flex items-center gap-3">
                  Contact Us
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              
                <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000" />
              </button>
               </Link> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
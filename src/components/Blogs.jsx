import React, { useState } from "react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Solar Energy: What to Expect in 2024",
      excerpt: "Discover the latest trends and innovations shaping the solar industry and how they can benefit homeowners.",
      content: "Solar energy continues to evolve at a rapid pace, with new technologies making it more efficient and affordable than ever before...",
      category: "technology",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "🌞",
      featured: true
    },
    {
      id: 2,
      title: "How Solar Panels Can Save You Thousands Annually",
      excerpt: "Learn about the financial benefits of switching to solar energy and how it impacts your utility bills.",
      content: "Many homeowners are surprised to learn just how much they can save by installing solar panels...",
      category: "financial",
      date: "March 12, 2024",
      readTime: "4 min read",
      image: "💰",
      featured: false
    },
    {
      id: 3,
      title: "Maintenance Tips for Your Solar Panel System",
      excerpt: "Essential maintenance practices to keep your solar panels operating at peak efficiency.",
      content: "Proper maintenance is key to ensuring your solar investment continues to deliver maximum returns...",
      category: "maintenance",
      date: "March 8, 2024",
      readTime: "3 min read",
      image: "🔧",
      featured: false
    },
    {
      id: 4,
      title: "Understanding Solar Tax Credits and Incentives",
      excerpt: "A comprehensive guide to available tax credits and incentives for solar installation.",
      content: "The federal government and many states offer significant incentives to make solar more accessible...",
      category: "financial",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "📊",
      featured: true
    },
    {
      id: 5,
      title: "Battery Storage Solutions for Solar Energy",
      excerpt: "Explore how battery storage can maximize your solar energy usage and provide backup power.",
      content: "Solar batteries allow you to store excess energy generated during the day for use at night...",
      category: "technology",
      date: "March 1, 2024",
      readTime: "5 min read",
      image: "🔋",
      featured: false
    },
    {
      id: 6,
      title: "Solar Installation: What to Expect During the Process",
      excerpt: "A step-by-step guide to the solar installation process from consultation to activation.",
      content: "Understanding the installation process can help homeowners feel more confident about going solar...",
      category: "installation",
      date: "February 26, 2024",
      readTime: "4 min read",
      image: "🏠",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "technology", name: "Technology" },
    { id: "financial", name: "Financial" },
    { id: "maintenance", name: "Maintenance" },
    { id: "installation", name: "Installation" }
  ];

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="relative py-20 bg-[#0B1020] min-h-screen overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4A6ED1]/20 to-[#FF7A2A]/20 px-6 py-3 rounded-full border border-[#4A6ED1]/30 mb-6">
            <span className="w-2 h-2 bg-[#FF7A2A] rounded-full animate-pulse"></span>
            <span className="text-[#B59A90] text-sm font-medium">Solar Insights</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Starlight Solar Blog
          </h1>
          
          <p className="text-xl text-[#B59A90] max-w-3xl mx-auto">
            Stay updated with the latest solar energy trends, tips, and innovations from our experts
          </p>
        </div>

        {/* FEATURED POSTS */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-4 h-4 bg-[#FF7A2A] rounded-full"></span>
            Featured Articles
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-3xl p-6 border border-[#4A6ED1]/30 backdrop-blur-md hover:border-[#FF7A2A]/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-2xl flex items-center justify-center text-2xl">
                    {post.image}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#4A6ED1]/20 text-[#4A6ED1] rounded-full text-xs font-semibold mb-2">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF7A2A] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-[#B59A90] mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-[#B59A90]">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[#4A6ED1]/20">
                  <button className="text-[#FF7A2A] font-semibold text-sm hover:text-[#4A6ED1] transition-colors duration-300 flex items-center gap-2">
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white border-transparent"
                    : "bg-transparent text-[#B59A90] border-[#4A6ED1]/30 hover:border-[#FF7A2A]/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-2xl p-6 border border-[#4A6ED1]/20 backdrop-blur-md hover:border-[#FF7A2A]/30 transition-all duration-300 group cursor-pointer hover:transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#4A6ED1] to-[#FF7A2A] rounded-xl flex items-center justify-center text-xl mb-4">
                  {post.image}
                </div>
                
                <span className="inline-block px-3 py-1 bg-[#4A6ED1]/20 text-[#4A6ED1] rounded-full text-xs font-semibold mb-3">
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </span>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF7A2A] transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-[#B59A90] text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-sm text-[#B59A90] mb-4">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              
              <button className="w-full py-3 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white font-semibold text-sm hover:bg-gradient-to-r hover:from-[#FF7A2A] hover:to-[#4A6ED1] transition-all duration-300 group-hover:border-transparent">
                Read Article
              </button>
            </motion.article>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-2xl">
            Load More Articles
          </button>
        </div>

        {/* NEWSLETTER SECTION */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-3xl p-8 border border-[#4A6ED1]/30 backdrop-blur-md"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Solar Insights
            </h2>
            <p className="text-[#B59A90] text-lg mb-8">
              Subscribe to our newsletter and get the latest solar energy tips and industry news delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-4 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white focus:outline-none focus:border-[#FF7A2A] transition-colors duration-300 placeholder-[#B59A90]/50"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-[#B59A90] text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default BlogPage;
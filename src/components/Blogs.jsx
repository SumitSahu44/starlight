// pages/BlogPage.js or components/BlogPage.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Sun, DollarSign, Wrench, Home, Battery, Zap, Calendar, Clock } from "lucide-react";

const BlogModal = ({ post, onClose }) => {
  useEffect(() => {
    // Lock background scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!post) return null;

  const getIcon = (category) => {
    switch (category) {
      case "technology": return <Zap className="w-6 h-6" />;
      case "financial": return <DollarSign className="w-6 h-6" />;
      case "maintenance": return <Wrench className="w-6 h-6" />;
      case "installation": return <Home className="w-6 h-6" />;
      default: return <Sun className="w-6 h-6" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-[#0F1424] border border-[#4A6ED1]/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#4A6ED1]/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#0B1020]/80 rounded-full flex items-center justify-center hover:bg-[#FF7A2A]/20 transition"
        >
          <X size={28} className="text-[#B59A90]" />
        </button>

        {/* Header */}
        <div className="p-8 pb-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-2xl flex items-center justify-center text-white">
              {getIcon(post.category)}
            </div>
            <div>
              <span className="px-4 py-1.5 bg-[#4A6ED1]/20 text-[#4A6ED1] rounded-full text-sm font-semibold">
                {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[#B59A90] text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Full Content */}
        <div className="px-8 pb-12 text-[#B59A90] leading-relaxed text-lg space-y-5">
          {post.fullContent.split("\n\n").map((paragraph, i) => (
            <p key={i} className={paragraph.includes("Conclusion") || paragraph.includes("Introduction") ? "text-white font-semibold text-xl" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Why Alberta Homeowners Are Switching to Solar Energy",
      excerpt: "Discover why thousands of Alberta families are choosing solar to reduce bills, increase home value, and gain energy independence.",
      category: "financial",
      date: "April 10, 2025",
      readTime: "6 min read",
      featured: true,
      fullContent: `More homeowners in Alberta are turning to solar energy because it is reliable, affordable over the long term, and easy to maintain. With strong sunlight through most of the year and rising electricity costs, solar has become a smart investment for many families. Whether you live in Calgary, Edmonton, Red Deer or a smaller community, solar panels can help reduce your monthly bills and increase the value of your home.

Alberta Has Some of the Best Sunlight in Canada
Many people assume Alberta’s cold climate makes solar energy less effective. The truth is that solar panels do not need heat. They only need daylight, and Alberta has plenty of that.
On average, the province gets more than 300 days of sunlight a year, which makes it one of the best places in Canada for solar. Even in winter, panels continue to produce energy because they work from the available daylight, not temperature.
Snow also reflects sunlight, which can sometimes increase winter production. Panels are built to handle cold, so performance stays strong year round.

Protection From Rising Power Bills
Electricity rates in Alberta are unpredictable. Many homeowners feel frustrated because monthly bills keep changing. Solar energy helps solve this problem by lowering your dependence on the grid.
When your solar system generates power, your home uses that energy first. This reduces how much electricity you pull from your utility company. As a result, your power bill drops. Over time, this adds up to significant savings.
Most Alberta homeowners recover their initial investment within several years. After that, the electricity produced by the system is basically free.

Solar Raises Home Value
A home with a solar system is attractive to buyers because it means lower monthly costs. Studies from Canada and the U.S. show that houses with solar panels often sell faster and for a higher price.
Solar systems last 25 years or more and require very little maintenance. This makes them a long term asset for your property.

Low Maintenance and Long Lifespan
Once your panels are installed, there is not much to do. Solar systems are designed to withstand snow, wind and Alberta’s temperature changes.
Homeowners usually only need to:
• keep panels free of heavy snow when possible
• remove leaves or debris
• check the monitoring app to ensure everything is running smoothly
Apart from that, the system takes care of itself. Most inverters and parts come with strong warranties, which gives homeowners peace of mind.

How a Professional Alberta Solar Installer Helps
A trusted solar company makes the entire process simple and stress free. They will:
1. Visit your home for a site assessment
2. Check your roof position, angle and sunlight exposure
3. Review your energy bills
4. Design a system based on your needs
5. Handle permits and electrical approvals
6. Install the panels
7. Set up your monitoring system
Local installers understand Alberta weather, building codes and utility requirements. This ensures your system is safe, efficient and compliant.

Net Billing Helps You Save Even More
Alberta uses a net billing system. This means that when your panels produce more energy than your home needs, the extra power goes back to the grid. Your utility company then gives you a credit on your next bill.
These credits help balance lower production months, especially during winter.
It is a simple and effective way to maximize savings throughout the year.

Solar Rebates and Incentives in Alberta
Rebates change from time to time, but many local programs help reduce the upfront cost of installing solar. Some municipalities also offer incentives. This makes solar more affordable for homeowners.
Your local installer can guide you through the latest rebate options and help you apply.

A Long Term, Clean Energy Solution
Solar energy also helps reduce carbon emissions. Many Alberta families appreciate knowing that their home uses clean power and that they are contributing to a healthier environment.
With strong sunlight, reliable technology and long term savings, solar is one of the smartest upgrades you can make to your home today.

Conclusion
Alberta is the perfect place for solar. Homeowners benefit from strong sunlight, lower power bills, and long term value. With experienced local installers, the process is smooth and easy. Solar is no longer complicated or expensive. It is a practical solution that pays off for years.
If you have been thinking about solar, now is a great time to start. A quick home assessment can show exactly how much you can save.`
    },
    {
      id: 2,
      title: "A Simple Guide to Solar Panel Installation in Alberta",
      excerpt: "From roof assessment to final connection — everything you need to know about getting solar panels installed in Alberta.",
      category: "installation",
      date: "April 5, 2025",
      readTime: "7 min read",
      featured: true,
      fullContent: `Introduction
If you are thinking about going solar, you might be wondering how the installation process actually works. Many Alberta homeowners think solar installation is complicated, but once you understand the steps, it becomes very simple. With the right installer, the entire experience is smooth, safe and stress free. This guide walks you through every stage so you know exactly what to expect.

Step 1. Site Visit and Roof Assessment
The first step is a visit from a trained solar technician. They check your roof condition, angle and the amount of sunlight your home receives. Alberta homes often have great sun exposure, but every property is unique.
During this visit, they will:
• Inspect shingles and roof structure
• Check for shading from trees or nearby buildings
• Measure roof slopes
• Review your recent electricity bills
• Discuss your energy goals
This helps the installer decide the most efficient placement for your panels.

Step 2. Solar System Design
Once your roof is assessed, the next step is designing your custom system. A good Alberta solar company will never use a one size fits all approach. Instead, they create a design that matches your home’s energy needs.
The design includes:
• Number of panels
• Panel wattage
• Inverter type
• Wiring plan
• Estimated annual energy production
• Expected savings over time
You will also receive a clear quote that covers equipment, labour, permits and connection. This makes sure there are no surprises later.

Step 3. Permits and Approvals
Solar installation in Alberta requires proper permits. Your installer usually takes care of all this paperwork so the process stays easy for you.
These approvals include:
• Municipal permits
• Electrical permits
• Utility approvals for grid connection
Different cities such as Calgary, Edmonton, Lethbridge and Red Deer have slightly different rules, but a local company knows how to handle each requirement. This ensures your installation follows Alberta building and electrical codes.

Step 4. Installation Day
Once the paperwork is done, installation can begin. Most rooftop solar setups take one to two days depending on system size and weather conditions.
Here is what happens during installation:
1. Safety equipment is set up
2. Mounting hardware is attached to your roof
3. Solar panels are installed and secured
4. Wiring and electrical components are added
5. Inverter is connected
6. System is tested for performance and safety
Professional installers make sure the panels are positioned to get maximum sunlight throughout the year.

Step 5. Connecting the System
After the physical installation, the system is connected to your home’s electrical panel. The inverter plays an important role here because it converts solar energy into usable electricity for your home.
Once everything is connected, a final inspection takes place to confirm the system is safe and ready for use.

Step 6. Monitoring and Usage
One of the best parts of going solar is the ability to track your energy production. You can monitor your system through a mobile app or a web dashboard.
You can see:
• How much energy your panels produce each day
• Your monthly solar contribution
• How much you save on your power bills
This helps you understand your energy habits and make smarter decisions. Many Alberta homeowners enjoy checking their solar production during sunny days.

What Happens If Your System Produces Extra Energy
Alberta uses a net billing system. This means that when your panels produce more power than your home needs, the extra electricity goes back to the grid. Your utility provider gives you a credit on your next bill for this energy.
This credit helps you manage seasonal changes, especially during winter months.

Common Questions Alberta Homeowners Ask
Do solar panels work in winter? Yes. Panels need daylight, not heat. Even on cloudy or snowy days, they still generate electricity.
Will my roof be damaged? No. Panels are installed using proper mounting hardware that protects your roof. A professional installer ensures the structure remains safe.
How long do solar panels last? Most panels come with a 25 year performance warranty. Many last even longer.
Is maintenance difficult? No. You only need to keep panels free of heavy snow or debris. Most systems require very little care.

Choosing the Right Alberta Solar Company
A reliable installer makes all the difference. Look for companies that:
• Provide clear pricing
• Do on site assessments
• Use certified technicians
• Handle permits and paperwork
• Offer strong warranties
• Are experienced with Alberta weather and building codes

Why Solar Installation Is Worth It for Alberta Homes
Solar energy lowers your monthly bills, reduces your dependence on the grid and gives you long term savings. With strong sunlight across Alberta, homeowners see great returns on their investment. Once installed, the system works quietly and consistently every day.

Conclusion
Solar installation in Alberta is simple, safe and rewarding when you have the right team by your side. From the first roof assessment to the final connection, every step is handled with care and precision. With strong sunlight and rising electricity prices, this is the perfect time to consider solar for your home.`
    },
    {
      id: 3,
      title: "How Solar Panels Help Alberta Homeowners Save Money All Year",
      excerpt: "Learn how solar protects you from rising electricity rates and saves money even in winter with Alberta's net billing system.",
      category: "financial",
      date: "March 28, 2025",
      readTime: "6 min read",
      featured: false,
      fullContent: `Electricity costs in Alberta have been rising, and many homeowners are looking for a reliable way to reduce their monthly bills. Solar energy has become one of the most effective solutions. With strong sunlight across the province and modern solar technology, homeowners can save money throughout the year, even during winter months.

Alberta Has Strong Sunlight for Solar Energy
Alberta receives more sunlight than most provinces in Canada. On average, the province gets over 300 days of sunshine, which makes it an ideal place for solar power.
Solar panels work from daylight, not heat. This means they continue to generate electricity even on cloudy or cold days. Snow may cover panels at times, but when it slides off or melts, the system starts working again. Cold temperatures can even improve the efficiency of solar cells.

Lower Monthly Power Bills
The biggest benefit of solar panels is the reduction in your monthly electricity bill. When your panels generate power, your home uses that energy first. This reduces how much electricity you buy from your utility company.
Over time, these savings can be substantial. Many Alberta homeowners start seeing lower bills as soon as their system is turned on.

Protection From Rising Electricity Rates
Electricity prices in Alberta can change quickly. Rate increases are common, and most homeowners feel the impact on their monthly bills. Solar panels protect you from these fluctuations.
Once your solar system is installed, your power production becomes stable. You rely less on the grid, which reduces your exposure to rising rates.

Net Billing Helps You Save Even More
Alberta uses a net billing system. This means when your panels produce extra electricity, it goes back to the grid. In exchange, your utility provider gives you credits on your next bill.
These credits help balance lower production months, such as winter. This is especially useful in Alberta, where sunlight can vary throughout the year.

Long Term Savings With Minimal Maintenance
Solar systems last for 25 years or more. Once installed, they require very little maintenance. Apart from clearing heavy snow or debris, your solar panels work continuously without any major effort from you.
Because the system produces free power for many years, the long term savings can be significant.

Solar Increases Home Value
Homes with solar systems often sell at a higher price. Buyers prefer homes with lower monthly energy bills, which makes solar a valuable asset.
Since solar panels last decades, a new homeowner gets long term financial benefits.

Solar Rebates and Grants in Alberta
Rebates can help reduce the upfront cost of installing solar. These programs change over time. Some municipalities offer incentives, and some utility companies provide support as well.
A local Alberta solar company can help you understand the available rebates and guide you through the application process.

Better Control Over Your Energy Use
With solar panels, you get access to monitoring tools through an app. You can check how much energy your panels produce, how much you use, and how much you save.
This helps you make smarter energy choices.

A Cleaner and More Sustainable Choice
Solar energy reduces your carbon footprint. It is clean, renewable and safe for the environment. Many families in Alberta appreciate that they can lower their energy bills while also contributing to a cleaner future.

Conclusion
Solar panels are one of the most effective long term solutions for lowering energy costs in Alberta. With strong sunlight, stable technology and helpful rebate options, it has become easier for homeowners to enjoy reliable savings all year.`
    }
  ];

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "financial", name: "Financial" },
    { id: "installation", name: "Installation" },
    { id: "technology", name: "Technology" },
    { id: "maintenance", name: "Maintenance" }
  ];

  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <section className="relative py-20 bg-[#0B1020] min-h-screen overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#4A6ED1] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF7A2A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Starlight Solar Blog
            </h1>
            <p className="text-xl text-[#B59A90] max-w-3xl mx-auto">
              Expert insights on solar energy, savings, and installation in Alberta
            </p>
          </div>

          {/* Featured Posts */}
          {blogPosts.filter(p => p.featured).length > 0 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {blogPosts.filter(p => p.featured).map((post) => (
                  <BlogCard key={post.id} post={post} onReadMore={() => setSelectedPost(post)} />
                ))}
              </div>
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] text-white"
                    : "bg-[#0B1020] text-[#B59A90] border border-[#4A6ED1]/30 hover:border-[#FF7A2A]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* All Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} onReadMore={() => setSelectedPost(post)} />
            ))}
          </div>
        </div>
      </section>

      {/* Full Blog Modal */}
      {selectedPost && <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  );
};

// Reusable Blog Card Component
const BlogCard = ({ post, onReadMore }) => {
  const Icon = {
    financial: DollarSign,
    installation: Home,
    technology: Zap,
    maintenance: Wrench
  }[post.category] || Sun;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#1a1f38] to-[#0B1020] rounded-3xl p-6 border border-[#4A6ED1]/20 hover:border-[#FF7A2A]/40 transition-all duration-300 group cursor-pointer"
      onClick={onReadMore}
    >
      <div className="w-14 h-14 bg-gradient-to-r from-[#FF7A2A] to-[#4A6ED1] rounded-2xl flex items-center justify-center text-white mb-5">
        <Icon size={28} />
      </div>
      <span className="inline-block px-3 py-1 bg-[#4A6ED1]/20 text-[#4A6ED1] rounded-full text-xs font-bold mb-3">
        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
      </span>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7A2A] transition">
        {post.title}
      </h3>
      <p className="text-[#B59A90] text-sm mb-5 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between text-sm text-[#B59A90]">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
      <button className="mt-5 w-full py-3 bg-[#0B1020] border border-[#4A6ED1]/30 rounded-xl text-white font-semibold hover:bg-gradient-to-r hover:from-[#FF7A2A] hover:to-[#4A6ED1] transition-all">
        Read Full Article →
      </button>
    </motion.article>
  );
};

export default BlogPage;
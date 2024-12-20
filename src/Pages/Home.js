import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, TrendingUp, Users, Heart, ArrowRight } from 'lucide-react';

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillars = [
    {
      title: "Strategic Investments",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-100 to-blue-50",
      description: "Access curated investment opportunities in sports, focusing on long-term growth and sustainable returns for our partners."
    },
    {
      title: "Community Impact",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-100 to-red-50",
      description: "Drive positive change through strategic philanthropy initiatives and community development programs in sports."
    },
    {
      title: "Global Network",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-100 to-purple-50",
      description: "Join our exclusive network of passionate investors and sports enthusiasts united by a vision for excellence."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 via-green-50 to-blue-100 min-h-screen font-inter">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-green-200/50 mix-blend-overlay" />
        <div className="container mx-auto px-4 pt-32 pb-24">
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500"style={{ fontFamily: 'Rubik+Bubbles, sans-serif' }}>
                Welcome to Ballers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12"style={{ fontFamily: 'DynaPuff, sans-serif' }}>
              Empowering Athletes. Creating Opportunities. Building Legacies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                className="bg-gradient-to-r from-blue-400 to-green-400 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center "
                style={{ fontFamily: 'Oswald, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Network
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                className="bg-blue-100/90 backdrop-blur-md px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-200/90 transition-all duration-300 flex items-center"
                style={{ fontFamily: 'Oswald, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Oswald, sans-serif' }}>Our Core Pillars</h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Pompiere, sans-serif' }}>
            We're building the future of sports investment through three fundamental principles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${hoveredCard === index ? pillar.color : "from-gray-100 via-gray-50 to-white"} shadow-lg
                p-8 hover:shadow-2xl transition-all duration-300
                ${hoveredCard === index ? 'scale-105' : 'scale-100'}
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${pillar.color} mb-6`}>
                {pillar.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Pompiere, sans-serif' }}>
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Pompiere, sans-serif' }}>
                {pillar.description}
              </p>

              <motion.div
                className="flex items-center text-sm font-semibold text-blue-500 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                Explore More
                <ChevronRight className="ml-1 w-4 h-4" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

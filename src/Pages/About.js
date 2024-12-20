import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, TrendingUp, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Integrity",
      description: "Building lasting partnerships through transparency and ethical practices in sports investment."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Vision",
      description: "Identifying and nurturing athletic talent while creating sustainable investment opportunities."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sustainable Growth",
      description: "Focusing on long-term value creation for both athletes and investors."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Impact",
      description: "Making meaningful contributions to sports development and community welfare."
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 via-green-50 to-blue-100 min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-green-200/50 mix-blend-overlay" />
        <div className="container mx-auto px-4 pt-32 pb-24">
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Ballers</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed "style={{ fontFamily: 'Oswald, sans-serif' }}>
              Revolutionizing sports investment by connecting passionate investors with promising athletes and creating lasting impact in communities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="bg-white/90 shadow-lg rounded-2xl p-8 md:p-12">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"style={{ fontFamily: 'Pompiere, sans-serif' }}>Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed"style={{ fontFamily: 'Pompiere, sans-serif' }}>
              At Ballers, we're dedicated to revolutionizing sports investment by creating meaningful connections between investors and athletes. Our platform enables sustainable growth while fostering community development and athletic excellence.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"style={{ fontFamily: 'Oswald, sans-serif' }}>Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto"style={{ fontFamily: 'Oswald, sans-serif' }}>
            The principles that guide our mission and shape our impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/90 shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-200 flex items-center justify-center mb-4 " >
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3"style={{ fontFamily: 'OSwald, sans-serif' }}>{value.title}</h3>
              <p className="text-gray-600 leading-relaxed"style={{ fontFamily: 'Oswald, sans-serif' }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

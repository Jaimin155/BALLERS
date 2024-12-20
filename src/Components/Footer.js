import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  Users,
  Heart,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const stats = [
    { 
      icon: <Users className="w-6 h-6" />,
      label: 'Active Investors',
      value: '5,000+'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: 'Total Investments',
      value: '$50M+'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: 'Community Impact',
      value: '200+'
    }
  ];

  const quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Investments', path: '/investments' },
    { title: 'Community', path: '/community' },
    { title: 'Events', path: '/events' },
    { title: 'Partners', path: '/partners' },
    { title: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, url: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10" style={{ fontFamily: 'Oswald, sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
                Ballers
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Revolutionizing sports investment by connecting passionate investors with promising athletes and creating lasting impact in communities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@ballers.com" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  contact@ballers.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-2" />
                <span className="text-gray-400">
                14/4, J Block , 3rd Avenue, <br />
                Anna Nagar East, Chennai, Tamil Nadu, 600102
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ballers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
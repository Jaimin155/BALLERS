import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      title: 'About',
      path: '/about'
    },
    {
      title: 'Investment',
      path: '/investment',
      dropdownItems: [
        { title: 'Opportunities', path: '/opportunities' },
        { title: 'Process', path: '/process' },
        { title: 'Success Stories', path: '/success-stories' }
      ]
    },
    {
      title: 'Community',
      path: '/community',
      dropdownItems: [
        { title: 'Events', path: '/events' },
        { title: 'Partners', path: '/partners' },
        { title: 'Impact', path: '/impact' }
      ]
    }
  ];

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
      }
    `}style={{ fontFamily: 'Oswald, sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-green-300 text-transparent bg-clip-text">
              Ballers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.title}
                  {link.dropdownItems && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </Link>

                {link.dropdownItems && activeDropdown === link.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-md rounded-lg shadow-xl py-2"
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 "
                      >
                        {item.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            <motion.button 
              className="bg-gradient-to-r from-blue-300 to-green-200 px-6 py-2 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2"
            >
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                  {link.dropdownItems && (
                    <div className="pl-6 pb-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4">
                <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  Login
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
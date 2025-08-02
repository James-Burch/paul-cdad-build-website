import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 animate-slideInUp ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 animate-fadeInLeft">
            <h1 className="text-2xl font-bold text-gray-900 hover-scale transition-transform duration-300 cursor-pointer">
              <span className="text-primary-orange">Paul Cdad</span> Build
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block animate-fadeIn animate-delay-200">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-primary-orange px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover-lift"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block animate-fadeInRight animate-delay-300">
            <a
              href="tel:08002335593"
              className="bg-primary-orange text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-all duration-300 btn-animate hover-lift hover-glow transform hover:scale-105"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-fadeInRight">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-orange p-2 transition-all duration-300 hover:bg-gray-50 rounded-md hover-scale"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t shadow-lg rounded-b-lg">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-600 hover:text-primary-orange block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-gray-50 ${
                  isMenuOpen ? 'animate-fadeIn' : ''
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="tel:08002335593"
              className={`bg-primary-orange text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center mt-4 transition-all duration-300 hover:bg-orange-600 btn-animate ${
                isMenuOpen ? 'animate-fadeIn animate-delay-400' : ''
              }`}
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.2);
  const [statsRef, isStatsVisible] = useScrollAnimation(0.3);

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            ref={heroRef}
            className={`space-y-8 ${
              isHeroVisible ? 'animate-fadeInLeft' : 'opacity-0'
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Space with{' '}
                <span className="text-primary-orange animate-pulse-slow">
                  Concept Design
                </span>{' '}
                Architectural Drawings
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional construction and architectural design services for
                house extensions, kitchen/bathroom projects, roofing, and
                external works.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-primary-orange text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all duration-300 text-center btn-animate hover-lift hover-glow transform hover:scale-105"
              >
                Get Free Quote
              </a>
              <a
                href="tel:08002335593"
                className="border-2 border-primary-orange text-primary-orange px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-orange hover:text-white transition-all duration-300 text-center hover-lift"
              >
                Call Now
              </a>
            </div>

            {/* Quick Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
              <div
                className={`text-center ${
                  isStatsVisible
                    ? 'animate-fadeIn animate-delay-100'
                    : 'opacity-0'
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-orange hover-scale cursor-default">
                  50+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div
                className={`text-center ${
                  isStatsVisible
                    ? 'animate-fadeIn animate-delay-200'
                    : 'opacity-0'
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-orange hover-scale cursor-default">
                  10+
                </div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div
                className={`text-center ${
                  isStatsVisible
                    ? 'animate-fadeIn animate-delay-300'
                    : 'opacity-0'
                }`}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-orange hover-scale cursor-default">
                  100%
                </div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div
            className={`relative ${
              isHeroVisible
                ? 'animate-fadeInRight animate-delay-200'
                : 'opacity-0'
            }`}
          >
            <div className="bg-gray-200 rounded-lg h-96 lg:h-[500px] flex items-center justify-center hover-lift transition-all duration-500">
              {/* Placeholder for hero image */}
              <div className="text-center text-gray-500">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center animate-float">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="text-lg font-medium">Hero Image Placeholder</p>
                <p className="text-sm">
                  Add your construction/design image here
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-orange rounded-full opacity-20 animate-pulse-slow"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-grey rounded-full opacity-20 animate-float"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

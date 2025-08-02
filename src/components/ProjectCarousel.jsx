import React, { useState } from 'react';

const ProjectCarousel = () => {
  // Placeholder project data - you'll replace with real images
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Extension',
      category: 'Kitchen Project',
      image: '/api/placeholder/600/400',
      description: 'Complete kitchen renovation with extension',
    },
    {
      id: 2,
      title: 'Luxury Bathroom Renovation',
      category: 'Bathroom Project',
      image: '/api/placeholder/600/400',
      description: 'Full bathroom redesign with modern fixtures',
    },
    {
      id: 3,
      title: 'Two-Story House Extension',
      category: 'House Extension',
      image: '/api/placeholder/600/400',
      description: 'Large extension adding extra bedrooms and living space',
    },
    {
      id: 4,
      title: 'Roof Replacement Project',
      category: 'Roofing',
      image: '/api/placeholder/600/400',
      description: 'Complete roof replacement with modern materials',
    },
    {
      id: 5,
      title: 'Garden Patio & Driveway',
      category: 'External Works',
      image: '/api/placeholder/600/400',
      description: 'Beautiful patio and driveway installation',
    },
    {
      id: 6,
      title: 'Architectural Design Plans',
      category: 'Design',
      image: '/api/placeholder/600/400',
      description: 'Detailed architectural drawings for planning permission',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openLightbox = (project) => {
    setSelectedImage(project);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of our completed projects showcasing our quality
            workmanship and attention to detail.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Image Display */}
          <div className="relative h-96 md:h-[500px] mb-8 overflow-hidden rounded-lg bg-gray-200">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="w-full flex-shrink-0 relative">
                  {/* Placeholder for actual images */}
                  <div
                    className="w-full h-full bg-gray-300 flex items-center justify-center cursor-pointer"
                    onClick={() => openLightbox(project)}
                  >
                    <div className="text-center text-gray-600">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg
                          className="w-10 h-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm bg-primary-orange text-white px-3 py-1 rounded-full inline-block mb-2">
                        {project.category}
                      </p>
                      <p className="text-gray-700">{project.description}</p>
                      <p className="text-sm mt-2 text-gray-500">
                        Click to enlarge
                      </p>
                    </div>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base opacity-90">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-2 mb-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-orange'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Project Grid - Alternative View */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-2 ring-primary-orange'
                    : 'hover:ring-2 hover:ring-gray-300'
                }`}
              >
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <svg
                      className="w-6 h-6 mx-auto"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-end p-2">
                  <span className="text-white text-xs font-medium truncate">
                    {project.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="h-96 md:h-[500px] bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gray-400 rounded-full flex items-center justify-center">
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
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-primary-orange font-medium mb-2">
                      {selectedImage.category}
                    </p>
                    <p className="text-gray-700">{selectedImage.description}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-primary-orange font-medium mb-2">
                    {selectedImage.category}
                  </p>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get in touch today for a free consultation and quote. We'll help
            bring your vision to life with professional craftsmanship and
            attention to detail.
          </p>
          <a
            href="#contact"
            className="bg-primary-orange text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors inline-block"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;

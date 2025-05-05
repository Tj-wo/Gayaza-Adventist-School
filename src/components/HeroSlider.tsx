import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides, 
  autoPlay = true, 
  interval = 5000
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with CSS transition duration
  };

  const goToPrevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with CSS transition duration
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with CSS transition duration
  };

  // Auto play functionality
  useEffect(() => {
    let slideInterval: NodeJS.Timeout;
    
    if (autoPlay) {
      slideInterval = setInterval(() => {
        goToNextSlide();
      }, interval);
    }
    
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [autoPlay, interval, currentSlide, isAnimating]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          {/* Text Content */}
          <div className="container-custom h-full flex flex-col justify-center items-start text-white relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-4 max-w-2xl slide-up">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-8 slide-up text-balance">
              {slide.subtitle}
            </p>
            <div className="flex space-x-4 slide-up">
              <a href="#learn-more" className="btn-primary">
                Learn More
              </a>
              <a href="/admissions" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full transition-all duration-300 z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-accent' : 'w-2 bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
import React, { useState, useRef, useEffect } from 'react';

interface CustomCarouselProps {
  children: React.ReactNode[];
  className?: string;
}

const PawPrint = ({ className = "", direction = "left" }: { className?: string; direction?: "left" | "right" }) => (
  <svg 
    className={`w-4 h-4 sm:w-6 sm:h-6 ${className}`} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    style={{ transform: direction === "right" ? "scaleX(-1)" : "none" }}
  >
    <path d="M12 2C10.9 2 10 2.9 10 4S10.9 6 12 6 14 5.1 14 4 13.1 2 12 2zM7 4.5C5.9 4.5 5 5.4 5 6.5S5.9 8.5 7 8.5 9 7.6 9 6.5 8.1 4.5 7 4.5zM17 4.5C15.9 4.5 15 5.4 15 6.5S15.9 8.5 17 8.5 19 7.6 19 6.5 18.1 4.5 17 4.5zM12 8C9.8 8 8 9.8 8 12S9.8 16 12 16 16 14.2 16 12 14.2 8 12 8z"/>
  </svg>
);

export function CustomCarousel({ children, className = "" }: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  
  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const totalItems = children.length;
  
  // Responsive items to show
  const getItemsToShow = () => {
    switch (screenSize) {
      case 'mobile':
        return 1.2; // Show 1.2 cards on mobile
      case 'tablet':
        return 2.5; // Show 2.5 cards on tablet
      default:
        return 3.5; // Show 3.5 cards on desktop
    }
  };

  const itemsToShow = getItemsToShow();
  const maxIndex = Math.max(0, totalItems - Math.floor(itemsToShow));

  // Handle navigation
  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Handle horizontal scroll with mousepad
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // Only handle horizontal scroll or when shift is pressed for horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        
        setIsScrolling(true);
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Determine scroll direction
        const scrollDirection = e.deltaX > 0 || (e.shiftKey && e.deltaY > 0) ? 1 : -1;
        
        if (scrollDirection > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
        
        // Reset scrolling state after a delay
        scrollTimeout = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [maxIndex]);

  // Calculate transform based on current index
  const getTransform = () => {
    const cardWidth = 100 / itemsToShow; // Each card takes this percentage
    const translateX = -currentIndex * cardWidth;
    return `translateX(${translateX}%)`;
  };

  // Get item opacity and scale based on position
  const getItemStyle = (index: number) => {
    const position = index - currentIndex;
    const isCenter = position >= 0 && position < Math.floor(itemsToShow);
    const isPartiallyVisible = position === Math.floor(itemsToShow);
    
    if (isCenter) {
      return {
        opacity: 1,
        transform: screenSize === 'mobile' ? 'scale(1)' : 'scale(1)',
        transition: 'all 0.5s ease'
      };
    } else if (isPartiallyVisible) {
      return {
        opacity: screenSize === 'mobile' ? 0.4 : 0.6,
        transform: screenSize === 'mobile' ? 'scale(0.9)' : 'scale(0.95)',
        transition: 'all 0.5s ease'
      };
    } else {
      return {
        opacity: 0.2,
        transform: screenSize === 'mobile' ? 'scale(0.8)' : 'scale(0.9)',
        transition: 'all 0.5s ease'
      };
    }
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {/* Carousel container */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: getTransform() }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${100 / itemsToShow}%`,
                ...getItemStyle(index)
              }}
            >
              <div className="px-1 sm:px-2">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Paw Navigation */}
      <button
        onClick={goToPrevious}
        disabled={currentIndex === 0}
        className={`
          absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 z-10
          w-12 h-12 sm:w-16 sm:h-16 bg-primary/90 hover:bg-primary rounded-full 
          flex items-center justify-center text-primary-foreground 
          shadow-lg hover:shadow-xl transition-all duration-300 
          hover:scale-110 paw-wiggle
          ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
          ${isScrolling ? 'scale-110' : ''}
        `}
      >
        <PawPrint direction="left" />
      </button>

      {/* Right Paw Navigation */}
      <button
        onClick={goToNext}
        disabled={currentIndex >= maxIndex}
        className={`
          absolute right-0 sm:right-0 top-1/2 -translate-y-1/2 z-10
          w-12 h-12 sm:w-16 sm:h-16 bg-primary/90 hover:bg-primary rounded-full 
          flex items-center justify-center text-primary-foreground 
          shadow-lg hover:shadow-xl transition-all duration-300 
          hover:scale-110 paw-wiggle
          ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''}
          ${isScrolling ? 'scale-110' : ''}
        `}
      >
        <PawPrint direction="right" />
      </button>

      {/* Progress indicator */}
      <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
              ${currentIndex === index 
                ? 'bg-primary scale-125' 
                : 'bg-primary/30 hover:bg-primary/60'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}
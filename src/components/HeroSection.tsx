import { Play, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Content } from "@/lib/types";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  featuredContent: Content[];
}

const HeroSection = ({ featuredContent }: HeroSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredContent.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [featuredContent.length]);

  // Handle manual navigation with animation state
  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === 0 ? featuredContent.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(currentIndex === featuredContent.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const currentContent = featuredContent[currentIndex];

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background images with enhanced smooth transitions */}
      {featuredContent.map((content, index) => (
        <div
          key={content.id}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 scale-100 blur-0' 
              : 'opacity-0 scale-110 blur-sm'
          }`}
          style={{ backgroundImage: `url(${content.backdropPath})` }}
        >
          {/* Enhanced gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
        </div>
      ))}
      
      <div className="container relative h-full flex items-center">
        <div className={`max-w-3xl transition-all duration-700 ease-out ${
          isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
        }`}>
          {/* Genre badges with staggered animation */}
          <div className="flex gap-2 mb-4">
            {currentContent.genres?.slice(0, 3).map((genre, index) => (
              <span
                key={genre}
                className={`px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 border border-white/30 transition-all duration-500 ease-out ${
                  isAnimating 
                    ? 'opacity-0 translate-x-4' 
                    : 'opacity-100 translate-x-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {genre}
              </span>
            ))}
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent leading-tight transition-all duration-700 ease-out ${
            isAnimating 
              ? 'opacity-0 translate-y-12 scale-95' 
              : 'opacity-100 translate-y-0 scale-100'
          }`}>
            {currentContent.title}
          </h1>
          
          {/* Rating and year with delayed animation */}
          <div className={`flex items-center gap-4 mb-6 transition-all duration-600 ease-out ${
            isAnimating 
              ? 'opacity-0 translate-x-8' 
              : 'opacity-100 translate-x-0'
          }`}
          style={{ transitionDelay: isAnimating ? '0ms' : '200ms' }}>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-primary/80 backdrop-blur-sm rounded text-sm font-semibold">
                {currentContent.rating}
              </span>
              <span className="text-white/80 font-medium">{currentContent.year}</span>
            </div>
          </div>
          
          <p className={`text-lg md:text-xl text-white/90 mb-10 line-clamp-3 leading-relaxed max-w-2xl transition-all duration-600 ease-out ${
            isAnimating 
              ? 'opacity-0 translate-y-8' 
              : 'opacity-100 translate-y-0'
          }`}
          style={{ transitionDelay: isAnimating ? '0ms' : '300ms' }}>
            {currentContent.description}
          </p>
          
          <div className={`flex items-center gap-6 transition-all duration-600 ease-out ${
            isAnimating 
              ? 'opacity-0 translate-y-8 scale-95' 
              : 'opacity-100 translate-y-0 scale-100'
          }`}
          style={{ transitionDelay: isAnimating ? '0ms' : '400ms' }}>
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <Link to={`/${currentContent.type}/${currentContent.id}`}>
                <Play className="mr-2 h-5 w-5 fill-current" />
                Watch Now
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="bg-transparent border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300" asChild>
              <Link to={`/${currentContent.type}/${currentContent.id}`}>
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced navigation arrows with hover animations */}
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/50 hover:scale-110 transition-all duration-300 disabled:opacity-50"
        onClick={handlePrevious}
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </Button>
      
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 backdrop-blur-sm border-white/20 hover:bg-black/50 hover:scale-110 transition-all duration-300 disabled:opacity-50"
        onClick={handleNext}
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </Button>

      {/* Enhanced dots indicator with active state animations */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {featuredContent.map((_, index) => (
          <button
            key={index}
            className={`transition-all duration-500 rounded-full hover:scale-110 ${
              index === currentIndex 
                ? 'bg-white w-10 h-3 shadow-lg scale-110' 
                : 'bg-white/40 w-3 h-3 hover:bg-white/60'
            }`}
            onClick={() => handleDotClick(index)}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

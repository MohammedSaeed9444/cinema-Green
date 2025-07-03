
import { Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Content } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";

interface ContentCardProps {
  content: Content;
}

const ContentCard = ({ content }: ContentCardProps) => {
  const { id, title, posterPath, type, year, rating, genres } = content;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex-shrink-0 relative min-w-[200px] w-[200px] md:min-w-[220px] md:w-[220px] group cursor-pointer isolate"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/${type}/${id}`}>
        {/* Poster container with enhanced styling */}
        <div className="relative rounded-xl overflow-hidden h-[300px] md:h-[330px] bg-gradient-to-br from-muted/50 to-muted shadow-lg group-hover:shadow-2xl transition-all duration-500">
          <AspectRatio ratio={2/3} className="bg-gradient-to-br from-primary/20 to-accent/20">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <img
              src={posterPath}
              alt={title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } ${isHovered ? 'scale-110' : 'scale-100'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </AspectRatio>
          
          {/* Enhanced overlay with gradient and blur effects */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute bottom-0 w-full p-4 space-y-3">
              {/* Genre tags */}
              <div className="flex flex-wrap gap-1">
                {genres?.slice(0, 2).map((genre) => (
                  <span
                    key={genre}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs text-white/90 border border-white/30"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="secondary" 
                className="w-full bg-white/90 text-black hover:bg-white font-semibold backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="h-4 w-4 mr-2 fill-current" />
                Watch Now
              </Button>
            </div>
          </div>

          {/* Rating badge with enhanced styling */}
          {rating && (
            <Badge 
              variant="secondary" 
              className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white border-white/30 font-semibold shadow-lg z-10"
            >
              {rating}
            </Badge>
          )}

          {/* Hover glow effect */}
          <div className={`absolute inset-0 rounded-xl ring-2 ring-primary/50 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>
        
        {/* Enhanced title and info section */}
        <div className="mt-4 space-y-2 relative">
          <h3 className={`text-base font-semibold transition-colors duration-300 line-clamp-2 leading-tight ${
            isHovered ? 'text-primary' : 'text-foreground'
          }`}>
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">{year}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">8.5</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;

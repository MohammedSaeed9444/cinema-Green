
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import ContentCard from "./ContentCard";
import { Content } from "@/lib/types";

interface ContentSliderProps {
  title: string;
  contents: Content[];
  seeAllLink?: string;
}

const ContentSlider = ({ title, contents, seeAllLink }: ContentSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = current.clientWidth * 0.8;
      
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
        
        {seeAllLink && (
          <Button variant="ghost" className="group hover:bg-primary/10 rounded-full font-semibold" asChild>
            <Link to={seeAllLink} className="flex items-center gap-2">
              See All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        )}
      </div>
      
      <div className="relative group">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none scroll-smooth"
        >
          {contents.map((content) => (
            <ContentCard key={content.id} content={content} />
          ))}
        </div>
        
        <Button
          variant="secondary"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border shadow-lg hover:shadow-xl opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ContentSlider;

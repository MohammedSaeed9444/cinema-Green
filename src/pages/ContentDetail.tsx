
import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Play, Plus, ThumbsUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ContentSlider from "@/components/ContentSlider";
import { trendingMovies, popularSeries, newReleases } from "@/lib/data";
import { Content } from "@/lib/types";

const ContentDetail = () => {
  const { type, id } = useParams();
  
  console.log('ContentDetail params:', { type, id });
  
  // Combine all content
  const allContent: Content[] = [
    ...trendingMovies,
    ...popularSeries,
    ...newReleases,
  ];
  
  console.log('All content:', allContent);
  
  // Find the current content
  const content = allContent.find(
    item => item.id === Number(id) && item.type === type
  );
  
  console.log('Found content:', content);
  
  if (!content) {
    console.log('Content not found, redirecting to home');
    return <Navigate to="/" replace />;
  }
  
  // Get similar content based on type
  const similarContent = allContent
    .filter(item => item.type === content.type && item.id !== content.id)
    .slice(0, 8);
  
  return (
    <Layout>
      <div className="relative">
        {/* Hero section with backdrop */}
        <div className="relative h-[70vh] w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${content.backdropPath || content.posterPath})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        </div>
        
        {/* Content section */}
        <div className="container relative -mt-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Poster */}
            <div className="hidden md:block">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-muted">
                <img 
                  src={content.posterPath} 
                  alt={content.title} 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Details */}
            <div className="md:col-span-2 pt-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {content.title}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{content.type === "movie" ? "Movie" : "TV Series"}</Badge>
                <Badge variant="secondary">{content.rating}</Badge>
                <span className="text-sm text-muted-foreground">{content.year}</span>
              </div>
              
              {content.genres && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.genres.map(genre => (
                    <Badge key={genre} variant="outline">{genre}</Badge>
                  ))}
                </div>
              )}
              
              <p className="text-muted-foreground mb-6">
                {content.description || 
                  "Experience this amazing content with stunning visuals and compelling storytelling. This title offers an immersive viewing experience that will keep you engaged from start to finish."}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="gap-2">
                  <Play className="h-5 w-5" />
                  Watch Now
                </Button>
                
                <Button variant="outline" size="lg" className="gap-2">
                  <Plus className="h-5 w-5" />
                  Add to List
                </Button>
                
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="pb-8">
                <h2 className="text-xl font-bold mb-4">About this {content.type === "movie" ? "Movie" : "Show"}</h2>
                <p className="text-muted-foreground">
                  This {content.type === "movie" ? "movie" : "TV show"} delivers exceptional entertainment with high production values and engaging content. Perfect for viewers who appreciate quality storytelling and memorable characters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Similar content section */}
      {similarContent.length > 0 && (
        <div className="mt-8">
          <ContentSlider 
            title={`More Like This`}
            contents={similarContent} 
          />
        </div>
      )}
    </Layout>
  );
};

export default ContentDetail;

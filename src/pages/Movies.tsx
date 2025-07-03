import Layout from "@/components/Layout";
import ContentCard from "@/components/ContentCard";
import { trendingMovies, newReleases, genres } from "@/lib/data";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Content } from "@/lib/types";

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  
  // Combine movie lists and filter duplicates
  const allMovies: Content[] = [
    ...trendingMovies, 
    ...newReleases.filter(item => item.type === "movie")
  ];
  
  // Remove duplicates based on id
  const uniqueMovies = Array.from(
    new Map(allMovies.map(movie => [movie.id, movie])).values()
  );
  
  const filteredMovies = selectedGenre
    ? uniqueMovies.filter(movie => movie.genres?.includes(selectedGenre))
    : uniqueMovies;
  
  return (
    <Layout>
      <div className="pt-24 pb-8 container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Movies</h1>
        
        <div className="mb-8 overflow-x-auto pb-4">
          <div className="flex gap-2">
            <Button
              variant={selectedGenre === null ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setSelectedGenre(null)}
            >
              All
            </Button>
            
            {genres.map(genre => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? "default" : "outline"}
                className="rounded-full"
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-12">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="col-span-1">
              <ContentCard content={movie} />
            </div>
          ))}
        </div>
        
        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No movies found for this genre.</p>
            <Button className="mt-4" onClick={() => setSelectedGenre(null)}>
              Show All Movies
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Movies;

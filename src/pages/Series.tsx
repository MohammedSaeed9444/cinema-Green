import Layout from "@/components/Layout";
import ContentCard from "@/components/ContentCard";
import { popularSeries, newReleases, genres } from "@/lib/data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Content } from "@/lib/types";

const Series = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  
  // Combine series lists and filter duplicates
  const allSeries: Content[] = [
    ...popularSeries, 
    ...newReleases.filter(item => item.type === "tv")
  ];
  
  // Remove duplicates based on id
  const uniqueSeries = Array.from(
    new Map(allSeries.map(series => [series.id, series])).values()
  );
  
  const filteredSeries = selectedGenre
    ? uniqueSeries.filter(series => series.genres?.includes(selectedGenre))
    : uniqueSeries;
  
  return (
    <Layout>
      <div className="pt-24 pb-8 container">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">TV Shows</h1>
        
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
          {filteredSeries.map(series => (
            <div key={series.id} className="col-span-1">
              <ContentCard content={series} />
            </div>
          ))}
        </div>
        
        {filteredSeries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No TV shows found for this genre.</p>
            <Button className="mt-4" onClick={() => setSelectedGenre(null)}>
              Show All TV Shows
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Series;

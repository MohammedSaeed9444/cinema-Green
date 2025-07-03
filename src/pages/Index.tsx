
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentSlider from "@/components/ContentSlider";
import { featuredContent, trendingMovies, popularSeries, newReleases } from "@/lib/data";

const Index = () => {
  // Create array of featured content for the hero slider
  const heroContent = [
    featuredContent,
    trendingMovies[0],
    popularSeries[0],
    newReleases[0]
  ].filter(Boolean);

  return (
    <Layout>
      <HeroSection featuredContent={heroContent} />

      {/* Content sections with enhanced spacing */}
      <div className="space-y-12 mt-16">
        <ContentSlider 
          title="Trending Movies" 
          contents={trendingMovies} 
          seeAllLink="/movies"
        />
        
        <ContentSlider 
          title="Popular TV Shows" 
          contents={popularSeries} 
          seeAllLink="/series"
        />
        
        <ContentSlider 
          title="New Releases" 
          contents={newReleases} 
          seeAllLink="/new"
        />
      </div>

      {/* Add some bottom spacing */}
      <div className="pb-16" />
    </Layout>
  );
};

export default Index;

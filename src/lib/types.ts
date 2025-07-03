
export interface Content {
  id: number;
  title: string;
  description?: string;
  posterPath: string;
  backdropPath?: string;
  type: "movie" | "tv";
  year: string;
  rating?: string;
  genres?: string[];
}

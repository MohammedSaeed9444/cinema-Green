
import { Link } from "react-router-dom";
import { Search, Film, TvMinimal, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-transparent backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gradient">cinema Green</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/movies" className="text-sm font-medium hover:text-primary transition-colors">
              Movies
            </Link>
            <Link to="/series" className="text-sm font-medium hover:text-primary transition-colors">
              TV Shows
            </Link>
            <Link to="/new" className="text-sm font-medium hover:text-primary transition-colors">
              New & Popular
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search titles..."
              className="pl-8 bg-secondary/50 border-0 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

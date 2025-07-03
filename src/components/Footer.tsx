
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background/50 border-t border-border/50 py-10 mt-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-gradient">CineVerse</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Your premier destination for movies and TV shows. Stream unlimited entertainment anytime, anywhere.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Navigation</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/series" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                TV Shows
              </Link>
            </li>
            <li>
              <Link to="/new" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                New & Popular
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookie Preferences
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Support</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-6 border-t border-border/30">
        <p className="text-xs text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} CineVerse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

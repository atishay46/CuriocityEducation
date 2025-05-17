import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, Sun, Moon, BookOpen } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Update header styling on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Community', path: '/community' },
    { label: 'About', path: '/about' },
  ];

  return (
    <header className={`
      fixed top-0 left-0 right-0 z-50 header
      ${isScrolled ? 'shadow-md' : ''}
      transition-all duration-300
    `}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">CurioCity</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 justify-start ml-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              aria-label="Search" 
              className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <ThemeToggle />
            
            <Link 
              to="/login" 
              className="text-sm font-medium px-5 py-2 rounded-full 
              border border-border
              hover:border-primary
              text-foreground/80 hover:text-foreground transition-colors"
            >
              Log in
            </Link>
            
            <Link 
              to="/courses" 
              className="text-sm font-medium px-5 py-2 rounded-full 
              bg-primary text-primary-foreground
              hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`
        md:hidden bg-background border-t border-border
        ${isMobileMenuOpen ? 'block' : 'hidden'}
        transition-all duration-300
      `}>
        <nav className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 space-y-2">
            <Link 
              to="/login" 
              className="block w-full text-center text-sm font-medium px-5 py-2 rounded-full 
              border border-border
              hover:border-primary
              text-foreground/80 hover:text-foreground transition-colors"
            >
              Log in
            </Link>
            <Link 
              to="/courses" 
              className="block w-full text-center text-sm font-medium px-5 py-2 rounded-full 
              bg-primary text-primary-foreground
              hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

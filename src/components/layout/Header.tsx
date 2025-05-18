import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">FinalAxis</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/courses"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/courses") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Courses
            </Link>
            <Link
              to="/community"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/community") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Community
            </Link>
            <Link
              to="/learning-room"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/learning-room") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Learning Room
            </Link>
            <Link
              to="/micro-internships"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/micro-internships") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Micro Internships
            </Link>
            <Link
              to="/ai-mentor"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/ai-mentor") ? "text-primary" : "text-muted-foreground"
              )}
            >
              AI Mentor
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          {isAuthenticated ? (
            <Button variant="outline" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              to="/courses"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/courses") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              Courses
            </Link>
            <Link
              to="/community"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/community") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              Community
            </Link>
            <Link
              to="/learning-room"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/learning-room") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              Learning Room
            </Link>
            <Link
              to="/micro-internships"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/micro-internships") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              Micro Internships
            </Link>
            <Link
              to="/ai-mentor"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/ai-mentor") ? "text-primary" : "text-muted-foreground"
              )}
              onClick={closeMenu}
            >
              AI Mentor
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

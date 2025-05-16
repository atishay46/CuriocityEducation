import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Book, 
  Briefcase, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Home, 
  MessageSquare, 
  Users, 
  Brain, 
  Sparkles,
  User,
  Award,
  FileText,
  Video,
  Bookmark,
  Activity
} from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`h-screen fixed left-0 top-0 z-40 sidebar
      ${isCollapsed ? 'w-16' : 'w-64'}
      transition-all duration-300 ease-in-out`}
    >
      {/* Collapse button */}
      <button 
        onClick={toggleSidebar}
        className="absolute -right-3 top-24 bg-primary text-primary-foreground rounded-full p-1 shadow-md z-[60]"
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>

      {/* Logo and header */}
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <Link to="/" className="text-xl font-bold text-foreground">CurioCity</Link>
        )}
        {isCollapsed && (
          <Link to="/" className="text-xl font-bold text-foreground mx-auto">L</Link>
        )}
      </div>

      {/* Navigation */}
      <nav className="px-2 py-4">
        <ul className="space-y-1">
          {/* Main navigation */}
          <li className="pb-1">
            {!isCollapsed && <p className="text-xs text-muted-foreground px-3">Main</p>}
          </li>
          <NavItem 
            to="/" 
            icon={<Home />} 
            label="Home" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/'}
          />
          <NavItem 
            to="/courses" 
            icon={<Book />} 
            label="Courses" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/courses'}
          />
          <NavItem 
            to="/learning-room" 
            icon={<Brain />} 
            label="Learning Room" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/learning-room'}
          />
          <NavItem 
            to="/micro-internships" 
            icon={<Briefcase />} 
            label="Micro-Internships" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/micro-internships'}
          />
          <NavItem 
            to="/ai-mentor" 
            icon={<Sparkles />} 
            label="AI Mentor" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/ai-mentor'}
          />
          <NavItem 
            to="/time-capsule" 
            icon={<Clock />} 
            label="Time Capsule" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/time-capsule'}
          />
          <NavItem 
            to="/simulations" 
            icon={<Activity />} 
            label="Simulations" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/simulations'}
          />

          {/* Dashboards section */}
          <li className="pt-4 pb-1">
            {!isCollapsed && <p className="text-xs text-muted-foreground px-3">Dashboards</p>}
          </li>
          <NavItem 
            to="/student-dashboard" 
            icon={<User />} 
            label="Student Dashboard" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/student-dashboard'}
          />
          <NavItem 
            to="/instructor-dashboard" 
            icon={<Users />} 
            label="Instructor Dashboard" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/instructor-dashboard'}
          />

          {/* Resources section */}
          <li className="pt-4 pb-1">
            {!isCollapsed && <p className="text-xs text-muted-foreground px-3">Resources</p>}
          </li>
          <NavItem 
            to="/certificates" 
            icon={<Award />} 
            label="Certificates" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/certificates'}
          />
          <NavItem 
            to="/video-lessons" 
            icon={<Video />} 
            label="Video Lessons" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/video-lessons'}
          />
          <NavItem 
            to="/notes" 
            icon={<FileText />} 
            label="Notes & PDFs" 
            isCollapsed={isCollapsed}
            isActive={location.pathname === '/notes'}
          />
        </ul>
      </nav>

      {/* Footer with theme toggle */}
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="flex items-center justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  isCollapsed: boolean;
  isActive?: boolean;
};

const NavItem = ({ to, icon, label, isCollapsed, isActive }: NavItemProps) => (
  <Link
    to={to}
    className={`
      flex items-center px-3 py-2 rounded-lg
      ${isActive 
        ? 'bg-primary/10 text-primary' 
        : 'text-foreground/70 hover:bg-muted hover:text-foreground'
      }
      transition-colors duration-200
    `}
  >
    <span className="h-5 w-5">{icon}</span>
    {!isCollapsed && (
      <span className="ml-3 text-sm font-medium">{label}</span>
    )}
  </Link>
);

export default Sidebar;

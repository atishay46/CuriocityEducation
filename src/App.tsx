import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/CourseDetail";
import LearningRoom from "./pages/LearningRoom";
import MicroInternships from "./pages/MicroInternships";
import AIMentor from "./pages/AIMentor";
import TimeCapsule from "./pages/TimeCapsule";
import Simulations from "./pages/Simulations";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import Certificates from "./pages/Certificates";
import Notes from "./pages/Notes";
import VideoLessons from "./pages/VideoLessons";
import Courses from "./pages/Courses";
import Community from "./pages/Community";
import Login from "./pages/Login";
import About from "./pages/About";
import LoginPrompt from "./components/auth/LoginPrompt";
import { ThemeProvider } from "next-themes";
import Payment from './pages/Payment';
import LearningPath from './pages/LearningPath';

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Setup theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setTheme(savedTheme || (systemPrefersDark ? 'dark' : 'light'));
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      setShowLoginPrompt(true);
    }
  }, []);

  // Don't render until theme is determined to avoid flash
  if (theme === null) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:courseId" element={<CourseDetail />} />
              <Route path="/learning-path/:courseId" element={<LearningPath />} />
              <Route path="/community" element={<Community />} />
              <Route path="/learning-room" element={<LearningRoom />} />
              <Route path="/micro-internships" element={<MicroInternships />} />
              <Route path="/ai-mentor" element={<AIMentor />} />
              <Route path="/time-capsule" element={<TimeCapsule />} />
              <Route path="/simulations" element={<Simulations />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/video-lessons" element={<VideoLessons />} />
              <Route path="/payment" element={<Payment />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          
          <LoginPrompt open={showLoginPrompt} onOpenChange={setShowLoginPrompt} />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

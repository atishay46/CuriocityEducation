
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import Hero from '../components/home/Hero';
import FeaturedCourses from '../components/home/FeaturedCourses';
import Testimonials from '../components/home/Testimonials';
import RoadmapSection from '../components/home/RoadmapSection';
import Cursor from '../components/ui/Cursor';
import AIChat from '../components/ui/AIChat';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex bg-offblack">
      <Sidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <Header />
        <main className="flex-grow">
          <Hero />
          <FeaturedCourses />
          <Testimonials />
          <RoadmapSection />
        </main>
        <Footer />
        <Cursor />
        <AIChat />
      </div>
    </div>
  );
};

export default Index;

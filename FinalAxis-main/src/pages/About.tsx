import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import Cursor from '../components/ui/Cursor';
import AIChat from '../components/ui/AIChat';
import { BookOpen, Users, Brain, Sparkles } from 'lucide-react';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex bg-offblack">
      <Sidebar />
      <div className="flex-1 ml-16 md:ml-64 mr-0 md:mr-72">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="glass-card rounded-xl p-8 mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-6">About CurioCity</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-cream/90 mb-4">
                  CurioCity is a next-generation learning platform that combines immersive content, 
                  AI-powered personalization, and community-driven growth. We're on a mission to 
                  transform how people learn and grow in the digital age.
                </p>
                <p className="text-cream/90">
                  Our platform brings together cutting-edge technology and proven educational 
                  methodologies to create an engaging, effective learning experience for everyone.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <BookOpen className="h-32 w-32 text-forest" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6 rounded-xl">
                <Users className="h-8 w-8 text-forest mb-4" />
                <h3 className="text-xl font-semibold text-cream mb-2">Community First</h3>
                <p className="text-cream/80">
                  Join a vibrant community of learners, share experiences, and grow together.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <Brain className="h-8 w-8 text-forest mb-4" />
                <h3 className="text-xl font-semibold text-cream mb-2">Smart Learning</h3>
                <p className="text-cream/80">
                  AI-powered personalization that adapts to your learning style and pace.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <Sparkles className="h-8 w-8 text-forest mb-4" />
                <h3 className="text-xl font-semibold text-cream mb-2">Innovative Approach</h3>
                <p className="text-cream/80">
                  Cutting-edge features like micro-internships and AI mentorship.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-forest mb-4">Our Mission</h2>
              <p className="text-cream/90 mb-4">
                We believe that learning should be accessible, engaging, and effective for everyone. 
                CurioCity combines the best of traditional education with modern technology to create 
                a platform that not only teaches but inspires.
              </p>
              <p className="text-cream/90">
                Whether you're a student, professional, or lifelong learner, CurioCity provides the 
                tools, resources, and community support you need to achieve your learning goals.
              </p>
            </div>
          </div>
        </main>
        <Footer />
        <Cursor />
        <AIChat />
      </div>
    </div>
  );
};

export default About; 
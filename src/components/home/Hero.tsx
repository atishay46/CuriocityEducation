import { ChevronRight, Play, Users, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../ui/AnimatedBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl animate-fade-in">
            {/* Eyebrow text */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 fill-primary" />
              <span>The future of online learning is here</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              A Digital Learning City for your Learnings and knowledge <span className="text-gradient">Curiosity</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-balance">
              Discover personalized courses, interactive content, and a global learning community that adapts to your unique journey.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pastel-blue flex items-center justify-center mr-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">500+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Premium courses</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-pastel-green flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">50k+</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active students</p>
                </div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="neo-btn">
                Explore Courses
              </Link>
              
              <Link to="/learning-paths" className="neo-btn">
                <span className="mr-2">View Learning Paths</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main image with decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-pink rounded-full opacity-20 animate-pulse-soft"></div>
              
              <div className="absolute inset-10 rounded-full overflow-hidden border-8 border-white/90 dark:border-gray-900/90 shadow-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 animate-float">
                <img 
                  src="https://media.istockphoto.com/id/2105091005/photo/young-student-taking-notes-while-e-learning-on-laptop-at-the-university.jpg?s=612x612&w=0&k=20&c=5AoTWNFmHm-HeQfx0FzB3LPm3MKQXgokYelEvmC_47E=" 
                  alt="Student taking notes while e-learning" 
                  className="w-full h-full object-cover object-[center_right] rounded-full"
                />
                
                {/* Play button overlay */}
                <button 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/90 dark:bg-gray-900/90 shadow-lg flex items-center justify-center group transition-all hover:scale-110"
                  aria-label="Play introduction video"
                >
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:scale-95 transition-transform">
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </div>
                </button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-pastel-yellow animate-float" style={{ animationDelay: "0.5s" }}></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-pastel-green animate-float" style={{ animationDelay: "1s" }}></div>
              
              {/* Feature cards */}
              <div className="absolute top-1/4 -right-14 glass-card px-4 py-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pastel-purple flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">AI Tutor</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">24/7 Support</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 right-10 glass-card px-4 py-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pastel-blue flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Community</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Global network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

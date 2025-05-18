import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-background">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/neural-network.jpg"
          alt="Neural Network"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
            Unlock Your Learning Potential
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Discover a world of knowledge with our cutting-edge learning platform powered by advanced AI technology.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">AI-Powered Learning</h3>
            <p className="text-muted-foreground">
              Personalized learning paths adapted to your unique style and pace.
            </p>
          </div>
          <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
            <p className="text-muted-foreground">
              Learn from industry professionals with real-world experience.
            </p>
          </div>
          <div className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-xl font-semibold mb-3">Interactive Projects</h3>
            <p className="text-muted-foreground">
              Apply your knowledge through hands-on projects and assignments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

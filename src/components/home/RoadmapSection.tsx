import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Check, Star, UserPlus, LucideIcon, Code, Figma, Database, LineChart, Film, Book, Cpu } from 'lucide-react';

interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  skills: string[];
  icon: LucideIcon;
  completed?: boolean;
}

const RoadmapSection = () => {
  const [activeRoadmap, setActiveRoadmap] = useState({
    title: "Web Development",
    description: "Master modern web development with our comprehensive roadmap",
    steps: [
      {
        id: "1",
        title: "HTML & CSS Fundamentals",
        description: "Learn the building blocks of web development",
        duration: "4 weeks",
        level: "Beginner",
        skills: ["HTML5", "CSS3", "Responsive Design"],
        icon: Code,
        completed: true
      },
      {
        id: "2",
        title: "JavaScript Essentials",
        description: "Master JavaScript programming language",
        duration: "6 weeks",
        level: "Intermediate",
        skills: ["ES6+", "DOM Manipulation", "Async Programming"],
        icon: Code,
        completed: false
      },
      {
        id: "3",
        title: "React Development",
        description: "Build modern user interfaces with React",
        duration: "8 weeks",
        level: "Advanced",
        skills: ["React Hooks", "State Management", "Component Design"],
        icon: Code,
        completed: false
      }
    ]
  });

  return (
    <section className="py-16 bg-offblack">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gradient mb-4">Learning Roadmaps</h2>
          <p className="text-cream max-w-2xl mx-auto">
            Follow our structured learning paths to master new skills and advance your career
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-cream">{activeRoadmap.title}</h3>
                <p className="text-sand mt-1">{activeRoadmap.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-sand">Share</span>
                <button className="p-2 rounded-full hover:bg-forest/10 transition-colors">
                  <ExternalLink className="h-4 w-4 text-forest" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {activeRoadmap.steps.map((step, index) => (
                <div key={step.id} className="relative">
                  {index < activeRoadmap.steps.length - 1 && (
                    <div 
                      className={`absolute left-6 top-12 bottom-0 w-0.5 ${
                        step.completed ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  )}
                  
                  <div className="flex">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      step.completed 
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      {step.completed ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <step.icon className="h-5 w-5" />
                      )}
                    </div>
                    
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-cream">{step.title}</h4>
                        <span className="text-sm text-sand">{step.duration}</span>
                      </div>
                      <p className="text-sand mt-1">{step.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {step.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-2 py-1 text-xs rounded-full bg-forest/10 text-forest"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;

import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Lock } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import Cursor from '../components/ui/Cursor';
import AIChat from '../components/ui/AIChat';
import { Progress } from '@/components/ui/progress';

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  duration: string;
  isCompleted: boolean;
}

interface Lesson {
  id: number;
  title: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
}

const LearningPath = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('LearningPath component rendered with courseId:', courseId);

  useEffect(() => {
    if (!courseId) {
      setError('No course ID provided');
      setLoading(false);
      return;
    }

    console.log('LearningPath useEffect triggered with courseId:', courseId);
    // Simulate API call to fetch course data
    setTimeout(() => {
      try {
        const courseData = {
          id: courseId,
          title: 'Introduction to Machine Learning',
          instructor: 'Dr. Priya Sharma',
          progress: 65,
          imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          modules: [
            {
              id: 1,
              title: 'Introduction to Machine Learning',
              description: 'Learn the basics of machine learning, types of ML algorithms, and when to use them.',
              duration: '2.5 hours',
              isCompleted: true,
              lessons: [
                { id: 1, title: 'What is Machine Learning?', duration: '30 mins', isCompleted: true, isLocked: false },
                { id: 2, title: 'Types of Machine Learning', duration: '45 mins', isCompleted: true, isLocked: false },
                { id: 3, title: 'Applications of ML', duration: '35 mins', isCompleted: true, isLocked: false },
                { id: 4, title: 'Setting up your ML Environment', duration: '40 mins', isCompleted: false, isLocked: false }
              ]
            },
            {
              id: 2,
              title: 'Python for Data Science',
              description: 'Master the essential Python libraries for data manipulation and analysis.',
              duration: '4 hours',
              isCompleted: false,
              lessons: [
                { id: 5, title: 'NumPy Fundamentals', duration: '45 mins', isCompleted: false, isLocked: false },
                { id: 6, title: 'Pandas for Data Analysis', duration: '60 mins', isCompleted: false, isLocked: false },
                { id: 7, title: 'Data Visualization with Matplotlib', duration: '45 mins', isCompleted: false, isLocked: true },
                { id: 8, title: 'Data Preprocessing Techniques', duration: '30 mins', isCompleted: false, isLocked: true }
              ]
            },
            {
              id: 3,
              title: 'Supervised Learning Algorithms',
              description: 'Explore regression, classification, and ensemble methods through practical examples.',
              duration: '6 hours',
              isCompleted: false,
              lessons: [
                { id: 9, title: 'Linear Regression', duration: '45 mins', isCompleted: false, isLocked: true },
                { id: 10, title: 'Logistic Regression', duration: '45 mins', isCompleted: false, isLocked: true },
                { id: 11, title: 'Decision Trees', duration: '60 mins', isCompleted: false, isLocked: true },
                { id: 12, title: 'Random Forests', duration: '45 mins', isCompleted: false, isLocked: true }
              ]
            }
          ]
        };
        
        console.log('Setting course data:', courseData);
        setCourse(courseData);
        setError(null);
      } catch (err) {
        console.error('Error loading course data:', err);
        setError('Failed to load course data');
      } finally {
        setLoading(false);
      }
    }, 800);
  }, [courseId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-offblack flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-forest mx-auto"></div>
          <p className="mt-4 text-cream">Loading learning path...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-offblack flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cream mb-4">Error</h2>
          <p className="text-sand mb-6">{error}</p>
          <Link to="/courses" className="forest-btn">Back to Courses</Link>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-offblack flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cream mb-4">Course Not Found</h2>
          <p className="text-sand mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="forest-btn">Browse All Courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-offblack">
      <Sidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {/* Back button */}
          <Link to="/courses" className="flex items-center text-cream hover:text-sand mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Courses</span>
          </Link>

          {/* Course header */}
          <div className="glass-card rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-cream mb-2">{course.title}</h1>
                <p className="text-sand">Instructor: {course.instructor}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center">
                  <Progress value={course.progress} className="w-48 h-2 mr-4" />
                  <span className="text-cream">{course.progress}% Complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning path */}
          <div className="space-y-6">
            {course.modules.map((module: Module, moduleIndex: number) => (
              <div key={module.id} className="glass-card rounded-xl overflow-hidden">
                <div className="p-6 bg-forest/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-cream mb-2">
                        Module {moduleIndex + 1}: {module.title}
                      </h2>
                      <p className="text-sand">{module.description}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-forest" />
                      <span className="text-cream">{module.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    {module.lessons.map((lesson: Lesson) => (
                      <div 
                        key={lesson.id}
                        className={`flex items-center justify-between p-4 rounded-lg ${
                          lesson.isLocked 
                            ? 'bg-offblack/50' 
                            : lesson.isCompleted 
                              ? 'bg-forest/10' 
                              : 'bg-offblack/30'
                        }`}
                      >
                        <div className="flex items-center">
                          {lesson.isCompleted ? (
                            <CheckCircle className="h-5 w-5 text-forest mr-3" />
                          ) : lesson.isLocked ? (
                            <Lock className="h-5 w-5 text-sand/50 mr-3" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-forest mr-3" />
                          )}
                          <div>
                            <h3 className="text-cream font-medium">{lesson.title}</h3>
                            <p className="text-sm text-sand">{lesson.duration}</p>
                          </div>
                        </div>
                        {!lesson.isLocked && (
                          <button 
                            className={`px-4 py-2 rounded-md text-sm ${
                              lesson.isCompleted
                                ? 'bg-forest/20 text-forest'
                                : 'bg-forest text-cream hover:bg-forest-light'
                            }`}
                          >
                            {lesson.isCompleted ? 'Review' : 'Start Lesson'}
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
        <Cursor />
        <AIChat />
      </div>
    </div>
  );
};

export default LearningPath; 
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import Cursor from '../components/ui/Cursor';
import AIChat from '../components/ui/AIChat';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, CheckCircle, Clock, Star, Map } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const registeredCourses = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      instructor: 'Dr. Priya Sharma',
      progress: 65,
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      rating: 4.8,
      totalLessons: 24,
      completedLessons: 15
    },
    {
      id: 2,
      title: 'Advanced React Development',
      instructor: 'Rajesh Kumar',
      progress: 42,
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      rating: 4.6,
      totalLessons: 18,
      completedLessons: 7
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      instructor: 'Prof. Arun Patel',
      progress: 27,
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      rating: 4.9,
      totalLessons: 30,
      completedLessons: 8
    }
  ];

  const completedCourses = [
    {
      id: 4,
      title: 'Web Development Basics',
      instructor: 'Meera Gupta',
      completionDate: '2023-04-15',
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      rating: 4.5,
      certificateId: 'WD-2023-04-1234'
    },
    {
      id: 5,
      title: 'UX Design Principles',
      instructor: 'Vikram Singh',
      completionDate: '2023-06-22',
      imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      rating: 4.7,
      certificateId: 'UX-2023-06-5678'
    }
  ];

  return (
    <div className="min-h-screen flex bg-offblack dark:bg-offblack">
      <Sidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-gradient">My Courses</h1>
          
          <Tabs defaultValue="registered" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="registered">Registered Courses</TabsTrigger>
              <TabsTrigger value="completed">Completed Courses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="registered" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {registeredCourses.map((course) => (
                  <Card key={course.id} className="glass-card overflow-hidden hover:shadow-forest/20 hover:shadow-lg transition-all duration-300">
                    <div className="h-40 bg-forest/20 relative">
                      <img 
                        src={course.imageUrl} 
                        alt={course.title} 
                        className="w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute bottom-3 right-3 bg-forest text-cream text-sm px-2 py-1 rounded-full">
                        <div className="flex items-center">
                          <Star className="h-3 w-3 mr-1 fill-cream text-cream" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <p className="text-sm text-cream/70">{course.instructor}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>{course.progress}% complete</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center space-x-4">
                          <span className="text-xs flex items-center text-cream/70">
                            <Clock className="h-3 w-3 mr-1" />
                            {course.totalLessons} lessons
                          </span>
                          <Link 
                            to={`/learning-path/${course.id.toString()}`}
                            className="text-xs font-medium text-forest hover:text-forest-light flex items-center"
                            onClick={() => console.log('Clicked learning path link for course:', course.id)}
                          >
                            <Map className="h-3 w-3 mr-1" />
                            View Learning Path
                          </Link>
                        </div>
                        <Link 
                          to={`/courses/${course.id}`} 
                          className="text-xs font-medium text-forest hover:text-forest-light"
                        >
                          Continue Learning
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="completed" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {completedCourses.map((course) => (
                  <Card key={course.id} className="glass-card overflow-hidden hover:shadow-forest/20 hover:shadow-lg transition-all duration-300">
                    <div className="h-40 bg-forest/20 relative">
                      <img 
                        src={course.imageUrl} 
                        alt={course.title} 
                        className="w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute top-3 right-3 bg-forest text-cream text-sm px-2 py-1 rounded-full">
                        <div className="flex items-center">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          <span>Completed</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <p className="text-sm text-cream/70">{course.instructor}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-cream/70">Completed on:</span>
                        <span>{new Date(course.completionDate).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex justify-between mt-4">
                        <span className="text-xs flex items-center text-cream/70">
                          <Star className="h-3 w-3 mr-1 fill-cream text-cream" />
                          {course.rating} rating
                        </span>
                        <a 
                          href={`/certificates/${course.certificateId}`} 
                          className="text-xs font-medium text-forest hover:text-forest-light"
                        >
                          View Certificate
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
        <Cursor />
        <AIChat />
      </div>
    </div>
  );
};

export default Courses;

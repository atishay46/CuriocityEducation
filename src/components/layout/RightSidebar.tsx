import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RightSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div 
      className={`h-screen fixed right-0 top-0 z-30 sidebar
      ${isCollapsed ? 'w-0 opacity-0' : 'w-72 opacity-100'}
      transition-all duration-300 ease-in-out`}
    >
      {/* Collapse button */}
      <button 
        onClick={toggleSidebar}
        className={`absolute -left-3 top-12 bg-primary text-primary-foreground rounded-full p-1 shadow-md transition-all
        ${isCollapsed ? '-left-10' : '-left-3'}`}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isCollapsed ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>

      {/* Content */}
      <div className="p-4">
        <Tabs defaultValue="progress" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="progress" className="flex-1">Progress</TabsTrigger>
            <TabsTrigger value="notes" className="flex-1">Notes</TabsTrigger>
            <TabsTrigger value="activity" className="flex-1">Activity</TabsTrigger>
          </TabsList>
          
          <TabsContent value="progress" className="mt-4">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-foreground">Course Progress</h3>
                  <span className="text-xs text-muted-foreground">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-foreground">Assignments</h3>
                  <span className="text-xs text-muted-foreground">60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-foreground">Quizzes</h3>
                  <span className="text-xs text-muted-foreground">90%</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notes" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground">Recent Notes</h3>
                <button className="text-xs text-primary hover:underline">View All</button>
              </div>
              
              <div className="space-y-2">
                {[1, 2, 3].map((note) => (
                  <div key={note} className="p-3 rounded-lg bg-muted">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-foreground">Note {note}</h4>
                      <span className="text-xs text-muted-foreground">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="activity" className="mt-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground">Recent Activity</h3>
                <button className="text-xs text-primary hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map((activity) => (
                  <div key={activity} className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground">Completed Lesson {activity}</p>
                      <p className="text-xs text-muted-foreground">3h ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default RightSidebar;

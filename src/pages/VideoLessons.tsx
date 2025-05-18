import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Search } from "lucide-react";

interface VideoLesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
}

const VideoLessons = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample video lessons data
  const lessons: VideoLesson[] = [
    {
      id: "1",
      title: "Introduction to React",
      description: "Learn the basics of React and its core concepts",
      duration: "45:30",
      thumbnail: "https://picsum.photos/seed/react/400/225",
    },
    {
      id: "2",
      title: "Advanced TypeScript",
      description: "Deep dive into TypeScript features and best practices",
      duration: "1:15:00",
      thumbnail: "https://picsum.photos/seed/typescript/400/225",
    },
    {
      id: "3",
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js",
      duration: "1:30:00",
      thumbnail: "https://picsum.photos/seed/nodejs/400/225",
    },
  ];

  const filteredLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Video Lessons</h1>
      
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search lessons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredLessons.map((lesson) => (
          <Card key={lesson.id}>
            <div className="relative aspect-video">
              <img
                src={lesson.thumbnail}
                alt={lesson.title}
                className="object-cover w-full h-full rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button size="icon" className="h-12 w-12">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">{lesson.description}</p>
              <p className="text-sm text-muted-foreground">Duration: {lesson.duration}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoLessons;

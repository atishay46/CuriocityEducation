import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">About FinalAxis</h1>
      
      <div className="grid gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              FinalAxis is dedicated to revolutionizing education through innovative learning experiences. 
              We combine cutting-edge technology with proven educational methodologies to create an engaging 
              and effective learning environment for students worldwide.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Interactive video lessons with real-time feedback</li>
              <li>AI-powered personalized learning paths</li>
              <li>Micro-internships for practical experience</li>
              <li>Community-driven learning environment</li>
              <li>Comprehensive course materials and resources</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Ready to begin your learning journey? Explore our courses and start your path to success today.
            </p>
            <Link to="/courses">
              <Button>Browse Courses</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About; 
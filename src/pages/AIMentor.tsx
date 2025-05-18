import { useEffect, useState, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/Sidebar';
import Cursor from '../components/ui/Cursor';
import AIChat from '../components/ui/AIChat';
import { Brain, BookOpen, Target, TrendingUp, Clock, Calendar, MessageSquare, Send, User } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIMentor = () => {
  const [learningStreak, setLearningStreak] = useState(5);
  const [weeklyProgress, setWeeklyProgress] = useState(75);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI mentor. I notice you've been studying for 5 days straight! That's impressive dedication. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessage('');

    // Generate AI response based on user message and mood
    setTimeout(() => {
      const aiResponses = {
        default: [
          "I understand. Let me help you with that.",
          "That's a great question! Here's what I think...",
          "Based on your learning style, I'd recommend...",
        ],
        motivated: [
          "Your enthusiasm is contagious! Let's build on this momentum.",
          "Great energy! Here's a challenging task to keep you engaged.",
          "Your positive attitude will help you master this quickly!",
        ],
        struggling: [
          "It's okay to find things challenging. Let's break this down into smaller steps.",
          "I notice you're having trouble. Would you like to try a different approach?",
          "Remember, every expert was once a beginner. Let's work through this together.",
        ],
        tired: [
          "It's important to take breaks. Would you like to try a shorter, focused session?",
          "I understand you're feeling tired. Let's do a quick review instead of new material.",
          "How about we switch to a more engaging topic to help you stay focused?",
        ],
      };

      const responsePool = aiResponses.default;
      const randomResponse = responsePool[Math.floor(Math.random() * responsePool.length)];
      
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newAiMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex bg-offblack">
      <Sidebar />
      <div className="flex-1 ml-16 md:ml-64">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="glass-card rounded-xl p-6 mb-8">
            <h1 className="text-3xl font-bold mb-6 text-gradient">AI Mentor with Emotional Intelligence</h1>
            <p className="text-cream mb-6">
              Your personalized AI mentor that understands your learning style, tracks your progress,
              and provides emotional support throughout your learning journey.
            </p>

            {/* Learning Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-forest mr-2" />
                  <h3 className="text-lg font-semibold text-cream">Learning Streak</h3>
                </div>
                <p className="text-2xl font-bold text-forest">{learningStreak} days</p>
                <p className="text-sm text-sand mt-1">Keep it up! You're doing great!</p>
              </div>

              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <TrendingUp className="h-5 w-5 text-forest mr-2" />
                  <h3 className="text-lg font-semibold text-cream">Weekly Progress</h3>
                </div>
                <Progress value={weeklyProgress} className="h-2 mb-2" />
                <p className="text-sm text-sand">{weeklyProgress}% of weekly goal completed</p>
              </div>

              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Target className="h-5 w-5 text-forest mr-2" />
                  <h3 className="text-lg font-semibold text-cream">Next Milestone</h3>
                </div>
                <p className="text-cream">Complete 3 more lessons</p>
                <p className="text-sm text-sand mt-1">You're getting closer!</p>
              </div>
            </div>

            {/* AI Mentor Chat */}
            <div className="glass-card p-6 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-forest mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-cream">Your AI Mentor</h3>
                  <p className="text-sm text-sand">Always here to help and support you</p>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto mb-4 space-y-4 pr-2">
                {messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.sender === 'user' 
                          ? 'bg-forest text-cream' 
                          : 'bg-forest/10 text-cream'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        {msg.sender === 'ai' ? (
                          <Brain className="h-4 w-4" />
                        ) : (
                          <User className="h-4 w-4" />
                        )}
                        <span className="text-xs font-medium">
                          {msg.sender === 'ai' ? 'AI Mentor' : 'You'}
                        </span>
                      </div>
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-70 text-right mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="flex">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask your AI mentor anything..." 
                  className="flex-1 rounded-l-md bg-offblack-light border border-forest/20 px-4 py-2 text-cream focus:outline-none focus:ring-1 focus:ring-forest"
                />
                <button 
                  onClick={handleSendMessage}
                  className="bg-forest hover:bg-forest-light text-cream px-4 rounded-r-md flex items-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Learning Recommendations */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-forest mr-2" />
                  <h3 className="text-lg font-semibold text-cream">Recommended Resources</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center text-cream">
                    <span className="w-2 h-2 bg-forest rounded-full mr-2"></span>
                    Advanced JavaScript Concepts
                  </li>
                  <li className="flex items-center text-cream">
                    <span className="w-2 h-2 bg-forest rounded-full mr-2"></span>
                    React Hooks Deep Dive
                  </li>
                  <li className="flex items-center text-cream">
                    <span className="w-2 h-2 bg-forest rounded-full mr-2"></span>
                    System Design Patterns
                  </li>
                </ul>
              </div>

              <div className="glass-card p-4 rounded-lg">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-forest mr-2" />
                  <h3 className="text-lg font-semibold text-cream">Learning Schedule</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-cream">
                    <span>Today's Goal</span>
                    <span className="text-forest">2 hours</span>
                  </div>
                  <div className="flex justify-between items-center text-cream">
                    <span>Weekly Target</span>
                    <span className="text-forest">10 hours</span>
                  </div>
                  <div className="flex justify-between items-center text-cream">
                    <span>Next Review</span>
                    <span className="text-forest">In 3 days</span>
                  </div>
                </div>
              </div>
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

export default AIMentor;

import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Show toast notification
    toast({
      title: newTheme === 'light' ? "Light mode activated" : "Dark mode activated",
      description: newTheme === 'light' 
        ? "The application is now in light mode" 
        : "The application is now in dark mode",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 transition-all duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;

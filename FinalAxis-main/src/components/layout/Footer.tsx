import { Link } from 'react-router-dom';
import { BookOpen, Twitter, Facebook, Instagram, Linkedin, Github, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { label: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { label: 'GitHub', icon: Github, href: 'https://github.com' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 py-6 px-4 sm:px-6 backdrop-blur-sm border-t border-gray-100 dark:border-gray-800/50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          {/* Logo and social links */}
          <div className="flex items-center justify-between w-full max-w-2xl mb-4">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-gradient font-display">CurioCity</span>
            </Link>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+919876543210" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                +91 98765 43210
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:contact@curiocity.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                contact@curiocity.com
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-xs text-gray-500 dark:text-gray-400">
            © {currentYear} CurioCity. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

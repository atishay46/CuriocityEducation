import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(isLoggedIn);
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout
  };
} 
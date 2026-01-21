import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContextBase';

export const ThemeProvider = ({ children }) => {
  // 1. Initialize State: Check LocalStorage -> Then System Preference -> Default to Light
  const [theme, setTheme] = useState(() => {
    // Check if running in browser
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // If user has saved a preference, use it
      if (savedTheme) {
        return savedTheme;
      }
      // Otherwise, check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light'; // Fallback
  });

  // 2. Effect: Update the HTML tag and LocalStorage whenever theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove old class first to avoid conflicts
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to local storage so it persists on refresh
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

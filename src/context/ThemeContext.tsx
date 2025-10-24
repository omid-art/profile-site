"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isMounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  isMounted: false,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored) setDarkMode(JSON.parse(stored));
    setIsMounted(true);
  }, []);

  const toggleDarkMode = () => setDarkMode(prev => {
    localStorage.setItem("darkMode", JSON.stringify(!prev));
    return !prev;
  });

  useEffect(() => {
    if (!isMounted) return;
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode, isMounted]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, isMounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme as useSystemColorScheme } from "react-native";

type ThemeContextProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setSystemTheme: () => void;
  isUsingSystemTheme: boolean;
};

// Create context with proper type
const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: () => {},
  setSystemTheme: () => {},
  isUsingSystemTheme: true,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setColorScheme } = useNativeWindColorScheme();
  const systemColorScheme = useSystemColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === "dark");
  const [isUsingSystemTheme, setIsUsingSystemTheme] = useState(true);

  useEffect(() => {
    if (isUsingSystemTheme) {
      setIsDarkMode(systemColorScheme === "dark");
      // Handle null/undefined case by defaulting to 'light'
      setColorScheme(systemColorScheme === "dark" ? "dark" : "light");
    } else {
      setColorScheme(isDarkMode ? "dark" : "light");
    }
  }, [systemColorScheme, isUsingSystemTheme, isDarkMode]);

  const setSystemTheme = () => {
    setIsUsingSystemTheme(true);
  };

  const toggleTheme = () => {
    setIsUsingSystemTheme(false);
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, toggleTheme, setSystemTheme, isUsingSystemTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;

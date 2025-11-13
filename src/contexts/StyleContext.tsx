'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Theme interface
export interface Theme {
  name: string;
  body: string;
  text: string;
  expTxtColor: string;
  highlight: string;
  dark: string;
  secondaryText: string;
  imageHighlight: string;
  compImgHighlight: string;
  jacketColor: string;
  headerColor: string;
  splashBg: string;
}

// Style context interface
interface StyleContextType {
  isDark: boolean;
  changeTheme: () => void;
  theme: Theme;
}

// Default themes
export const lightTheme: Theme = {
  name: 'light',
  body: '#FFFFFF',
  text: '#343434',
  expTxtColor: '#000a12',
  highlight: '#A239CA',
  dark: '#000000',
  secondaryText: '#7F8DAA',
  imageHighlight: '#0E6BA8',
  compImgHighlight: '#E6E6FA',
  jacketColor: '#0A2472',
  headerColor: '#0E6BA877',
  splashBg: '#001C55',
};

export const darkTheme: Theme = {
  name: 'dark',
  body: '#1D1D1D',
  text: '#FFFFFF',
  expTxtColor: '#FFFFFF',
  highlight: '#A239CA',
  dark: '#000000',
  secondaryText: '#8B949E',
  imageHighlight: '#0E6BA8',
  compImgHighlight: '#E6E6FA',
  jacketColor: '#8B949E',
  headerColor: '#0E6BA877',
  splashBg: '#0E6BA8',
};

// Create context
const StyleContext = createContext<StyleContextType | undefined>(undefined);

// Custom hook to use style context
export const useStyleContext = (): StyleContextType => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyleContext must be used within a StyleProvider');
  }
  return context;
};

// Provider component
interface StyleProviderProps {
  children: ReactNode;
}

export const StyleProvider: React.FC<StyleProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDark');
      if (savedTheme !== null) {
        setIsDark(JSON.parse(savedTheme));
      }
    }
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('isDark', JSON.stringify(isDark));
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? darkTheme : lightTheme;

  const value: StyleContextType = {
    isDark,
    changeTheme,
    theme,
  };

  return (
    <StyleContext.Provider value={value}>
      {children}
    </StyleContext.Provider>
  );
};

export default StyleContext;
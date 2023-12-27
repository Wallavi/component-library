import React, { createContext, useContext, ReactNode } from "react";
import { Theme } from "@mui/material/styles";

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ theme: Theme; children: ReactNode }> = ({
  theme,
  children,
}) => (
  <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
);

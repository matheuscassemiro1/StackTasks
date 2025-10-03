import React, { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeContext = createContext<ReturnType<typeof useTheme> | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const tema = useTheme();
    return <>
        <ThemeContext.Provider value={tema}>
            {children}
        </ThemeContext.Provider>
    </>
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useThemeContext must be used within a ThemeProvider");
    return context;
}
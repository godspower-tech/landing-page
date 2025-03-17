import React, { createContext, useContext, useEffect, useState } from "react";

// Implement a global context for accessing core functionalities from any component
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
        // step 1: set state to store theme (light / dark).
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        return localStorage.getItem("theme") === "dark";
    });
    
    const toggleTheme = () =>{
        // step 2: Set function to change theme
        setIsDarkMode((prevMode)=>{
            const newTheme = !prevMode;
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            return newTheme;
        });
    }
    
    // step 3 apply the theme to html tag
    useEffect(()=>{
        document.documentElement.className = isDarkMode ? "dark" : "light";
    }, [isDarkMode]);
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

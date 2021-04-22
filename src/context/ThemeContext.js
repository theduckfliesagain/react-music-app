import React, { useState, useContext } from 'react';

export const themes = {
    light: {
        foreground: "#111111",
        background: "#eeeeee",
        bgSecondary: "#d6d6d6"
    },
    dark: {
        foreground: "#ffffff",
        background: "#111111",
        bgSecondary: "#1a1a1a"
    }
};

const ThemeContext = React.createContext(themes.dark);

export function useTheme() {
    return useContext(ThemeContext);
}


export function ThemeProvider({ children }) {
    const [current, setCurrent] = useState('dark');

    const toggle = () => {
        setCurrent(current => current === 'dark' ? 'light' : 'dark')
    };

    return (
        <ThemeContext.Provider value={{ toggle, current: themes[current] }} >
            { children }
        </ThemeContext.Provider>
    )
}


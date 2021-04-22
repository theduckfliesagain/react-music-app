import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

const ThemeButton = () => {
    const theme = useTheme();

    return (
        <button
            aria-label="theme"
            className="fas fa-adjust theme-btn"
            onClick={theme.toggle}>
        </button>
    )
}

export default ThemeButton;
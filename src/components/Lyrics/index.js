import React, { useState } from 'react';

// import "./styles.css"

const Lyrics = () => {
    const [display, setDisplay] = useState(false);

    const toggleLyrics = e => {
        e.stopPropagation();
        setDisplay(true);
        
    }

    return (
        <span className="lyrics-btn btn" role="switch" onClick={toggleLyrics}>
            <i className="fas fa-align-left"></i>
        </span>
    )
}

export default Lyrics;

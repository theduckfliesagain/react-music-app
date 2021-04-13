import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./styles.css"

export const Lyrics = ({ songName, close }) => {
    const [lyrics, setLyrics] = useState(false);

    useEffect(() => {
        async function getLyrics() {
            try {
                console.log(songName);
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/Young Fathers/${songName}`)
                setLyrics(data.lyrics);
            } catch (err) {
                setLyrics("No lyrics are available :(")
            }
        }
        getLyrics()
    }, [])

    return (
        <div className="lyrics-container">
            <div className="lyrics-info">
                <h3>{songName}
                <span className="close-btn btn" onClick={close}>x</span>
                </h3>
            </div>
            <div className="lyrics">
                <pre>{lyrics}</pre>
            </div>
        </div>
    )
}


export const LyricsButton = ({ songName }) => {
    const [display, setDisplay] = useState(false);

    const toggleLyrics = e => {
        e.stopPropagation();
        setDisplay(prev => !prev);
    }


    return (
        <>
        <span className="lyrics-btn btn" role="switch" onClick={toggleLyrics}>
            <i className="fas fa-align-left"></i>
        </span>

        {display && <Lyrics songName={songName} close={toggleLyrics}/>}
        </>
        
    )
}

// export default Lyrics;

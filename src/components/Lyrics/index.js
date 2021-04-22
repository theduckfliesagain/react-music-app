import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import "./styles.css"

export const Lyrics = ({ songName, close }) => {
    const [lyrics, setLyrics] = useState();
    const bottom = useRef();

    useEffect(() => {
        async function getLyrics() {
            try {
                let { data } = await axios.get(`https://api.lyrics.ovh/v1/Young Fathers/${songName}`)
                setLyrics(data.lyrics);
            } catch (err) {
                setLyrics(null)
            }
        }
        getLyrics()

    }, [songName])


    const toBottom = () => { bottom.current.scrollIntoView({ behavior: "smooth" }) }


    return (
        <div className="lyrics-box">
            <div className="lyrics-info">
                <h3>{songName}
                    <span className="close-btn icon" onClick={close}>
                        <i className="far fa-times-circle"></i>
                    </span>
                    <span className="bottom-btn icon" onClick={toBottom}>
                        <i className="fas fa-chevron-down"></i>
                    </span>

                </h3>
            </div>
            <div className="lyrics">
                {lyrics !== null ? <pre>{lyrics}</pre> : "Lyrics could not be loaded."}
                <span ref={bottom}></span>
            </div>
        </div>
    )
}


export const LyricsButton = ({ handleClick }) => {
    return (
        <>
            <span className="lyrics-btn icon" role="switch" onClick={handleClick}>
                <i className="fas fa-align-left"></i>
            </span>
        </>

    )
}

// export default Lyrics;

import React from 'react';
import { useTheme } from "../../context/ThemeContext";
import { LyricsButton, FavButton } from "..";
import './styles.css'

const FeaturedSongs = () => {
    const theme = useTheme();

    const topSongs = [
        { name: "Shame", plays: "9m" },
        { name: "Only God Knows", plays: "4m" },
        { name: "In My View", plays: "8m" }
    ]

    return (
        <section className="top-songs">
            <h2>Featured songs</h2>
            <div className="songs">
                <ol>
                    {topSongs.map((song, index) =>
                        <li key={index} style={{background: theme.current.bgSecondary, color: theme.current.foreground}}>
                            <span className="song-title">{song.name}</span>
                            <span className="song-plays">{song.plays}</span>
                            <LyricsButton songName={song.name} />
                            <FavButton handleClick={()=>{}} />
                        </li>)}
                </ol>
            </div>
        </section>
    )
}

export default FeaturedSongs;
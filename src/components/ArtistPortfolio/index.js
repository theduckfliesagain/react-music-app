import React from 'react';
// import FavButton from '../FavButton';
import {LyricsButton, FavButton} from '..';

import './styles.css'


const ArtistPortfolio = () => {
    const topSongs = [
        { name: "Shame", plays: "9m" },
        { name: "Only God Knows", plays: "4m" },
        { name: "In My View", plays: "8m" }
    ]

    const albums = [
        { title: "Cocoa Sugar", year: 2018, image: "https://f4.bcbits.com/img/a1022040919_10.jpg" },
        { title: "White Men Are Black Men Too", year: 2015, image: "https://f4.bcbits.com/img/a3109957338_10.jpg" },
        { title: "DEAD", year: 2014, image: "https://f4.bcbits.com/img/a0309814645_10.jpg" }
    ]


    return (
        <section className="artist-portfolio">
            <section className="top-songs">
                <h2>Top songs</h2>
                <div className="songs">
                    <ol>
                        {topSongs.map((song, index) =>
                            <li key={index}>
                                <span className="song-title">{song.name}</span>
                                <span className="song-plays">{song.plays}</span>
                                <LyricsButton songName={song.name} />
                                <FavButton />
                            </li>)}
                    </ol>
                </div>
            </section>

            <section className="albums">
                <h2>Albums</h2>
                <div className="album-container">
                    {
                        albums.map((album, index) => (
                            <div key={album.title} className="album">
                                <img src={album.image} alt={album.title}></img>
                                <div className="info">
                                    <h4>{album.year}</h4>
                                    <h3>{album.title}</h3>
                                </div>

                            </div>)
                        )
                    }
                </div>
            </section>
        </section>
    )
}

export default ArtistPortfolio;
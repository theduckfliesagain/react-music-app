import React from 'react';

const ArtistPortfolio = () => {
    const topSongs = [
        { name: "Shame", plays: "9m" },
        { name: "Only God Knows", plays: "4m" },
        { name: "In My View", plays: "8m" }
    ]

    const albums = [
        { title: "Cocoa Sugar", year: 2018, image: "https://media.pitchfork.com/photos/5a5fcb793bca4e30ca1e0810/1:1/w_320/young%20fathers%20_%20cocoa%20sugar_%20album%20cover.jpg" },
        { title: "White Men Are Black Men Too", year: 2015, image: "https://media.pitchfork.com/photos/5929ad4d9d034d5c69bf4348/1:1/w_320/c44f4eaf.jpg" }
    ]


    return (
        <section >
            <div>
                <h2>Top songs</h2>
                <ol>
                    {topSongs.map((song, index) => <li key={index}>{song.name} | {song.plays}</li>)}
                </ol>
            </div>

            <div>
                <h2>Albums</h2>

                {albums.map((album, index) => (
                    <div key={album.title}>
                        <img src={album.image} alt={album.title}></img> 
                        <h3>{album.name}</h3>
                        <h4>{album.year}</h4>
                    </div>)
                )}

            </div>
        </section>

    )
}

export default ArtistPortfolio;
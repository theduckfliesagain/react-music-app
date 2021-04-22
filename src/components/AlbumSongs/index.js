import React from 'react';
import './styles.css';


const AlbumSongs = ({ album }) => {

    const songs = album.songs
        ? album.songs.map(song => {
            return <li key={song.id}>
                <span className="song-num">{song.number}</span>
                <span className="song-title">{song.title}</span>
                <span className="song-length">{song.length}</span>
            </li>
        })
        : <p>Songs are not avaailable :(</p>

   

    return (
        <section className="songs-container">
            <h2>Songs</h2>
            <ol>
                {songs}
            </ol>
        </section>
    )
}

export default AlbumSongs;
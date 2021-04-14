import React from 'react';
import './styles.css'

const Album = ({album}) => {
    return (
        <div key={album.title} className="album">
            <img src={album.image} alt={album.title}></img>
            <div className="info">
                <h4>{album.year}</h4>
                <h3>{album.title}</h3>
            </div>
        </div>
    )
}

export default Album;
import React from 'react';
import './styles.css'

const ArtistPortfolio = () => {
    const albums = [
        { title: "Cocoa Sugar", year: 2018, image: "https://f4.bcbits.com/img/a1022040919_10.jpg" },
        { title: "White Men Are Black Men Too", year: 2015, image: "https://f4.bcbits.com/img/a3109957338_10.jpg" },
        { title: "DEAD", year: 2014, image: "https://f4.bcbits.com/img/a0309814645_10.jpg" }
    ]


    return (
        <section className="albums">
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
    )
}

export default ArtistPortfolio;
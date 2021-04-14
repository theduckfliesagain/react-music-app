import React from 'react';
import { Album } from '../../components';

import "./styles.css";

const Albums = () => {
    const albums = [
        { title: "Cocoa Sugar", year: 2018, image: "https://f4.bcbits.com/img/a1022040919_10.jpg" },
        { title: "White Men Are Black Men Too", year: 2015, image: "https://f4.bcbits.com/img/a3109957338_10.jpg" },
        { title: "DEAD", year: 2014, image: "https://f4.bcbits.com/img/a0309814645_10.jpg" }
    ]


    return (
        <section className="album-container">
                {
                    albums.map((album, idx) => (
                        <Album key={idx} album={album} />
                    ))
                }
        </section>
    )
}

export default Albums;
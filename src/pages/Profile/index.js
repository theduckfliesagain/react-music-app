import React, { useEffect, useState } from 'react';
import { FeaturedSongs } from "../../components";

import './styles.css'

const Profile = () => {

    const genres = ["Low-fi", "Indie", "Art-Pop", "Rap"]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const cycleGenre = () => {
            index < genres.length - 1 ? setIndex(index + 1) : setIndex(0);
        }

        const cycle = setInterval(cycleGenre, 2000);

        return () => clearInterval(cycle);
    }, [index]);

    return (
        <section className="artist-profile">
            <h1>Young Fathers</h1>
            <h4 className="genres">
                <span >{genres[index]} </span>
            </h4>
            <p>
                Young Fathers is a Scottish band based in Edinburgh, Scotland.
                In 2014, they won the Mercury Prize for their album Dead.
            </p>

            <FeaturedSongs />
        </section>
    )
}

export default Profile;
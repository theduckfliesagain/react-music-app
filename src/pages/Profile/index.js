import React from 'react';
import { FeaturedSongs } from "../../components";

import './styles.css'

const Profile = () => {

    const genres = ["Low-fi", "Indie", "Art-Pop", "Rap"]

    return (
        <section className="artist-profile">
            <h1>Young Fathers</h1>
            <h4 className="genres"> 
                {genres.map(genre => (<span key={genre}>{genre} </span> ))}
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
import React from 'react';

const ArtistProfile = () => {

    const genres = ["Low-fi", "Indie", "Art-Pop", "Rap"]


    return (
        <div >
            <h1>Young Fathers</h1>
            <h3> 
                {genres.map(genre => (<span key={genre}>{genre} | </span> ))}
            </h3>

            <p>
                Young Fathers is a Scottish band based in Edinburgh, Scotland. 
                In 2014, they won the Mercury Prize for their album Dead.
            </p>
        </div>
       
    )
}

export default ArtistProfile;
import React, { useState } from 'react';

import "./styles.css"

const FavButton = () => {
    const [faved, setFaved] = useState(false);

    const handleFav = e => {
        e.stopPropagation();
        setFaved(!faved);
    }

    return (
        <span className="fav-btn btn" role="switch" onClick={handleFav}>
            <i className={`${faved ? 'fas': 'far'} fa-heart`}></i>
        </span>
    )
}

export default FavButton;

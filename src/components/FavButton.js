import React, { useState } from 'react';

const FavButton = () => {
    const [faved, setFaved] = useState(false);

    const handleFav = e => {
        e.stopPropagation();
        setFaved(!faved);
    }

    return (
        <span className="fav-btn" role="switch" onClick={handleFav}>
            <i className={`${faved ? 'fas': 'far'} fa-heart`}></i>
        </span>
    )
}

export default FavButton;

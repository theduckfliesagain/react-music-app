import React, { useState } from 'react';

const FavButton = ({handleClick}) => {
    const [faved, setFaved] = useState(false);

    const handleFav = e => {
        e.stopPropagation();
        setFaved(!faved);
    }

    return (
        <span className="fav-btn icon" role="switch" onClick={(e)=> {handleFav(e); handleClick();}}>
            <i className={`${faved ? 'fas': 'far'} fa-heart`}></i>
        </span>
    )
}

export default FavButton;

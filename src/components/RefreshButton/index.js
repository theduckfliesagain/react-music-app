import React, { useState, useEffect } from 'react';

const RefreshButton = ({ handleClick }) => {

    const [rotate, setRotate] = useState("");
    
    const handleRefresh = e => {
        // e.stopPropagation();
        setRotate("rotate")
        setTimeout(() => {setRotate("")},500);
    }


    return (
        <span
            role="button" aria-label="refresh"
            className="refresh-btn icon" onClick={(e)=> {handleRefresh(e); handleClick()}}
        >
            <i className={`fas fa-sync-alt ${rotate}`}></i>
        </span>

    )
}

export default RefreshButton;
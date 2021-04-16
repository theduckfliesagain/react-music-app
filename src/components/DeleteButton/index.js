import React from 'react';

const DeleteButton = ({ handleClick }) => {
    return (
        <span
            role="button" aria-label="delete"
            className="delete-btn icon" onClick={handleClick}
        >
            <i className={`fas fa-trash`}></i>
        </span>

    )
}

export default DeleteButton;
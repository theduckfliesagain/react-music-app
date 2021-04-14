import React from 'react';
import { useHistory } from "react-router-dom";

const BackButton = () => {
    const history = useHistory();

    return (
        <button
            aria-label="back"
            className="fas fa-chevron-left back-btn"
            onClick={history.goBack}>

        </button>
    )
}

export default BackButton;
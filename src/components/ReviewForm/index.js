import React, { useEffect, useState } from 'react';
import { Reviews } from "../../pages";

import './styles.css'
const ReviewForm = ({ handleAddReview }) => {

    // const [textInput, setTextInput] = useState("");
    const [input, setInput] = useState(
        {
            name: "",
            text: ""
        }
    );
    // controlled text input for both inputs
    const handleChange = e => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newReview = { 
            time: Date.now(),
            name: input.name,
            text: input.text,
         }
        setInput(
            {
                name: "",
                text: ""
            }
        );
        handleAddReview(newReview)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="review-name-input">Your name/alias</label>
            <input
                type="text" id="review-name-input" name="name"
                value={input.name} onChange={handleChange}
                autoComplete="off" required
            />

            <label htmlFor="review-text-input">Your review</label>
            <textarea
                id="review-text-input" name="text"
                value={input.text} onChange={handleChange}
                autoComplete="off" required
            >
            </textarea>

            <input id="review-submit-btn" type="submit" value="Post review" />
        </form>
    )
}

export default ReviewForm;
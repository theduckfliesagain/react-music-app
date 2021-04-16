import React, { useState } from 'react';

import './styles.css'
const ReviewForm = ({ handleAddReview }) => {

    const [input, setInput] = useState(
        {
            name: "",
            text: ""
        }
    );

    const handleChange = e => {
        setInput(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleAddReview(input);
        setInput({name:"", text:""});
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
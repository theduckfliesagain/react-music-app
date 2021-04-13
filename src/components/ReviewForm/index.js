import React, { useEffect, useState } from 'react';
import { Reviews } from "../../pages";


const ReviewForm = ({ handleAddReview }) => {
    // controlled text input 
    const [textInput, setTextInput] = useState("");
    const [review, setReview] = useState();

    useEffect(() => {
        // console.log(review);
    });

    const handleChange = e => { setTextInput(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault();
        setReview({ text: textInput });
        setTextInput("");
        // Add the review
        handleAddReview(review);
    }

 
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="review-input"></label>
            <textarea
                id="review-input" name="review-input"
                value={textInput} onChange={handleChange}
            >
            </textarea>
            <input type="submit" value="Post review" />
        </form>
    )
}

export default ReviewForm;
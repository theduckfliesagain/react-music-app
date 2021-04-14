import React, { useState, useEffect } from 'react';
import { ReviewForm, UserReview } from "../../components";

const Reviews = () => {
    const [reviews, setReviews] = useState([
        {time: Date.now(), name:"YoloBaggins", text: "Nice songs."},
    ]);

    const handleAddReview = (review) => {
        // update the reviews with new review
        setReviews(prev => [...prev, review]);
    }

    return (
        <section className="reviews">
            <h2>Under construction</h2>
            {/* <ReviewForm handleAddReview={handleAddReview} /> */}

            <h2>Reviews</h2>
            {reviews.map((review, id) => <UserReview key={id} review={review}/>)}
        </section>
    )
}

export default Reviews;
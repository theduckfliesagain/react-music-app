import React, { useState, useEffect } from 'react';
import { ReviewForm, UserReview } from "../../components";

const Reviews = () => {
    const [reviews, setReviews] = useState([
        {id: 0, text: "Nice songs."},
        {id: 1, text: "Another comment"}
    ]);

    useEffect(() => {
        console.log(reviews);
    }, []);

    const handleAddReview = async (review) => {
        // const newReview = {
        //     id: reviews.length + 1,
        //     text: review.text
        // }
        
        // const newReviews = await reviews.concat({newReview});
        
        await setReviews(prev => prev.push({id:2, text: "test"}));
    }

    return (
        <section className="reviews">
            <h2>Add a Review</h2>
            <ReviewForm handleAddReview={handleAddReview} />

            <h2>Reviews</h2>
            {/* {reviews.map((review, id) => <UserReview key={id} review={review}/>)} */}
        </section>
    )
}

export default Reviews;
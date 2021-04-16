import React from 'react';
import { ReviewForm, UserReview } from "../../components";

import { useSelector, useDispatch } from 'react-redux';
import { addReview, deleteReview } from './reviewActions';

const Reviews = () => {
    const dispatch = useDispatch();

    const handleAddReview = (input) => dispatch(addReview(input));
    const handleDeleteReview = (id) => dispatch(deleteReview(id));

    const reviews = useSelector(state => state.reviews);
    const reviewList = reviews.slice(0).reverse()
        .map((review) => <UserReview key={review.id} review={review} handleDeleteReview={handleDeleteReview} />)

    
    

    return (
        <section className="reviews">
            <h2>Add a review</h2>
            <ReviewForm handleAddReview={handleAddReview} />
            <h2>Reviews</h2>
            {reviewList}
        </section>
    )
}

export default Reviews;
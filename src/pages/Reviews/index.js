import React from 'react';
import { ReviewForm, UserReview } from "../../components";

import { useSelector, useDispatch } from 'react-redux';
import { addReview } from './reviewActions';

const Reviews = () => {
    const dispatch = useDispatch();

    const reviews = useSelector(state => state.reviews);
    const reviewList = reviews.slice(0).reverse()
        .map((review, id) => <UserReview key={id} review={review} />)

    const handleAddReview = (input) => dispatch(addReview(input));

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
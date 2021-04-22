import React from 'react';
import { ReviewForm, UserReview, RefreshButton } from "../../components";

import { useSelector, useDispatch } from 'react-redux';
import { addReview, deleteReview, likeReview, refreshReviews } from './reviewActions';

const Reviews = () => {
    const dispatch = useDispatch();

    const handleAddReview = (input) => dispatch(addReview(input));
    const handleLikeReview = (id) => dispatch(likeReview(id));
    const handleDeleteReview = (id) => dispatch(deleteReview(id));
    const handleRefreshReviews = () => dispatch(refreshReviews());

    const handlers = [handleLikeReview, handleDeleteReview];

    const reviews = useSelector(state => state.reviews.reviews);
    const reviewList = reviews && reviews.slice(0).reverse()
        .map((review) => <UserReview key={review.id} review={review} handlers={handlers} />)




    return (
        <section className="reviews">
            <h2>Add a review</h2>
            <ReviewForm handleAddReview={handleAddReview} />
            <h2>Reviews
                <span style={{float:"right", fontSize:"0.5em"}}>
                    <RefreshButton handleClick={handleRefreshReviews} />
                </span>
            </h2>

            {reviewList}
        </section>
    )
}

export default Reviews;
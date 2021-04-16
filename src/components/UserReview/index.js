import React from 'react';
import {FavButton, DeleteButton } from '..';
import './styles.css'

const UserReview = ({ review, handlers }) => {
    const d = new Date(review.time);

    const [handleLikeReview, handleDeleteReview] = handlers;

    return (
        <div className="user-review">
            <h4 className="user-info">
                {review.name}
                <span>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</span>
                <span className="user-review-btns">
                    <FavButton handleClick={()=> handleLikeReview(review.id)} />
                    <DeleteButton handleClick={() => handleDeleteReview(review.id)}/>
                </span>
            </h4>
            <p className="review-text" role="comment">
                {review.text}
            </p>
        </div>
    )
}

export default UserReview;
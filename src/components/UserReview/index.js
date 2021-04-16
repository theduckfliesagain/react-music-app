import React from 'react';
import { DeleteButton } from '..';
import './styles.css'

const UserReview = ({ review, handleDeleteReview }) => {
    const d = new Date(review.time);

    return (
        <div className="user-review">
            <h4 className="user-info">
                {review.name}
                <span>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</span>
                <span className="user-review-btns">
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
import React from 'react';

import './styles.css'

const UserReview = ({review}) => {
    
    const d = new Date(review.time);

    return (
        <div className="user-review">
            <h4 className="user-info">
                {review.name}
                <span>{d.getDate()}/{d.getMonth()}/{d.getFullYear()}</span>
            </h4>
            <p className="review-text" role="comment">
                {review.text}
            </p>
        </div>
    )
}

export default UserReview;
import React from 'react';

const UserReview = ({review}) => {
    
    return (
        <div>
            <p role="comment">
                {review.text}
            </p>
        </div>
    )
}

export default UserReview;
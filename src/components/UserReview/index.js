import React, { useContext } from 'react';
import {FavButton, DeleteButton } from '..';
import { useTheme } from "../../context/ThemeContext";
import './styles.css'

const UserReview = ({ review, handlers }) => {
    const d = new Date(review.time);

    const [handleLikeReview, handleDeleteReview] = handlers;
    const theme = useTheme();

    return (
        <div className="user-review" style={{background:theme.current.bgSecondary, foreground: theme.current.foreground}}>
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
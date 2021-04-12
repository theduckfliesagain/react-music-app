import React, { useState } from 'react';

const ReviewForm = () => {

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea>             
            </textarea>
            <input type="submit" value="Post review"/>
        </form>
    )
}

export default ReviewForm;
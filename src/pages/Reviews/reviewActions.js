export const addReview = (input) => ({
    type: "ADD_REVIEW",
    payload: {
        time: Date.now(),
        name: input.name,
        text: input.text
    }
})

export const deleteReview = (reviewId) => ({ 
    type: "DELETE_REVIEW",
    payload: reviewId
})

export const likeReview = (reviewId) => ({ 
    type: "LIKE_REVIEW",
    payload: reviewId
})

export const refreshReviews = () => ({ 
    type: "LOAD_REVIEWS"
})



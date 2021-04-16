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


const initState = {
    reviews: [{ id: 1, time: Date.now(), name: "YoloBaggins", text: "Nice songs.", liked: false }]
}

const reviewReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_REVIEWS':
            return ({
                reviews: state.reviews
            })
        case 'ADD_REVIEW':
            const reviewID = state.reviews.length + 1;
            return ({
                ...state,
                reviews: [...state.reviews, { id: reviewID, ...action.payload }]
            })
        case 'LIKE_REVIEW':
            const updatedReviews =  state.reviews.map((r, i) => {
                // only update item with matching id 
                return r.id !== action.payload ? r : { ...r, liked: !r.liked }
            }) 
            return { ...state, reviews: updatedReviews }

        case 'DELETE_REVIEW':
            const remainingReviews = state.reviews.filter(r => r.id !== action.payload)
            return { ...state, reviews: remainingReviews }
        default:
            return state;
    }
}

export default reviewReducer
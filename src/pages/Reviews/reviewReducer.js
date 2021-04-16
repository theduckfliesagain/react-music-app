const initState = {
    reviews: [{ id:1, time: Date.now(), name: "YoloBaggins", text: "Nice songs." }]
}

const reviewReducer = (state=initState, action) => {
    switch (action.type) {
        case 'LOAD_REVIEWS':
            return ({
                reviews: state.reviews
            })
        case 'ADD_REVIEW':
            const reviewID = state.reviews.length + 1;
            return ({
                ...state,
                reviews: [...state.reviews, {id: reviewID, ...action.payload}]
            })
        case 'TOGGLE_LIKE_REVIEW':
            return
        case 'DELETE_REVIEW':
            const updatedReviews = state.reviews.filter(r => r.id !== action.payload)
            return {...state, reviews: updatedReviews}
    
        default:
            return state;
    }
}

export default reviewReducer
const initState = {
    reviews: [{ time: Date.now(), name: "YoloBaggins", text: "Nice songs." }]
}

const reviewReducer = (state=initState, action) => {
    switch (action.type) {
        case 'LOAD_REVIEWS':
            return ({
                reviews: state.reviews
            })
        case 'ADD_REVIEW':
            return ({
                ...state,
                reviews: [...state.reviews, action.payload]
            })
        case 'TOGGLE_LIKE_REVIEW':
            return
        case 'DELETE_REVIEW':
            return
    
        default:
            return state;
    }
}

export default reviewReducer
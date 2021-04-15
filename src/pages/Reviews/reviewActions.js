export const addReview = (input) => ({
    type: "ADD_REVIEW",
    payload: {
        time: Date.now(),
        name: input.name,
        text: input.text
    }
})

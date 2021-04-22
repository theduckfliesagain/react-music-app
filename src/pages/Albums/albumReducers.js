const initState = {releases: [], loading: false}

const albumsReducer = (state = initState, action) => {
    switch (action.type) {
        case "GETTING_RELEASES":
            return {...state, loading:true};

        case "LOAD_RELEASES":
            return {...state, releases: action.payload, loading: false, error:false};

        case "LOAD_SONGS":
            const updatedReleases = state.releases.map((r) => {
                return r.id !== action.payload.id ? r : { ...r, songs: action.payload.songs }
            }) 
            return {...state, 
                releases: updatedReleases, 
                loading: false, 
                error:false
            };

        case "SET_ERROR":
            return {...state, error: action.payload}
        
        default:
            return state;
    }
}

export default albumsReducer;

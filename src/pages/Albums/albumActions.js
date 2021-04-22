
import axios from "axios";

// const API_URL = "https://api.discogs.com/artists/1526704/releases"

// const API_URL = "https://musicbrainz.org/ws/2/release?artist=24aa5c20-a275-468a-93a9-b3d96b344b6c&inc=release-groups&status=official&type=album&limit=100&fmt=json"
const API_URL = "https://musicbrainz.org/ws/2"
const IMG_URL = "https://coverartarchive.org/release-group"
// const userAgent = 'ReactMusicApp/0.1 +https://young-fathers.netlify.app/'

const ax = axios.create({
    baseURL: API_URL,
    params: {
        fmt: "json"
      },
    
}

)

export const fetchAlbums = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: "GETTING_RELEASES" })

            const { data } = await ax.get("/artist/24aa5c20-a275-468a-93a9-b3d96b344b6c?inc=release-groups")

            const releases = await Promise.all(data["release-groups"]
                // .splice(0, 2) // reduce num of requests for now
                .filter(r => (r["secondary-type-ids"].length === 0))
                .map(r => fetchCoverArt(r))
            )
            dispatch({
                type: "LOAD_RELEASES",
                payload: releases
            });

        } catch (error) {
            console.warn(error);
            dispatch({
                type: 'SET_ERROR',
                payload: error
            });
        }
    }
}

const fetchCoverArt = async (r) => {
    let image;

    try {
        const imgURL = `${IMG_URL}/${r["id"]}`;
        const { data } = await axios.get(imgURL);
        image = data.images[0].thumbnails["small"]
    } catch (error) {
        image = "https://f4.bcbits.com/img/0012348946_10.jpg";
    }

    return {
        id: r.id,
        title: r.title,
        year: new Date(r["first-release-date"]).getFullYear(),
        image: image
    }
}

export const fetchAlbumSongs = (id) => {
    return async (dispatch) => {
        try {
            // dispatch({ type: "GETTING_SONGS" })
            const releaseGroup = await (await ax.get(`${API_URL}/release-group/${id}?inc=releases`)).data;
  
            const release = await (await ax.get(`${API_URL}/release/${releaseGroup.releases[0].id}?inc=recordings`)).data;
            
            const songs = await release.media[0].tracks.map((t) => {
                const mins = Math.floor(t.length/(1000 *60));
                const secs = ((t.length%(1000*60))/1000).toFixed(0);

                return {...t, length: `${mins}:${(secs < 10 ? "0" : "")}${secs}`}
            });

            dispatch({
                type: "LOAD_SONGS",
                payload: {id, songs}
            });

        } catch (error) {
            console.warn(error);
            dispatch({
                type: 'SET_ERROR',
                payload: error
            });
        }
    }
}
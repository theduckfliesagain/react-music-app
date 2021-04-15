import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom';
import { AlbumCover, AlbumSongs } from '../../components';

import albumsData from '../../data';

import "./styles.css";

const Albums = () => {

    const [albums, setAlbums] = useState(albumsData);

    // setAlbums(albumsData);
    const history = useHistory();
    const params = useParams();

    // useEffect(() => {
    //     const getAlbum = async () => {
    //         try {
    //             console.log(albums.find(a => a.id === 0) );
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     getAlbum();
    // }, [params]);


    const handleSelect = (id) => {
        history.push(`albums/${id}`)
    }

    const albumsList = albums.map((album) => (
        // <Link to={`${match}/`}>
        <AlbumCover key={album.id} album={album} handleSelect={handleSelect} />
        // </Link>  
    ))

    return (
        <section className="album-container">
            {
                <Switch>
                    <Route exact path={"/albums"}>{albumsList}</Route>
                    <Route path={"/albums/:id"} render={({ match }) => (
                        <>
                            <AlbumCover album={albums[match.params.id]} />
                            <AlbumSongs album={albums[match.params.id]} />
                        </>
                    )} />
                </Switch>

            }
        </section>
    )
}

export default Albums;
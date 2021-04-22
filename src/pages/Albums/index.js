import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom';
import { AlbumCover, AlbumSongs } from '../../components';

import { fetchAlbums, fetchAlbumSongs } from "./albumActions";

// import albumsData from '../../data';

import "./styles.css";
import { useDispatch, useSelector } from 'react-redux';
// import albums from '../../data/index';

const Albums = () => {

    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums.releases)
    const error = useSelector(state => state.error)

    const history = useHistory();



    useEffect(() => {
        dispatch(fetchAlbums())
    }, []);


    const handleSelect = (id) => {
        dispatch(fetchAlbumSongs(id))
        history.push(`albums/${id}`)
    }

    const albumsList = Array.isArray(albums) && albums.sort((a, b) => b.year - a.year).map((album) => (
        !album.err && <AlbumCover key={album.id} album={album} handleSelect={handleSelect} />
    ))

    return (
        <section className="album-page">
            {
                <Switch>
                    <Route
                        exact path={"/albums"}
                        render={() => (
                            <div className="album-container">
                                {albumsList}
                            </div>
                        )} />
                    <Route
                        path={"/albums/:id"}
                        render={({ match }) => (
                            <div className="album-page">
                                <AlbumCover album={albums.find(a => a.id === match.params.id)} handleSelect={() => { }} />
                                <AlbumSongs album={albums.find(a => a.id === match.params.id)} />
                            </div>
                        )} />
                </Switch>
            }
        </section>
    )
}

export default Albums;
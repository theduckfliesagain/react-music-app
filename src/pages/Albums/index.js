import React, { useEffect, useState } from 'react';
import { Link, Route, Switch, useRouteMatch, useHistory, useParams } from 'react-router-dom';
import { AlbumCover, AlbumSongs } from '../../components';

import albumsData from '../../data';

import "./styles.css";

const Albums = () => {

    const [albums, setAlbums] = useState(albumsData);

    const history = useHistory();



    const handleSelect = (id) => {
        history.push(`albums/${id}`)
    }

    const albumsList = albums.map((album) => (
        <AlbumCover key={album.id} album={album} handleSelect={handleSelect} />
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
                                <AlbumCover album={albums[match.params.id]} handleSelect={() => { }} />
                                <AlbumSongs album={albums[match.params.id]} />
                            </div>
                        )} />
                </Switch>
            }
        </section>
    )
}

export default Albums;
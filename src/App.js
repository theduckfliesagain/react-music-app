import React from 'react'
import {ArtistPortfolio, ArtistProfile} from "./components";
import {Reviews} from "./pages";


import './App.css'

function App() {
    return (
        <main>
            <ArtistProfile />
            <ArtistPortfolio />
            <Reviews />
        </main>
    );
}

export default App
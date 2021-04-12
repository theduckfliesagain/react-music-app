import React from 'react'
import ArtistProfile from "./components/ArtistProfile";
import ArtistPortfolio from "./components/ArtistPortfolio";

import './App.css'

function App() {
    return (
        <main>
            <ArtistProfile />
            <ArtistPortfolio />
        </main>
    );
}

export default App
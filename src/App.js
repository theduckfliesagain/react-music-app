import React from 'react'
import { Switch, Route } from "react-router-dom";

import * as Layout from "./layout";
import * as Pages from "./pages";


import './App.css'

function App() {
    return (
        <>
            <Layout.Navbar />
            <main>
                <Switch>
                    <Route exact path="/" component={Pages.Profile} />
                    <Route path="/albums" component={Pages.Albums} />
                    <Route path="/reviews" component={Pages.Reviews} />
                    <Route component={Pages.NotFound} />
                </Switch>
            </main>
        </>
    );
}

export default App
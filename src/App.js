import React, { useContext } from 'react'
import { Switch, Route } from "react-router-dom";

import * as Layout from "./layout";
import * as Pages from "./pages";

import {useTheme} from "./context/ThemeContext";
import './App.css'


function App() {
    const theme = useTheme();
    return (
        <div >
            <Layout.Navbar />
            <main style={{background: theme.current.background, color: theme.current.foreground}}>
                <Switch>
                    <Route exact path="/" component={Pages.Profile} />
                    <Route path="/albums" component={Pages.Albums} />
                    <Route path="/reviews" component={Pages.Reviews} />
                    <Route component={Pages.NotFound} />
                </Switch>
            </main>
        </div>
    );
}

export default App
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import {ThemeProvider} from "./context/ThemeContext";
import App from "./App";

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
)
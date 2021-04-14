import React from 'react';
import { NavLink } from "react-router-dom";

import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">HOME</NavLink>
            <NavLink to="/albums" activeClassName="current">ALBUMS</NavLink>
            <NavLink to="/reviews" activeClassName="current">REVIEWS</NavLink>
        </nav>
    )
}

export default Navbar;
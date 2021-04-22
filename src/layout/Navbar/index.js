import React from 'react';
import { NavLink } from "react-router-dom";
import { BackButton, ThemeButton } from '../../components';

import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <BackButton />
            <NavLink exact to="/" activeClassName="current">HOME</NavLink>
            <NavLink to="/albums" activeClassName="current">ALBUMS</NavLink>
            <NavLink to="/reviews" activeClassName="current">REVIEWS</NavLink>
            <ThemeButton />
        </nav>
    )
}

export default Navbar;
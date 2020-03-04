import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="titleBar">
                <Link to="/" className="brand-logo"><img alt="app_icon" src="https://img.icons8.com/cotton/64/000000/cinema-.png"></img>MoviesDatabase</Link>
                <SignedInLinks className="signedInLinks"/>
            </div>
        </nav>
    )
}

export default Navbar;
import React from 'react';
import '../style/NavMenu.css';
import Search from './SearchBar';


const NavMenu = (props) => {
    return (
        <nav className="nav-area">
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
            </ul>

            <Search changeInput={props.changeInput} />
        </nav>
    )
}

export default NavMenu;
import React from 'react';
import '../style/SideMenu.css';

const SideMenu = ({show}) => {


    return(
        <nav className="side-menu"
            style={{
                display: show? 'block' : 'none'
            }}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Login</a></li>
                <li><a href='#'>Register</a></li>
            </ul>
        </nav>
    )
};

export default SideMenu;
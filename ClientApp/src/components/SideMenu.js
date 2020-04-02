import React from 'react';
import '../style/SideMenu.css';

const SideMenu = ({show, showLogModal, showRegModal}) => {


    return(
        <nav className="side-menu"
            style={{
                display: show ? 'block' : 'none'
            }}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#" onClick={showLogModal}>Login</a></li>
                <li><a href='#' onClick={showRegModal}>Register</a></li>
            </ul>
        </nav>
    )
};

export default SideMenu;
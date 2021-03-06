import React from 'react';
import '../style/SideMenu.css';

const SideMenu = ({show, showLogModal, showRegModal, toggleSideMenu}) => {


    return(
        <nav className="side-menu"
            style={{
                display: show ? 'block' : 'none'
            }}>
            <ul>
                <li><a href="/"><i className="fa fa-home" id="home_icon"></i> Home</a></li>
                <li><a href="#" onClick={showLogModal}><i className="fa fa-user" aria-hidden="true"></i> Login</a></li>
                <li><a href='#' onClick={showRegModal}><i className="fa fa-id-card" aria-hidden="true"></i> Register</a></li>
            </ul>
        </nav>
    )
};

export default SideMenu;
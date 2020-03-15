import React from 'react';
import '../style/NavMenu.css';
import Search from './SearchBar';


const NavMenu = (props) => {
    const categories = [
        { value: 'top_rated', label: 'Top rated' },
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'popular', label: 'Popular' },
        { value: 'now_playing', label: 'Now playing' }
    ];

    const options = [
        { value: 'movie', label: 'Movies' },
        { value: 'tv', label: 'TV shows' }
    ]

    function makeNavbarResponsive() {
        var navbar = document.getElementsByClassName("nav-area");
        if(navbar.className == "nav-area"){
            navbar.className += " responsive";
        }
        else {
            navbar.className = "nav-area";
        }
    }

    return (
        <nav className="nav-area">
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <select className="select-box"
                        onChange={props.changeCategory}>
                        {categories.map(item => (
                            <option key={item.label} value={item.value}>{item.label}</option>
                        ))}
                </select>
                <select className="select-box"
                        onChange={props.changeApi}>
                        {options.map(item => (
                            <option key={item.label} value={item.value}>{item.label}</option>
                        ))}
                </select>
            </ul>
            <Search changeInput={props.changeInput} />
            <a className="icon" onClick={makeNavbarResponsive()}>&#9776;</a>
        </nav>
    )
}

export default NavMenu;
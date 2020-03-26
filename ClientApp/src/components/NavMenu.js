import React from 'react';
import '../style/NavMenu.css';
import Search from './SearchBar';


const NavMenu = (props) => {
    const movie_categories = [
        { value: 'top_rated', label: 'Top rated' },
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'popular', label: 'Popular' },
        { value: 'now_playing', label: 'Now playing' }
    ];

    const tv_categories =[
        { value: 'top_rated', label: 'Top rated'},
        { value: 'popular', label: 'Popular'},
        { value: 'on_the_air', label: 'On the air'},
        { value: 'airing_today', label: 'Airing today'}
    ]

    const options = [
        { value: 'movie', label: 'Movies' },
        { value: 'tv', label: 'TV shows' }
    ]

    function makeNavbarResponsive() {
        var navbar = document.getElementsByClassName("nav-area");
        if(navbar.className === "nav-area"){
            navbar.className += " responsive";
        }
        else {
            navbar.className = "nav-area";
        }
    }

    return (
        <nav className="nav-area">
            <ul className="menu">
                <li><a className="home-btn" href="/">Home</a></li>
                <li><a className="menu-item" href="#">About</a></li>
                <li><a className="menu-item" href="#" onClick={props.showLogModal}>Login</a></li>
                <li><a className="menu-item" href="#" onClick={props.showRegModal}>Register</a></li>
                <select className="select-box"
                        onChange={props.changeApi}>
                        {options.map(item => (
                            <option key={item.label} value={item.value}>{item.label}</option>
                        ))}
                </select>
                <select className="select-box"
                        onChange={props.changeCategory}>
                            {props.selected === 'movie' ? movie_categories.map(item => (
                            <option key={item.label} value={item.value}>{item.label}</option>
                        )) : tv_categories.map(item => (
                            <option key={item.label} value={item.value}>{item.label}</option>
                        ))}
                        
                </select>
            </ul>
            <Search  className="search" changeInput={props.changeInput} />
            <a className="icon" onClick={makeNavbarResponsive()}>&#9776;</a>
        </nav>
    )
}

export default NavMenu;
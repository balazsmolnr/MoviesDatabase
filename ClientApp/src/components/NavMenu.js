import React from 'react';
import '../style/NavMenu.css';
import Search from './SearchBar';


const NavMenu = (props) => {
    const options = [
        { value: 'top_rated', label: 'Top rated' },
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'popular', label: 'Popular' },
        { value: 'now_playing', label: 'Now playing' }
    ];

    return (
        <nav className="nav-area">
            <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>
                <li className="dropdown">
                    <span>Select category...</span>
                    <select
                        className="dropdown-content"
                        onChange={props.changeCategory}>
                        {options.map(item => (
                            <option key={item.label} value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </li>
            </ul>
            <Search changeInput={props.changeInput} />
        </nav>
    )
}

export default NavMenu;
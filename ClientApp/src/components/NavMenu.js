import React from 'react';
import '../style/NavMenu.css';
import Search from './SearchBar';


class NavMenu extends React.Component  {
    constructor(){
        super();
        this.state = {
            movie_categories : [
                { value: 'top_rated', label: 'Top rated' },
                { value: 'upcoming', label: 'Upcoming' },
                { value: 'popular', label: 'Popular' },
                { value: 'now_playing', label: 'Now playing' }
            ],

            tv_categories : [
                { value: 'top_rated', label: 'Top rated'},
                { value: 'popular', label: 'Popular'},
                { value: 'on_the_air', label: 'On the air'},
                { value: 'airing_today', label: 'Airing today'}
            ],
        
            options : [
                { value: 'movie', label: 'Movies' },
                { value: 'tv', label: 'TV shows' }
            ]
        }
    
        
    }


    displaySearchBox() {
        const searchBox = document.getElementsByClassName("search");
    }

    render(){
        return (
            <nav className="nav-area">
                <ul className="menu">
                    <li><a className="home-btn" href="/">Home</a></li>
                    <a className="home_icon" href="/"><i className="fa fa-home" id="home_icon"></i></a>
                    <li><a className="menu-item" href="#" onClick={this.props.showLogModal}> Login</a></li>
                    <li><a className="menu-item" href="#" onClick={this.props.showRegModal}>Register</a></li>
                    <select className="select-box"
                            onChange={this.props.changeApi}>
                            {this.state.options.map(item => (
                                <option key={item.label} value={item.value}>{item.label}</option>
                            ))}
                    </select>
                    <select className="select-box"
                            onChange={this.props.changeCategory}>
                                {this.props.selected === 'movie' ? this.state.movie_categories.map(item => (
                                <option key={item.label} value={item.value}>{item.label}</option>
                            )) : this.state.tv_categories.map(item => (
                                <option key={item.label} value={item.value}>{item.label}</option>
                            ))}
                            
                    </select>
                </ul>
                <Search  className="search" changeInput={this.props.changeInput} />
                <a className="search_icon" onClick={this.displaySearchBox}><i className="fa fa-search"></i></a>
                <a className="menu_icon">&#9776;</a>
            </nav>
        )
    }
}

export default NavMenu;
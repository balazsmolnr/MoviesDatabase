import React, { Component } from 'react';
import './style/App.css';
import MovieCard from './components/MovieCard';
import apiConfig from './ApiKeys';
import NavMenu from './components/NavMenu';
import Pagination from './components/Pagination';
import RegistrationModal from './components/RegistrationModal';
import LoginModal from './components/LoginModal';
import SideMenu from './components/SideMenu';

class App extends Component {
    constructor(props) {

        super(props);

        this.state =
        {
            movies: [],
            total_pages: null,
            page_num: 1,
            selected_category: 'top_rated',
            selected_api: 'movie',
            searchValue : '',
            showModalReg : false,
            showModalLog : false,
            showSideMenu: false
        };

        this.fetchMovies();

    }

    fetchMovies = async (searchTerm) => {
        let urlString = "";

        if(searchTerm){
            urlString = `https://api.themoviedb.org/3/search/${this.state.selected_api}?api_key=${apiConfig.tmdbKey}&language=en-US&page=${this.state.page_num}&query=${searchTerm}`;
            this.setState({
                //page_num: 1
            })
        }
        else{

            urlString = `https://api.themoviedb.org/3/${this.state.selected_api}/${this.state.selected_category}?api_key=${apiConfig.tmdbKey}&append_to_response=videos&language=en-US&page=${this.state.page_num}`
        }


        const response = await fetch(urlString);
        const jsonResponse = await response.json();
        const results = jsonResponse.results;
        console.log(results);

        var movieRows = []

        results.forEach(movie => {
            if (movie.poster_path == null) {
                movie.poster_src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"
            }
            else {
                movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path;
            }
            movie.backdrop_src = "https://image.tmdb.org/t/p/original" + movie.backdrop_path
            const movieRow = <MovieCard key={movie.id} movie={movie} selected={this.state.selected_api} genres={this.state.genres}/>
            movieRows.push(movieRow);
        });

        this.setState({
            movies: movieRows,
            total_pages: jsonResponse.total_pages,
        })
    }

    changeHandler(event) {
        const searchTerm = event.target.value;
        this.setState({
            searchValue : searchTerm
        })
        this.fetchMovies(this.state.searchValue);
    }

    toggleModalReg = () => {
        this.setState({
            showModalReg: !this.state.showModalReg
        });
    };

    toggleModalLog = () => {
        this.setState({
            showModalLog : !this.state.showModalLog
        });
    };

    toggleSideMenu = () => {
        this.setState({
            showSideMenu : !this.state.showSideMenu
        });
    };

    nextPage = () => {
        if (this.state.searchValue === '' && this.state.page_num < this.state.total_pages) {
            this.setState({
                page_num: this.state.page_num += 1
            }, () => this.fetchMovies())
        }
        else if(this.state.searchValue !== '' && this.state.page_num < this.state.total_pages){
            this.setState({
                page_num: this.state.page_num += 1
            }, () => this.fetchMovies(this.state.searchValue))
        }
    }


    previousPage = () => {
        if (this.state.searchValue === '' && this.state.page_num !== 1) {
            this.setState({
                page_num: this.state.page_num -= 1
            }, () => this.fetchMovies())
        }
        else if(this.state.searchValue !== '' && this.state.page_num !== 1){
            this.setState({
                page_num: this.state.page_num -= 1
            }, () => this.fetchMovies(this.state.searchValue))
        }
    }

    changeCategory = (e) => {
        this.setState({
            page_num: 1,
            selected_category: e.target.value
        }, () => this.fetchMovies())
    }
    
    changeApi = (e) => {
        this.setState({
            page_num: 1,
            selected_category: 'top_rated',
            selected_api: e.target.value
        }, () => this.fetchMovies())
    }


    render() {
        return (
            <div>
                {this.state.showModalReg || this.state.showModalLog ? <div onClick={this.state.showModalReg ?  this.toggleModalReg : this.toggleModalLog} className="back-drop"></div> : null}
                <NavMenu changeInput={this.changeHandler.bind(this)} 
                        changeCategory={this.changeCategory} 
                        changeApi={this.changeApi} 
                        selected={this.state.selected_api} 
                        showRegModal={this.toggleModalReg} 
                        showLogModal={this.toggleModalLog}
                        toggleSideMenu={this.toggleSideMenu}/>
                <SideMenu show={this.state.showSideMenu} showLogModal={this.toggleModalLog} showRegModal={this.toggleModalReg}/>
                <RegistrationModal className="reg-modal" toggle={this.toggleModalReg} show={this.state.showModalReg}/>
                <LoginModal className="log-modal" toggle={this.toggleModalLog} show={this.state.showModalLog} />
                <Pagination nextPage={this.nextPage} previousPage={this.previousPage}/>
                <div className="container">
                    {this.state.movies}
                </div>
                <Pagination nextPage={this.nextPage} previousPage={this.previousPage} />
            </div>
        );
    }
}

export default App;

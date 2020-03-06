import React, { Component } from 'react';
import './style/App.css';
import MovieCard from './MovieCard';
import apiConfig from './ApiKeys';
import NavMenu from './components/NavMenu';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';

class App extends Component {
    constructor(props) {

        super(props);

        this.state =
        {
            movies: [],
            total_pages: null,
            page_num: 1,

        };

        var inputField = document.getElementsByClassName("inputField").value;

        if (inputField !== '') {
            this.getSearchTerm();
        }

        this.getTopRatedMovies();

    }

    getSearchTerm = async (searchTerm) => {
        const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${apiConfig.tmdbKey}&language=en-US&page=1&query=` + searchTerm;

        const response = await fetch(urlString);
        const jsonResponse = await response.json();
        const results = jsonResponse.results;
        console.log(results);

        var movieRows = [];

        if (searchTerm) {
            results.forEach(movie => {
                movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path;
                const movieRow = <MovieCard key={movie.id} movie={movie} />
                movieRows.push(movieRow);
            });
            this.setState({
                rows: movieRows
            })
        }

    }


    getTopRatedMovies = async () => {
        const urlString = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiConfig.tmdbKey}&language=en-US&page=${this.state.page_num}`


        const response = await fetch(urlString);
        const jsonResponse = await response.json();
        const results = jsonResponse.results;
        console.log(results);

        var movieRows = []

        results.forEach(movie => {
            movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MovieCard key={movie.id} movie={movie} />
            movieRows.push(movieRow);
        });

        this.setState({
            movies: movieRows,
            total_pages: jsonResponse.total_pages
        })
    }



    changeHandler(event) {
        const searchTerm = event.target.value;
        this.getSearchTerm(searchTerm);
    }



    nextPage = () => {
        if (this.state.page_num < this.state.total_pages) {
            this.setState({
                page_num: this.state.page_num += 1
            }, () => this.getTopRatedMovies())
        }
    }


    previousPage = () => {

        if (this.state.page_num !== 1) {
            this.setState({
                page_num: this.state.page_num -= 1
            }, () => this.getTopRatedMovies())
        }
    }


    render() {
        return (
            <div>
                <NavMenu />
                <div className="searchBar">
                    <input onChange={this.changeHandler.bind(this)} className="inputField" placeholder="What are you looking for?"></input>
                </div>
                <div className="pagination">
                    <a className="pageBtn" onClick={this.previousPage}>&#8249;</a>
                    <a className="pageBtn" onClick={this.nextPage}>&#8250;</a>
                </div>
                <div className="container">
                    {this.state.movies}
                </div>
                <div className="pagination">
                    <a className="pageBtn" onClick={this.previousPage}>&#8249;</a>
                    <a className="pageBtn" onClick={this.nextPage}>&#8250;</a>
                </div>

            </div>
        );
    }
}

export default App;

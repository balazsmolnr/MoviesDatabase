import React, { Component } from 'react';
import './style/App.css';
import MovieRow from './MovieCard';
import apiConfig from './ApiKeys';

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {};

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
                movie.background_img = "http://image.tmdb.org/t/p/w185" + movie.backdrop_path;
                const movieRow = <MovieRow key={movie.id} movie={movie} />
                movieRows.push(movieRow);
            });
            this.setState({
                rows: movieRows
            })
        }

    }


    getTopRatedMovies = async () => {
        const urlString = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiConfig.tmdbKey}&language=en-US&page=1`


        const response = await fetch(urlString);
        const jsonResponse = await response.json();
        const results = jsonResponse.results;
        console.log(results);

        var movieRows = []

        results.forEach(movie => {
            movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MovieRow key={movie.id} movie={movie} />
            movieRows.push(movieRow);
        });

        this.setState({
            rows: movieRows
        })
    }

    changeHandler(event) {
        const searchTerm = event.target.value;
        this.getSearchTerm(searchTerm);
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                        <tr>
                            <td>
                                <img alt="app_icon" src="https://img.icons8.com/cotton/64/000000/cinema-.png"></img>
                            </td>
                            <td witdh="8">
                                <h1>MoviesDB</h1>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="searchBar">
                    <input onChange={this.changeHandler.bind(this)} className="inputField" placeholder="What are you looking for?"></input>
                </div>
                <div>
                    {this.state.rows}
                </div>

            </div>
        );
    }
}

export default App;

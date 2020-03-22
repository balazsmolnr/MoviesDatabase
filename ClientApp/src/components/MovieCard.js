import React from 'react';
import '../style/MovieCard.css';
import MovieModal from './MovieModal';
    

class MovieCard extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }


    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div>
                {this.state.show ?  <div className="back-drop"></div> : null}
                <MovieModal show={this.state.show} movie={this.props.movie} toggle={() => {this.handleModal()}} />
                <div onClick={() => { this.handleModal() }} className="movie_card" key={this.props.movie.id} id={this.props.movie.id}>
                    <img className="movie_poster" alt="poster" src={this.props.movie.poster_src} />
                    <h1 className="movie_title">{this.props.movie.title ? this.props.movie.title : this.props.movie.name}</h1>
                    <span className="rate">{this.props.movie.vote_average}</span>
                    <p className="release_date"> | {this.props.movie.release_date ? this.props.movie.release_date : this.props.movie.first_air_date}</p>
                </div>
            </div>
        )
    }

}

export default MovieCard;
import React from 'react';
import './style/MovieCard.css';
import { Modal } from 'react-bootstrap';


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
        console.log(this.state.show);
        return (
            <div onClick={() => { this.handleModal() }} className="movie_card" key={this.props.movie.id} id={this.props.movie.id}>
                <img className="movie_poster" alt="poster" src={this.props.movie.poster_src} />
                <h1 className="movie_title">{this.props.movie.title}</h1>
                <span className="rate">{this.props.movie.vote_average}</span>
                <p className="release_date">{this.props.movie.release_date}</p>
                <Modal show={this.state.show} size="lg">
                    <Modal.Header closeButton>
                        <h2>{this.props.movie.title}</h2>
                    </Modal.Header>
                    <Modal.Body classNamee="modal-content">
                        <img className="modal_poster" alt="poster" src={this.props.movie.poster_src} />
                        <h1 className="movie_title">{this.props.movie.title}</h1>
                        <span className="rate">{this.props.movie.vote_average}</span>
                        <p className="release_date"> | {this.props.movie.release_date}</p>
                        <p>{this.props.movie.overview}</p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }


}

export default MovieCard;
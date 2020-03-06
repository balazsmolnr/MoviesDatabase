import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style/MovieCard.css';

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
        this.setState({show:!this.state.show})
    }

    render() {
        return (
            <div onClick={() => { this.handleModal() }} className="movie_card" key={this.props.movie.id} id={this.props.movie.id}>
                <img className="movie_poster" alt="poster" src={this.props.movie.poster_src} />
                <h1 className="movie_title">{this.props.movie.title}</h1>
                <span className="rate">{this.props.movie.vote_average}</span>
                <p className="release_date">{this.props.movie.release_date}</p>
                <div className="modal-wrap">
                    <Modal show={this.state.show} className="modal-content">
                        <Modal.Header closeButton>
                            <Modal.Title>{this.props.movie.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h2>{this.props.movie.overview}</h2>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        )
    }

  
}

export default MovieCard;
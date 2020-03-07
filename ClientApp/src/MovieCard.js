import React from 'react';
import './style/MovieCard.css';
import { Modal } from 'react-bootstrap';
import { Row } from 'reactstrap';


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
                <Modal show={this.state.show} size="lg" classNamee="modal-content">
                    <Modal.Header closeButton>
                        <h2 className="movie_title">{this.props.movie.title}</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img className="modal_poster" src={this.props.movie.poster_src} />
                                    </td>
                                    <td/>
                                    <td>
                                        <p className="overview">{this.props.movie.overview}</p>
                                        <br/>
                                        <span className="rate">{this.props.movie.vote_average}</span>
                                        <p className="release_date"> | {this.props.movie.release_date}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }


}

export default MovieCard;
import React from 'react';
import '../style/MovieCard.css';
import MovieModal from './MovieModal';
import apiConfig from '../ApiKeys';
    

class MovieCard extends React.Component {
    constructor() {
        super();
        this.state = {
            show : false,
            video : null,
            genres : null
        };
    }

   
    componentDidMount() {
        fetch(`http://api.themoviedb.org/3/${this.props.selected}/${this.props.movie.id}/videos?api_key=${apiConfig.tmdbKey}`)
            .then(response => response.json())
            .then(data => data.results.map(item => {if(item.site === "YouTube" && item.type === "Trailer")this.setState({ video : `https://www.youtube.com/embed/${item.key}`})}))
    }


    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        console.log(this.state.video)
        return (
            <div>
                {this.state.show ?  <div className="back-drop"></div> : null}
                <MovieModal show={this.state.show} movie={this.props.movie} toggle={() => {this.handleModal()}} video={this.state.video} />
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
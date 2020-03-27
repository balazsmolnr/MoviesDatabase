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
        this.fetchGenres();
    }

   
    componentDidMount() {
        fetch(`http://api.themoviedb.org/3/${this.props.selected}/${this.props.movie.id}/videos?api_key=${apiConfig.tmdbKey}`)
            .then(response => response.json())
            .then(data => data.results.map(item => { if(item.site === "YouTube" && item.type === "Trailer") this.setState({ video : `https://www.youtube.com/embed/${item.key}`})}))
    }


    fetchGenres = async() => {
        let urlString = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiConfig.tmdbKey}&language=en-US`
        
        const response = await fetch(urlString);
        const jsonResponse = await response.json();

        const genre_names = [];

        jsonResponse.genres.map(genre => {
            this.props.movie.genre_ids.map(id => {
                if(genre.id === id){
                    genre_names.push(genre.name)
                }
            })
        });
        
        this.setState({
            genres : genre_names
        });

        console.log(this.state.genres)
    }

    handleModal() {
        this.setState({ show: !this.state.show })
    }

    render() {
        return (
            <div>
                {this.state.show ?  <div className="back-drop"></div> : null}
                <MovieModal show={this.state.show} movie={this.props.movie} toggle={() => {this.handleModal()}} video={this.state.video} genres={this.state.genres}/>
                <div onClick={() => { this.handleModal() }} className="movie_card" key={this.props.movie.id} id={this.props.movie.id}>
                    <img className="movie_poster" alt="poster" src={this.props.movie.poster_src} />
                    <h1 className="movie_title">{this.props.movie.title ? this.props.movie.title : this.props.movie.name}</h1>
                    <span className="rate">{this.props.movie.vote_average}</span>
                    
                    <p>{this.state.genres ? this.state.genres.map(genre => genre + " ") : null}</p>
                </div>
            </div>
        )
    }

}

export default MovieCard;
import React from 'react';

class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url;
    }

    render() {
        return (
            <div className="movie_card" key={this.props.movie.id} id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" alt="poster" src={this.props.movie.poster_src} />
                        <h1>{this.props.movie.title}</h1>
                        {/* <h4 className="release_date">{this.props.movie.release_date}</h4> */}
                        <span className="rate">{this.props.movie.vote_average}</span>
                        <p className="type">{this.props.movie.release_date}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {this.props.movie.overview}
                        </p>
                    </div>
                    <div className="movie_social">
                        <ul>
                            <li><i className="material-icons">star</i></li>
                            <li><i className="material-icons">share</i></li>
                            <li><i className="material-icons">thumb_up_alt</i></li>
                        </ul>
                    </div>
                </div>
                <div className="blur_back bright_back"></div>
            </div>
        )
    }
}

export default MovieRow;
import React from 'react';
import Player from 'react-player';
import '../style/MovieModal.css';


const MovieModal = ({movie, video, show, toggle, genres}) => {
    return(
        <div>
            
            <div className="modal_container"
                 style={{
                    display: show ? 'block' : 'none'
                 }}>
                     <div className="video_container">
                    {video ?
                   <Player url={video}
                            controls={true}
                            playing={show}
                            width="100%"
                            light={movie.backdrop_src}
                             />
                            : null}
                </div>
                <div className="header">
                    <h3 className="modal_title">{movie.title ? movie.title : movie.name}</h3>
                    <span className="close_btn" onClick={toggle}>&times;</span>
                </div>
                
                <div className="body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img className="modal_poster" src={movie.poster_src} alt="poster" />
                                </td>
                                <td>
                                    <p className="overview">{movie.overview}</p>
                                    <br/>
                                    <span className="modal_rate">{movie.vote_average}</span>
                                    <p className="modal_release_date"> | {movie.release_date ? movie.release_date : movie.first_air_date}</p>
                                    <p className="genres"> {genres ? genres.map(genre => <span className="genre-item">{genre}</span>) : null}</p>
                                </td>
                            </tr>
                            <tr>
                                
                            </tr>
                        </tbody>
                                
                    </table>
                </div>
                
            </div>
        </div>
    )
}

export default MovieModal;
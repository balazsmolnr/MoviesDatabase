import React from 'react';
import Player from 'react-player';
import '../style/MovieModal.css';


const MovieModal = ({movie, video, show, toggle}) => {
    return(
        <div>
            
            <div className="modal_container"
                 style={{
                    display: show ? 'block' : 'none',
                 }}>
                <div className="header" style={{
                    background : movie.backdrop_src
                }}>
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
                                    <span className="rate">{movie.vote_average}</span>
                                    <p className="release_date"> | {movie.release_date ? movie.release_date : movie.first_air_date}</p>
                                </td>
                            </tr>
                            <tr>
                                
                            </tr>
                        </tbody>
                                
                    </table>
                </div>
                <div className="video_container">
                    {video ?
                   <Player url={video}
                            controls={true}
                            light={true}
                            playing={show}
                             />
                            : null}
                </div>
            </div>
        </div>
    )
}

export default MovieModal;
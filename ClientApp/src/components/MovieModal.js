import React from 'react';
import '../style/MovieModal.css';


const MovieModal = (props) => {
    return(
        <div>
            <div className="modal_container"
                 style={{
                    display: props.show ? 'block' : 'none',
                 }}>
                <div className="header">
                    <h3 className="modal_title">{props.movie.title ? props.movie.title : props.movie.name}</h3>
                    <span className="close_btn" onClick={props.toggle}>&times;</span>
                </div>
                <div className="body">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img className="modal_poster" src={props.movie.poster_src} />
                                </td>
                                <td/>
                                <td>
                                    <p className="overview">{props.movie.overview}</p>
                                    <br/>
                                    <span className="rate">{props.movie.vote_average}</span>
                                    <p className="release_date"> | {props.movie.release_date ? props.movie.release_date : props.movie.first_air_date}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MovieModal;
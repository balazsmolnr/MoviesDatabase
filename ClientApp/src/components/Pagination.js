import React from 'react';
import '../style/Pagination.css';

const Pagination = (props) => {
    return (
        <div className="pagination">
            <a className="pageBtn" onClick={props.previousPage}>&#8249;</a>
            {/* <img alt="app_icon" src="https://img.icons8.com/cotton/64/000000/cinema-.png"></img> */}
            <a className="pageBtn" onClick={props.nextPage}>&#8250;</a>
        </div>
        )
}

export default Pagination;
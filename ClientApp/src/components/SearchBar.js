import React from 'react';
import '../style/SearchBox.css';

function Search({ changeHandler }) {
    return (

        <section className="searchbox-wrap">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="searchBox"
                onChange={changeHandler}/>
        </section>
    )
}


export default Search;
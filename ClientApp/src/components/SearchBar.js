import React from 'react';
import '../style/SearchBox.css';

function Search() {
    return (

        <section className="searchbox-wrap">
            <input type="text" placeholder="Search for a movie..." className="searchBox" />
        </section>
    )
}


export default Search;
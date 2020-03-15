import React from 'react';
import '../style/SearchBox.css';

const Search = (props) => {
    return (

        <section className="searchbox">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="searchBox"
                onChange={props.changeInput}/>
        </section>
    )
}

export default Search;

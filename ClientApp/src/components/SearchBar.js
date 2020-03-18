import React from 'react';
import '../style/SearchBox.css';

const Search = (props) => {
    return (

        <section className="search">
            <input
                type="text"
                placeholder="Search for..." 
                className="searchBox"
                onChange={props.changeInput}/>
        </section>
    )
}

export default Search;

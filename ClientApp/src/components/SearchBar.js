import React from 'react';
import '../style/SearchBox.css';
import apiConfig from '../ApiKeys.js';

//const Search = (props) => {
//    return (

//        <section className="searchbox-wrap">
//            <input
//                type="text"
//                placeholder="Search for a movie..."
//                className="searchBox"
//                onChange={this.props.changeHandler}/>
//        </section>
//    )
//}

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = async (event) => {
        event.preventDefault();
        this.setState({ value: this.target.value });
        const urlString = `https://api.themoviedb.org/3/search/movie?api_key=${apiConfig.tmdbKey}&language=en-US&page=1&query=${ this.state.value }`;

        const response = await fetch(urlString);
        const jsonResponse = await response.json();
        const results = jsonResponse.results;
        console.log(results);
        if (this.props.onResult) {
            this.props.onResult(results);
        }
        return results;
    }

    render() {
        return (
            <section className="searchbox-wrap">
            <input
                type="text"
                placeholder="Search for a movie..."
                className="searchBox"
                value={this.state.value}
                onChange={this.handleChange}/>
        </section>
            )
    }
}



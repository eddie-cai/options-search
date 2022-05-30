import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (

            <div className="wrap">
                <div className="search">
                    <input type="text" className="searchTerm" placeholder="Enter your ticker here..." onChange={event => this.onInputChange(event.target.value)}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;


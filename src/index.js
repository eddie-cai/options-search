
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    handleTermChange(term) {
        const request = require('request');
        const url = `https://finance.yahoo.com/quote/${term}/options?p=${term}`

        
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
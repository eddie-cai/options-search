
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component {
    handleTermChange(term) {
        const request = require('request');
        const url = `https://query1.finance.yahoo.com/v7/finance/options${term}`
        let options = {json: true};
        request(url, options, (error, res, body) => {
            if (error) {
                return  console.log(error)
            };

            if (!error && res.statusCode == 200) {
                // do something
                // with JSON, using the 'body' variable
                console.log(body)
            };
        });
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
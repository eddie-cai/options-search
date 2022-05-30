import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import Table from './components/Table'
import './styles/Table.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            options_calls: [],
            options_puts: [],
        };
    }
    handleTermChange = (term) => {
        var axios = require('axios').default;
        /*
        * We will be retrieving the data from a Yahoo Finance API,
        * with an API key I created with my profile.
        * */
        var options = {
            method: 'GET',
            url: `https://yfapi.net/v7/finance/options/${term}`,
            params: {modules: 'defaultKeyStatistics,assetProfile'},
            headers: {
                'x-api-key': 'KDvBZc9ZztaqNPar1yCaFasXBhUjVLra3CYKvTVc'
            }
        };

        axios.request(options).then((response) => {
            const data = response.data['optionChain']['result'][0]['options'][0];
	        const calls = data['calls'];
            const puts = data['puts'];
            this.setState({options_calls : calls});
            this.setState({options_puts : puts});
        }).catch(function (error) {
	        console.error(error);
        });
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.handleTermChange} />
                <Table options={this.state.options_calls} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
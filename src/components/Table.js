import React from 'react'

const Table = (props) => {
    console.log("what");
    console.log(props.options);
    return (
        <div className="App">
            <table>
                <tbody>
                <tr>
                    <th>Contract Name</th>
                    <th>Strike</th>
                    <th>Last Price</th>
                </tr>
                {props.options.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.contractSymbol}</td>
                            <td>{val.strike}</td>
                            <td>{val.lastPrice}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
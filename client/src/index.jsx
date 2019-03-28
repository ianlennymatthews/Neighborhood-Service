import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>hello world</p>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));
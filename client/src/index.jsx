import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Map from './map.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            properties: []
        }

        this.getProperties = this.getProperties.bind(this);
    }

    componentDidMount() {
        this.getProperties();
    }

    getProperties() {
        Axios.get('/items')
        .then(response => this.setState({
            properties: response.data
        }))
        .catch(err => console.log('error getting'))
    }




    render() {
        return (
          <div>
              <h1>Neighborhood: Rego Park</h1>
              <Map properties={this.state.properties}/>
          </div>
        );
    }
}



ReactDOM.render(<App />, document.getElementById('app'));
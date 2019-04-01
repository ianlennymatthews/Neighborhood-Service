import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Map from './map.jsx';
import NeighborhoodInfo from './neighborhoodInfo.jsx';
import NearbyHomes from './nearbyHomes.jsx';


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
        if (this.state.properties.length > 0) {
            return (
                <div>
                    <NeighborhoodInfo properties={this.state.properties}/>
                    <Map properties={this.state.properties}/>
                    <NearbyHomes properties={this.state.properties}/>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}



ReactDOM.render(<App />, document.getElementById('app'));


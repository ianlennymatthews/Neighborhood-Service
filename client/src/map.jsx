import React from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../../config.js';
import MapProperty from './mapProperty.jsx';



class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        center: {
          lat: 40.6782,
          lng: -73.9442
        },
        zoom: 11
    };



    render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '50vh', width: '50%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: config.GOOGLE_API_KEY }} defaultCenter={this.props.center} defaultZoom={this.props.zoom} >
            <MapProperty lat={40.6782} lng={-73.9442}/>
            </GoogleMapReact>
          </div>
        );
    }
}

module.exports = Map;
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
          lat: 40.72,
          lng: -73.86
        },
        zoom: 14
    };



    render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact bootstrapURLKeys={{ key: config.GOOGLE_API_KEY }} defaultCenter={this.props.center} defaultZoom={this.props.zoom} >
            {this.props.properties.map(property => {
                return (
                    <MapProperty lat={property.latitude} lng={property.longitude} property={property}/>
                )
                
            })}
            
            </GoogleMapReact>
          </div>
        );
    }
}

module.exports = Map;
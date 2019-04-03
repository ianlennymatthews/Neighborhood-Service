import React from 'react';



class MapProperty extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.property.uniqueId === this.props.currentProperty.uniqueId) {
            return (
                <div className="propertyMarkerContainer">
                    <img className="currentPropMapMarkerImg" border="5" src={this.props.property.imgUrl}></img>
                    <div className="circle"></div>
                    <button className="propertyMarkerPrice">{'$' + (this.props.property.price / 1000).toFixed(0) + 'K'}</button>
                </div>
                
            );
        } else {
            return (
                <div className="propertyMarkerContainer">
                    <div className="circle"></div>
                    <button className="propertyMarkerPrice">{'$' + (this.props.property.price / 1000).toFixed(0) + 'K'}</button>
                </div>
            );
        }
    }
}

module.exports = MapProperty;
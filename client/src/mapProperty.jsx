import React from 'react';



class MapProperty extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="propertyMarkerContainer">
                <div className="circle"></div>
                <button className="propertyMarkerPrice">{'$' + (this.props.property.price / 1000).toFixed(0) + 'K'}</button>
            </div>
        );
    }
}

module.exports = MapProperty;
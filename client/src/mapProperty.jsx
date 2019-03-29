import React from 'react';



class MapProperty extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="propertyMarkerPrice">{'$' + (this.props.property.price / 1000).toFixed(0)}</button>
        );
    }
}

module.exports = MapProperty;
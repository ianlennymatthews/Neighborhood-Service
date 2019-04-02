import React from 'react';



class MapProperty extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="propertyMarkerContainer">
                <div class="circle"></div>
                <button className="propertyMarkerPrice">{'$' + (this.props.property.price / 1000).toFixed(0) + 'K'}</button>
            </div>
        );
    }
}

module.exports = MapProperty;
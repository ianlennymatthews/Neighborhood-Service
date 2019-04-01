import React from 'react';



class NearbyHomes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentProperties: [this.props.properties[0], this.props.properties[1]]
        }
        
    }

    render() {
        return (
            <div>
                <h5>NEARBY HOMES</h5>
                <button id="nearbyHomesPicsScrollLeft">{'<'}</button>
                <img className="nearbyHomesPics" src={this.state.currentProperties[0].imgUrl}></img>
                <img className="nearbyHomesPics" src={this.state.currentProperties[1].imgUrl}></img>
                <button id="nearbyHomesPicsScrollRight">{'>'}</button>
            </div>
        );
    }
}

module.exports = NearbyHomes;
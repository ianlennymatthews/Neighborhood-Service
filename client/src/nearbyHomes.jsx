import React from 'react';



class NearbyHomes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFirstPicture: 0,
            currentSecondPicture: 1,
        }
        this.slidePicsToRight = this.slidePicsToRight.bind(this);
        this.slidePicsToLeft = this.slidePicsToLeft.bind(this);
    }

    slidePicsToRight() {
        this.setState({
            currentFirstPicture: this.state.currentFirstPicture + 2, 
            currentSecondPicture: this.state.currentSecondPicture + 2
        })
    }

    slidePicsToLeft() {
        if (this.state.currentFirstPicture > 0) {
            this.setState({
                currentFirstPicture: this.state.currentFirstPicture - 2, 
                currentSecondPicture: this.state.currentSecondPicture - 2
            })
        }
    }

    render() {
        return (
            <div>
                <h5>NEARBY HOMES</h5>
                <button id="nearbyHomesPicsScrollLeft" onClick={this.slidePicsToLeft}>{'<'}</button>
                <img className="nearbyHomesPics" src={this.props.properties[this.state.currentFirstPicture].imgUrl}></img>
                <img className="nearbyHomesPics" src={this.props.properties[this.state.currentSecondPicture].imgUrl}></img>
                <button id="nearbyHomesPicsScrollRight" onClick={this.slidePicsToRight}>{'>'}</button>
            </div>
        );
    }
}

module.exports = NearbyHomes;
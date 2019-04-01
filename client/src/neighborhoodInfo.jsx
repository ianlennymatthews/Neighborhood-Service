import React from 'react';



class NeighborhoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.calculateNeighborhoodAveragePrice = this.calculateNeighborhoodAveragePrice.bind(this);
    }

    calculateNeighborhoodAveragePrice() {
        var averagePropertyPrice = this.props.properties.reduce((accumulator, value) => {
            return accumulator += value.price;
        }, 0) / this.props.properties.length;
        
        return '$' + averagePropertyPrice;
        }



    render() {
        return (
            <div>
                <h1>Neighborhood: Rego Park</h1>

                <div>
                    <h5>MEDIAN ZESTIMATE </h5>
                    {this.calculateNeighborhoodAveragePrice()}
                </div>
                

                <h5>MARKET TEMP</h5>

                <p>Zillow predicts Rego Park home values will rise 0.8% next year, compared to a 4.3% rise for New York as a whole. Among Rego Park homes, this home is valued 11.4% more than the midpoint (median) home, but is valued 68.8% less per square foot.</p>

                <p>Walk Score 90 (Walker's Paradise)</p>

                <p>Transit Score 84 (Excellent Transit)</p>
                
            </div>
        );
    }
}

module.exports = NeighborhoodInfo;
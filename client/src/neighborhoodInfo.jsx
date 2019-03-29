import React from 'react';



class NeighborhoodInfo extends React.Component {
    constructor(props) {
        super(props);
        this.populateData = this.populateData.bind(this);
    }

    populateData() {
        if (this.props.properties.length > 0) {
            var averagePropertyPrice = this.props.properties.reduce((accumulator, value) => {
                return accumulator += value.price;
            }, 0) / this.props.properties.length;
            
            return '$' + averagePropertyPrice;
        }
    }



    render() {
        return (
            <div>
                <h1>Neighborhood: Rego Park</h1>

                <div>
                    <h2>Median Zestimate</h2>
                    {this.populateData()}
                </div>
                

                <h2>Market Temp</h2>

                <p>Zillow predicts Rego Park home values will rise 0.8% next year, compared to a 4.3% rise for New York as a whole. Among Rego Park homes, this home is valued 11.4% more than the midpoint (median) home, but is valued 68.8% less per square foot.</p>

                <p>Walk Score 90 (Walker's Paradise)</p>

                <p>Transit Score 84 (Excellent Transit)</p>
                
            </div>
        );
    }
}

module.exports = NeighborhoodInfo;
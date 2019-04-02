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
        
        return '$' + Math.round(averagePropertyPrice / 1000) + 'K';
        }



    render() {
        return (
            <div>

                <h2>Neighborhood: Rego Park</h2>

                <div id="medianZestimateAndMarketTempContainer">

                    <div id="medianZestimateSection">
                        <h5 id="medianZestimateHeader">{'MEDIAN ZESTIMATE'}</h5> 
                        <button className="questionMarkButton">?</button>
                        <h2>{this.calculateNeighborhoodAveragePrice()}</h2>
                        <button id="zestimateArrow">{'<'}</button>
                        <h5 id="twelveMonthChange">4.3%</h5>
                        <p className="neighborhoodSubText">Past 12 months</p>
                    </div>

                    <div id="marketTempSection">
                        <div>
                            <h5 id="marketTempHeader">MARKET TEMP</h5>
                            <button className="questionMarkButton">?</button>
                        </div>

                        <div>
                            <h2>Cool</h2>
                        </div>

                        <div id="temperatureBarContainer">
                            <div id="temperatureBar"></div>
                            <div id="temperature"></div>
                        </div>

                        <div id="buyersMarketText">
                            Buyer's Market
                        </div>

                        <div id="sellersMarketText">
                            Seller's Market
                        </div>
                    </div>

                </div>

                <div id="neighborhoodInfoDescription">
                    <p>Zillow predicts Rego Park home values will rise 0.8% next year, compared to a 4.3% rise for New York as a whole. Among Rego Park homes, this home is valued 11.4% more than the midpoint (median) home, but is valued 68.8% less per square foot.</p>
                    <p>
                        <a href="https://www.google.com/">Walk Score&nbsp;</a>
                        <a href="https://www.google.com/">90&nbsp;</a>
                        (Walker's Paradise)
                    </p>
                    <p>
                        <a href="https://www.google.com/">Transit Score&nbsp;</a>
                        <a href="https://www.google.com/">94&nbsp;</a>
                        (Excellent Transit)
                    </p>
                </div>
                
            </div>
        );
    }
}

module.exports = NeighborhoodInfo;
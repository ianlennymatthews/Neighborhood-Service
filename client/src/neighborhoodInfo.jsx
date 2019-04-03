import React from 'react';
import Dialogue from './dialogue.jsx';


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

                <h2 id="pageTitle">Neighborhood: Rego Park</h2>

                <div id="medianZestimateAndMarketTempContainer">

                    <div id="medianZestimateSection">
                        <h5 id="medianZestimateHeader">MEDIAN ZESTIMATE&nbsp;</h5> 
                        <Dialogue messageLine1="The median Zestimate valuation for a " messageLine2="given geographic area on a given day is " messageLine3="the Zillow Home Value Index." link="https://www.zillow.com/info/whats-the-zillow-home-value-index/"/>
                        <h2 id="averagePrice">{this.calculateNeighborhoodAveragePrice()}</h2>
                        <img id="zestimateArrow" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Green-Up-Arrow.svg" height="30" width="30"></img>
                        <h5 id="twelveMonthChange">4.3%</h5>
                        <div className="past12MonthsText">Past 12 months</div>
                    </div>

                    <div id="marketTempSection">
                        <div>
                            <h5 id="marketTempHeader">MARKET TEMP&nbsp;</h5>
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
                    <p id="walkerScore">
                        <img className="scoreIcons" src="https://iconsplace.com/wp-content/uploads/_icons/0000ff/256/png/walking-icon-2-256.png"></img>
                        <a href="https://www.google.com/">Walk Score ® &nbsp;</a>
                        <a id="scoreNumbers" href="https://www.google.com/">90&nbsp;</a>
                        (Walker's Paradise)
                    </p>
                    <p id="transitScore">
                        <img className="scoreIcons" src="https://iconsplace.com/wp-content/uploads/_icons/0000ff/256/png/bus-icon-2-256.png"></img>
                        <a href="https://www.google.com/">Transit Score ™&nbsp;</a>
                        <a id="scoreNumbers" href="https://www.google.com/">94&nbsp;</a>
                        (Excellent Transit)
                    </p>
                </div>
                
            </div>
        );
    }
}

module.exports = NeighborhoodInfo;
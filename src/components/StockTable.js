import React from 'react';
import './StockTable.css';

class StockTable extends React.Component{ 
    showAsMillionOrBillion(num){
        if(num.toString().length <= 6){
            return num;
        }
        else if(num.toString().length > 6 && num.toString().length <= 9){
            return parseInt('' + ((num/1000000) * 100)) / 100 + 'M';
        }
        else if(num.toString().length > 9){
            return parseInt('' + ((num.toString()/1000000000) * 100)) / 100 + 'B';
        }          
    }

    render(){   
        // console.log(this.props.revenueEstimatesData);
        return (  
            <div>
                {/* {this.props.stockData.data.map(stock => (
                    <table className="stockTablesWrapper" key={stock.symbol}>
                        <tbody className="stockTableBody"> */}
                {this.props.companyProfile.map(profile => (
                    <table className="stockTablesWrapper" key={profile.symbol}>
                        <tbody className="stockTableBody">
                            <tr>
                                <td>Current Price</td>
                                <td>{profile.price}</td>
                            </tr>
                            <tr>
                                <td>Current Price</td>
                                <td>{profile.price}</td>
                            </tr>
                            <tr>
                                <td>Market Capitalization</td>
                                <td>{this.showAsMillionOrBillion(profile.mktCap)}</td>
                            </tr>
                            <tr>
                                <td>Average Volume</td>
                                <td>{this.showAsMillionOrBillion(profile.volAvg)}</td>
                            </tr>
                            <tr>
                                <td>Beta</td>
                                <td>{profile.beta}</td>
                            </tr>
                            <tr>
                                <td>Revenue Estimates</td>
                                <td>{this.showAsMillionOrBillion(this.props.revenueEstimatesData.data[0].revenueAvg)}</td>
                                <td>High:</td>
                                <td>{this.showAsMillionOrBillion(this.props.revenueEstimatesData.data[0].revenueHigh)}</td>
                                <td>Low:</td>
                                <td>{this.showAsMillionOrBillion(this.props.revenueEstimatesData.data[0].revenueLow)}</td>
                                <td>Date:</td>
                                <td>{this.props.revenueEstimatesData.data[0].period}</td>
                                <td>Number Analysts:</td>
                                <td>{this.props.revenueEstimatesData.data[0].numberAnalysts}</td>
                            </tr>
                            <tr>
                                <td>Earnings Estimates</td>
                                <td>{this.props.earningsEstimatesData.data[0].epsAvg}</td>
                                <td>High:</td>
                                <td>{this.props.earningsEstimatesData.data[0].epsHigh}</td>
                                <td>Low:</td>
                                <td>{this.props.earningsEstimatesData.data[0].epsLow}</td>
                                <td>Date:</td>
                                <td>{this.props.earningsEstimatesData.data[0].period}</td>
                                <td>Number Analysts:</td>
                                <td>{this.props.earningsEstimatesData.data[0].numberAnalysts}</td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </div>  
        ); 
    }
} 

export default StockTable;
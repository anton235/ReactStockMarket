import React from 'react';
import axios from 'axios';
import StockTable from './StockTable';
import StockNewsLinks from './StockNewsLinks';
import ChartViewer from './ChartViewer';

import './SearchBar.css';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {   
            // stockData : [],
            // isLoaded : false,
            
            companyProfile : [],
            companyQuote : [],
            companyFinancialStatements : [],
            dailyStockData : [],
            stockEarningsEstimatesData : [],
            stockRevenueEstimatesData : [],
            stockNews : []
        };
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
        this.handleSearchBarSubmit = this.handleSearchBarSubmit.bind(this);   
    }

    handleSearchBarChange(event) {
        this.props.onSearchBarChange(event.target.value);
    }

    handleSearchBarSubmit(event) {
        event.preventDefault();
        this.componentDidMount();
    }

    componentDidMount(){
        this.fetchStockData();
    }  

    fetchStockData(){
        // const API_TOKEN = 'bKVaqz08JDQZF7kRAgdvk4nzt0Izt3hNOvBWVGvJpvMwXnCFDkJv72ujydY3';
        // let API_STOCK_DATA_CALL = `https://api.worldtradingdata.com/api/v1/stock?symbol=${this.props.stockSymbol}&api_token=${API_TOKEN}`;
        //second key (anton5gg...)
        const API_KEY = 'e4534c751f9e9a0dce3957fd2e28989a';
        //first key (anton235)
        //const API_KEY = 'c143b25f3ac13f6645c04105aabd34da';
        let API_GET_COMPANY_PROFILE = `https://fmpcloud.io/api/v3/profile/${this.props.stockSymbol}?apikey=${API_KEY}`;
        axios.get(API_GET_COMPANY_PROFILE)
        .then(response => 
            this.setState({
                // stockData : response.data,
                companyProfile : response.data,
                isLoaded : true
        }))
        .catch(error => {
            console.log(error);
        });

        // real time data
        let API_GET_COMPANY_QUOTE = `https://fmpcloud.io/api/v3/quote/${this.props.stockSymbol}?apikey=${API_KEY}`;
        axios.get(API_GET_COMPANY_QUOTE)
        .then(response => 
            this.setState({
                companyQuote : response.data,
        }))
        .catch(error => {
            console.log(error);
        });

        let API_GET_COMPANY_INCOME_STATEMENTS = `https://fmpcloud.io/api/v3/income-statement-as-reported/${this.props.stockSymbol}?apikey=${API_KEY}`;
        axios.get(API_GET_COMPANY_INCOME_STATEMENTS)
        .then(response => 
            this.setState({
                companyFinancialStatements : response.data,
        }))
        .catch(error => {
            console.log(error);
        });

        let API_DAILY_STOCK_DATA = `https://fmpcloud.io/api/v3/historical-price-full/${this.props.stockSymbol}?apikey=${API_KEY}`;
        axios.get(API_DAILY_STOCK_DATA)
        .then(response => 
            this.setState({
                dailyStockData : response.data,
        }))
        .catch(error => {
            console.log(error);
        });

        const FINNHUB_TOKEN = 'bq1ghpfrh5rd509cm5kg';
        let API_Earnings_Estimates_DATA_CALL = `https://finnhub.io/api/v1/stock/eps-estimate?symbol=${this.props.stockSymbol}&token=${FINNHUB_TOKEN}`;
        axios.get(API_Earnings_Estimates_DATA_CALL)
        .then(response => 
            this.setState({
                stockEarningsEstimatesData : response.data
        }))
        .catch(error => {
            console.log(error);
        });

        let API_Revenue_Estimates_DATA_CALL = `https://finnhub.io/api/v1/stock/revenue-estimate?symbol=${this.props.stockSymbol}&token=${FINNHUB_TOKEN}`;
        axios.get(API_Revenue_Estimates_DATA_CALL)
        .then(response => 
            this.setState({
                stockRevenueEstimatesData : response.data
        }))
        .catch(error => {
            console.log(error);
        });

        let API_STOCK_NEWS_CALL = `https://finnhub.io/api/v1/news/${this.props.stockSymbol}?token=${FINNHUB_TOKEN}`;
        axios.get(API_STOCK_NEWS_CALL)
        .then(response => 
            this.setState({
                stockNews : response.data
        }))
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        // if(!this.state.isLoaded){
        //     return <div>Loading...</div>;
        // }
        // else{
        //     console.log(stockData);
        //     return (
        //         <div>
        //             <form>
        //                 <label>
        //                     Stock Symbol:
        //                     <input type="text" placeholder="Enter stock symbol" value={this.props.stockSymbol} onChange={this.handleSearchBarChange} />
        //                 </label>
        //                 <input type="submit" value="Submit" onClick={this.handleSearchBarSubmit}/>
        //             </form>
        //             <label> 
        //                 <ul>
        //                     {this.state.stockData.data.map((stock,index) => (
        //                         <li key={index}>
        //                             {stock.name} : {stock.price}
        //                         </li>
        //                     ))}
        //                 </ul>
        //                 { 
        //                     <p style={{margin: "2rem"}}>We recommend you this stock:{this.state.stockData.data[0].name}</p>
        //                 }
        //             </label>
        //         </div>
        //     );
        // }
        return (
            <div>
                <form>
                    <label>
                        Stock Symbol:
                        <input 
                            type="text"
                            placeholder="Enter stock symbol"
                            value={this.props.stockSymbol}
                            onChange={this.handleSearchBarChange}
                        />
                    </label>
                    <input 
                        type="submit"
                        value="Submit"
                        onClick={this.handleSearchBarSubmit}
                    />
                </form>
                {this.state && this.state.companyProfile[0] &&
                    <a href={this.state.companyProfile[0].website}>
                        <h2>{this.state.companyProfile[0].companyName}</h2>
                        <p>{this.state.companyProfile[0].description}</p>
                    </a>
                }
                {this.state && this.state.companyProfile[0] &&
                        <h5>Industry : {this.state.companyProfile[0].industry}   |   Sector : {this.state.companyProfile[0].sector}<br/>   
                            CEO : {this.state.companyProfile[0].ceo}</h5>
                }
                {this.state && this.state.companyProfile[0] && this.state.stockEarningsEstimatesData.data && this.state.stockRevenueEstimatesData.data &&
                    <StockTable 
                        companyProfile={this.state.companyProfile} 
                        earningsEstimatesData={this.state.stockEarningsEstimatesData} 
                        revenueEstimatesData={this.state.stockRevenueEstimatesData} 
                    />
                }
                <h2>{this.props.stockSymbol} Chart</h2>
                {/* {this.state.dailyStockData.historical &&
                    <ChartViewer
                        dailyStockData = {this.state.dailyStockData.historical}
                    />
                } */}
            
                <h2>Latest News</h2>
                {this.state.stockNews &&
                    <StockNewsLinks
                        stockNews={this.state.stockNews}
                    />
                }
            </div>
          );
    }
}

export default SearchBar;
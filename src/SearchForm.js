import React from 'react';
import axios from 'axios';

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            companyName: []
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.componentDidMount();
        // this.setState({ companyName: '' });
    }

    componentDidMount(){
        this.fetchStockData();
    }

    fetchStockData(){
        //world trading data API
        // const API_TOKEN = 'bKVaqz08JDQZF7kRAgdvk4nzt0Izt3hNOvBWVGvJpvMwXnCFDkJv72ujydY3';
        // let API_LATEST_DATA_CALL_Worldtradingdata = `https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=${API_TOKEN}`;

        const Global_Quote = ['. symbol',
                                '. open',
                                '. high',
                                '. low',
                                '. price',
                                '. volume',
                                '. latest trading day',
                                '. previous close',
                                '. change',
                                '. change percent'];
        const Global_Quote2 = ['1. symbol',
                                '2. open',
                                '3. high',
                                '4. low',
                                '5. price',
                                '6. volume',
                                '7. latest trading day',
                                '8. previous close',
                                '9. change',
                                '10. change percent'];

        const API_KEY = 'NHOZZABWXQGSNSNL';
        let stock_symbol = 'MSFT' ;
        let API_LATEST_DATA_CALL_Alphavantage = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock_symbol}&apikey=${API_KEY}`;
        const response = axios.get(API_LATEST_DATA_CALL_Alphavantage)
            .then((response)=>{
                // for(let i = 0; i<10;i++){
                //     console.log(response.data['Global Quote']['0' + i + Global_Quote[i-1]]);
                //     console.log(response.data['Global Quote'][[`0${Global_Quote2[i]}`]]);
                // }
              this.setState({companyName: response.data["Global Quote"]});
            //   console.log(this.companyName);
            //   console.log(response.data["Global Quote"]);
            })
            .catch((error)=>{
                console.log(error);
            });
        //this.props.onSubmit(response.data["Global Quote"]);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input  type="text"
                            value={this.state.companyName}
                            onChange={event => this.setState({ companyName: event.target.value })} 
                            placeholder="Enter Company Name" 
                            required 
                    />
                    <button onClick={this.handleClick}>
                        Search
                    </button>
                </form>
                <div className="stockDataBox">
                    <h1>Anton Stocks</h1>
                </div>
            </div>
        )
    }
}

export default SearchForm;
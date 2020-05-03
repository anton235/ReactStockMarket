import React from 'react';
import SearchBar from './SearchBar';

class FilterableStockTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            stockSymbol : ''
        };
    
        this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
    }

    handleSearchBarChange(stockSymbol) {
        this.setState({
            stockSymbol: stockSymbol
        });
    }

    render() {
        return (
        <div>
            <SearchBar 
                stockSymbol = {this.state.stockSymbol}
                onSearchBarChange = {this.handleSearchBarChange}
            />
        </div>
        );
    }	
} 

export default FilterableStockTable;
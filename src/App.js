import React from 'react';
import FilterableStockTable from './components/FilterableStockTable';
import './App.css';

class App extends React.Component {
 
  // doSomething = (companyInfo) => {
  //   console.log(companyInfo);
  // };
  
	render() {
  	return (
    <div className="App">
      <FilterableStockTable/>
      {/* <SearchBar onSubmit={this.doSomething}/> */}
    </div>
    );
  }	
}

export default App;
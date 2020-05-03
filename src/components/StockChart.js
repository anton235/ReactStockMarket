import React from 'react';
import './StockChart.css';
import ReactApexChart from 'react-apexcharts'

class StockChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                value: '',
                series:[{
                        data:[{
                                x: '',
                                y: []
                        }]
                }],
                options: {
                        chart: {
                                type: 'candlestick',
                                height: 350
                        },
                        title: {
                                text: 'CandleStick Chart',
                                align: 'left'
                        },
                        xaxis: {
                                type: 'datetime'
                        },
                        yaxis: {
                                tooltip: {
                                        enabled: true
                                }
                        }
                }
        };
        this.onAddItem = this.onAddItem.bind(this);
    }
                // series: [{
                //   data: [{
                //       x: new Date(1538778600000),
                //       y: [6629.81, 6650.5, 6623.04, 6633.33]
                //     },
                //     {
                //       x: new Date(1538820000000),
                //       y: [6620.33, 6634.15, 6617.24, 6624.61]
                //     },
                //     {
                //       x: new Date(1538821800000),
                //       y: [6625.95, 6626, 6611.66, 6617.58]
                //     },
                //     {
                //       x: new Date(1538823600000),
                //       y: [6619, 6625.97, 6595.27, 6598.86]
                //     },
                //   ]
                // }],
        

        // componentDidMount(){
        //         const {series} = this.state;
        // }

        onAddItem = (newData) => {
                console.log(newData);
                this.setState({data : [...this.state.series.data, newData]});
                // this.setState(state => {
                //         const data = state.data.concat(newData);
                //         //   const data = state.series.data.concat(state.value);
                //         console.log(data);
                //         return {
                //         data,
                //         //     value: ''
                //         };
                // });
        };

        render() {
                this.props.series.map((dayRecords,i) => {
                        let newData =  {
                                "x" : new Date(dayRecords.date).getTime()/1000,
                                "y" : [dayRecords.open,dayRecords.high,dayRecords.low,dayRecords.close]
                        }
                        this.onAddItem(newData);
                });


                return (
                        <div>
                                {this.props.series &&          
                                        <div id="chart">
                                                <ReactApexChart 
                                                        options={this.state.options} 
                                                        series={this.props.series} 
                                                        type="candlestick" 
                                                        height={350} 
                                                />
                                        </div>
                                }            
                        </div>
                );
        }	
}

export default StockChart;
import React from 'react';
import Popup from './Popup';
import './StockNewsLinks.css';

class StockNewsLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            hover: false,
            summary: '',
            datetime: ''
        };
        this.handleMouseHover = this.handleMouseClick.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }

    handleMouseHover(data){
        this.setState({hover: !this.state.hover, summary: data.summary, datetime: data.datetime})
    }

    handleMouseClick(data){
        this.setState({hover: !this.state.hover, summary: data.summary, datetime: data.datetime})
    }

    hidePopup(){
        this.setState({hover: !this.state.hover});
    }

    
    // render(){
    //     return(
    //         <div className="stockNewsBox">
    //             {this.props.stockNews.map(link => (
    //                 <li  key={link.id}>
    //                     {link.source} : 
    //                     <a  href={link.url}>
    //                         {link.headline}
    //                         <span   onMouseEnter={this.handleMouseHover}
    //                                 onMouseLeave={this.handleMouseHover}
    //                             >  
    //                                 &#8595;  </span>
    //                     </a>
    //                     {this.state.hover &&
    //                         <div className="hoverWindow">
    //                             {link.summary}
    //                         </div>
    //                     }
    //                 </li>
    //             ))}
    //         </div>
    //     )
    // }
   
    render(){
        return(
            <div className="stockNewsBox">
                {this.props.stockNews.map(link => (
                    <li  key={link.id}>
                        {link.source} : 
                        <a  href={link.url}>
                            {link.headline}
                            <span   onMouseEnter={() => this.handleMouseHover(link)}
                                    onMouseLeave={() => this.handleMouseHover(link)}
                            // <span   onClick={() => this.handleMouseClick(link)}
                                >  
                                &#8595;  
                            </span>
                        </a>
                    </li>
                ))}
                <Popup 
                    show={this.state.hover} 
                    // onHide={this.hidePopup}
                    handleMouseHover={this.handleMouseHover}
                    summary={this.state.summary}
                    date={this.state.datetime}
                    />
            </div>
        )
    }
}

export default StockNewsLinks;
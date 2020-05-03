import React from 'react';
import './Popup.css';

class Popup extends React.Component {

	render() {
        return (
            <div>
            {this.props.show &&          
                <div className="modal" onMouseEnter={this.props.handleMouseHover}
                                       onMouseLeave={this.props.handleMouseHover}>
                    <p className="modal_p">{this.props.summary}</p>
                    <h3 className="modal_h3">{(new Date((this.props.date * 1000) - (new Date().getTimezoneOffset() * 60000))).toISOString().slice(0, 19).replace('T', ' ')}</h3>
                </div>
            }            
            </div>
            // <div>
            //     {this.props.show &&          
            //         <div className="modal">
            //             <h1>{this.props.summary}</h1>
            //             <button onClick={this.props.onHide}>Close Modal</button>
            //         </div>
            //     }            
            // </div>
        );
  }	
}

export default Popup;
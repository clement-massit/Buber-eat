import React, { Component } from 'react';
import "./button.css"
import ReactDOM from 'react-dom';

class Button extends Component {
    constructor() {
        super();
        this.state = {
          accentPosition: 0,
          showAccent: false
        };
      }
    
      setAccentPosition(e) {
        const pos = e.nativeEvent.offsetX;
        this.setState({ accentPosition: pos });
      }
    
      handleMouseEnter(e) {
        this.setState({
          showAccent: true,
          accentPosition: e.nativeEvent.offsetX
        });
      }
    
      render() {
        const { accentPosition, showAccent } = this.state;
    
        const accentStyle = {
          left: accentPosition - 150,
          opacity: showAccent ? 100 : 0
        };
    
        return (
          <button
            className="button"
            onMouseMove={(e) => this.setAccentPosition(e)}
            onMouseEnter={(e) => this.handleMouseEnter(e)}
            onMouseLeave={() => this.setState({ showAccent: false })}
          >
            <div className="button-content">{this.props.children}</div>
            <div className="accent" style={accentStyle} />
          </button>
        );
      }
    }
   
 
    

export default Button; // Don’t forget to use export default!

    
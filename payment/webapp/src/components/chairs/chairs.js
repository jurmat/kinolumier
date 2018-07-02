import React, { Component } from 'react';
import { connect } from 'react-redux'

import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';



class chairs extends Component {
  constructor(props) {
    super(props);
    this.changeChairState = this.changeChairState.bind(this);
    this.state = {
        chair : this.props.chair
    };
    this.state = {chair: false};
  }
  changeChairState = () => {
    console.log(this.state.chair, this.props.chair)
    console.log(this.props.chair.selected)
    this.props.chair.selected != this.props.chair.selected;
    this.setState({chair: !this.state.chair});

  }
toggleState() {
    this.setState({chair: !this.state.chair});
  }

  render() {
   
    var divStyle = {
      left: this.props.chair.posX,
      top: this.props.chair.posY
    }
    if (this.state.chair){
      var divStyle = {
        background: this.props.chair.col,
        left: this.props.chair.posX,
        top: this.props.chair.posY

      }
    }

    return (
        <div 
          className="chairs" 
          style={divStyle}
          onClick={this.changeChairState}
          >
          {this.props.chair.name}
          {this.props.chair.name.name}
        </div>
    )
  }
}


export default chairs;

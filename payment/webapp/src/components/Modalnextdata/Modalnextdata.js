import React, { Component } from 'react';

import{Route} from 'react-router-dom';


class Modalnextdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {addClass: false}
  }
  toggle() {
    this.setState({addClass: !this.state.addClass});
  }
  render() {
    let boxClass = ["box"];
    if(this.state.addClass) {
      boxClass.push('active');
    }
    return(
    	<div>
        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}> l </div>
        <div className={boxClass.join(' ')} onClick={this.toggle.bind(this)}> l </div>       
</div>
    );
  }
}
export default Modalnextdata;
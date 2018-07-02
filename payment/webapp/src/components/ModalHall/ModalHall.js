import React, { Component } from 'react';
import { connect } from 'react-redux'


import Modalexit from '../Modal-exit/Modal-exit';
import Modalinfo from '../Modal-info/Modal-info';
import Modalnext from '../Modal-next/Modal-next';
import Modaltop from '../Modal-top/Modal-top';
import Hall from '../Hall/Hall';




import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';




class ModalHall extends Component {
  render() {
    return (
      <div className="ModalHall">
            <Modaltop />
            <Modalinfo />
            <Hall />
            
      </div>
    );
  }
}


export default ModalHall;
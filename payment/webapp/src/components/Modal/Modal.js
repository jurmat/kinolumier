import React, { Component } from 'react';
import { connect } from 'react-redux'


import Modalnextdata from '../Modalnextdata/Modalnextdata';
import Modalalldata from '../Modalalldata/Modalalldata';
import Modaldate from '../Modal-date/Modal-date';
import Modalexit from '../Modal-exit/Modal-exit';
import Modalinfo from '../Modal-info/Modal-info';
import Modalnext from '../Modal-next/Modal-next';
import Modalsession from '../Modal-session/Modal-session';
import Modaltop from '../Modal-top/Modal-top';
import Dropdown from '../Dropdown/Dropdown';
import ModalTwoData from '../ModalTwoData/ModalTwoData';
import ModalOneData from '../ModalOneData/ModalOneData';
import {Link} from 'react-router-dom';
import{Route} from 'react-router-dom';




class Modal extends Component {
  render() {
    return (
      <div className="Modal">
            <Modaltop />
            <Modalinfo />
            <Route exact={true} path={`${process.env.PUBLIC_URL}/Modal/Modalsession`} component={Modal/Modalsession} />
            <Route path={`${process.env.PUBLIC_URL}/Modal/Modalsession`} component={Modal/Modalsession} />
            <Route path={`${process.env.PUBLIC_URL}/Modal/Modalalldata`} component={Modal/Modalalldata} />
            <Modalnext />
      </div>
    );
  }
}


export default Modal;